import React from 'react';

import isEmpty from 'lodash/isEmpty';

import Table from '../../components/Table';
import columns from './columns';

import Alerts from '../../components/Alerts';

import formatNumber from './../../utils/formatNumber';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

import getRoles      from './api/getRoles';
import getRolesCount from './api/getRolesCount';


class Roles extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Roles') }

  state = {
    // table
    roles: [], rolesCount: null, tableLoading: false, count: null, original: {},

    // alert
    alertIsOpen: false, alertType: '', alertErrorText: '',
  }

  componentWillReceiveProps() {
    // new data after edit role
    const { afterEditData } = this.props.history.location.state || {};

    if(!isEmpty(afterEditData)) {
      // get current table-data from the state w\o editing change (when render only)
      const { roles } = this.state;

      // find editing data in all data by id
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].id === afterEditData.id) {
          // inject editing data to table state
          roles[i] = {
            id:       afterEditData.id,
            name:     afterEditData.name,
            slug:     afterEditData.slug,
            weight:   afterEditData.weight,
            keywords: afterEditData.keywords,
            negative: afterEditData.negative,
            skills: afterEditData.skills,
          };
        }
      }

      // inject new array with edited data to table
      this.setState({ roles });
    }
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
      roles, rolesCount, count, tableLoading, original,

      // alerts
      alertIsOpen, alertType, alertErrorText
    } = this.state;

    return (
      <div className="roles-page">
        <p className="md-lg">
          Total records:&nbsp;<b>{count && formatNumber(this.state.count)}</b>
        </p>

        { alertIsOpen && <Alerts type={alertType} original={original} errorText={alertErrorText} /> }

        <Table
          data={roles}
          manual={true}
          pages={rolesCount}
          loading={tableLoading}
          columns={[...columns]}
          onFetchData={state => {
            this.setState({ tableLoading: true });

            // count request
            getRolesCount(state)
              .then(res => {
                this.setState({
                  count: res.data.count,
                  rolesCount: Math.ceil(res.data.count / state.pageSize)
                })

                // data request
                getRoles(state)
                  .then(res => this.setState({ roles: res.data, tableLoading: false }))
                  .catch(error => this.catchErrors(error));
              }).catch(error => this.catchErrors(error));
          }}
        />
      </div>
    )
  }
}

export default withHeaderTitle(Roles);
