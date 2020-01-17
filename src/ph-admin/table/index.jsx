import React from 'react';
import ReactTable from 'react-table';

import Modal from '../modal';
import Alerts from '../alerts';
import AddButton from './AddButton';

import getCount from '../api/getCount';
import getData from '../api/getData';
import editRequest from '../api/editRequest';
import deleteRequest from '../api/deleteRequest';
import customFiltering from '../table/customFiltering';

import './styles.scss';


class Table extends React.Component {
  // major state of application //
  state = {
    // table //
    data: [],
    count: null,
    loading: false,
    itemOriginal: null, // rowInfo, when clicked to delete or edit

    // modal //
    modalType: '',
    modalIsOpen: false,
    modalLoading: false,

    // alert //
    alertIsOpen: false,
    idValue: ''
  }

  deleteClick = original => () => {
    this.setState({
      modalType: 'delete',
      modalIsOpen: true,
      itemOriginal: original,
      alertIsOpen: false
    });
  }

  delete = () => {
    const dataWitoutDeleted = [];
    const { dataPath } = this.props;
    const { data, itemOriginal: { id } } = this.state;

    // start modal-loader
    this.setState({ modalLoading: true });

    deleteRequest(dataPath, id)
      // if delete ok
      .then(() => {
        for (let i = 0; i < data.length; i++) {
          // skiping deleted item and forming new array without it
          if (data[i].id !== id) {
            // inject editing data to table state
            dataWitoutDeleted.push(data[i]);
          }
        }
        this.setState({
          // set new data w\o deleted item
          data: dataWitoutDeleted,
          modalIsOpen: false,
          modalLoading: false
        })
      })

      // show alert and reload page with timeOut
      .then(() => {
        this.setState({ alertIsOpen: true });

        setTimeout(() => {
          this.setState({ alertIsOpen: false });
        }, 2000);
      })

      // if error
      .catch(error => {
        console.log(error);
        this.setState({ alertIsOpen: true, modalType: 'error' });
      })
  }

  editClick = original => () => {
    this.setState({
      modalType: 'edit',
      modalIsOpen: true,
      itemOriginal: original,
      alertIsOpen: false
    });
  }

  // state - state of modal (editing data when submit form)
  edit = (state, dataPath) => {
    editRequest(state, dataPath)
      .then(this.setState({ modalLoading: true }))

      .then(() => {
        this.setState({
          modalLoading: false,
          modalIsOpen: false,
          alertIsOpen: true
        });

        // get current table-data from the state w\o editing change (when render only)
        const { data } = this.state;

        // find editing data in all data by id
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === state.id) {
            // inject editing data to table state
            data[i] = state;
          }
        }

        // change table state with editing data
        this.setState({ data });

        // close alert after 2 sec
        setTimeout(() => {
          this.setState({ alertIsOpen: false });
        }, 2000);
    })
    .catch(error => console.log(error)) // TODO
  }

  addClick = () => {
    this.setState({
      modalType: 'add',
      modalIsOpen: true,
    });
  }

  componentDidMount() {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 27) this.setState({ modalIsOpen: false });
    });
  }

  render() {
    const idColumn = [
      {
        Header: 'Id',
        accessor: 'id',
        width: 60,
        style: { textAlign: 'right' },
        Cell: ({ original }) => <div>{original.id || '...'}</div>,
        Filter: ({ filter, onChange }) => customFiltering(filter, onChange)
      }
    ];

    const controlsColumn = [
      {
        Header: '',
        width: 65,
        sortable: false,
        filterable: false,
        Cell: ({ original }) => (
          <div className="rt-custom__controls">
            <i className="ion-android-delete" onClick={this.deleteClick(original)} />
            <i className="ion-edit" onClick={this.editClick(original)}/>
          </div>
        )
      }
    ];

    const { columns, dataPath, startOrder, buttonText } = this.props;
    const { loading, count, data, modalIsOpen, itemOriginal, modalType, modalLoading, alertIsOpen } = this.state;

    return (
      <div className={`${dataPath}-table`}>
        { alertIsOpen && <Alerts type={modalType} itemOriginal={itemOriginal} /> }

        <AddButton
          addClick={this.addClick}
          text={buttonText}
          loading={loading}
        />

        <Modal
          type={modalType}
          modalIsOpen={modalIsOpen}
          modalLoading={modalLoading}
          itemOriginal={itemOriginal}
          dataPath={dataPath}
          editRequest={this.edit}
          deleteRequest={this.delete}
          closeModal={() => this.setState({ modalIsOpen: false })}
        />

        <ReactTable
          data={data}
          manual={true}
          pages={count}
          resizable={true}
          filterable={true}
          loading={loading}
          className="-striped -highlight"
          columns={[...idColumn, ...columns, ...controlsColumn]}
          dataPath={dataPath}
          startOrder={startOrder}
          onFetchData={state => {
            // use ReactTable own state to forming a request
            // it refresh always when we're doing any actions with this table
            this.setState({ loading: true });

            // axios -> getCount
            getCount(state, dataPath)
              .then(count => this.setState({ count: Math.ceil(count / state.pageSize) }))

              // axios -> getData
              .then(() => getData(state, dataPath, startOrder))
              .then(data => {
                this.setState({ data, loading: false })
              })
              .catch(error => console.log(error)) // TODO
          }}
        />
      </div>
    );
  }
}

export default Table;
