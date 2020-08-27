import React from 'react';

import isEmpty from 'lodash/isEmpty';

import Table from '../../components/Table';
import columns from './columns';

import Alerts from '../../components/Alerts';
import AddButton from '../../components/AddButton';

import AddCampaing    from './add';
import DeleteCampaing from './delete';

import formatNumber from './../../utils/formatNumber';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

import addCampaing       from './api/addCampaing';
import deleteCampaing    from './api/deleteCampaing';
import getCampaings      from './api/getCampaings';
import getCampaingsCount from './api/getCampaingsCount';


class Campaings extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Campaings') }

  state = {
    // table
    campaings: [], campaingsCount: null, tableLoading: false, count: null,

    // alert
    alertIsOpen: false, alertType: '', alertErrorText: '',

    // delete
    deleteModalIsOpen: false, deleteModalLoading: false,

    // add
    addModalIsOpen: false, addModalLoading: false,

    // fields
    // company: { id: null, name: '' }, company_id: null,
    id: null, name: '', url: '', weight: null,
    companies: [],
    user: { id: null, name: '', surname: '', email: '' }, employer_id: null
  }

  // onChanges
  // onChangeCompany = company => this.setState({ companies, company_id: company.id });
  onChange          = e         => this.setState({ [e.target.name]: e.target.value });
  onChangeCompanies = companies => this.setState({ companies });
  onChangeUser      = user      => {
    console.log(user);
    this.setState({ user, employer_id: user.id });
  }

  resetFields = () => {
    this.setState({
      name: '', url: '', weight: '', companies: [],
      user: { id: null, name: '', surname: '', email: '' }
    });
  }

  addClick = () => {
    // reset fields
    this.resetFields();

    // add modal
    this.setState({ addModalIsOpen: true, alertIsOpen: false });
  }

  addSubmit = e => {
    e.preventDefault();

    this.setState({ addModalLoading: true, errorAlertIsOpen: false });
    const { name, user, employer_id, companies, campaings, url, weight } = this.state;

    addCampaing(name, employer_id, companies, url, weight)
      .then(res => {
        // add new obj from request and state
        const newCampaing = { ...res.data, companies, employer: user, locations: [{}] };

        // concat new campaing to state campaings
        const campaingsWithNew = [newCampaing].concat(campaings);

        this.setState({
          addModalLoading: false,
          addModalIsOpen: false,
          campaings: campaingsWithNew,
        });
      })

    .catch(error => this.catchErrors(error));
  }

  deleteClick = original => () => {
    const { id, name } = original;
    this.setState({ id, name, deleteModalIsOpen: true, alertIsOpen: false });
  }

  deleteSubmit = () => {
    const dataWitoutDeleted = [];
    const { id, campaings } = this.state;

    this.setState({ deleteModalLoading: true, errorAlertIsOpen: false });

    deleteCampaing(id)
      // if delete ok
      .then(() => {
        for (let i = 0; i < campaings.length; i++) {
          // skiping deleted item and forming new array without it
          if (campaings[i].id !== id) {
            // push all data without deleted item to new array
            dataWitoutDeleted.push(campaings[i]);
          }
        }
        this.setState({
          // set new data w\o deleted item
          campaings: dataWitoutDeleted,
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
    console.log(error);
    // const { name, statusCode, message } = error.response.data.error;
    // if (statusCode === 401) {
    //   localStorage.removeItem('ph-admin-user-data');
    //   this.props.history.push('/login');
    // } else {
    //   this.setState({
    //     errorAlertIsOpen: true,
    //     addModalLoading: false,
    //     deleteodalLoading: false,
    //     alertType: 'error',
    //     alertIsOpen: true,
    //     alertErrorText: `${name}, ${message}`
    //   });
    // }
  }

  componentWillReceiveProps() {
    // new data after edit plan
    const { afterEditData } = this.props.history.location.state || {};
    const { detailState } = this.props.history.location.state || {};

    if(!isEmpty(afterEditData && detailState)) {
      // get current table-data from the state w\o editing change (when render only)
      const { campaings } = this.state;

      // find editing data in all data by id
      for (let i = 0; i < campaings.length; i++) {
        if (campaings[i].id === afterEditData.id) {
          const {
            id, name, user, created, modified, published, views, impressions, details,experience_from, experience_up, seniority, seniorityObj, skills, status, statusObj, plan_id, planObj, companies, locations, vacancy_role, vacancy, logo, cover
          } = afterEditData;

          const { employer, employer_id } = detailState;
          // inject editing data to table state
          campaings[i] = {
            id, name, user, employer, employer_id, created, modified, published, views, impressions, details,experience_from: experience_from.value, experience_up: experience_up.value, seniority, seniorityObj, skills, status, statusObj, plan_id, planObj, companies, locations, vacancy_role, vacancy, logo, cover, modified: `${new Date().toISOString()}`
          };
        }
      }

      // inject new array with edited data to table
      this.setState({ campaings });
    }

    // AFTER DELETE //
    const { deletedId } = this.props.history.location.state || {};

    if(deletedId) {
      // get current table-data from the state w\o editing change (when render only)
      const { campaings, campaingsCount, count } = this.state;
      const dataWitoutDeleted = [];

      for (let i = 0; i < campaings.length; i++) {
        // skiping deleted item and forming new array without it
        if (campaings[i].id !== deletedId) {
          // push all data without deleted item to new array
          dataWitoutDeleted.push(campaings[i]);
        }
      }
      this.setState({
        campaings: dataWitoutDeleted,
        campaingsCount: campaingsCount - 1,
        count: count - 1,
      });
    }
  }

  render() {
    const {
      // table
      campaings, campaingsCount, count, tableLoading,

      // alerts
      alertIsOpen, alertType, alertErrorText,

      // delete
      deleteModalLoading, deleteModalIsOpen,

      // add
      addModalIsOpen, addModalLoading,

      // fields
      id, name, companies, user, url, weight,
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
      <div className="campaings-page">
        <div className="table-top">
          <p className="md-lg">
            Total records:&nbsp;<b>{count && formatNumber(this.state.count)}</b>
          </p>

          <AddButton
            text="campaign"
            loading={addModalLoading && deleteModalLoading}
            addClick={this.addClick}
          />
        </div>

        { alertIsOpen && <Alerts type={alertType} id={id} name={name} errorText={alertErrorText} /> }

        <AddCampaing
          // fields
          name={name} companies={companies} user={user} url={url} weight={weight}

          // modal
          isOpen={addModalIsOpen}
          modalLoading={addModalLoading}
          closeModal={this.closeAddModal}

          // actions
          onChange={this.onChange}
          resetFields={this.resetFields}
          onChangeCompanies={this.onChangeCompanies}
          onChangeUser={this.onChangeUser}
          onSubmit={this.addSubmit}
        />

        <DeleteCampaing
          id={id} name={name}
          isOpen={deleteModalIsOpen}
          deleteSubmit={this.deleteSubmit}
          modalLoading={deleteModalLoading}
          closeModal={this.closeDeleteModal}
        />

        <Table
          data={campaings}
          manual={true}
          pages={campaingsCount}
          loading={tableLoading}
          columns={[...columns, ...controlsColumn]}
          getTheadFilterThProps={(state, rowInfo, column) => {
            return { style: { overflow: 'visible' }};
          }}
          onFetchData={state => {
            this.setState({ tableLoading: true });

            // count request
            getCampaingsCount(state)
              .then(res => {
                this.setState({
                  count: res.data.count,
                  campaingsCount: Math.ceil(res.data.count / state.pageSize)
                })

                // data request
                getCampaings(state)
                  // .then(res => this.setState({ campaings: res.data, tableLoading: false }))
                  .then(res => {
                    this.setState({ campaings: res.data, tableLoading: false});
                  })
                  .catch(error => this.catchErrors(error));
              }).catch(error => this.catchErrors(error));
          }}
        />
      </div>
    )
  }
}

export default withHeaderTitle(Campaings);
