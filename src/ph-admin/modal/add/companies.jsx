import React from 'react';

import Spinner from '../../../components/Spinner';

const Companies = props => {
  const {
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
    <>
      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-domain">Domain</label>
          <div className="col-md-4">
            <input
              name="domain"
              value={domain}
              id="edit-domain"
              onChange={onChange}
              type="text"
              className="form-control input-rounded"
            />
          </div>

          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-slug">Slug</label>
          <div className="col-md-4">
            <input
              name="slug"
              value={slug}
              id="edit-slug"
              onChange={onChange}
              type="text"
              className="form-control input-rounded"
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-weight">Weight</label>
          <div className="col-md-4">
            <input
              name="weight"
              value={weight}
              id="edit-weight"
              onChange={onChange}
              type="number"
              className="form-control input-rounded"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="edit-container__images">
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-logo">Logo</label>
          <div className="col-md-4 text-center">
            {
              logoLoading ? <Spinner /> : (
                logo ? <img className="logo" src={logo} alt="logo" /> : <divc className="no-logo">No logo</divc>
              )
            }

            <input
              name="logo"
              value={logo}
              id="edit-logo"
              onChange={onChange}
              type="url"
              className="form-control input-rounded"
            />

            <input type="file" ref={fileInputLogo} onChange={onUploadLogo} />
          </div>

          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-cover">Cover</label>
          <div className="col-md-4 text-center">
            {
              coverLoading ? <Spinner /> : (
                cover ? <img className="cover" src={cover} alt="cover" /> : <div className="no-cover">No cover</div>
              )
            }

            <input
              name="cover"
              value={cover}
              id="edit-cover"
              onChange={onChange}
              type="url"
              className="form-control input-rounded"
            />

            <input type="file" ref={fileInputCover} onChange={onUploadCover} />
          </div>
        </div>
      </fieldset>
    </>
  );
}

export default Companies;
