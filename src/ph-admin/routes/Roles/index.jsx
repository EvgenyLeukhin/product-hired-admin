import React from "react";

import Table from '../../components/Table';
import Alerts from '../../components/Alerts';
import EditRoles from './edit';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

import getRoles from './api/getRoles';
import editRole from './api/editRole';

import columns from './columns';



class Roles extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Roles') }

  state = {
    // table
    roles: [], // array of objects
    tableLoading: false,

    // alert
    alertIsOpen: false,
    alertType: '',
    alertErrorText: '',

    // edit
    editModalIsOpen: false,
    modalLoading: false,
    original: {},

    // fields
    id: null,
    name: '',
    slug: '',
    weight: null,
    keywords: '',
    negative: ''
  }

  // get values from original react-table (original.id, original.name, original.price)
  editClick = original => () => {
    this.setState({
      editModalIsOpen: true,
      original,
      id: original.id,
      name: original.name,
      slug: original.slug,
      weight: original.weight,
      keywords: original.keywords,
      negative: original.negative,
      alertIsOpen: false
    });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  closeModal = () => !this.state.modalLoading && this.setState({ editModalIsOpen: false });

  editSubmit = e => {
    e.preventDefault();

    this.setState({ modalLoading: true });

    // get edit values
    const { id, name, slug, weight, keywords, negative } = this.state;
    editRole(id, name, slug, weight, keywords, negative)

      .then(() => {
        // get current table-data from the state w\o editing change (when render only)
        const { roles } = this.state;

        // find editing data in all data by id
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].id === id) {
            // inject editing data to table state
            roles[i] = { id, name, slug, weight, keywords, negative };
          }
        }

        this.setState({
          roles, // new roles with edited item
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

      .catch(error => {
        // redirect to login if 401 (request, response)
        if (error.response.status === 401) {
          localStorage.removeItem('ph-admin-user-data');
          this.props.history.push('/login');

        } else {
          this.setState({
            modalLoading: false,
            editModalIsOpen: false,
            alertType: 'error',
            alertIsOpen: true,
            alertErrorText: `${error}`
          });
        }
      })
  }


  componentDidMount() {
    this.setState({ tableLoading: true });

    // getRoles request
    getRoles()
      .then(res => this.setState({ roles: res.data, tableLoading: false }))

      .catch(error => {
        // redirect to login if 401 (request, response)
        if (error.response.status === 401) {
          localStorage.removeItem('ph-admin-user-data');
          this.props.history.push('/login');

        } else {
          this.setState({
            modalLoading: false,
            alertType: 'error',
            alertIsOpen: true,
            alertErrorText: `${error}`
          });
        }
      })

    // close modal on Escape
    document.addEventListener('keyup', e => e.keyCode === 27 && this.closeModal());
  }
  componentWillUnmount() { document.removeEventListener('keyup', e => e.keyCode === 27) }


  render() {
    const {
      // table
      tableLoading, original, roles,

      // fields
      name, slug, weight, keywords, negative,

      // modals
      editModalIsOpen, modalLoading,

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
            <i className="ion-edit" onClick={this.editClick(original)} />
          </div>
        )
      }
    ];

    return (
      <div className="roles-page">
        { alertIsOpen && <Alerts type={alertType} original={original} errorText={alertErrorText} /> }

        <EditRoles
          // fields
          name={name}
          slug={slug}
          weight={weight}
          keywords={keywords}
          negative={negative}
          original={original}

          isOpen={editModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeModal}
          onChange={this.onChange}
          onSubmit={this.editSubmit}
        />

        <Table
          data={roles}
          manual={false}
          loading={tableLoading}
          columns={[...columns, ...controlsColumn]}
        />
      </div>
    )
  }
}

export default withHeaderTitle(Roles);
