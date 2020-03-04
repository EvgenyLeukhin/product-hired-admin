import React from "react";

import Table         from '../../components/Table';
import Alerts        from '../../components/Alerts';
import AddButton     from '../../components/AddButton';

import AddJob    from './add';
import DeleteJob from './delete';
import EditJob   from './edit';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';


// api
import getJobs      from './api/getJobs';
import getJobsCount from './api/getJobsCount';
import addJob       from './api/addJob';
import deleteJob    from './api/deleteJob';
import editJob      from './api/editJob';
import seniorityOptions from './api/seniorityOptions';

import columns from './columns';

import './edit.scss';
import statusOptions from "./api/statusOptions";


class Jobs extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Jobs') }

  state = {
    // table
    jobs: [],
    jobsCount: null,
    tableLoading: false,
    original: {},

    // modals
    addModalIsOpen: false,
    editModalIsOpen: false,
    deleteModalIsOpen: false,
    modalLoading: false,

    // top fields
    id: null, created: '', modified: '', views: null, impressions: '',
    skills: [],

    seniorityObj: {}, seniority: 1,
    statusObj: {}, status: 'draft',

    name: '',
    company: { name: '' }, company_id: null,
    user: { name: '', surname: '', email: '' }, user_id: null,
    experience_up: null, experience_from: null,

    // default state fields when add job
    application_link: null, application_type: 0, details: "<p></p>", employer_id: null,
    experience_from: 0, experience_up: 1, hash: null, plan_id: 1,
    vacancy_role: 1,

    // alerts
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
  onChangeDetails = details => this.setState({ details });
  onChangeSkills  = skills => this.setState({ skills });

  onChangeSeniority = seniorityObj => {
    this.setState({ seniorityObj, seniority: seniorityObj.value });
  }

  onChangeStatus = statusObj => {
    this.setState({ statusObj, status: statusObj.value });
  }

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

      // default fields from the state when add
      application_link: null, application_type: 0, details: "<p></p>", employer_id: null,
      experience_from: 0, experience_up: 1, hash: null, plan_id: 1, seniority: 1, status: 'draft',
      vacancy_role: 1
    });
  }

  addSubmit = e => {
    e.preventDefault();

    this.setState({ modalLoading: true });
    const { state } = this;
    const { jobs, company } = this.state;

    addJob(state)   // order must be like inside addJob method
    .then(res => {
      const resDataWithCompany = { ...res.data, company };
      const newData = [resDataWithCompany].concat(jobs);

      this.setState({
        modalLoading: false,
        addModalIsOpen: false,
        jobs: newData,
      });

      this.editAfterAdd(res.data);
    })

    .catch(error => this.catchErrors(error));
  }

  editAfterAdd = data => {
    this.setState({
      addModalIsOpen: false,
      editModalIsOpen: true,
      original: data, // save data to original

      // save filled inputs
      id: data.id, name: data.name, created: data.created, modified: data.modified,

      alertIsOpen: false
    });
  }

  editClick = original => e => {
    e.stopPropagation();
    console.log('original', original);

    this.setState({
      original,

      alertIsOpen: false,
      editModalIsOpen: true,
      logoLoading: false, coverLoading: false,

      id: original.id,
      name: original.name,
      created: original.created,
      modified: original.modified,
      views: original.views,
      impressions: original.impressions,
      details: original.details,
      experience_up: original.experience_up,
      experience_from: original.experience_from,
      seniority: original.seniority,
      skills: original.skills,
      status: original.status,
    });

    // SENIORITY
    // 3. inject seniority object to react-select if we have seniority_id in the original
    const { seniority } = original;
    seniority ? (
      seniorityOptions.map(i => {
        i.value === seniority && this.setState({ seniorityObj: i });
      })
    ) : this.setState({ seniorityObj: {} });  // if doesn't have - reset seniority

    // STATUS
    const { status } = original;
    status && statusOptions.map(i => {
      status === i.value && this.setState({ statusObj: i });
    });
  }

  editSubmit = e => {
    e.preventDefault();

    this.setState({ modalLoading: true });

    // get edit values
    const { state } = this;
    const { id, name, } = this.state;

    editJob(state)
      .then(() => {
        // get current table-data from the state w\o editing change (when render only)
        const { jobs, id, name, company, user, created, modified, published, views, impressions, details,
          experience_from, experience_up, seniority, seniorityObj, skills, status, statusObj } = this.state;

        // find editing data in all data by id
        for (let i = 0; i < jobs.length; i++) {
          if (jobs[i].id === id) {
            // inject editing data to table state
            jobs[i] = { id, name, company, user, created, modified, published, views, impressions, details,
            experience_from, experience_up, seniority, seniorityObj, skills, status, statusObj,

              // change modified to current date
            modified: `${new Date().toISOString()}` };
          }
        }

        this.setState({
          jobs, // new user with edited item
          modalLoading: false,
          editModalIsOpen: false,
          alertType: 'edit',
          alertIsOpen: true
        });

        // close alert after 2 sec
        setTimeout(() => {
          this.setState({ alertIsOpen: false });
        }, 2000);
      })

      .catch(error => this.catchErrors(error));
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
      id, name, company, user, created, modified, published, views, impressions, details,
      experience_from, experience_up, seniority, seniorityObj, skills, status, statusObj,

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

        <EditJob
          // fields
          id={id} name={name} details={details}
          original={original} skills={skills}
          created={created} modified={modified} published={published}
          views={views} impressions={impressions}
          experience_from={experience_from} experience_up={experience_up}
          seniority={seniority} seniorityObj={seniorityObj}
          status={status} statusObj={statusObj}

          // modal
          isOpen={editModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeEditModal}

          // actions
          onChange={this.onChange}
          onChangeDetails={this.onChangeDetails}
          onChangeSkills={this.onChangeSkills}
          onChangeStatus={this.onChangeStatus}
          onSubmit={this.editSubmit}
          deleteClick={this.deleteClick(original)}
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
