import React from 'react';
import ReactTable from 'react-table';
// import { Input } from 'debounce-input-decorator';

import Modal from '../modal';
import Alerts from '../alerts';

import getCount from '../api/getCount';
import getData from '../api/getData';
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
    const { dataPath } = this.props;
    const { itemOriginal: { id } } = this.state;

    // start modal-loader
    this.setState({ modalLoading: true });

    deleteRequest(dataPath, id)
      // if delete ok
      .then(res => {
        console.log(res);
        this.setState({ modalIsOpen: false, modalLoading: false })
      })

      // show alert and reload page with timeOut
      .then(() => {
        this.setState({ alertIsOpen: true });

        setTimeout(() => {
          this.setState({ alertIsOpen: false });
          window.location.reload();
        }, 2000);
      })

      // if error
      .catch(error => {
        console.log(error);
        this.setState({ alertIsOpen: true, modalType: 'error' });
      })
  }

  editClick = original => () => {
    // TODO
    this.setState({
      modalType: 'edit',
      modalIsOpen: true,
      itemOriginal: original,
      alertIsOpen: false
    });
  }

  addClick = original => () => {
    // TODO
    this.setState({
      modalType: 'add',
      modalIsOpen: true,
      itemOriginal: original
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
            <i className="ion-edit" onClick={this.editClick(original)} />
          </div>
        )
      }
    ];

    const { wrapperClassname, columns, dataPath, startOrder } = this.props;
    const { loading, count, data, modalIsOpen, itemOriginal, modalType, modalLoading, alertIsOpen } = this.state;

    return (
      <div className={`${wrapperClassname}`}>
        { alertIsOpen && <Alerts type={modalType} itemOriginal={itemOriginal} /> }

        <Modal
          type={modalType}
          modalIsOpen={modalIsOpen}
          modalLoading={modalLoading}
          itemOriginal={itemOriginal}
          deleteRequest={this.delete}
          wrapperClassname={wrapperClassname}
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
              .then(data => this.setState({ data, loading: false }))
          }}
        />
      </div>
    );
  }
}

export default Table;
