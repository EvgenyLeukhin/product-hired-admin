import React from "react";

import Table         from '../../components/Table';
import Alerts        from '../../components/Alerts';
import AddButton     from '../../components/AddButton';

import AddUser    from './add';
import EditUser   from './edit';
import DeleteUser from './delete';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';
import { API_URL } from '../../api/apiUrl';

// api
import getUser      from './api/getUser';
import getUsers      from './api/getUsers';
import getUsersCount from './api/getUsersCount';
import getLocation   from './api/getLocation';
import getUserRole   from './api/getUserRole';
import getRole       from './api/getRole';
import getCompany    from './api/getCompany';
import addUser       from './api/addUser';
import editUser      from './api/editUser';
import deleteUser    from './api/deleteUser';
import uploadImage   from './api/uploadImage';
import seniorityOptions   from './api/seniorityOptions';

import columns from './columns';


class Users extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Users') }

  fileInputImage  = React.createRef();

  state = {
    // table
    users: [], // array of objects
    usersCount: null,
    tableLoading: false,
    original: {}, count: null,

    // alert
    alertIsOpen: false,
    alertType: '',
    alertErrorText: '',
    errorAlertIsOpen: false,

    // modals
    addModalIsOpen: false,
    editModalIsOpen: false,
    deleteModalIsOpen: false,
    modalLoading: false,

    // fields
    id: null,
    name: '',
    surname: '',
    password: '',
    email: '',
    job_title: '',
    emailVerified: false,
    admin: false,
    status: true,
    experience: { value: 0, label: '0' },
    skills: [],
    created: '',
    modified: '',
    emailSettings: true,
    emailJobApplication: true,
    emailMarketing: true,

    seniority: {},        // 1. seniority object for react-select
    seniority_id: null,

    location: { id: null, name: '', alias_region: '' },
    location_id: null,

    userRole: { id: null, name: '' },
    user_role_id: null,

    roles: [],
    role: { id: null, name: '' },
    role_id: null,

    company: { id: null, name: '' },
    company_id: null,

    // image
    image: { url: '', icon: '', color: '' },
    imageLoading: false,
  }

  resetFields = () => {
    this.setState({
      name: '', surname: '', password: '', email: '', job_title: '',
      emailVerified: false, admin: false, status: true,
      experience: { value: 0, label: '0' }, skills: [], created: '', modified: '', emailSettings: true,
      emailJobApplication: true, emailMarketing: true,

      seniority: {},        // 1. seniority object for react-select
      seniority_id: null,

      location: { id: null, name: '', alias_region: '' }, location_id: null,
      userRole: { id: null, name: '' }, user_role_id: null,
      roles: [], role: { id: null, name: '' }, role_id: null,

      company: { id: null, name: '' }, company_id: null,

      // image
      image: { url: '', icon: '', color: '' }, imageLoading: false,
    })
  }

  onChange = e => {
    if (e.target.type === 'checkbox') {
      this.setState({ [e.target.name]: e.target.checked })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  onChangeImage = e => {
    this.setState({
      image: { url: `${e.target.value}`}
    });
  }

  onChangeSkills     = skills     => this.setState({ skills });
  onChangeExperience = experience => this.setState({ experience });

  onChangeSeniority = seniority => {
    this.setState({
      seniority,                     // 2. change react-select object
      seniority_id: seniority.value, // change seniority_id
    });
  }

  onChangeLocation = location => {
    this.setState({ location, location_id: location.id });
  }

  onChangeUserRole = userRole => {
    this.setState({ userRole, user_role_id: userRole.id });
  }

  onChangeRole = role => {
    this.setState({ role, role_id: role.id });
  }

  onChangeCompany = company => {
    this.setState({ company, company_id: company.id });
  }

  onChangeAdmin = () => {
    const { admin } = this.state;
    this.setState({
      admin: !admin,
      roles: admin ? [] : [{ name: 'admin' }] // ??? reverce logic Why? but work
    });
  }

  catchErrors = error => {
    // redirect to login if 401 (request, response)
    if (error.response.status === 401) {
      localStorage.removeItem('ph-admin-user-data');
      this.props.history.push('/login');

    } else {
      this.setState({
        errorAlertIsOpen: true,
        modalLoading: false,
        imageLoading: false,
        // addModalIsOpen: false, editModalIsOpen: false, deleteModalIsOpen: false, // close modals
        alertType: 'error',
        alertIsOpen: true,
        alertErrorText: `${error}, ${error.response.data.error.message}`
      });
    }
  }

  // reset state fields
  addClick = () => {
    this.setState({
      addModalIsOpen: true,
      alertIsOpen: false,
      // reset fields
      name: '', surname: '', password: '', email: '', // add fields
      job_title: '', emailVerified: false,
      status: true, experience: { value: 0, label: '0' },
      image: { url: '', icon: '', color: '' },
      location: { id: null, name: '', alias_region: '' },
      skills: [], created: null, modified: null, roles: [],
      emailSettings: true, emailJobApplication: true, emailMarketing: true,
    });
  }

  addSubmit = e => {
    e.preventDefault();

    this.setState({ modalLoading: true, errorAlertIsOpen: false });
    const { name, surname, password, email, users } = this.state;

    addUser(name, surname, password, email)   // order must be like inside addSkill method
      .then(res => {

        const newData = [res.data].concat(users);

        this.setState({
          modalLoading: false,
          addModalIsOpen: false,
          users: newData,
        });

        this.editAfterAdd(res.data);
      })

      .catch(error => this.catchErrors(error));
  }

  editAfterAdd = data => {
    this.setState({
      addModalIsOpen: false,
      editModalIsOpen: true,
      // save data to original
      original: data,

      // save filled inputs
      id: data.id,
      name: data.name,
      surname: data.surname,
      email: data.email,
      created: data.created,
      modified: data.modified,
      alertIsOpen: false
    });
  }

  // reset original fields to the state fields
  editClick = original => e => {
    e.stopPropagation();
    this.resetFields();

    this.setState({
      id: original.id,
      original,
      editModalIsOpen: true,
      modalLoading: true,
      alertIsOpen: false, imageLoading: false
    });

    getUser(original.id).then(res => {
      const { data } = res;
      this.setState({
        original,
        modalLoading: false,

        // fields
        id: data.id,
        name: data.name,
        surname: data.surname,
        email: data.email,
        job_title: data.job_title,
        emailVerified: data.emailVerified,
        status: data.status,
        experience: {
          value: data.experience ? Number(data.experience) : 0,
          label: data.experience ? `${data.experience}` : '0'
        },
        image: data.image,
        skills: data.skills,
        created: data.created,
        modified: data.modified, // get modified from data
        emailSettings: data.emailSettings,
        emailJobApplication: data.emailJobApplication,
        emailMarketing: data.emailMarketing,
        seniority_id: data.seniority_id,
        location_id: data.location_id,
        user_role_id: data.user_role_id,
        userRole: data.userRole,
        role_id: data.role_id,
        roles: data.roles,
        company_id: data.company_id,
      });


      // ADMIN RIGHtS // check for admin rights
      const { roles } = this.state;
      roles && roles.map(i => i.name === 'admin' && this.setState({ admin: true }));


      // SENIORITY
      // 3. inject seniority object to react-select if we have seniority_id in the original
      const { seniority_id } = this.state;
      seniority_id ? (
        seniorityOptions.map(i => {
          i.value === seniority_id && this.setState({ seniority: i });
        })
      ) : this.setState({ seniority: {} });  // if doesn't have - reset seniority


    }).then(() => {
      // LOCATION
      const { location_id } = this.state;
      this.setState({ location: { id: null, name: 'Loading ...', alias_region: '' }}); // pre-loader

      location_id ? (
        getLocation(location_id).then(res => {  // get request
          this.setState({
            location: res.data,
            location_id: res.data.id
          })
        })
      ) : this.setState({
        location: { id: null, name: '', alias_region: '' }  // if doesn't have - reset
      });


      // USER_ROLE
      // const { user_role_id } = this.state;
      //   this.setState({ userRole: { id: null, name: 'Loading...' }}); // pre-loader

      //   user_role_id ? (
      //   getUserRole(user_role_id).then(res => { // get request
      //     this.setState({
      //       userRole: res.data,
      //       user_role_id: res.data.id
      //     })
      //   })
      // ) : this.setState({
      //   userRole: { id: null, name: '' } // if doesn't have - reset
      // });


      // ROLE
      const { role_id } = this.state;
        this.setState({ role: { id: null, name: 'Loading...' }}); // pre-loader

        role_id ? (
        getRole(role_id).then(res => { // get request
          this.setState({
            role: res.data,
            role_id: res.data.id
          })
        })
      ) : this.setState({
        role: { id: null, name: '' } // if doesn't have - reset
      });


      // COMPANY
      const { company_id } = this.state;
        this.setState({ company: { id: null, name: 'Loading...' }}); // pre-loader

        company_id ? (
        getCompany(company_id).then(res => { // get request
          this.setState({
            company: res.data,
            company_id: res.data.id
          })
        })
      ) : this.setState({
        company: { id: null, name: '' } // if doesn't have - reset
      });
    }).catch(error => this.catchErrors(error));
  }

  editSubmit = e => {
    e.preventDefault();

    this.setState({ modalLoading: true, errorAlertIsOpen: false });

    // get edit values
    const { state } = this;
    const { id, name, surname, email, job_title, emailVerified, admin, status, experience, image, skills, created, emailSettings, emailJobApplication, emailMarketing, seniority_id, seniority, location_id, location, userRole, user_role_id, roles, role, role_id, company, company_id } = this.state;

    editUser(state)
      .then(() => {
        // get current table-data from the state w\o editing change (when render only)
        const { users } = this.state;

        // find editing data in all data by id
        for (let i = 0; i < users.length; i++) {
          if (users[i].id === id) {
            // inject editing data to table state
            users[i] = { id, name, surname, email, job_title, emailVerified, admin, status, experience: experience.value, image, skills, created, emailSettings, emailJobApplication, emailMarketing, seniority_id, seniority, location_id, location, userRole, user_role_id, roles, role, role_id, company, company_id,

              // change modified to current date
            modified: `${new Date().toISOString()}` };
            console.log(users[i].userRole)
          }
        }

        this.setState({
          users, // new user with edited item
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

  onUploadImage = e => {
    e.preventDefault();
    this.setState({ imageLoading: true });

    // create a new form data
    const formData = new FormData();
    const { id } = this.state;

    // get image from the browser memory
    const uploadImageFile = this.fileInputImage.current.files[0];

    // append this file to form data
    formData.append('file', uploadImageFile);

    // uploadImageRequest
    uploadImage(formData, id)
      .then(res => {
        this.setState({
          image: {
            url: `${API_URL}${res.data.file.url}`
          },
          imageLoading: false
        })
      })
      .catch(error => this.catchErrors(error));
  }

  deleteClick = original => e => {
    e.stopPropagation();
    this.setState({ original, deleteModalIsOpen: true, alertIsOpen: false });
  }

  deleteSubmit = () => {
    const dataWitoutDeleted = [];
    const { users, original: { id } } = this.state;

    this.setState({ modalLoading: true, errorAlertIsOpen: false });

    deleteUser(id)
      // if delete ok
      .then(() => {
        for (let i = 0; i < users.length; i++) {
          // skiping deleted item and forming new array without it
          if (users[i].id !== id) {
            // push all data without deleted item to new array
            dataWitoutDeleted.push(users[i]);
          }
        }
        this.setState({
          // set new data w\o deleted item
          users: dataWitoutDeleted,
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

  onDeleteImage  = () => this.setState({ image: { url: '' } });

  closeAddModal    = () => !this.state.modalLoading && this.setState({ addModalIsOpen:    false });

  closeEditModal   = () => {
    !this.state.modalLoading && this.setState({
      editModalIsOpen: false,
      imageLoading: false
    });
  }

  closeDeleteModal = () => !this.state.modalLoading && this.setState({ deleteModalIsOpen: false });
  closeErrorAlert  = () => this.setState({ errorAlertIsOpen: false });

  componentDidMount() {
    // close modal on Escape
    document.addEventListener('keyup', e => e.keyCode === 27 && this.closeEditModal());
  }

  componentWillUnmount() { document.removeEventListener('keyup', e => e.keyCode === 27) }

  render() {
    const {
      // table
      tableLoading, original, users, usersCount,

      // fields
      name, surname, password, email, job_title, emailVerified, admin, status, experience, skills, created, modified, emailSettings, emailJobApplication, emailMarketing, seniority_id, seniority, location, location_id, userRole, user_role_id, roles, role, role_id, company, company_id,

      // image
      image, imageLoading,

      // modals
      addModalIsOpen, editModalIsOpen, modalLoading, deleteModalIsOpen,

      // alerts
      alertIsOpen, alertType, alertErrorText, errorAlertIsOpen
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

    function formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
      <div className="users-page">
        <p className="md-lg">
          Total records:&nbsp;<b>{this.state.count && formatNumber(this.state.count)}</b>
        </p>
        {
          alertIsOpen && (
            <Alerts
              type={alertType}
              original={original}
              errorText={alertErrorText}
              errorAlertIsOpen={errorAlertIsOpen}
              closeErrorAlert={this.closeErrorAlert}
            />
          )
        }

        <AddButton
          text="user"
          loading={modalLoading}
          addClick={this.addClick}
        />

        <DeleteUser
          isOpen={deleteModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeDeleteModal}
          original={original}
          deleteSubmit={this.deleteSubmit}
        />

        <AddUser
          // fields
          name={name} surname={surname} password={password} email={email}

          // modal
          isOpen={addModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeAddModal}

          // actions
          onChange={this.onChange}
          onSubmit={this.addSubmit}
        />

        <EditUser
          // fields
          original={original}
          name={name} surname={surname} email={email}
          job_title={job_title}
          emailVerified={emailVerified}
          admin={admin}
          status={status}
          experience={experience}
          skills={skills}
          created={created}
          modified={modified}
          emailSettings={emailSettings}
          emailJobApplication={emailJobApplication}
          emailMarketing={emailMarketing}

          seniority={seniority} seniority_id={seniority_id}
          location={location}   location_id={location_id}
          userRole={userRole} user_role_id={user_role_id}
          role={role}           role_id={role_id} roles={roles}
          company={company}     company_id={company_id}

          // image
          image={image}
          imageLoading={imageLoading}
          fileInputImage={this.fileInputImage}
          onUploadImage={this.onUploadImage}
          onDeleteImage={this.onDeleteImage}

          // modal
          isOpen={editModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeEditModal}

          // actions
          onChange={this.onChange}
          onChangeImage={this.onChangeImage}
          onSubmit={this.editSubmit}
          deleteClick={this.deleteClick(original)}
          onChangeSkills={this.onChangeSkills}
          onChangeSeniority={this.onChangeSeniority}
          onChangeLocation={this.onChangeLocation}
          onChangeUserRole={this.onChangeUserRole}
          onChangeRole={this.onChangeRole}
          onChangeCompany={this.onChangeCompany}
          onChangeExperience={this.onChangeExperience}
          onChangeAdmin={this.onChangeAdmin}
        />

        <Table
          manual={true}
          data={users}
          pages={usersCount}
          loading={tableLoading}
          columns={[...columns, ...controlsColumn]}
          getTheadFilterThProps={(state, rowInfo, column) => {
            return { style: { overflow: 'visible' }};
          }}
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
            getUsersCount(state)
              .then(res => {
                this.setState({
                  count: res.data.count,
                  usersCount: Math.ceil(res.data.count / state.pageSize)
                })

                // data request
                getUsers(state)
                  .then(res => this.setState({ users: res.data, tableLoading: false }))
                  .catch(error => this.catchErrors(error));
              }).catch(error => this.catchErrors(error));
          }}
        />
      </div>
    );
  }
}

export default withHeaderTitle(Users);
