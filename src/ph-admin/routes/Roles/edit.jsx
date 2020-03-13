import React from 'react';
import EditModal from '../../components/Modals/Edit/EditModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";


const EditRole = ({
  name, slug, weight, keywords, negative, original,                  // fields
  isOpen, closeModal, onChange, onSubmit, modalLoading, generateSlug // modal
}) => {

  return (
    <EditModal isOpen={isOpen} modalLoading={modalLoading} closeModal={closeModal}>
      <section className="section-container edit-container">
        <h4 className="edit-container__title">
          Edit: <b>{original.name}</b>
        </h4>

        <span className="ion-close-round edit-container__close" onClick={closeModal} />

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={onSubmit}>

            <fieldset>
              <div className="form-group row">
                <div className="col-md-5">
                  <label htmlFor="edit-name">Role</label>

                  <input
                    required
                    name="name"
                    type="text"
                    value={name}
                    id="edit-name"
                    onChange={onChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="edit-slug">Slug</label>

                  <div className="input-group">
                    <input
                      required
                      name="slug"
                      type="text"
                      value={slug}
                      id="edit-slug"
                      onChange={onChange}
                      className="form-control"
                    />

                    <div className="input-group-append">
                      <button
                        className="btn btn-light"
                        type="button"
                        onClick={generateSlug}
                        // disabled={!name || slug}
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-2">
                  <label htmlFor="edit-weight">Weight</label>

                  <input
                    min={0}
                    max={999}
                    name="weight"
                    type="number"
                    value={weight}
                    id="edit-weight"
                    onChange={onChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="edit-keywords">Search Phrases, comma-separated</label>

                  <textarea
                    rows={6}
                    type="text"
                    name="keywords"
                    value={keywords}
                    id="edit-keywords"
                    onChange={onChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="edit-negative">Stop-Words, comma-separated</label>

                  <textarea
                    rows={6}
                    type="text"
                    name="negative"
                    value={negative}
                    id="edit-negative"
                    onChange={onChange}
                    className="form-control"
                  />
                </div>

                {/* <div className="col-md-12">
                  <label htmlFor="edit-skills">Recommended Skills</label>


                </div> */}
              </div>
            </fieldset>

              {
                modalLoading ? (
                  <div className="edit-container__is-loading">
                    <Spinner />
                  </div>
                ) : (
                  <footer className="edit-container__buttons">
                    <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
                    <Button disabled={!name || !slug}outline color="primary" type="submit">Save</Button>
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

export default EditRole;
