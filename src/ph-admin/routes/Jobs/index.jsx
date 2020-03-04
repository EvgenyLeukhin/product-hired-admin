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
import planOptions from './api/planOptions';

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
    planObj: {}, plan_id: null,

    name: '',
    company: { name: '' }, company_id: null,
    user: { name: '', surname: '', email: '' }, user_id: null,
    experience_up: null, experience_from: null,
    locations: [], company_id: null, company: {},

    // default state fields when add job
    application_link: null, application_type: 0, details: "<p></p>", employer_id: null,
    experience_from: 0, experience_up: 1, hash: null,
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

  onChangePlan = planObj => {
    this.setState({ planObj, plan_id: planObj.value });
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
      experience_from: 0, experience_up: 1, hash: null, plan_id: null, seniority: 1, status: 'draft',
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
      published: original.published,
      views: original.views,
      impressions: original.impressions,
      details: original.details,
      experience_up: original.experience_up,
      experience_from: original.experience_from,
      seniority: original.seniority,
      skills: original.skills,
      status: original.status,
      plan_id: original.plan_id,
      locations: original.locations,
      company_id: original.company_id,
      company: original.company,
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

    // PLAN
    // get current plan for job
    const { plan_id } = original;
    plan_id ? planOptions.map(i => {
      plan_id === i.value && this.setState({ planObj: i });
    }) : this.setState({ planObj: {} });
  }

  editSubmit = e => {
    e.preventDefault();

    this.setState({ modalLoading: true });

    // get edit values
    const { state } = this;
    // const { id, name, } = this.state;

    editJob(state)
      .then(() => {
        // get current table-data from the state w\o editing change (when render only)
        const { jobs, id, name, company, user, created, modified, published, views, impressions, details,
          experience_from, experience_up, seniority, seniorityObj, skills, status, statusObj, plan_id, planObj,
          locations, company_id, company,
        } = this.state;

        // find editing data in all data by id
        for (let i = 0; i < jobs.length; i++) {
          if (jobs[i].id === id) {
            // inject editing data to table state
            jobs[i] = { id, name, company, user, created, modified, published, views, impressions, details,
            experience_from, experience_up, seniority, seniorityObj, skills, status, statusObj, plan_id, planObj,
            locations, company_id, company,

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
      id, name, company, company_id, user, created, modified, published, views, impressions, details,
      experience_from, experience_up, seniority, seniorityObj, skills, status, statusObj,
      plan_id, planObj, locations,

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
          plan_id={plan_id} planObj={planObj}

          // modal
          isOpen={editModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeEditModal}

          // actions
          onChange={this.onChange}
          onChangeDetails={this.onChangeDetails}
          onChangeSkills={this.onChangeSkills}
          onChangeStatus={this.onChangeStatus}
          onChangePlan={this.onChangePlan}
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


// {
  // name: "Program Manager",

  // details: "<div id="jobDescriptionText" class="jobsearch-jobD…ed Six Sigma Black Belt is a plus</li></ul></div>", created: "2019-12-12T00:00:00.000Z", modified: "2020-02-20T02:52:34.000Z", published: "2020-02-13T14:53:01.000Z", …}

// application_link: "http://jp.indeed.com/viewjob?jk=08b6dd09472d1e40&qd=q-W_AcXrCjXtyVUvGh7yyfEZRnvTDHQnPVwcjQ09-7xtU5CE_dnPJq1QDQ7BbOxgsuLKP4R8KwnSfW6Tu291w2jpPKTCEI08v9WRs3ScL0lpPk4BqtIkYsaQriuO_0kNNVbuGkvXR_7b87sG_geiaw&indpubnum=5493419850484974&atk=1e0qsuio8h72s801"

// application_type: 0
// applied: false
// company: {name: "Amazon Japan G.K.", motivated: 0, logo: null, cover: null, craft_id: null, …}
// company_id: 662
// cover: null
// created: "2019-12-12T00:00:00.000Z"

// description: "A job at Amazon Japan G.K. in Sapporo. Requires any experience and the following skills: Communication Skills, Problem Solving, Project Management, Analytical, Program Management."

// details: "<div id="jobDescriptionText"</div>"
// employer_id: 1
// experience_from: 0
// experience_up: 10
// hash: null
// id: 66604
// impressions: 407
// locations: [{…}]
// logo: null
// modified: "2020-02-20T02:52:34.000Z"
// name: "Program Manager"
// paused: null
// plan_id: null
// published: "2020-02-13T14:53:01.000Z"
// role: {id: 7, name: "Project/Program", slug: "project-program", top: 1, weight: 18, …}
// saved: false
// seniority: 2
// skills: (5) [{…}, {…}, {…}, {…}, {…}]
// skills_string: null
// slug: "66604-program-manager"
// source: "indeed"
// source_id: "08b6dd09472d1e40"
// status: "public"
// vacancy_role: 7
// views: 11
