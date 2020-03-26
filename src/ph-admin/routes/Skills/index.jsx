import React from 'react';
import slugify from 'slugify';

import isEmpty from 'lodash/isEmpty';

import Table     from '../../components/Table';
import columns   from './columns';

import Alerts    from '../../components/Alerts';
import AddButton from '../../components/AddButton';

import AddSkill    from './add';
import DeleteSkill from './delete';


import formatNumber from './../../utils/formatNumber';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

import getSkills      from './api/getSkills';
import getSkillsCount from './api/getSkillsCount';
import addSkill       from './api/addSkill';
import deleteSkill    from './api/deleteSkill';


class Skills extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Skills') }

  state = {
    // table
    skills: [], skillsCount: null, tableLoading: false, count: null,

    // alert
    alertIsOpen: false, alertType: '', alertErrorText: '',

    // delete
    deleteModalIsOpen: false, deleteModalLoading: false,

    // add
    addModalIsOpen: false, addModalLoading: false,

    // fields
    id: null, name: '', slug: '', weight: null, markers: '',
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  addClick = () => {
    this.setState({
      addModalIsOpen: true,
      alertIsOpen: false,
      name: '', slug: '', weight: null, markers: '' // reset fields
    });
  }

  addSubmit = e => {
    e.preventDefault();

    this.setState({ addModalLoading: true, errorAlertIsOpen: false });
    const { name, slug, weight, markers, skills } = this.state;

    addSkill(name, slug, weight, markers)   // order must be like inside addSkill method
      .then(res => {

        const newData = [res.data].concat(skills);

        this.setState({
          addModalLoading: false,
          addModalIsOpen: false,
          alertType: 'add',
          alertIsOpen: true,
          skills: newData
        });

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

  deleteClick = original => () => {
    const { id, name } = original;
    this.setState({ id, name, deleteModalIsOpen: true, alertIsOpen: false });
  }

  deleteSubmit = () => {
    const dataWitoutDeleted = [];
    const { skills, id } = this.state;

    this.setState({ deleteModalLoading: true, errorAlertIsOpen: false });

    deleteSkill(id)
      // if delete ok
      .then(() => {
        for (let i = 0; i < skills.length; i++) {
          // skiping deleted item and forming new array without it
          if (skills[i].id !== id) {
            // push all data without deleted item to new array
            dataWitoutDeleted.push(skills[i]);
          }
        }
        this.setState({
          // set new data w\o deleted item
          skills: dataWitoutDeleted,
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

  generateSlug = () => {
    const { name } = this.state;
    this.setState({
      slug: slugify(name, { replacement: '-', lower: true })
    });
  }

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
    const { afterEditData } = this.props.history.location.state || {};

    if(!isEmpty(afterEditData)) {
      // get current table-data from the state w\o editing change (when render only)
      const { skills } = this.state;

      // find editing data in all data by id
      for (let i = 0; i < skills.length; i++) {
        if (skills[i].id === afterEditData.id) {
          // inject editing data to table state
          skills[i] = {
            id:       afterEditData.id,
            name:     afterEditData.name,
            slug:     afterEditData.slug,
            weight:   afterEditData.weight,
            markers:  afterEditData.markers,
          };
        }
      }

      // inject new array with edited data to table
      this.setState({ skills });
    }

    // AFTER DELETE //
    const { deletedId } = this.props.history.location.state || {};

    if(deletedId) {
      // get current table-data from the state w\o editing change (when render only)
      const { skills } = this.state;
      const dataWitoutDeleted = [];

      for (let i = 0; i < skills.length; i++) {
        // skiping deleted item and forming new array without it
        if (skills[i].id !== deletedId) {
          // push all data without deleted item to new array
          dataWitoutDeleted.push(skills[i]);
        }
      }
      this.setState({ skills: dataWitoutDeleted });
    }
  }

  render() {
    const {
      // table
      skills, skillsCount, count, tableLoading,

      // alerts
      alertIsOpen, alertType, alertErrorText,

      // delete
      deleteModalLoading, deleteModalIsOpen,

      // add
      addModalIsOpen, addModalLoading,
      id, name, slug, weight, markers, // fields
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
      <div className="skills-page">
        <p className="md-lg">
          Total records:&nbsp;<b>{count && formatNumber(this.state.count)}</b>
        </p>

        { alertIsOpen && <Alerts type={alertType} id={id} name={name} errorText={alertErrorText} /> }

        <AddButton
          text="skill"
          loading={addModalLoading && deleteModalLoading}
          addClick={this.addClick}
        />

        <AddSkill
          // fields
          name={name} slug={slug} weight={weight} markers={markers}

          isOpen={addModalIsOpen}
          modalLoading={addModalLoading}
          closeModal={this.closeAddModal}
          onChange={this.onChange}
          onSubmit={this.addSubmit}
          generateSlug={this.generateSlug}
        />

        <DeleteSkill
          id={id}
          name={name}
          isOpen={deleteModalIsOpen}
          deleteSubmit={this.deleteSubmit}
          modalLoading={deleteModalLoading}
          closeModal={this.closeDeleteModal}
        />

        <Table
          data={skills}
          manual={true}
          pages={skillsCount}
          loading={tableLoading}
          columns={[...columns, ...controlsColumn]}
          onFetchData={state => {
            this.setState({ tableLoading: true });

            // count request
            getSkillsCount(state)
              .then(res => {
                this.setState({
                  count: res.data.count,
                  skillsCount: Math.ceil(res.data.count / state.pageSize)
                })

                // data request
                getSkills(state)
                  .then(res => this.setState({ skills: res.data, tableLoading: false }))
                  .catch(error => this.catchErrors(error));
              }).catch(error => this.catchErrors(error));
          }}
        />
      </div>
    )
  }
}

export default withHeaderTitle(Skills);
