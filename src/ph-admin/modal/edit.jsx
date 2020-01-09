import React from 'react';

import { Input, Button } from "reactstrap";

import './scss/edit.scss';

class EditModal extends React.Component {
  state = {
    id: null,
    name: null,
    domain: null,
    slug: null,
    weight: null,
    price: null,
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = () => {
    alert('Submit form');
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
    });
  }

  render() {
    const { id, name, domain, slug, weight, price } = this.state;
    const { itemOriginal, wrapperClassname, closeModal } = this.props;
    console.log(itemOriginal.price);

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
            wrapperClassname === 'plans-table' && (
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

          <footer className="form__buttons">
            <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
            <Button outline color="primary" type="submit">Save</Button>
          </footer>
        </form>
      </>
    )
  }
}

export default EditModal;
