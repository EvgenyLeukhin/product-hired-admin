import React from 'react';
import slugify from 'slugify';

import isEmpty from 'lodash/isEmpty';

import Table     from '../../components/Table';
import columns   from './columns';

import Alerts    from '../../components/Alerts';
import AddButton from '../../components/AddButton';

import AddCompany    from './add';
import DeleteCompany from './delete';

import formatNumber from './../../utils/formatNumber';

import { API_URL, subUrl } from '../../api/apiUrl';
import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

import getCompanies      from './api/getCompanies';
import getCompaniesCount from './api/getCompaniesCount';
import addCompany        from './api/addCompany';
import deleteSkill       from './api/deleteCompany';
import uploadLogo        from './api/uploadLogo';
import uploadCover       from './api/uploadCover';


class Companies extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Companies') }

  fileInputLogo  = React.createRef();
  fileInputCover = React.createRef();

  state = {
    // table
    companies: [], companiesCount: null, tableLoading: false, count: null,

    // alert
    alertIsOpen: false, alertType: '', alertErrorText: '',

    // delete
    deleteModalIsOpen: false, deleteModalLoading: false,

    // add
    addModalIsOpen: false, addModalLoading: false,

    // fields
    id: null, name: '', oldName: '', slug: '', domain: '', weight: null, logo: '', cover: '',
    logoLoading: false, coverLoading: false,
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  addClick = () => {
    this.setState({
      // reset fields
      id: null, name: '', slug: '', domain: '', weight: null,
      logo: '', logoLoading: false, cover: '', coverLoading: false,

      // add modal
      addModalIsOpen: true, alertIsOpen: false,
    });
  }

  addSubmit = e => {
    e.preventDefault();

    this.setState({ addModalLoading: true, errorAlertIsOpen: false });
    const { name, domain, slug, weight, logo, cover, companies } = this.state;

    addCompany(name, domain, slug, weight, logo, cover)   // order must be like inside addSkill method
      .then(res => {

        const newData = [res.data].concat(companies);

        this.setState({
          addModalLoading: false,
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

  closeAddModal = () => {
    const { addModalLoading } = this.state
    !addModalLoading && this.setState({ addModalIsOpen: false });
  }

  closeDeleteModal = () => {
    const { deleteModalLoading } = this.state
    !deleteModalLoading && this.setState({ deleteModalIsOpen: false });
  }

  closeErrorAlert  = () => this.setState({ errorAlertIsOpen: false });

  deleteClick = original => () => {
    const { id, name } = original;
    this.setState({ id, name, deleteModalIsOpen: true, alertIsOpen: false });
  }

  deleteSubmit = () => {
    const dataWitoutDeleted = [];
    const { companies, id } = this.state;

    this.setState({ deleteModalLoading: true, errorAlertIsOpen: false });

    deleteSkill(id)
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

  generateSlug = () => {
    const { name } = this.state;
    this.setState({
      slug: slugify(name, { replacement: '-', lower: true })
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
        addModalLoading: false,
        deleteModalLoading: false,
        alertType: 'error',
        alertIsOpen: true,
        alertErrorText: `${name}, ${message}`
      });
    }
  }

  componentWillReceiveProps() {
    // AFTER EDIT //
    const { afterEditData } = this.props.history.location.state || {};

    if(!isEmpty(afterEditData)) {
      // get current table-data from the state w\o editing change (when render only)
      const { companies } = this.state;

      // find editing data in all data by id
      for (let i = 0; i < companies.length; i++) {
        if (companies[i].id === afterEditData.id) {
          // inject editing data to table state
          companies[i] = {
            id:       afterEditData.id,
            name:     afterEditData.name,
            domain:     afterEditData.domain,
            slug:   afterEditData.slug,
            logo:  afterEditData.logo,
            cover:  afterEditData.cover,
          };
        }
      }

      // inject new array with edited data to table
      this.setState({ companies });
    }

    // AFTER DELETE //
    const { deletedId } = this.props.history.location.state || {};

    if(deletedId) {
      // get current table-data from the state w\o editing change (when render only)
      const { companies, companiesCount, count } = this.state;
      const dataWitoutDeleted = [];

      for (let i = 0; i < companies.length; i++) {
        // skiping deleted item and forming new array without it
        if (companies[i].id !== deletedId) {
          // push all data without deleted item to new array
          dataWitoutDeleted.push(companies[i]);
        }
      }
      this.setState({
        companies: dataWitoutDeleted,
        companiesCount: companiesCount - 1,
        count: count - 1,
      });
    }
  }

  render() {
    const {
      // table
      companies, companiesCount, count, tableLoading,

      // alerts
      alertIsOpen, alertType, alertErrorText,

      // delete
      deleteModalLoading, deleteModalIsOpen,

      // add
      addModalIsOpen, addModalLoading,

      // logo & cover
      logoLoading, coverLoading,

      // fields
      id, name, slug, domain, weight, logo, cover,
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
      <div className="companies-page">
        <p className="md-lg">
          Total records:&nbsp;<b>{count && formatNumber(this.state.count)}</b>
        </p>

        { alertIsOpen && <Alerts type={alertType} id={id} name={name} errorText={alertErrorText} /> }

        <AddButton
          text="company"
          loading={addModalLoading && deleteModalLoading}
          addClick={this.addClick}
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
          modalLoading={addModalLoading}
          closeModal={this.closeAddModal}

          // actions
          onChange={this.onChange}
          onSubmit={this.addSubmit}
          deleteLogo={this.deleteLogo}
          deleteCover={this.deleteCover}
          generateSlug={this.generateSlug}
        />

        <DeleteCompany
          id={id} name={name}
          isOpen={deleteModalIsOpen}
          deleteSubmit={this.deleteSubmit}
          modalLoading={deleteModalLoading}
          closeModal={this.closeDeleteModal}
        />

        <Table
          data={companies}
          manual={true}
          pages={companiesCount}
          loading={tableLoading}
          columns={[...columns, ...controlsColumn]}
          onFetchData={state => {
            this.setState({ tableLoading: true });

            // count request
            getCompaniesCount(state)
              .then(res => {
                this.setState({
                  count: res.data.count,
                  companiesCount: Math.ceil(res.data.count / state.pageSize)
                })

                // data request
                getCompanies(state)
                  .then(res => this.setState({ companies: res.data, tableLoading: false }))
                  .catch(error => this.catchErrors(error));
              }).catch(error => this.catchErrors(error));
          }}
        />
      </div>
    )
  }
}

export default withHeaderTitle(Companies);
