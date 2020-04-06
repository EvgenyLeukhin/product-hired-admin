import React from 'react';

import isEmpty from 'lodash/isEmpty';

import Table from '../../components/Table';
import columns from './columns';

import Alerts from '../../components/Alerts';
import AddButton from '../../components/AddButton';

import AddUser    from './add';
import DeleteUser from './delete';

import formatNumber from './../../utils/formatNumber';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

import getUsers      from './api/getUsers';
import getUsersCount from './api/getUsersCount';
import addUser       from './api/addUser';
import deleteUser    from './api/deleteUser';


class Users extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Users') }

  state = {
    // table
    users: [], usersCount: null, tableLoading: false, count: null,

    // alerts
    alertIsOpen: false, alertType: '', alertErrorText: '', errorAlertIsOpen: false,

    // fields
    id: null, name: '', surname: '', password: '', email: '',

    // delete
    deleteModalLoading: false, deleteModalIsOpen: false,

    // add
    addModalIsOpen: false, addModalLoading: false,
  }

  deleteClick = original => () => {
    const { id, name } = original;
    this.setState({ id, name, deleteModalIsOpen: true, alertIsOpen: false });
  }

  deleteSubmit = () => {
    const dataWitoutDeleted = [];
    const { users, id } = this.state;

    this.setState({ deleteModalLoading: true, errorAlertIsOpen: false });

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

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  addClick = () => {
    this.setState({
      addModalIsOpen: true,
      alertIsOpen: false,
      name: '', surname: '', password: '', email: '', // reset fields
    });
  }

  addSubmit = e => {
    e.preventDefault();

    this.setState({ addModalLoading: true, errorAlertIsOpen: false });
    const { name, surname, password, email, users } = this.state;

    addUser(name, surname, password, email)   // order must be like inside addSkill method
      .then(res => {

        const newData = [res.data].concat(users);

        this.setState({
          alertType: 'add',
          alertIsOpen: true,
          users: newData
        });

        // close alert after 2 sec
        setTimeout(() => {
          this.setState({
            alertIsOpen: false,
            addModalLoading: false,
            addModalIsOpen: false,
          });
          this.props.history.push(`/users/${res.data.id}`); // redirect to edit
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
        deleteModalLoading: false,
        alertType: 'error',
        alertIsOpen: true,
        alertErrorText: `${name}, ${message}`
      });
    }
  }

  componentWillReceiveProps() {
    // AFTER EDIT //
    const { afterEditData, roles } = this.props.history.location.state || {};

    if(!isEmpty(afterEditData)) {
      // get current table-data from the state w\o editing change (when render only)
      const { users } = this.state;

      // find editing data in all data by id
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === afterEditData.id) {
          // inject editing data to table state
          users[i] = {
            id: afterEditData.id, name: afterEditData.name, surname: afterEditData.surname, email: afterEditData.email, job_title: afterEditData.job_title, emailVerified: afterEditData.emailVerified, admin: afterEditData.admin, status: afterEditData.status, banned: afterEditData.banned, experience: afterEditData.experience.value, image: afterEditData.image, skills: afterEditData.skills, created: afterEditData.created, emailSettings: afterEditData.emailSettings, emailJobApplication: afterEditData.emailJobApplication, emailMarketing: afterEditData.emailMarketing, seniority_id: afterEditData.seniority_id, seniority: afterEditData.seniority, location_id: afterEditData.location_id, location: afterEditData.location, userRole: afterEditData.userRole, user_role_id: afterEditData.user_role_id, roles, role: afterEditData.role, role_id: afterEditData.role_id, company: afterEditData.company, company_id: afterEditData.company_id, lastLogin: afterEditData.lastLogin,
          };
        }
      }

      // inject new array with edited data to table
      this.setState({ users });
    }

    // AFTER DELETE //
    const { deletedId } = this.props.history.location.state || {};

    if(deletedId) {
      // get current table-data from the state w\o editing change (when render only)
      const { users, usersCount, count } = this.state;
      const dataWitoutDeleted = [];

      for (let i = 0; i < users.length; i++) {
        // skiping deleted item and forming new array without it
        if (users[i].id !== deletedId) {
          // push all data without deleted item to new array
          dataWitoutDeleted.push(users[i]);
        }
      }
      this.setState({
        users: dataWitoutDeleted,
        usersCount: usersCount - 1,
        count: count - 1,
      });
    }
  }

  render() {
    const {
      // table
      users, usersCount, count, tableLoading,

      // alerts
      alertIsOpen, alertType, alertErrorText,

      // add
      addModalIsOpen, addModalLoading,

      // delete
      deleteModalLoading, deleteModalIsOpen,

      // fields
      id, name, surname, password, email,
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
      <div className="users-page">
        <div className="table-top">
          <p className="md-lg">
            Total records:&nbsp;<b>{count && formatNumber(this.state.count)}</b>
          </p>
          <AddButton
            text="user"
            loading={addModalLoading && deleteModalLoading}
            addClick={this.addClick}
          />
        </div>

        { alertIsOpen && <Alerts type={alertType} id={id} name={name} surname={surname} errorText={alertErrorText} /> }

        <AddUser
          // fields
          name={name} surname={surname} password={password} email={email}

          isOpen={addModalIsOpen}
          modalLoading={addModalLoading}
          closeModal={this.closeAddModal}
          onChange={this.onChange}
          onSubmit={this.addSubmit}
        />

        <DeleteUser
          id={id}
          name={name}
          surname={surname}
          isOpen={deleteModalIsOpen}
          deleteSubmit={this.deleteSubmit}
          modalLoading={deleteModalLoading}
          closeModal={this.closeDeleteModal}
        />

        <Table
          data={users}
          manual={true}
          pages={usersCount}
          loading={tableLoading}
          columns={[...columns, ...controlsColumn]}
          getTheadFilterThProps={(state, rowInfo, column) => {
            return { style: { overflow: 'visible' }};
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
    )
  }
}

export default withHeaderTitle(Users);
