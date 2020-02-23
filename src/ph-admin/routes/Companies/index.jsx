import React from "react";

import Table from '../../components/Table';
// import Alerts from '../../components/Alerts';
// import AddButton from '../../components/AddButton';
// import AddCompany from './add';
// import EditCompany from './edit';
// import DeleteCompany from './delete';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

import getCompanies from './api/getCompanies';
import getCompaniesCount from './api/getCompaniesCount';
// import addCompany from './api/addCompany';
// import editCompany from './api/editCompany';
// import deleteCompany from './api/deleteCompany';

import columns from './columns';


class Companies extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Companies') }

  state = {
    // table
    companies: [], // array of objects
    companiesCount: null,
    tableLoading: false,
//     original: {},

//     // alert
//     alertIsOpen: false,
//     alertType: '',
//     alertErrorText: '',

//     // modals
//     addModalIsOpen: false,
//     editModalIsOpen: false,
//     deleteModalIsOpen: false,
//     modalLoading: false,

//     // fields
//     id: null,
//     name: '',
//     slug: '',
//     weight: null,
//     markers: '',
  }

//   onChange = e => this.setState({ [e.target.name]: e.target.value });

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

//   addClick = () => {
//     this.setState({
//       addModalIsOpen: true,
//       alertIsOpen: false,
//       name: '', slug: '', weight: null, markers: '' // reset fields
//     });
//   }

//   addSubmit = e => {
//     e.preventDefault();

//     this.setState({ modalLoading: true });
//     const { name, slug, weight, markers, companies } = this.state;

//     addCompany(name, slug, weight, markers)   // order must be like inside addSkill method
//       .then(res => {

//         const newData = [res.data].concat(companies);

//         this.setState({
//           modalLoading: false,
//           addModalIsOpen: false,
//           alertType: 'add',
//           alertIsOpen: true,
//           companies: newData
//         });

//         // close alert after 2 sec
//         setTimeout(() => {
//           this.setState({ alertIsOpen: false });
//         }, 2000);
//       })

//       .catch(error => this.catchErrors(error));
//   }

//   editClick = original => () => {
//     this.setState({
//       original,
//       alertIsOpen: false,
//       editModalIsOpen: true,

//       // get values from original react-table (original.id, original.name, original.price)
//       id: original.id,
//       name: original.name,
//       slug: original.slug,
//       markers: original.markers,
//       weight: original.weight,
//     });
//   }

//   editSubmit = e => {
//     e.preventDefault();

//     this.setState({ modalLoading: true });

//     // get edit values
//     const { id, name, slug, markers, weight } = this.state;
//     editCompany(id, name, slug, markers, weight)

//       .then(() => {
//         // get current table-data from the state w\o editing change (when render only)
//         const { companies } = this.state;

//         // find editing data in all data by id
//         for (let i = 0; i < companies.length; i++) {
//           if (companies[i].id === id) {
//             // inject editing data to table state
//             companies[i] = { id, name, slug, markers, weight };
//           }
//         }

//         this.setState({
//           companies, // new roles with edited item
//           modalLoading: false,
//           editModalIsOpen: false,
//           alertType: 'edit',
//           alertIsOpen: true
//         });

//         // close alert after 2 sec
//         setTimeout(() => {
//           this.setState({ alertIsOpen: false });
//         }, 2000);
//       })

//       .catch(error => this.catchErrors(error));
//   }

//   deleteClick = original => () => {
//     this.setState({
//       original,
//       deleteModalIsOpen: true
//     });
//   }

//   deleteSubmit = () => {
//     const dataWitoutDeleted = [];
//     const { companies, original: { id } } = this.state;

//     this.setState({ modalLoading: true });

//     deleteCompany(id)
//       // if delete ok
//       .then(() => {
//         for (let i = 0; i < companies.length; i++) {
//           // skiping deleted item and forming new array without it
//           if (companies[i].id !== id) {
//             // push all data without deleted item to new array
//             dataWitoutDeleted.push(companies[i]);
//           }
//         }
//         this.setState({
//           // set new data w\o deleted item
//           companies: dataWitoutDeleted,
//           deleteModalIsOpen: false,
//           modalLoading: false
//         })
//       })
//       .catch(error => this.catchErrors(error));
//   }

//   closeAddModal    = () => !this.state.modalLoading && this.setState({ addModalIsOpen:    false });
//   closeEditModal   = () => !this.state.modalLoading && this.setState({ editModalIsOpen:   false });
//   closeDeleteModal = () => !this.state.modalLoading && this.setState({ deleteModalIsOpen: false });

//   componentDidMount() {

//     // close modal on Escape
//     document.addEventListener('keyup', e => e.keyCode === 27 && this.closeEditModal());
//   }
//   componentWillUnmount() { document.removeEventListener('keyup', e => e.keyCode === 27) }


  render() {
    const {
      // table
      tableLoading, original, companies, companiesCount,

      // fields
      name, slug, weight, markers,

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
            {/* <i className="ion-android-delete" onClick={this.deleteClick(original)} /> */}
            {/* <i className="ion-edit" onClick={this.editClick(original)} /> */}
          </div>
        )
      }
    ];

    return (
      <div className="companies-page">
        <Table
          manual={true}
          pages={companiesCount}
          data={companies}
          loading={tableLoading}
          columns={[...columns, ...controlsColumn]}
          onFetchData={state => {
            this.setState({ tableLoading: true });

            // count request
            getCompaniesCount(state)
              .then(res => {
                this.setState({ companiesCount: Math.ceil(res.data.count / state.pageSize) })

                // data request
                getCompanies(state)
                  .then(res => this.setState({ companies: res.data, tableLoading: false }))
              })
              .catch(error => this.catchErrors(error));
          }}
        />
      </div>
    );
  }
}

export default withHeaderTitle(Companies);


//         { alertIsOpen && <Alerts type={alertType} original={original} errorText={alertErrorText} /> }

//         <AddButton
//           text="company"
//           loading={modalLoading}
//           addClick={this.addClick}
//         />

//         <AddCompany
//           // fields
//           name={name} slug={slug} weight={weight} markers={markers}

//           isOpen={addModalIsOpen}
//           modalLoading={modalLoading}
//           closeModal={this.closeAddModal}
//           onChange={this.onChange}
//           onSubmit={this.addSubmit}
//         />

//         <EditCompany
//           // fields
//           original={original}
//           name={name} slug={slug} weight={weight} markers={markers}

//           isOpen={editModalIsOpen}
//           modalLoading={modalLoading}
//           closeModal={this.closeEditModal}
//           onChange={this.onChange}
//           onSubmit={this.editSubmit}
//         />

//         <DeleteCompany
//           isOpen={deleteModalIsOpen}
//           modalLoading={modalLoading}
//           closeModal={this.closeDeleteModal}
//           original={original}
//           deleteSubmit={this.deleteSubmit}
//         />


