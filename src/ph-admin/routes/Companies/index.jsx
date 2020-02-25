import React from "react";
import slugify from 'slugify';

import Table         from '../../components/Table';
import Alerts        from '../../components/Alerts';
import AddButton     from '../../components/AddButton';

import AddCompany    from './add';
import EditCompany   from './edit';
import DeleteCompany from './delete';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';
import { API_URL, subUrl } from '../../api/apiUrl';

// api
import getCompanies      from './api/getCompanies';
import getCompaniesCount from './api/getCompaniesCount';
import addCompany        from './api/addCompany';
import editCompany       from './api/editCompany';
import deleteCompany     from './api/deleteCompany';
import uploadLogo        from './api/uploadLogo';
import uploadCover       from './api/uploadCover';

import columns from './columns';


class Companies extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Companies') }

  fileInputLogo  = React.createRef();
  fileInputCover = React.createRef();

  state = {
    // table
    companies: [], // array of objects
    companiesCount: null,
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
    domain: '',
    weight: null,
    logo: '', logoLoading: false,
    cover: '', coverLoading: false,
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

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

  onUploadLogo = e => {
    e.preventDefault();
    this.setState({ logoLoading: true });

    // create a new form data
    const formData = new FormData();

    // get image from the browser memory
    const uploadLogoFile = this.fileInputLogo.current.files[0];

    // append this file to form data
    formData.append('file', uploadLogoFile);

    // uploadLogoRequest
    uploadLogo(formData)
      .then(res => {
        this.setState({
          logo: `${API_URL}/${subUrl}/containers/logo/download/${res.data.name}`,
          logoLoading: false
        })
      })
      .catch(error => this.catchErrors(error));
  }

  onUploadCover = e => {
    e.preventDefault();
    this.setState({ coverLoading: true });
    const formData = new FormData();
    const uploadCoverFile = this.fileInputCover.current.files[0];
    formData.append('file', uploadCoverFile);

    uploadCover(formData)
      .then(res => {
        this.setState({
          cover: `${API_URL}/${subUrl}/containers/cover/download/${res.data.name}`,
          coverLoading: false
        })
      })
      .catch(error => this.catchErrors(error));
  }

  addClick = () => {
    this.setState({
      addModalIsOpen: true,
      alertIsOpen: false,
      name: '', domain: '', slug: '', weight: null, logo: '', cover: '',
      logoLoading: false, coverLoading: false
    });
  }

  addSubmit = e => {
    e.preventDefault();

    this.setState({ modalLoading: true });
    const { name, domain, slug, weight, logo, cover, companies } = this.state;

    addCompany(name, domain, slug, weight, logo, cover)   // order must be like inside addSkill method
      .then(res => {

        const newData = [res.data].concat(companies);

        this.setState({
          modalLoading: false,
          addModalIsOpen: false,
          alertType: 'add',
          alertIsOpen: true,
          companies: newData
        });

        // close alert after 2 sec
        setTimeout(() => {
          this.setState({ alertIsOpen: false });
        }, 2000);
      })

      .catch(error => this.catchErrors(error));
  }

  editClick = original => () => {
    this.setState({
      original,
      alertIsOpen: false,
      editModalIsOpen: true,
      logoLoading: false, coverLoading: false,

      // get values from original react-table (original.id, original.name, original.price)
      id: original.id,
      name: original.name,
      domain: original.domain,
      slug: original.slug,
      weight: original.weight,
      logo: original.logo,
      cover: original.cover,
    });
  }

  editSubmit = e => {
    e.preventDefault();

    this.setState({ modalLoading: true });

    // get edit values
    const { id, name, domain, slug, weight, logo, cover } = this.state;
    editCompany(id, name, domain, slug, weight, logo, cover)

      .then(() => {
        // get current table-data from the state w\o editing change (when render only)
        const { companies } = this.state;

        // find editing data in all data by id
        for (let i = 0; i < companies.length; i++) {
          if (companies[i].id === id) {
            // inject editing data to table state
            companies[i] = { id, name, domain, slug, weight, logo, cover };
          }
        }

        this.setState({
          companies, // new roles with edited item
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

  deleteClick = original => () => {
    this.setState({ original, deleteModalIsOpen: true });
  }

  deleteSubmit = () => {
    const dataWitoutDeleted = [];
    const { companies, original: { id } } = this.state;

    this.setState({ modalLoading: true });

    deleteCompany(id)
      // if delete ok
      .then(() => {
        for (let i = 0; i < companies.length; i++) {
          // skiping deleted item and forming new array without it
          if (companies[i].id !== id) {
            // push all data without deleted item to new array
            dataWitoutDeleted.push(companies[i]);
          }
        }
        this.setState({
          // set new data w\o deleted item
          companies: dataWitoutDeleted,
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

  deleteLogo  = () => this.setState({ logo: '' });

  deleteCover = () => this.setState({ cover: '' });

  closeAddModal    = () => !this.state.modalLoading && this.setState({ addModalIsOpen:    false });
  closeEditModal   = () => !this.state.modalLoading && this.setState({ editModalIsOpen:   false });
  closeDeleteModal = () => !this.state.modalLoading && this.setState({ deleteModalIsOpen: false });

  generateSlug = () => {
    const { name } = this.state;
    this.setState({
      slug: slugify(name, { replacement: '-', lower: true })
    });
  }

  componentDidMount() {
    // close modal on Escape
    document.addEventListener('keyup', e => e.keyCode === 27 && this.closeEditModal());
  }

  componentWillUnmount() { document.removeEventListener('keyup', e => e.keyCode === 27) }


  render() {
    const {
      // table
      tableLoading, original, companies, companiesCount,

      // fields
      name, domain, slug, weight, logo, cover,

      // logo & cover
      logoLoading, coverLoading,

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
            <i className="ion-android-delete" onClick={this.deleteClick(original)} />
            <i className="ion-edit" onClick={this.editClick(original)} />
          </div>
        )
      }
    ];

    return (
      <div className="companies-page">
        { alertIsOpen && <Alerts type={alertType} original={original} errorText={alertErrorText} /> }


        <AddButton
          text="company"
          loading={modalLoading}
          addClick={this.addClick}
        />


        <DeleteCompany
          isOpen={deleteModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeDeleteModal}
          original={original}
          deleteSubmit={this.deleteSubmit}
        />


        <AddCompany
          // fields
          name={name} domain={domain} slug={slug} weight={weight} logo={logo} cover={cover}

          // logo
          logo={logo}
          logoLoading={logoLoading}
          fileInputLogo={this.fileInputLogo} // input type="file" logo-refernce
          onUploadLogo={this.onUploadLogo}

          // cover
          cover={cover}
          coverLoading={coverLoading}
          fileInputCover={this.fileInputCover} // input type="file" cover-refernce
          onUploadCover={this.onUploadCover}

          // modal
          isOpen={addModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeAddModal}

          // actions
          onChange={this.onChange}
          onSubmit={this.addSubmit}
          deleteLogo={this.deleteLogo}
          deleteCover={this.deleteCover}
          generateSlug={this.generateSlug}
        />


        <EditCompany
          // fields
          original={original}
          name={name} domain={domain} slug={slug} weight={weight}

          // logo
          logo={logo}
          logoLoading={logoLoading}
          fileInputLogo={this.fileInputLogo} // input type="file" logo-refernce
          onUploadLogo={this.onUploadLogo}

          // cover
          cover={cover}
          coverLoading={coverLoading}
          fileInputCover={this.fileInputCover} // input type="file" cover-refernce
          onUploadCover={this.onUploadCover}

          // modal
          isOpen={editModalIsOpen}
          modalLoading={modalLoading}
          closeModal={this.closeEditModal}

          // actions
          onChange={this.onChange}
          onSubmit={this.editSubmit}
          deleteClick={this.deleteClick(original)}
          deleteLogo={this.deleteLogo}
          deleteCover={this.deleteCover}
          generateSlug={this.generateSlug}
        />


        <Table
          manual={true}
          data={companies}
          pages={companiesCount}
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
                  .catch(error => this.catchErrors(error));
              }).catch(error => this.catchErrors(error));
          }}
        />
      </div>
    );
  }
}

export default withHeaderTitle(Companies);
