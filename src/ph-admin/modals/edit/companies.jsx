import React from 'react';

import Spinner from '../../../components/Spinner';

const Companies = props => {
  const {
    name,
    slug,
    domain,
    weight,
    onChange,

    // logo
    logo, logoLoading, onUploadLogo, fileInputLogo,

    // cover
    cover, coverLoading, onUploadCover, fileInputCover,

  } = props;

  return (
    <fieldset>
      <div className="form-group row">
        <div className="col-md-6">
          <label htmlFor="edit-name">Company name</label>

          <input
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
              logo ? <img className="logo" src={logo} alt="logo" /> : <divc className="no-logo">No logo</divc>
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
