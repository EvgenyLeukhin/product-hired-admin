import React from 'react';

import Spinner from '../../../components/Spinner';

import User from '../../selects/user';
import Role from '../../selects/role';
import Company from '../../selects/company';
import Skills from '../../selects/skills';
import { Locations } from '../../selects/location';
import Editor from '../../selects/editor';

const Jobs = props => {
  const {
    slug,
    details,
    skills,
    locations,
    company,
    role,
    created,
    modified,
    published,
    views,
    user,

    onChange,
    onChangeRole,
    onChangeLocations,
    onChangeSkills,
    onChangeCompany,
    onChangeDetails,
    onChangeUser,

    // logo
    logo, logoLoading, onUploadLogo, fileInputLogo,

    // cover
    cover, coverLoading, onUploadCover, fileInputCover,

  } = props;

  // console.log(logo);

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

          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-company">Company</label>
          <div className="col-md-4">
            <Company value={company} onChange={onChangeCompany} />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-user">User</label>
          <div className="col-md-4">
            <User value={user} onChange={onChangeUser} />
          </div>

          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-role">Role</label>
          <div className="col-md-4">
            <Role value={role} onChange={onChangeRole} />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-locations">Locations</label>
          <div className="col-md-10">
            <Locations value={locations} onChange={onChangeLocations} />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-skills">Skills</label>
          <div className="col-md-10">
            <Skills value={skills} onChange={onChangeSkills} />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-details">Details</label>
          <div className="col-md-10">
            <Editor value={details} onChange={onChangeDetails} />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group row">
          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-created">Created</label>
          <div className="col-md-4">
            <input
              name="created"
              value={created && created.substring(0, 10)}
              id="edit-created"
              disabled
              type="text"
              className="form-control input-rounded"
            />
          </div>

          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-modified">Modified</label>
          <div className="col-md-4">
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
          <div className="col-md-4">
            <input
              name="published"
              value={published && published.substring(0, 10)}
              id="edit-published"
              disabled
              type="text"
              className="form-control input-rounded"
            />
          </div>

          <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-views">Views</label>
          <div className="col-md-4">
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



      {/* <fieldset className="edit-container__images">
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
      </fieldset> */}
    </>
  );
}

export default Jobs;
