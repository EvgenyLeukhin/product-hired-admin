import React from 'react';

import isEmpty from 'lodash/isEmpty';

import Table     from '../../components/Table';
import columns   from './columns';

import Alerts    from '../../components/Alerts';
import AddButton from '../../components/AddButton';

import AddPage    from './add';
import DeletePage from './delete';

import formatNumber from './../../utils/formatNumber';

import { withHeaderTitle } from '../../../components/Header/HeaderTitle';

// api methods
import getPages          from './api/getPages';
import getPagesCount     from './api/getPagesCount';
import addPage           from './api/addPage';
import deletePage        from './api/deletePage';


class PagesForAdvertising extends React.Component {
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Pages for advertising') }

  state = {
    // table
    pages: [], pagesCount: null, tableLoading: false, count: null,

    // alert
    alertIsOpen: false, alertType: '', alertErrorText: '',

    // delete
    deleteModalIsOpen: false, deleteModalLoading: false,

    // add
    addModalIsOpen: false, addModalLoading: false,

    // fields
    id: null, name: '', oldName: '', domain: '', step: null,
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  addClick = () => {
    this.setState({
      // reset fields
      id: null, name: '', slug: '', domain: '', step: null,

      // add modal
      addModalIsOpen: true, alertIsOpen: false,
    });
  }

  addSubmit = e => {
    e.preventDefault();

    this.setState({ addModalLoading: true, errorAlertIsOpen: false });
    const { name, domain, step, pages } = this.state;

    addPage(name, domain, step)   // order must be like inside addPage method
      .then(res => {

        const newData = [res.data].concat(pages);

        this.setState({
          addModalLoading: false,
          addModalIsOpen: false,
          alertType: 'add',
          alertIsOpen: true,
          pages: newData
        });

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

  deleteClick = original => () => {
    const { id, name } = original;
    this.setState({ id, name, deleteModalIsOpen: true, alertIsOpen: false });
  }

  deleteSubmit = () => {
    const dataWitoutDeleted = [];
    const { pages, id } = this.state;

    this.setState({ deleteModalLoading: true, errorAlertIsOpen: false });

    deletePage(id)
      // if delete ok
      .then(() => {
        for (let i = 0; i < pages.length; i++) {
          // skiping deleted item and forming new array without it
          if (pages[i].id !== id) {
            // push all data without deleted item to new array
            dataWitoutDeleted.push(pages[i]);
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
    //     deleteModalLoading: false,
    //     alertType: 'error',
    //     alertIsOpen: true,
    //     alertErrorText: `${name}, ${message}`
    //   });
    // }
  }

  componentWillReceiveProps() {
    // AFTER EDIT //
    const { afterEditData } = this.props.history.location.state || {};

    if(!isEmpty(afterEditData)) {
      // get current table-data from the state w\o editing change (when render only)
      const { pages } = this.state;

      // find editing data in all data by id
      for (let i = 0; i < pages.length; i++) {
        if (pages[i].id === afterEditData.id) {
          // inject editing data to table state
          pages[i] = {
            id:       afterEditData.id,
            name:     afterEditData.name,
            domain:   afterEditData.domain,
            step:     afterEditData.step,
          };
        }
      }

      // inject new array with edited data to table
      this.setState({ pages });
    }

    // AFTER DELETE //
    const { deletedId } = this.props.history.location.state || {};

    if(deletedId) {
      // get current table-data from the state w\o editing change (when render only)
      const { pages, pagesCount, count } = this.state;
      const dataWitoutDeleted = [];

      for (let i = 0; i < pages.length; i++) {
        // skiping deleted item and forming new array without it
        if (pages[i].id !== deletedId) {
          // push all data without deleted item to new array
          dataWitoutDeleted.push(pages[i]);
        }
      }

      this.setState({
        pages: dataWitoutDeleted,
        pagesCount: pagesCount - 1,
        count: count - 1,
      });
    }
  }

  render() {
    const {
      // table
      pages, pagesCount, count, tableLoading,

      // alerts
      alertIsOpen, alertType, alertErrorText,

      // delete
      deleteModalLoading, deleteModalIsOpen,

      // add
      addModalIsOpen, addModalLoading,

      // fields
      id, name, domain, step,
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
      <div className="pages-for-advertising-page">
        <div className="table-top">
          <p className="md-lg">
            Total records:&nbsp;<b>{count && formatNumber(this.state.count)}</b>
          </p>

          <AddButton
            text="page"
            loading={addModalLoading && deleteModalLoading}
            addClick={this.addClick}
          />
        </div>

        { alertIsOpen && <Alerts type={alertType} id={id} name={name} errorText={alertErrorText} /> }

        <AddPage
          // fields
          name={name} domain={domain} step={step}

          // modal
          isOpen={addModalIsOpen}
          modalLoading={addModalLoading}
          closeModal={this.closeAddModal}

          // actions
          onChange={this.onChange}
          onSubmit={this.addSubmit}
        />

        <DeletePage
          id={id} name={name}
          isOpen={deleteModalIsOpen}
          deleteSubmit={this.deleteSubmit}
          modalLoading={deleteModalLoading}
          closeModal={this.closeDeleteModal}
        />

        <Table
          data={pages}
          manual={true}
          pages={pagesCount}
          loading={tableLoading}
          columns={[...columns, ...controlsColumn]}
          onFetchData={state => {
            this.setState({ tableLoading: true });

            // count request
            getPagesCount(state)
              .then(res => {
                this.setState({
                  count: res.data.count,
                  pagesCount: Math.ceil(res.data.count / state.pageSize)
                })

                // data request
                getPages(state)
                  .then(res => {
                    console.log(res.data);
                    this.setState({ pages: res.data, tableLoading: false })
                  })
                  .catch(error => this.catchErrors(error));
              }).catch(error => this.catchErrors(error));
          }}
        />
      </div>
    )
  }
}

export default withHeaderTitle(PagesForAdvertising);
