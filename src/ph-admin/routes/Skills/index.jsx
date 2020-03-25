import React from 'react';

import isEmpty from 'lodash/isEmpty';

import Table from '../../components/Table';
import columns from './columns';

import Alerts from '../../components/Alerts';

import formatNumber from './../../utils/formatNumber';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

import getSkills      from './api/getSkills';
import getSkillsCount from './api/getSkillsCount';


class Skills extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Skills') }

  state = {
    // table
    skills: [], skillsCount: null, tableLoading: false, count: null,

    // alert
    alertIsOpen: false, alertType: '', alertErrorText: '',
  }

  componentWillReceiveProps() {
    // new data after edit role
    const { afterEditData } = this.props.history.location.state || {};

    // console.log(afterEditData);

    if(!isEmpty(afterEditData)) {
      // get current table-data from the state w\o editing change (when render only)
      const { skills } = this.state;

      // find editing data in all data by id
      for (let i = 0; i < skills.length; i++) {
        if (skills[i].id === afterEditData.id) {
          // inject editing data to table state
          skills[i] = {
            id: afterEditData.id,
            name: afterEditData.name,
            slug: afterEditData.slug,
            markers: afterEditData.markers,
            weight: afterEditData.weight,
          };
        }
      }

      // inject new array with edited data to table
      this.setState({ skills });
    }
  }

  deleteClick = id => e => {
    // e.stopPropagation();
    this.setState({
      id,
      deleteModalIsOpen: true,
      alertIsOpen: false,
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
        modalLoading: false,
        alertType: 'error',
        alertIsOpen: true,
        alertErrorText: `${name}, ${message}`
      });
    }
  }

  render() {
    const controlsColumn = [
      {
        Header: '',
        width: 30,
        sortable: false,
        filterable: false,
        Cell: ({ original }) => {
          const { id } = original;
          return (
            <div className="rt-custom__controls">
              <div className="rt-custom__controls">
                <i className="ion-android-delete" onClick={() => alert(`Delete ${id}`)} />
              </div>
            </div>
          );
        }
      }
    ];

    const {
      // table
      skills, skillsCount, count, tableLoading,

      // alerts
      alertIsOpen, alertType, alertErrorText,
    } = this.state;

    return (
      <div className="skills-page">
        <p className="md-lg">
          Total records:&nbsp;<b>{count && formatNumber(this.state.count)}</b>
        </p>

        { alertIsOpen && <Alerts type={alertType} errorText={alertErrorText} /> }

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
