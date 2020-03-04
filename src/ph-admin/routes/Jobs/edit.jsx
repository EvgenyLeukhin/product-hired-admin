import React from 'react';
import ReactQuill from 'react-quill';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

import EditModal from '../../components/Modals/Edit/EditModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";

import getSkills from './api/getSkills';
import seniorityOptions from './api/seniorityOptions';
import statusOptions from './api/statusOptions';

import 'react-quill/dist/quill.snow.css';
import './edit.scss';


const EditJob = ({
  // fields
  original, id, name, created, modified, published, views, impressions, details, experience_from, experience_up,
  seniority, seniorityObj, skills, status, statusObj,

  // image

  // modal
  isOpen, closeModal, onSubmit, modalLoading, deleteClick,

  //
  onChange, onChangeDetails, onChangeSeniority, onChangeSkills, onChangeStatus,
}) => {

  console.log('EditJob:', seniority); // original
  const createdString = created && `${created.substring(0, 10)}, ${created.substring(11, 16)} UTC`;
  const modifiedString = modified && `${modified.substring(0, 10)}, ${modified.substring(11, 16)} UTC`;

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
                  <div class="col-md-3 col-sm-6">
                    <b>Created</b>
                    <span>{createdString || ''}</span>
                  </div>

                  {/* modified */}
                  <div class="col-md-3 col-sm-6">
                    <b>Modified</b>
                    <span>{modifiedString || ''}</span>
                  </div>

                  {/* views */}
                  <div class="col-md-3 col-sm-6">
                    <b>Views</b>
                    <span>{views || 0}</span>
                  </div>

                  {/* impressions */}
                  <div class="col-md-3 col-sm-6">
                    <b>Impressions</b>
                    <span>{impressions || 0}</span>
                  </div>
                </div>
              </fieldset>


              <fieldset>
                <div className="form-group row">

                  {/* name */}
                  <div class="col-md-6">
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
                  <div class="col-md-2">
                    <label htmlFor="edit-plan">Plan</label>

                  </div>

                  {/* published */}
                  <div class="col-md-2">
                    <label htmlFor="edit-created">Published</label>
                    <input
                      type="date"
                      name="created"
                      id="edit-created"
                      value={published}
                      onChange={onChange}
                      className="form-control"
                    />
                  </div>

                  {/* status */}
                  <div class="col-md-2">
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
                  <div class="col-md-4">
                    <label htmlFor="edit-user">User</label>

                  </div>


                  {/* company */}
                  <div class="col-md-3">
                    <label htmlFor="edit-company">Company</label>

                  </div>

                  {/* locations */}
                  <div class="col-md-5">
                    <label htmlFor="edit-locations">Locations</label>

                  </div>

                  {/* role */}
                  <div class="col-md-3">
                    <label htmlFor="edit-role">Role</label>

                  </div>

                  {/* experience_from */}
                  <div class="col-md-3">
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
                  <div class="col-md-3">
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
                  <div class="col-md-3">
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
                  <div class="col-md-3">
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

                  {/* details */}
                  <div class="col-md-12">
                    <label htmlFor="edit-details">Details</label>
                    <ReactQuill value={details} onChange={onChangeDetails} />;
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
                    <Button disabled={!name} outline color="primary" type="submit">Save</Button>
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
