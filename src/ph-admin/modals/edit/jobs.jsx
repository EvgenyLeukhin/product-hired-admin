import React from 'react';

import { API_URL, subUrl } from './../../api/apiUrl';

import Spinner from '../../../components/Spinner';

import User          from '../../selects/user';
import Role          from '../../selects/role';
import Company       from '../../selects/company';
import Skills        from '../../selects/skills';
import Editor        from '../../selects/editor';
import Plan          from '../../selects/plan';
import Status        from '../../selects/status';
import Seniority     from '../../selects/seniority';
import { Locations } from '../../selects/location';

const Jobs = props => {
  const {
    name,
    details,
    skills,
    locations,
    company,
    role,
    created,
    modified,
    published,
    user,
    plan,
    jobStatus,
    seniority,
    experience_up,
    experience_from,

    onChange,
    onChangeRole,
    onChangeLocations,
    onChangeSkills,
    onChangeCompany,
    onChangeDetails,
    onChangeUser,
    onChangePlan,
    onChangeStatus,
    onChangeSeniority,

    // logo
    logo, logoSwitcher, logoLoading, onUploadLogo, fileInputLogo,

    // cover
    cover, coverSwitcher, coverLoading, onUploadCover, fileInputCover,

  } = props;

  let logoUrl = `${API_URL}/${subUrl}/containers/logo/download/${logo}`;
  let coverUrl = `${API_URL}/${subUrl}/containers/cover/download/${cover}`;

  // fix problem with open item after additing image
  if (!logoSwitcher && logo && logo.includes('http')) {
    const logoSplit = logo.split('/').pop();
    logoUrl = `${API_URL}/${subUrl}/containers/logo/download/${logoSplit}`;
  }

  if (!coverSwitcher && cover && cover.includes('http')) {
    const coverSplit = cover.split('/').pop();
    coverUrl = `${API_URL}/${subUrl}/containers/cover/download/${coverSplit}`;
  }

  return (
    <fieldset>
      <div className="form-group row">

        {/* name */}
        <div className="col-md-6">
          <label htmlFor="edit-name">Job title</label>
          <input
            name="name"
            type="text"
            value={name}
            id="edit-name"
            onChange={onChange}
            className="form-control"
          />
        </div>


        {/* plan */}
        <div className="col-md-3">
          <label htmlFor="edit-plan">Plan</label>
          <Plan value={plan} onChange={onChangePlan} />
        </div>


        {/* jobStatus */}
        <div className="col-md-3">
          <label htmlFor="edit-status">Status</label>
          <Status value={jobStatus} onChange={onChangeStatus} />
        </div>


        {/* created */}
        <div className="col-md-4">
          <label htmlFor="edit-created">Created</label>
          <input
            type="date"
            name="created"
            id="edit-created"
            value={created && created.substring(0, 10)}
            onChange={onChange}
            className="form-control"
          />
        </div>


        {/* published */}
        <div className="col-md-4">
          <label htmlFor="edit-published">Published</label>
          <input
            disabled
            type="text"
            name="published"
            value={published && published.substring(0, 10)}
            id="edit-published"
            className="form-control"
          />
        </div>


        {/* modified */}
        <div className="col-md-4">
          <label htmlFor="edit-modified">Modified</label>
          <input
            disabled
            type="text"
            name="modified"
            value={modified && modified.substring(0, 10)}
            id="edit-modified"
            className="form-control"
          />
        </div>


        {/* user */}
        <div className="col-md-4">
          <label htmlFor="edit-user">User</label>
          <User value={user} onChange={onChangeUser} />
        </div>


        {/* company */}
        <div className="col-md-3">
          <label htmlFor="edit-company">Company</label>
          <Company value={company} onChange={onChangeCompany} />
        </div>


        {/* locations */}
        <div className="col-md-5">
          <label htmlFor="edit-locations">Locations</label>
          <Locations value={locations} onChange={onChangeLocations} />
        </div>


        {/* role */}
        <div className="col-md-3">
          <label htmlFor="edit-role">Role</label>
          <Role value={role} onChange={onChangeRole} />
        </div>


        {/* experience_from */}
        <div className="col-md-2">
          <label htmlFor="edit-experience_from">Experience from</label>
          <input
            min={0}
            max={30}
            type="number"
            onChange={onChange}
            name="experience_from"
            value={experience_from}
            id="edit-experience_from"
            className="form-control"
          />
        </div>


        {/* experience_up */}
        <div className="col-md-2">
          <label htmlFor="edit-experience_up">Experience to</label>

          <input
            min={0}
            max={30}
            type="number"
            onChange={onChange}
            name="experience_up"
            value={experience_up}
            id="edit-experience_up"
            className="form-control"
          />
        </div>


        {/* seniority */}
        <div className="col-md-5">
          <label htmlFor="edit-seniority">Seniority</label>
          <Seniority value={seniority} onChange={onChangeSeniority} />
        </div>


        {/* skills */}
        <div className="col-md-12">
          <label htmlFor="edit-skills">Skills</label>
          <Skills value={skills} onChange={onChangeSkills} />
        </div>


        {/* logo */}
        <div className="col-md-6  edit-logo">
          <label htmlFor="edit-logo">Logo</label>
          {
            !logoSwitcher ? (
              logo ? <img className="logo" src={logoUrl} alt="logo" />
                  : <div className="no-logo">No logo</div>
            ) : (
              logoLoading ? <Spinner /> : (
                logo && <img className="logo" src={logo} alt="logo" />
              )
            )
          }
          <input type="file" ref={fileInputLogo} onChange={onUploadLogo} />
        </div>


        {/* cover */}
        <div className="col-md-6  edit-cover">
          <label htmlFor="edit-cover">Cover</label>
          {
            !coverSwitcher ? (
              cover ? <img className="cover" src={coverUrl} alt="cover" />
                    : <div className="no-cover">No cover</div>
            ) : (
              coverLoading ? <Spinner /> : (
                cover && <img className="cover" src={cover} alt="cover" />
              )
            )
          }
          <input type="file" ref={fileInputCover} onChange={onUploadCover} />
        </div>


        {/* details */}
        <div className="col-md-12">
          <label htmlFor="edit-details">Details</label>
          <Editor value={details} onChange={onChangeDetails} />
        </div>
      </div>
    </fieldset>

    //         <input
    //           disabled
    //           name="logo"
    //           value={logo}
    //           id="edit-logo"
    //           onChange={onChange}
    //           type="text"
    //           className="form-control"
    //         />


    //         <input
    //           disabled
    //           name="cover"
    //           value={cover}
    //           id="edit-cover"
    //           onChange={onChange}
    //           type="text"
    //           className="form-control"
    //         />
  );
}

export default Jobs;
