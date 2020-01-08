import React from 'react';

import './scss/edit.scss';

class EditModal extends React.Component {
  state = {
    id: null,
    name: null,
    domain: null,
    slug: null,
    weight: null,
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount() {
    const { itemOriginal } = this.props;
    this.setState({
      id: itemOriginal.id,
      name: itemOriginal.name,
      domain: itemOriginal.domain,
      slug: itemOriginal.slug,
      weight: itemOriginal.weight,
    });
  }

  render() {
    const { id, name, domain, slug, weight } = this.state;
    const { itemOriginal, wrapperClassname } = this.props;
    console.log(itemOriginal, wrapperClassname);

    return (
      <div>
        <div className="form__title">Edit <b>{`"${itemOriginal.id} - ${itemOriginal.name}"`}</b></div>

        <form action="">
          <div>
            <label htmlFor="edit-id">Id</label>
            <input
              id="edit-id"
              type="number"
              value={id}
              name="id"
              onChange={this.onChange}
            />
          </div>

          <div>
            <label htmlFor="edit-name">Name</label>
            <input
              id="edit-name"
              type="text"
              value={name}
              name="name"
              onChange={this.onChange}
            />
          </div>

          {
            wrapperClassname === 'companies-table' && (
              <>
                <div>
                  <label htmlFor="edit-domain">Domain</label>
                  <input
                    id="edit-domain"
                    type="url"
                    value={domain}
                    name="domain"
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <label htmlFor="edit-slug">Slug</label>
                  <input
                    id="edit-slug"
                    type="text"
                    value={slug}
                    name="slug"
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <label htmlFor="edit-weight">Weight</label>
                  <input
                    id="edit-weight"
                    type="text"
                    value={weight}
                    name="weight"
                    onChange={this.onChange}
                  />
                </div>
              </>
            )
          }
        </form>
      </div>
    )
  }
}

export default EditModal;
