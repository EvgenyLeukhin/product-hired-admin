import React from "react";
import Table         from '../../components/Table';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';


// api
import getJobs      from './api/getJobs';
import getJobsCount from './api/getJobsCount';

import columns from './columns';


class Jobs extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Jobs') }

  state = {
    jobs: [],
    jobsCount: null,
    tableLoading: false,
    original: {},
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

  editClick = original => e => {
    e.stopPropagation();
    alert('Edit');
  }

  deleteClick = original => e => {
    e.stopPropagation();
    alert('Delete');
  }

  render() {

    const {
      // table
      tableLoading, original, jobs, jobsCount,
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
