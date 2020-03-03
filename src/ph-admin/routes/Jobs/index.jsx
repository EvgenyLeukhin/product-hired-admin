import React from "react";

import Table         from '../../components/Table';
import Alerts        from '../../components/Alerts';
import AddButton     from '../../components/AddButton';

import AddJob    from './add';
import DeleteJob from './delete';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';


// api
import getJobs      from './api/getJobs';
import getJobsCount from './api/getJobsCount';
import addJob       from './api/addJob';
import deleteJob    from './api/deleteJob';

import columns from './columns';


class Jobs extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Jobs') }

  state = {
    jobs: [],
    jobsCount: null,
    tableLoading: false,
    original: {},

    // modals
    addModalIsOpen: false,
    editModalIsOpen: false,
    deleteModalIsOpen: false,
    modalLoading: false,

    // fields
    id: null,
    name: '',
    company: { name: '' },
    user: { name: '', surname: '', email: '' },

    // alert
    alertIsOpen: false,
    alertType: '',
    alertErrorText: '',
  }

  onChange = e => {
    if (e.target.type === 'checkbox') {
      this.setState({ [e.target.name]: e.target.checked })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  onChangeCompany = company => this.setState({ company });
  onChangeUser    = user    => this.setState({ user });

  catchErrors = error => {
    // redirect to login if 401 (request, response)
    if (error.response.status === 401) {
      localStorage.removeItem('ph-admin-user-data');
      this.props.history.push('/login');

    } else {
      this.setState({
        modalLoading: false,
        addModalIsOpen: false, editModalIsOpen: false, deleteModalIsOpen: false, // close modals
        alertType: 'error',
        alertIsOpen: true,
        alertErrorText: `${error}`
      });
    }
  }

  addClick = () => {
    this.setState({
      addModalIsOpen: true,
      alertIsOpen: false,

      // reset fields
      name: '',
      company: { name: '' },
      user: { name: '', surname: '', email: '' },
    });
  }

  addSubmit = e => {
    e.preventDefault();

    this.setState({ modalLoading: true });
    const { name, company, user, jobs } = this.state;

    addJob(name, company, user)   // order must be like inside addJob method
    .then(res => {
      const resDataWithCompany = { ...res.data, company };
      const newData = [resDataWithCompany].concat(jobs);

      this.setState({
        modalLoading: false,
        addModalIsOpen: false,
        jobs: newData,
      });

      // this.editAfterAdd(res.data);
    })

    .catch(error => this.catchErrors(error));
  }

  editClick = original => e => {
    e.stopPropagation();
    // alert('Edit');
    console.log(original);
  }

  deleteClick = original => e => {
    e.stopPropagation();
    this.setState({ original, deleteModalIsOpen: true, alertIsOpen: false });
  }

  deleteSubmit = () => {
    const dataWitoutDeleted = [];
    const { jobs, original: { id } } = this.state;

    this.setState({ modalLoading: true });

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
          editModalIsOpen: false,
          deleteModalIsOpen: false,
          modalLoading: false,

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

  closeAddModal    = () => !this.state.modalLoading && this.setState({ addModalIsOpen:    false });
  closeEditModal   = () => !this.state.modalLoading && this.setState({ editModalIsOpen:   false });
  closeDeleteModal = () => !this.state.modalLoading && this.setState({ deleteModalIsOpen: false });

  render() {

    const {
      // table
      tableLoading, original, jobs, jobsCount,

      // fields
      name, company, user,

      // modals
      addModalIsOpen, editModalIsOpen, modalLoading, deleteModalIsOpen,

      // alerts
      alertIsOpen, alertType, alertErrorText
    } = this.state;

    const controlsColumn = [
      {
        Header: '',
        width: 65,
        sortable: false,
        filterable: false,
        Cell: ({ original }) => (
          <div className="rt-custom__controls">
            <i className="ion-android-delete" onClick={this.deleteClick(original)} />
            <i className="ion-edit" onClick={this.editClick(original)} />
          </div>
        )
      }
    ];

    return (
      <div className="jobs-page">
        { alertIsOpen && <Alerts type={alertType} original={original} errorText={alertErrorText} /> }

        <AddButton
          text="job"
          loading={modalLoading}
          addClick={this.addClick}
        />

        <DeleteJob
          isOpen={deleteModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeDeleteModal}
          original={original}
          deleteSubmit={this.deleteSubmit}
        />

        <AddJob
          // fields
          name={name} company={company} user={user}

          // modal
          isOpen={addModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeAddModal}

          // actions
          onChange={this.onChange}
          onChangeCompany={this.onChangeCompany}
          onChangeUser={this.onChangeUser}
          onSubmit={this.addSubmit}
        />

        <Table
          manual={true}
          data={jobs}
          pages={jobsCount}
          loading={tableLoading}
          columns={[...columns, ...controlsColumn]}
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              onClick: e => {
                if (rowInfo !== undefined) {
                  const { original } = rowInfo;
                  return this.editClick(original)(e);
                } else return null;
              }
            }
          }}
          onFetchData={state => {
            this.setState({ tableLoading: true });

            // count request
            getJobsCount(state)
              .then(res => {
                this.setState({ jobsCount: Math.ceil(res.data.count / state.pageSize) })

                // data request
                getJobs(state)
                  .then(res => this.setState({ jobs: res.data, tableLoading: false }))
                  .catch(error => this.catchErrors(error));
              }).catch(error => this.catchErrors(error));
          }}
        />
      </div>
    );
  }
}

export default withHeaderTitle(Jobs);
