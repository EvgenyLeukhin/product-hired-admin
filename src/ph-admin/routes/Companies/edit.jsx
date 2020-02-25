import React from 'react';
import EditModal from '../../components/Modals/Edit/EditModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";


const EditCompany = ({
  name, domain, slug, weight, logo, cover, original,            // fields

  fileInputLogo, logoLoading, onUploadLogo, deleteLogo,          // logo
  fileInputCover, coverLoading, onUploadCover, deleteCover,      // cover

  isOpen, closeModal, onChange, onSubmit, modalLoading, deleteClick, generateSlug
}) => {

  return (
    <EditModal isOpen={isOpen} modalLoading={modalLoading} closeModal={closeModal}>
      <section className="section-container edit-container">
        <h4 className="edit-container__title">
          Edit&nbsp;<b>{`"${original.id} - ${original.name}"`}</b>
        </h4>

        <span className="ion-close-round edit-container__close" onClick={closeModal} />

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={onSubmit}>

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

                    <div className="input-group">
                      <input
                        name="slug"
                        value={slug}
                        id="edit-slug"
                        onChange={onChange}
                        type="text"
                        className="form-control"
                      />

                      <div className="input-group-append">
                        <button
                          className="btn btn-dark"
                          type="button"
                          onClick={generateSlug}
                          disabled={!name || slug}
                        >
                          Generate
                        </button>
                      </div>
                    </div>
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


                  <div className="col-md-6">
                    <div className="edit-logo">
                      <label htmlFor="edit-logo">Logo</label>
                      {
                        logoLoading ? <Spinner /> : (
                          logo ? <img className="logo" src={logo} alt="logo" /> : <div className="no-logo">No logo</div>
                        )
                      }
                      <input id="edit-logo" type="file" ref={fileInputLogo} onChange={onUploadLogo} />
                    </div>

                    <div className="edit-logo-url">
                      <label htmlFor="edit-logo-url">Logo URL</label>

                      <div className="input-group">
                        <input
                          name="logo"
                          value={logo}
                          id="edit-logo-url"
                          onChange={onChange}
                          type="url"
                          className="form-control"
                          placeholder="Please, paste logo URL or load file"
                        />

                        <div className="input-group-append">
                          <button className="btn btn-dark" type="button" onClick={deleteLogo} disabled={!logo}>
                            Clear
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>


                  <div className="col-md-6">
                    <div className="edit-cover">
                      <label htmlFor="edit-cover">Cover</label>
                      {
                        coverLoading ? <Spinner /> : (
                          cover ? <img className="cover" src={cover} alt="cover" /> : <div className="no-cover">No cover</div>
                        )
                      }
                      <input id="edit-cover" type="file" ref={fileInputCover} onChange={onUploadCover} />
                    </div>

                    <div className="edit-cover-url">
                      <label htmlFor="edit-cover-url">Cover URL</label>

                      <div className="input-group">
                        <input
                          name="cover"
                          value={cover}
                          id="edit-cover-url"
                          onChange={onChange}
                          type="url"
                          className="form-control"
                          placeholder="Please, paste cover URL or load file"
                        />

                        <div className="input-group-append">
                          <button className="btn btn-dark" type="button" onClick={deleteCover} disabled={!cover}>
                            Clear
                          </button>
                        </div>
                      </div>

                    </div>
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
                    <Button disabled={!name || !slug || logoLoading || coverLoading} outline color="primary" type="submit">Save</Button>
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

export default EditCompany;
