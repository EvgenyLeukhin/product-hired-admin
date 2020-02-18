import React from 'react';

import Spinner from '../../../components/Spinner';

const Companies = props => {
  const {
    // text fields
    name, slug, domain, weight, onChange,

    // logo
    logo, logoLoading, onUploadLogo, fileInputLogo,

    // cover
    cover, coverLoading, onUploadCover, fileInputCover,
  } = props;

  return (
    <fieldset>
      <div className="form-group row">
        <div className="col-md-6">
          <label htmlFor="edit-name">Name</label>

          <input
            required
            autoComplete="off"
            name="name"
            value={name}
            id="edit-name"
            onChange={onChange}
            type="text"
            className="form-control"
          />
        </div>


        <div className="col-md-6">
          <label htmlFor="edit-domain">Domain</label>

          <input
            required
            autoComplete="off"
            name="domain"
            value={domain}
            id="edit-domain"
            onChange={onChange}
            type="text"
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="edit-slug">Slug</label>

          <input
            required
            autoComplete="off"
            name="slug"
            value={slug}
            id="edit-slug"
            onChange={onChange}
            type="text"
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="edit-weight">Weight</label>

          <input
            required
            autoComplete="off"
            name="weight"
            value={weight}
            id="edit-weight"
            onChange={onChange}
            type="number"
            className="form-control"
          />
        </div>

        <div className="col-md-6  edit-logo">
          <label htmlFor="edit-logo">Logo</label>
          {
            logoLoading ? <Spinner /> : (
              logo ? <img className="logo" src={logo} alt="logo" /> : <div className="no-logo">No logo</div>
            )
          }

          <input type="file" ref={fileInputLogo} onChange={onUploadLogo} />
        </div>


        <div className="col-md-6  edit-cover">
          <label htmlFor="edit-cover">Cover</label>
          {
            coverLoading ? <Spinner /> : (
              cover ? <img className="cover" src={cover} alt="cover" /> : <div className="no-cover">No cover</div>
            )
          }

          <input type="file" ref={fileInputCover} onChange={onUploadCover} />
        </div>
      </div>
    </fieldset>
  );
}

export default Companies;
