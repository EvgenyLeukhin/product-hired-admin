import React from "react";
import ReactTable from "react-table";
import { Alert } from "reactstrap";
import axios from 'axios';

import Modal from '../modal/old_modal';

import API_URL from './../api/apiUrl';

import './styles.scss';

class ReactTableCustom extends React.Component {
  state = {
    data: [],
    count: null,
    loading: false,
    itemOriginal: null,
    modalType: '',
    modalIsOpen: false,
    modalLoader: false,
    alert: false
  }

  editClick = original => () => {
    this.setState({
      modalType: 'edit',
      itemOriginal: original
    });

    alert(`Edit TODO id:${original.id}`);
  }

  deleteClick = original => () => {
    this.setState({
      modalType: 'delete',
      modalIsOpen: true,
      itemOriginal: original
    });
  }

  deleteRequest = () => {
    const { dataPath } = this.props;
    const { itemOriginal: { id } } = this.state;

    const userData = JSON.parse(localStorage.getItem('ph-admin-user-data'));
    const token = userData && userData.id;


    // delete request
    axios.delete(
      `${API_URL}/${dataPath}/${id}`,
      {
        headers: { Authorization: token }
      })

      // start loader
      .then(this.setState({ modalLoader: true }))

      // if ok
      .then(res => {
        console.log(res);
        this.setState({ modalIsOpen: false, modalLoader: false })
      })

      // show alert and reload page with timeOut
      .then(() => {
        this.setState({ alert: true });

        setTimeout(() => {
          this.setState({ alert: false });
          window.location.reload();
        }, 2000);
      })

      // if not ok // TODO
      .catch(error => {
        console.log(error);
        alert('Something is wrong!');
      })
  }

  render() {
    const { columns, dataPath, order } = this.props;
    const {
      data,
      loading,
      count,
      itemOriginal,
      modalType,
      modalIsOpen,
      modalLoader,
      alert
    } = this.state;

    const idColumn = [
      {
        Header: 'Id',
        accessor: 'id',
        width: 60,
        style: { textAlign: 'right' },
        Cell: ({ original }) => <div>{original.id || '...'}</div>
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
            <i className="ion-edit"           onClick={this.editClick(original)} />
            <i className="ion-android-delete" onClick={this.deleteClick(original)} />
          </div>
        )
      }
    ];

    return (
      <div>
        <Modal
          type={modalType}
          itemOriginal={itemOriginal}
          modalLoader={modalLoader}
          isOpen={modalIsOpen}
          closeModal={() => this.setState({ modalIsOpen: false })}
          deleteRequest={this.deleteRequest}
        />

        {
          alert && itemOriginal && (
            <Alert color="danger">
              {`"${itemOriginal.id}`} - <b>{`${itemOriginal.name}" is deleted`}</b>
            </Alert>
          )
        }

        <ReactTable
          manual={true}
          pages={count}
          data={data}
          loading={loading}
          resizable={true}
          filterable={true}
          className="-striped -highlight"
          columns={[...idColumn, ...columns, ...controlsColumn]}
          onFetchData={state => {
            // use ReactTable own state to forming a request
            // it refresh always when we're doing any actions with this table
            // console.log(state);

            const { pageSize, page, sorted, filtered } = state;

            this.setState({ loading: true });


            const filter = {
              where: {},
              limit: pageSize,
              skip: page * pageSize,
              order: order // id DESC - by default
            };

            // inject values to filter object when we fill data to filter inputs
            filtered.forEach(i => {
              if (i.id === 'id') filter.where[i.id] = i.value
              else               filter.where[i.id] = { 'like': i.value + '%' }
            });

            // inject data to order when we click sorting
            sorted.forEach(i => {
              const desc = i.desc ? 'DESC' : 'ASC'
              filter.order = `${i.id} ${desc}`;
            });

            // get token
            const userData = JSON.parse(localStorage.getItem('ph-admin-user-data'));
            const token = userData && userData.id;

            // fetch only count
            axios.get(`${API_URL}//${dataPath}/count`, {
              // params for get count when we have filled filters
              params: { where: filter.where },
              headers: { Authorization: token },
            }

            ).then(res => {
              // save count to coponent state
              // res.data.count - all items inside response
              // count - we find pages-count to add to Table property pages
              this.setState({ count: Math.ceil(res.data.count / pageSize) });

            // fetch data only for 1 page
            }).then(
              axios.get(`${API_URL}/${dataPath}`, {
                params: { filter },
                headers: { Authorization: token }

              }).then(res => {
                this.setState({
                  // save data to component state
                  data: res.data,
                  loading: false
                });

                // TODO catch errors
              }).catch(error => { console.log(error) })
            )
          }}
        />
      </div>
    );
  }
}

export default ReactTableCustom;
