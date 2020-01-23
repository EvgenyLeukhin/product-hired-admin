import React from 'react';

import Spinner from '../../../components/Spinner';

const Jobs = props => {
  const {
    slug,
    description,
    created,
    modified,
    published,
    views,
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
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-slug">Slug</label>

          <div className="col-md-4">
            <input
              name="slug"
              value={slug}
              id="edit-slug"
              onChange={onChange}
              type="textarea"
              className="form-control input-rounded"
            />
          </div>

          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-description">Description</label>

          <div className="col-md-4">
            <textarea
              rows={5}
              style={{ resize: 'none' }}
              name="description"
              value={description}
              id="edit-description"
              onChange={onChange}
              className="form-control"
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-created">Created</label>

          <div className="col-md-2">
            <input
              name="created"
              value={created && created.substring(0, 10)}
              id="edit-created"
              disabled
              type="text"
              className="form-control input-rounded"
            />
          </div>

          <label className="col-md-4 col-form-label text-bold text-right" htmlFor="edit-modified">Modified</label>

          <div className="col-md-2">
            <input
              name="modified"
              value={modified && modified.substring(0, 10)}
              id="edit-modified"
              disabled
              type="text"
              className="form-control input-rounded"
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-created">Published</label>

          <div className="col-md-2">
            <input
              name="published"
              value={published && published.substring(0, 10)}
              id="edit-published"
              disabled
              type="text"
              className="form-control input-rounded"
            />
          </div>

          <label className="col-md-4 col-form-label text-bold text-right" htmlFor="edit-views">Views</label>

          <div className="col-md-2">
            <input
              name="views"
              value={views}
              id="edit-views"
              disabled
              type="text"
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

export default Jobs;