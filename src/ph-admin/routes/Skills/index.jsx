import React from 'react';

import isEmpty from 'lodash/isEmpty';

import Table from '../../components/Table';
import columns from './columns';

import DeleteSkill from './delete';

import Alerts from '../../components/Alerts';

import formatNumber from './../../utils/formatNumber';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

import getSkills      from './api/getSkills';
import getSkillsCount from './api/getSkillsCount';
import deleteSkill    from './api/deleteSkill';


class Skills extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Skills') }

  state = {
    // table
    skills: [], skillsCount: null, tableLoading: false, count: null, original: {},

    // alert
    alertIsOpen: false, alertType: '', alertErrorText: '',

    // delete
    deleteModalIsOpen: false,
    deleteModalLoading: false,
  }

  componentWillReceiveProps() {
    // new data after edit role
    const { afterEditData } = this.props.history.location.state || {};

    console.log(afterEditData);

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
            keywords: afterEditData.keywords,
            negative: afterEditData.negative,
          };
        }
      }

      // inject new array with edited data to table
      this.setState({ skills });
    }
  }

  closeDeleteModal = () => {
    const { deleteModalLoading } = this.state
    !deleteModalLoading && this.setState({ deleteModalIsOpen: false });
  }

  deleteClick = original => () => {
    this.setState({ original, deleteModalIsOpen: true, alertIsOpen: false });
  }

  deleteSubmit = () => {
    const dataWitoutDeleted = [];
    const { skills, original: { id } } = this.state;

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

  catchErrors = error => {
    const { name, statusCode, message } = error.response.data.error;
    if (statusCode === 401) {
      localStorage.removeItem('ph-admin-user-data');
      this.props.history.push('/login');
    } else {
      this.setState({
        errorAlertIsOpen: true,
        modalLoading: false,
        alertType: 'error',
        alertIsOpen: true,
        alertErrorText: `${name}, ${message}`
      });
    }
  }

  render() {
    const {
      // table
      skills, skillsCount, count, tableLoading, original,

      // alerts
      alertIsOpen, alertType, alertErrorText,

      // delete
      deleteModalLoading, deleteModalIsOpen,
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

        { alertIsOpen && <Alerts type={alertType} original={original} errorText={alertErrorText} /> }

        <DeleteSkill
          original={original}
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
