import React from 'react';
import ReactQuill from 'react-quill';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

import { API_URL, subUrl } from '../../api/apiUrl';

import isEmpty from 'lodash/isEmpty';

import EditModal from '../../components/Modals/Edit/EditModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";

import getSkills       from './api/getSkills';
import getLocations    from './api/getLocations';
import getCompanies    from './api/getCompanies';
import getUsers        from './api/getUsers';
import getVacancies    from './api/getVacancies';

import seniorityOptions from './api/seniorityOptions';
import statusOptions from './api/statusOptions';
import planOptions from './api/planOptions';

import 'react-quill/dist/quill.snow.css';
import './edit.scss';


const EditJob = ({
  // fields
  original, id, name, created, modified, published, views, impressions, details, experience_from, experience_up,
  seniority, seniorityObj, skills, status, statusObj, plan_id, planObj, company, company_id, locations,
  user, employer_id, vacancy, vacancy_role,

  // images //
  logo, cover, logoSwitcher, coverSwitcher, logoLoading, coverLoading,
  fileInputLogo, fileInputCover, onUploadLogo, onUploadCover,  onDeleteLogo, onDeleteCover,


  // modal
  isOpen, closeModal, onSubmit, modalLoading, deleteClick,

  // onchanges
  onChange, onChangeDetails, onChangeSeniority, onChangeSkills, onChangeStatus, onChangePlan, onChangeLocations, onChangeCompany, onChangeUser, onChangeVacancy,
}) => {

  // console.log('EditJob locations:', original); // original
  const createdString = created && `${created.substring(0, 10)}, ${created.substring(11, 16)} UTC`;
  const modifiedString = modified && `${modified.substring(0, 10)}, ${modified.substring(11, 16)} UTC`;

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
    <EditModal isOpen={isOpen} modalLoading={modalLoading} closeModal={closeModal}>
      <section className="section-container edit-container edit-job">
        <h4 className="edit-container__title">
          Edit&nbsp;<b>{`"${original.id} - ${original.name}"`}</b>
        </h4>

        <span className="ion-close-round edit-container__close" onClick={closeModal} />

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={onSubmit}>

              <fieldset>
                <div className="form-group row top-fields">
                  {/* created */}
                  <div className="col-md-3 col-sm-6">
                    <b>Created</b>
                    <span>{createdString || ''}</span>
                  </div>

                  {/* modified */}
                  <div className="col-md-3 col-sm-6">
                    <b>Modified</b>
                    <span>{modifiedString || ''}</span>
                  </div>

                  {/* views */}
                  <div className="col-md-3 col-sm-6">
                    <b>Views</b>
                    <span>{views || 0}</span>
                  </div>

                  {/* impressions */}
                  <div className="col-md-3 col-sm-6">
                    <b>Impressions</b>
                    <span>{impressions || 0}</span>
                  </div>
                </div>
              </fieldset>


              <fieldset>
                <div className="form-group row">

                  {/* name */}
                  <div className="col-md-5">
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
                  <div className="col-md-2">
                    <label htmlFor="edit-plan_id">Plan</label>
                    <input
                      hidden
                      name="plan_id"
                      value={plan_id}
                      id="edit-plan_id"
                      onChange={onChange}
                      type="number"
                      className="form-control"
                    />

                    <Select
                      value={planObj}
                      onChange={onChangePlan}
                      options={planOptions}
                    />
                  </div>

                  {/* published */}
                  <div className="col-md-3">
                    <label htmlFor="edit-published">Published</label>
                    <input
                      type="date"
                      name="published"
                      id="edit-published"
                      value={published && published.substring(0, 10)}
                      onChange={onChange}
                      className="form-control"
                    />
                  </div>

                  {/* status */}
                  <div className="col-md-2">
                    <label htmlFor="edit-status">Status</label>
                    <input
                      hidden
                      name="status"
                      value={status}
                      id="edit-status"
                      onChange={onChange}
                      type="text"
                      className="form-control"
                    />

                    <Select
                      value={statusObj}
                      onChange={onChangeStatus}
                      options={statusOptions}
                    />
                  </div>

                  {/* user */}
                  <div className="col-md-4">
                    <label htmlFor="edit-employer_id">User</label>
                    <input
                      hidden
                      name="employer_id"
                      value={employer_id}
                      id="edit-employer_id"
                      onChange={onChange}
                      type="number"
                      className="form-control"
                    />

                    <AsyncSelect
                      menuPlacement="auto"
                      cacheOptions={true}
                      defaultOptions={true}
                      loadOptions={inputValue => getUsers(inputValue).then(res => res.data)}
                      getOptionValue={o => o.id}
                      getOptionLabel={o => `${o.name} ${o.surname} ${o.email}`}
                      onChange={onChangeUser}
                      value={user}
                    />
                  </div>

                  {/* company */}
                  <div className="col-md-3">
                    <label htmlFor="edit-company_id">Company</label>
                    <input
                      hidden
                      name="company_id"
                      value={company_id}
                      id="edit-company_id"
                      onChange={onChange}
                      type="number"
                      className="form-control"
                    />

                    <AsyncSelect
                      menuPlacement="auto"
                      cacheOptions={true}
                      defaultOptions={true}
                      loadOptions={inputValue => getCompanies(inputValue).then(res => res.data)}
                      getOptionValue={o => o.id}
                      getOptionLabel={o => `${o.name}`}
                      onChange={onChangeCompany}
                      value={company}
                    />
                  </div>

                  {/* locations */}
                  <div className="col-md-5">
                    <label htmlFor="edit-locations">Locations</label>
                    <AsyncSelect
                      isMulti={true}
                      menuPlacement="auto"
                      cacheOptions={true}
                      defaultOptions={true}
                      loadOptions={inputValue => getLocations(inputValue).then(res => res.data)}
                      getOptionValue={o => o.id}
                      getOptionLabel={o => `${o.name}`}
                      onChange={onChangeLocations}
                      value={locations}
                    />
                  </div>

                  {/* vacancy */}
                  <div className="col-md-3">
                    <label htmlFor="edit-vacancy_role">Role</label>
                    <input
                      hidden
                      name="vacancy_role"
                      value={vacancy_role}
                      id="edit-vacancy_role"
                      onChange={onChange}
                      type="number"
                      className="form-control"
                    />

                    <AsyncSelect
                      menuPlacement="auto"
                      cacheOptions={true}
                      defaultOptions={true}
                      loadOptions={inputValue => getVacancies(inputValue).then(res => res.data)}
                      getOptionValue={o => o.id}
                      getOptionLabel={o => o.name}
                      value={vacancy}
                      onChange={onChangeVacancy}
                    />
                  </div>

                  {/* experience_from */}
                  <div className="col-md-3">
                    <label htmlFor="edit-experience_from">Experience, from</label>
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

                  {/* experience_to */}
                  <div className="col-md-3">
                    <label htmlFor="edit-experience_up">Experience, to</label>
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
                  <div className="col-md-3">
                    <label htmlFor="edit-seniority">Seniority</label>

                    <input
                      hidden
                      name="seniority"
                      value={seniority}
                      id="edit-seniority"
                      onChange={onChange}
                      type="number"
                      className="form-control"
                    />

                    <Select
                      value={seniorityObj}
                      onChange={onChangeSeniority}
                      options={seniorityOptions}
                    />
                  </div>

                  {/* skills */}
                  <div className="col-md-12">
                    <label htmlFor="edit-skills">Skills</label>
                    <AsyncSelect
                      isMulti={true}
                      menuPlacement="auto"
                      cacheOptions={true}
                      defaultOptions={true}
                      loadOptions={inputValue => getSkills(inputValue).then(res => res.data)}
                      getOptionValue={o => o.id}
                      getOptionLabel={o => o.name}
                      onChange={onChangeSkills}
                      value={skills}
                    />
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
                    <input
                      id="edit-logo"
                      type="file"
                      className="input-file-custom"
                      ref={fileInputLogo}
                      onChange={onUploadLogo}
                    />

                    <div className="edit-logo__buttons">
                      <label htmlFor="edit-logo" className="input-file-label  btn btn-light">
                        <i className="ion-image" />&nbsp;
                        <span>Load logo</span>
                      </label>
                      <Button disabled={!logo || !logoUrl} outline color="danger" onClick={onDeleteLogo}>Delete logo</Button>
                    </div>
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
                    <input
                      id="edit-cover"
                      type="file"
                      className="input-file-custom"
                      ref={fileInputCover}
                      onChange={onUploadCover}
                    />
                    <div className="edit-cover__buttons">
                      <label htmlFor="edit-cover" className="input-file-label  btn btn-light">
                        <i className="ion-image" />&nbsp;
                        <span>Load cover</span>
                      </label>
                      <Button disabled={!cover || !coverUrl} outline color="danger" onClick={onDeleteCover}>Delete cover</Button>
                    </div>
                  </div>

                  {/* details */}
                  <div className="col-md-12">
                    <label htmlFor="edit-details">Details</label>
                    <ReactQuill value={details} onChange={onChangeDetails} />
                  </div>
                </div>
              </fieldset>

              {
                modalLoading ? (
                  <div className="edit-container__is-loading">
                    <Spinner />
                  </div>
                ) : (
                  <footer className="edit-container__buttons">
                    <Button outline color="danger" onClick={deleteClick}>Delete</Button>
                    <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
                    <Button disabled={!name || isEmpty(locations) || isEmpty(skills)} outline color="primary" type="submit">Save</Button>
                  </footer>
                )
              }
            </form>
          </div>
        </div>
      </section>
    </EditModal>
  );
}

export default EditJob;
