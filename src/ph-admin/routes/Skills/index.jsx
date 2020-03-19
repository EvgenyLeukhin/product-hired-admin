import React from "react";
import slugify from 'slugify';

import Table from '../../components/Table';
import Alerts from '../../components/Alerts';
import AddButton from '../../components/AddButton';
import AddSkill from './add';
import EditSkill from './edit';
import DeleteSkill from './delete';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

import getSkills from './api/getSkills';
import getSkillsCount from './api/getSkillsCount';
import addSkill from './api/addSkill';
import editSkill from './api/editSkill';
import deleteSkill from './api/deleteSkill';

import columns from './columns';


class Skills extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Skills') }

  state = {
    // table
    skills: [], // array of objects
    skillsCount: null,
    tableLoading: false,
    original: {}, count: null,

    // alert
    alertIsOpen: false,
    alertType: '',
    alertErrorText: '',
    errorAlertIsOpen: false,

    // modals
    addModalIsOpen: false,
    editModalIsOpen: false,
    deleteModalIsOpen: false,
    modalLoading: false,

    // fields
    id: null,
    name: '',
    slug: '',
    weight: null,
    markers: '',
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  catchErrors = error => {
    // redirect to login if 401 (request, response)
    if (error.response.status === 401) {
      localStorage.removeItem('ph-admin-user-data');
      this.props.history.push('/login');

    } else {
      this.setState({
        errorAlertIsOpen: true,
        modalLoading: false,
        // addModalIsOpen: false, editModalIsOpen: false, deleteModalIsOpen: false, // close modals
        alertType: 'error',
        alertIsOpen: true,
        alertErrorText: `${error}, ${error.response.data.error.sqlMessage}`
      });
    }
  }

  addClick = () => {
    this.setState({
      addModalIsOpen: true,
      alertIsOpen: false,
      name: '', slug: '', weight: null, markers: '' // reset fields
    });
  }

  addSubmit = e => {
    e.preventDefault();

    this.setState({ modalLoading: true, errorAlertIsOpen: false });
    const { name, slug, weight, markers, skills } = this.state;

    addSkill(name, slug, weight, markers)   // order must be like inside addSkill method
      .then(res => {

        const newData = [res.data].concat(skills);

        this.setState({
          modalLoading: false,
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

  editClick = original => e => {
    e.stopPropagation();

    this.setState({
      original,
      alertIsOpen: false,
      editModalIsOpen: true,

      // get values from original react-table (original.id, original.name, original.price)
      id: original.id,
      name: original.name,
      slug: original.slug,
      markers: original.markers,
      weight: original.weight,
    });
  }

  editSubmit = e => {
    e.preventDefault();

    this.setState({ modalLoading: true, errorAlertIsOpen: false });

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

      .catch(error => this.catchErrors(error));
  }

  deleteClick = original => e => {
    e.stopPropagation();
    this.setState({
      original,
      deleteModalIsOpen: true,
      alertIsOpen: false,
    });
  }

  deleteSubmit = () => {
    const dataWitoutDeleted = [];
    const { skills, original: { id } } = this.state;

    this.setState({ modalLoading: true, errorAlertIsOpen: false });

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
          editModalIsOpen: false,
          deleteModalIsOpen: false,
          modalLoading: false,

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

  closeAddModal    = () => !this.state.modalLoading && this.setState({ addModalIsOpen:    false });
  closeEditModal   = () => !this.state.modalLoading && this.setState({ editModalIsOpen:   false });
  closeDeleteModal = () => !this.state.modalLoading && this.setState({ deleteModalIsOpen: false });
  closeErrorAlert  = () => this.setState({ errorAlertIsOpen: false });

  generateSlug = () => {
    const { name } = this.state;
    this.setState({
      slug: slugify(name, { replacement: '-', lower: true })
    });
  }

  componentDidMount() {
    // this.setState({ tableLoading: true });

    // getRoles request
    // getSkills()
      // .then(res => this.setState({ skills: res.data, tableLoading: false }))
      // .catch(error => this.catchErrors(error));

    // close modal on Escape
    document.addEventListener('keyup', e => e.keyCode === 27 && this.closeEditModal());
  }
  componentWillUnmount() { document.removeEventListener('keyup', e => e.keyCode === 27) }


  render() {
    const {
      // table
      tableLoading, original, skills, skillsCount,

      // fields
      name, slug, weight, markers,

      // modals
      addModalIsOpen, editModalIsOpen, modalLoading, deleteModalIsOpen,

      // alerts
      alertIsOpen, alertType, alertErrorText, errorAlertIsOpen
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

    // thousand separator
    function formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
      <div className="roles-page">
        <p className="md-lg">
          Total records:&nbsp;<b>{this.state.count && formatNumber(this.state.count)}</b>
        </p>
        {
          alertIsOpen && (
            <Alerts
              type={alertType}
              original={original}
              errorText={alertErrorText}
              errorAlertIsOpen={errorAlertIsOpen}
              closeErrorAlert={this.closeErrorAlert}
            />
          )
        }

        <AddButton
          text="skill"
          loading={modalLoading}
          addClick={this.addClick}
        />

        <AddSkill
          // fields
          name={name} slug={slug} weight={weight} markers={markers}

          isOpen={addModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeAddModal}
          onChange={this.onChange}
          onSubmit={this.addSubmit}
          generateSlug={this.generateSlug}
        />

        <EditSkill
          // fields
          original={original}
          name={name} slug={slug} weight={weight} markers={markers}

          isOpen={editModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeEditModal}
          onChange={this.onChange}
          onSubmit={this.editSubmit}
          deleteClick={this.deleteClick(original)}
          generateSlug={this.generateSlug}
        />

        <DeleteSkill
          isOpen={deleteModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeDeleteModal}
          original={original}
          deleteSubmit={this.deleteSubmit}
        />

        <Table
          manual={true}
          pages={skillsCount}
          data={skills}
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
            getSkillsCount(state)
              .then(res => {
                // console.log(res.data); // TODO Plan null doesn't work
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
