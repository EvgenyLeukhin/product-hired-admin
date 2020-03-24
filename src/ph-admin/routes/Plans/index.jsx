import React from 'react';
import { NavLink } from 'react-router-dom';

import Table from '../../components/Table';
import columns from './columns';

import Alerts from '../../components/Alerts';

import formatNumber from './../../utils/formatNumber';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

import getPlans      from './api/getPlans';
import getPlansCount from './api/getPlansCount';


class Plans extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Plans') }

  state = {
    // table
    plans: [], plansCount: null, tableLoading: false, count: null, original: {},

    // alert
    alertIsOpen: false, alertType: '', alertErrorText: '',
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
              <NavLink to={`/plans/${id}`}>
                <i className="ion-edit" />
              </NavLink>
            </div>
          )
        }
      }
    ];

    const {
      // table
      plans, plansCount, count, tableLoading, original,

      // alerts
      alertIsOpen, alertType, alertErrorText
    } = this.state;

    return (
      <div className="plans-page">
        <p className="md-lg">
          Total records:&nbsp;<b>{count && formatNumber(this.state.count)}</b>
        </p>

        { alertIsOpen && <Alerts type={alertType} original={original} errorText={alertErrorText} /> }

        <Table
          data={plans}
          manual={true}
          pages={plansCount}
          loading={tableLoading}
          columns={[...columns, ...controlsColumn]}
          onFetchData={state => {
            this.setState({ tableLoading: true });

            // count request
            getPlansCount(state)
              .then(res => {
                this.setState({
                  count: res.data.count,
                  plansCount: Math.ceil(res.data.count / state.pageSize)
                })

                // data request
                getPlans(state)
                  .then(res => this.setState({ plans: res.data, tableLoading: false }))
                  .catch(error => this.catchErrors(error));
              }).catch(error => this.catchErrors(error));
          }}
        />
      </div>
    )
  }
}

export default withHeaderTitle(Plans);
