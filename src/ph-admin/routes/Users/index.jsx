import React from "react";
import slugify from 'slugify';

import Table         from '../../components/Table';
import Alerts        from '../../components/Alerts';
import AddButton     from '../../components/AddButton';

import AddUser    from './add';
import EditUser   from './edit';
import DeleteUser from './delete';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';
import { API_URL, subUrl } from '../../api/apiUrl';

// api
import getUsers      from './api/getUsers';
import getUsersCount from './api/getUsersCount';
import addUser       from './api/addUser';
import editUser      from './api/editUser';
import deleteUser    from './api/deleteUser';
import uploadImage   from './api/uploadImage';
import seniorityOptions   from './api/seniorityOptions';

import columns from './columns';

import './table.scss';


class Users extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Users') }

  fileInputImage  = React.createRef();

  state = {
    // table
    users: [], // array of objects
    usersCount: null,
    tableLoading: false,
    original: {},

    // alert
    alertIsOpen: false,
    alertType: '',
    alertErrorText: '',

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
    roles: [],
    status: true,
    experience: null,
    location: {},
    skills: [],
    created: '',
    modified: '',
    emailSettings: true,
    emailJobApplication: true,
    emailMarketing: true,
    seniority: { value: null, label: '' },

    // image
    image: { url: '', icon: '', color: '' },
    imageLoading: false,

    // skills: [],
    // location={location}
    // onChangeLocation={this.onChangeLocation}
    // onChangeSkills={this.onChangeSkills}
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

  onChangeSkills   = skills     => this.setState({ skills });
  onChangeLocation = location   => this.setState({ location });
  onChangeSeniority = seniority => this.setState({ seniority });

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

  // reset state fields
  addClick = () => {
    this.setState({
      addModalIsOpen: true,
      alertIsOpen: false,
      // reset fields
      name: '', surname: '', password: '', email: '', // add fields
      job_title: '', emailVerified: false,
      status: true, experience: null,
      image: { url: '', icon: '', color: '' },
      location: {}, skills: [], created: null, modified: null,
      emailSettings: true, emailJobApplication: true, emailMarketing: true,
    });
  }

  addSubmit = e => {
    e.preventDefault();

    this.setState({ modalLoading: true });
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
        console.log(res.data);
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

    // copy fiels to the state
    this.setState({
      original,
      alertIsOpen: false,
      editModalIsOpen: true,
      logoLoading: false, coverLoading: false,
      // get values from original react-table (original.id, original.name, original.price)
      id: original.id,
      name: original.name,
      surname: original.surname,
      email: original.email,
      job_title: original.job_title,
      emailVerified: original.emailVerified ? true : false,
      status: original.status,
      experience: original.experience,
      image: original.image,
      location: original.location,
      skills: original.skills,
      created: original.created,
      modified: original.modified,
      emailSettings: original.emailSettings,
      emailJobApplication: original.emailJobApplication,
      emailMarketing: original.emailMarketing,
    });

    // get seniority_id and setState in object with label
    const { seniority_id } = original;
    seniority_id && seniorityOptions.map(i => {
      seniority_id === i.value && this.setState({ seniority: { value: seniority_id, label: i.label } });
    });

    // check for admin rights
    const { roles } = original;
    roles && roles.map(i => {
      i.name === 'admin' && this.setState({ admin: true });
    });
  }

  editSubmit = e => {
    e.preventDefault();

    this.setState({ modalLoading: true });

    // get edit values
    const { state } = this;
    const { id, name, surname, email, job_title, emailVerified, admin, status, experience, image, location, skills, created, modified, emailSettings, emailJobApplication, emailMarketing, seniority } = this.state;

    editUser(state)
      .then(() => {
        // get current table-data from the state w\o editing change (when render only)
        const { users } = this.state;

        // find editing data in all data by id
        for (let i = 0; i < users.length; i++) {
          if (users[i].id === id) {
            // inject editing data to table state
            users[i] = { id, name, surname, email, job_title, emailVerified, admin, status, experience, image, location, skills, created, modified, emailSettings, emailJobApplication, emailMarketing, seniority };
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

    this.setState({ modalLoading: true });

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

  deleteImage  = () => {
    this.setState({
      image: { url: '' }
    });
  }

  closeAddModal    = () => !this.state.modalLoading && this.setState({ addModalIsOpen:    false });
  closeEditModal   = () => !this.state.modalLoading && this.setState({ editModalIsOpen:   false });
  closeDeleteModal = () => !this.state.modalLoading && this.setState({ deleteModalIsOpen: false });

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
      name, surname, password, email, job_title, emailVerified, admin, status, experience, location, skills, created, modified, emailSettings, emailJobApplication, emailMarketing, seniority,

      // image
      image, imageLoading,

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
      <div className="users-page">
        { alertIsOpen && <Alerts type={alertType} original={original} errorText={alertErrorText} /> }

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
          name={name}
          surname={surname}
          job_title={job_title}
          email={email}
          emailVerified={emailVerified}
          admin={admin}
          status={status}
          experience={experience}
          skills={skills}
          location={location}
          created={created}
          modified={modified}
          emailSettings={emailSettings}
          emailJobApplication={emailJobApplication}
          emailMarketing={emailMarketing}
          seniority={seniority}

          // image
          image={image}
          imageLoading={imageLoading}
          fileInputImage={this.fileInputImage}
          onUploadImage={this.onUploadImage}
          deleteImage={this.deleteImage}

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
          onChangeLocation={this.onChangeLocation}
          onChangeSeniority={this.onChangeSeniority}
        />

        <Table
          manual={true}
          data={users}
          pages={usersCount}
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
            getUsersCount(state)
              .then(res => {
                this.setState({ usersCount: Math.ceil(res.data.count / state.pageSize) })

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
