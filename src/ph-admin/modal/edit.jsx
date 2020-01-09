import React from 'react';

import { Input, Button } from "reactstrap";
import Spinner from '../../components/Spinner';

import './scss/edit.scss';

class EditModal extends React.Component {
  state = {
    id: null,
    name: null,
    domain: null,
    slug: null,
    weight: null,
    price: null,
    markers: null,
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { state } = this;
    const { editRequest, dataPath } = this.props;
    editRequest(state, dataPath);
  }

  componentDidMount() {
    const { itemOriginal } = this.props;
    this.setState({
      id: itemOriginal.id,
      name: itemOriginal.name,
      domain: itemOriginal.domain,
      slug: itemOriginal.slug,
      weight: itemOriginal.weight,
      price: itemOriginal.price,
      markers: itemOriginal.markers,
    });
  }

  render() {
    const { id, name, domain, slug, weight, price, markers } = this.state;
    const { dataPath, itemOriginal, closeModal, modalLoading } = this.props;

    return (
      <>
        <form action="" onSubmit={this.onSubmit}>
          <header className="form__title">Edit <b>{`"${itemOriginal.id} - ${itemOriginal.name}"`}</b></header>

          <div>
            <label htmlFor="edit-id">Id</label>
            <Input
              id="edit-id"
              type="number"
              value={id}
              name="id"
              disabled
            />
          </div>

          <div>
            <label htmlFor="edit-name">Name</label>
            <Input
              id="edit-name"
              type="text"
              value={name}
              name="name"
              onChange={this.onChange}
            />
          </div>

          {/* {
            wrapperClassname === 'companies-table' && (
              <>
                <div>
                  <label htmlFor="edit-domain">Domain</label>
                  <Input
                    id="edit-domain"
                    type="url"
                    value={domain}
                    name="domain"
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <label htmlFor="edit-slug">Slug</label>
                  <Input
                    id="edit-slug"
                    type="text"
                    value={slug}
                    name="slug"
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <label htmlFor="edit-weight">Weight</label>
                  <Input
                    id="edit-weight"
                    type="text"
                    value={weight}
                    name="weight"
                    onChange={this.onChange}
                  />
                </div>
              </>
            )
          } */}

          {
            dataPath === 'skills' && (
              <>
                <div>
                  <label htmlFor="edit-weight">Weight</label>
                  <Input
                    id="edit-weight"
                    disabled
                    type="number"
                    value={weight}
                    name="weight"
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <label htmlFor="edit-slug">Slug</label>
                  <Input
                    id="edit-slug"
                    type="text"
                    value={slug}
                    name="slug"
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <label htmlFor="edit-aliases">Aliases</label>
                  <Input
                    id="edit-aliases"
                    type="text"
                    value={markers}
                    name="aliases"
                    onChange={this.onChange}
                  />
                </div>
              </>
            )
          }

          {
            dataPath === 'vacancy_roles' && (
              <>
                <div>
                  <label htmlFor="edit-slug">Slug</label>
                  <Input
                    id="edit-slug"
                    type="text"
                    value={slug}
                    name="slug"
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <label htmlFor="edit-weight">Weight</label>
                  <Input
                    id="edit-weight"
                    type="number"
                    value={weight}
                    name="weight"
                    onChange={this.onChange}
                  />
                </div>
              </>
            )
          }

          {
            dataPath === 'plans' && (
              <>
                <div>
                  <label htmlFor="edit-price">Price</label>
                  <Input
                    id="edit-price"
                    type="number"
                    value={price}
                    name="price"
                    onChange={this.onChange}
                  />
                </div>
              </>
            )
          }

          {
            <footer className="form__buttons">
              {
                modalLoading ? <Spinner /> : (
                  <>
                    <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
                    <Button outline color="primary" type="submit">Save</Button>
                  </>
                )
              }
            </footer>
          }
        </form>
      </>
    )
  }
}

export default EditModal;
