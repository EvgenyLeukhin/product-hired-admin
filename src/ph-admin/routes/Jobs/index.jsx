import React from 'react';

import isEmpty from 'lodash/isEmpty';

import Table from '../../components/Table';
import columns from './columns';

import Alerts from '../../components/Alerts';
import AddButton from '../../components/AddButton';

import AddJob    from './add';
import DeleteJob from './delete';

import formatNumber from './../../utils/formatNumber';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

import addJob       from './api/addJob';
import deleteJob    from './api/deleteJob';
import getJobs      from './api/getJobs';
import getJobsCount from './api/getJobsCount';


class Jobs extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Jobs') }

  state = {
    // table
    jobs: [], jobsCount: null, tableLoading: false, count: null,

    // alert
    alertIsOpen: false, alertType: '', alertErrorText: '',

    // delete
    deleteModalIsOpen: false, deleteModalLoading: false,

    // add
    addModalIsOpen: false, addModalLoading: false,

    // fields
    id: null, name: '',
    company: { id: null, name: '' }, company_id: null,
    user: { id: null, name: '', surname: '', email: '' }, employer_id: null
  }

  // onChanges
  onChange        = e       => this.setState({ [e.target.name]: e.target.value });
  onChangeCompany = company => this.setState({ company, company_id: company.id });
  onChangeUser    = user    => this.setState({ user,    employer_id: user.id });

  addClick = () => {
    this.setState({
      // reset fields
      id: null, name: '',
      company: { id: null, name: '' },
      user:    { id: null, name: '', surname: '', email: '' },

      // add modal
      addModalIsOpen: true, alertIsOpen: false,
    });
  }

  addSubmit = e => {
    e.preventDefault();

    this.setState({ addModalLoading: true, errorAlertIsOpen: false });
    const { name, user, employer_id, company, company_id, jobs } = this.state;

    addJob(name, employer_id, company_id)
      .then(res => {
        // add new obj from request and state
        const newJob = { ...res.data, company, employer: user, locations: [{}] };

        // concat new job to state jobs
        const jobsWithNew = [newJob].concat(jobs);

        this.setState({
          addModalLoading: false,
          addModalIsOpen: false,
          jobs: jobsWithNew,
        });
      })

    .catch(error => this.catchErrors(error));
  }

  deleteClick = original => () => {
    const { id, name } = original;
    this.setState({ id, name, deleteModalIsOpen: true, alertIsOpen: false });
  }

  deleteSubmit = () => {
    const dataWitoutDeleted = [];
    const { id, jobs } = this.state;

    this.setState({ deleteModalLoading: true, errorAlertIsOpen: false });

    deleteJob(id)
      // if delete ok
      .then(() => {
        for (let i = 0; i < jobs.length; i++) {
          // skiping deleted item and forming new array without it
          if (jobs[i].id !== id) {
            // push all data without deleted item to new array
            dataWitoutDeleted.push(jobs[i]);
          }
        }
        this.setState({
          // set new data w\o deleted item
          jobs: dataWitoutDeleted,
          deleteModalIsOpen: false,
          deleteModalLoading: false,

          // show alert
          alertType: 'delete', alertIsOpen: true
        })

        // close alert after 2 sec
        setTimeout(() => {
          this.setState({ alertIsOpen: false });
        }, 2000);
      })
      .catch(error => this.catchErrors(error));
  }

  closeAddModal = () => {
    const { addModalLoading } = this.state
    !addModalLoading && this.setState({ addModalIsOpen: false });
  }

  closeDeleteModal = () => {
    const { deleteModalLoading } = this.state
    !deleteModalLoading && this.setState({ deleteModalIsOpen: false });
  }

  closeErrorAlert  = () => this.setState({ errorAlertIsOpen: false });

  catchErrors = error => {
    const { name, statusCode, message } = error.response.data.error;
    if (statusCode === 401) {
      localStorage.removeItem('ph-admin-user-data');
      this.props.history.push('/login');
    } else {
      this.setState({
        errorAlertIsOpen: true,
        addModalLoading: false,
        deleteodalLoading: false,
        alertType: 'error',
        alertIsOpen: true,
        alertErrorText: `${name}, ${message}`
      });
    }
  }

  componentWillReceiveProps() {
    // new data after edit plan
    const { afterEditData } = this.props.history.location.state || {};
    const { detailState } = this.props.history.location.state || {};

    if(!isEmpty(afterEditData && detailState)) {
      // get current table-data from the state w\o editing change (when render only)
      const { jobs } = this.state;

      // find editing data in all data by id
      for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id === afterEditData.id) {
          const {
            id, name, user, created, modified, published, views, impressions, details,experience_from, experience_up, seniority, seniorityObj, skills, status, statusObj, plan_id, planObj,company_id, company, locations, vacancy_role, vacancy, logo, cover
          } = afterEditData;

          const { employer, employer_id } = detailState;
          // inject editing data to table state
          jobs[i] = {
            id, name, user, employer, employer_id, created, modified, published, views, impressions, details,experience_from: experience_from.value, experience_up: experience_up.value, seniority, seniorityObj, skills, status, statusObj, plan_id, planObj, company_id, company, locations, vacancy_role, vacancy, logo, cover, modified: `${new Date().toISOString()}`
          };
        }
      }

      // inject new array with edited data to table
      this.setState({ jobs });
    }

    // AFTER DELETE //
    const { deletedId } = this.props.history.location.state || {};

    if(deletedId) {
      // get current table-data from the state w\o editing change (when render only)
      const { jobs, jobsCount, count } = this.state;
      const dataWitoutDeleted = [];

      for (let i = 0; i < jobs.length; i++) {
        // skiping deleted item and forming new array without it
        if (jobs[i].id !== deletedId) {
          // push all data without deleted item to new array
          dataWitoutDeleted.push(jobs[i]);
        }
      }
      this.setState({
        jobs: dataWitoutDeleted,
        jobsCount: jobsCount - 1,
        count: count - 1,
      });
    }
  }

  render() {
    const {
      // table
      jobs, jobsCount, count, tableLoading,

      // alerts
      alertIsOpen, alertType, alertErrorText,

      // delete
      deleteModalLoading, deleteModalIsOpen,

      // add
      addModalIsOpen, addModalLoading,

      // fields
      id, name, company, user,
    } = this.state;

    const controlsColumn = [
      {
        Header: '',
        width: 30,
        sortable: false,
        filterable: false,
        Cell: ({ original }) => (
          <div className="rt-custom__controls">
            <i className="ion-android-delete" onClick={this.deleteClick(original)} />
          </div>
        )
      }
    ];

    return (
      <div className="jobs-page">
        <p className="md-lg">
          Total records:&nbsp;<b>{count && formatNumber(this.state.count)}</b>
        </p>

        { alertIsOpen && <Alerts type={alertType} id={id} name={name} errorText={alertErrorText} /> }

        <AddButton
          text="job"
          loading={addModalLoading && deleteModalLoading}
          addClick={this.addClick}
        />

        <AddJob
          // fields
          name={name} company={company} user={user}

          // modal
          isOpen={addModalIsOpen}
          modalLoading={addModalLoading}
          closeModal={this.closeAddModal}

          // actions
          onChange={this.onChange}
          onChangeCompany={this.onChangeCompany}
          onChangeUser={this.onChangeUser}
          onSubmit={this.addSubmit}
        />

        <DeleteJob
          id={id} name={name}
          isOpen={deleteModalIsOpen}
          deleteSubmit={this.deleteSubmit}
          modalLoading={deleteModalLoading}
          closeModal={this.closeDeleteModal}
        />

        <Table
          data={jobs}
          manual={true}
          pages={jobsCount}
          loading={tableLoading}
          columns={[...columns, ...controlsColumn]}
          getTheadFilterThProps={(state, rowInfo, column) => {
            return { style: { overflow: 'visible' }};
          }}
          onFetchData={state => {
            this.setState({ tableLoading: true });

            // count request
            getJobsCount(state)
              .then(res => {
                this.setState({
                  count: res.data.count,
                  jobsCount: Math.ceil(res.data.count / state.pageSize)
                })

                // data request
                getJobs(state)
                  .then(res => this.setState({ jobs: res.data, tableLoading: false }))
                  .catch(error => this.catchErrors(error));
              }).catch(error => this.catchErrors(error));
          }}
        />
      </div>
    )
  }
}

export default withHeaderTitle(Jobs);
