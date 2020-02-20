import React from "react";

import Table from '../../components/Table';
import Alerts from '../../components/Alerts';
import EditSkills from './edit';
import DeleteSkills from './delete';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

import getSkills from './api/getSkills';
import editSkill from './api/editSkill';
import deleteSkill from './api/deleteSkill';

import columns from './columns';



class Skills extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Skills') }

  state = {
    // table
    skills: [], // array of objects
    tableLoading: false,
    original: {},

    // alert
    alertIsOpen: false,
    alertType: '',
    alertErrorText: '',

    // modals
    addModalIsOpen: false,
    editModalIsOpen: false,
    deleteModalIsOpen: false,
    modalLoading: false,

    // fields
    id: null,
    name: '',
    slug: '',
    markers: '',
    weight: null,
  }

  // addClick
  // addSubmit

  // get values from original react-table (original.id, original.name, original.price)
  editClick = original => () => {
    this.setState({
      original,
      editModalIsOpen: true,
      id: original.id,
      name: original.name,
      slug: original.slug,
      markers: original.markers,
      weight: original.weight,
      alertIsOpen: false,
    });
  }

  editSubmit = e => {
    e.preventDefault();

    this.setState({ modalLoading: true });

    // get edit values
    const { id, name, slug, markers, weight } = this.state;
    editSkill(id, name, slug, markers, weight)

      .then(() => {
        // get current table-data from the state w\o editing change (when render only)
        const { skills } = this.state;

        // find editing data in all data by id
        for (let i = 0; i < skills.length; i++) {
          if (skills[i].id === id) {
            // inject editing data to table state
            skills[i] = { id, name, slug, markers, weight };
          }
        }

        this.setState({
          skills, // new roles with edited item
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

  deleteClick = original => () => {
    this.setState({
      original,
      deleteModalIsOpen: true
    });
  }

  deleteSubmit = () => {
    alert(123);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  closeEditModal   = () => !this.state.modalLoading && this.setState({ editModalIsOpen: false });
  closeDeleteModal = () => !this.state.modalLoading && this.setState({ deleteModalIsOpen: false });




  componentDidMount() {
    this.setState({ tableLoading: true });

    // getRoles request
    getSkills()
      .then(res => this.setState({ skills: res.data, tableLoading: false }))

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
    document.addEventListener('keyup', e => e.keyCode === 27 && this.closeEditModal());
  }
  componentWillUnmount() { document.removeEventListener('keyup', e => e.keyCode === 27) }


  render() {
    const {
      // table
      tableLoading, original, skills,

      // fields
      name, slug, markers, weight,

      // modals
      editModalIsOpen, modalLoading, deleteModalIsOpen,

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
            <i className="ion-android-delete" onClick={this.deleteClick(original)} />
            <i className="ion-edit" onClick={this.editClick(original)} />
          </div>
        )
      }
    ];

    return (
      <div className="roles-page">
        { alertIsOpen && <Alerts type={alertType} original={original} errorText={alertErrorText} /> }

        <EditSkills
          // fields
          name={name}
          slug={slug}
          markers={markers}
          weight={weight}
          original={original}

          isOpen={editModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeEditModal}
          onChange={this.onChange}
          onSubmit={this.editSubmit}
        />

        <DeleteSkills
          isOpen={deleteModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeDeleteModal}
          original={original}
          deleteSubmit={this.deleteSubmit}
        />

        <Table
          data={skills}
          manual={false}
          loading={tableLoading}
          columns={[...columns, ...controlsColumn]}
        />
      </div>
    )
  }
}

export default withHeaderTitle(Skills);
