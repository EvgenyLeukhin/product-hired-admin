import React from 'react';
import AddModal from '../../components/Modals/Add/AddModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";


const AddCompany = ({
  name, domain, slug, weight, logo, cover,                  // fields

  fileInputLogo, logoLoading, onUploadLogo, deleteLogo,     // logo
  fileInputCover, coverLoading, onUploadCover, deleteCover, // cover

  isOpen, closeModal, onChange, onSubmit, modalLoading, generateSlug
}) => {

  return (
    <AddModal isOpen={isOpen} modalLoading={modalLoading} closeModal={closeModal}>
      <section className="section-container add-container">
        <h4 className="add-container__title">Add company</h4>

        <span className="ion-close-round add-container__close" onClick={closeModal} />

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={onSubmit}>

              <fieldset>
                <div className="form-group row">
                  <div className="col-md-4">
                    <label htmlFor="add-name">Company name</label>

                    <input
                      name="name"
                      value={name}
                      id="add-name"
                      onChange={onChange}
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="add-domain">Domain</label>

                    <input
                      name="domain"
                      value={domain}
                      id="add-domain"
                      onChange={onChange}
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="add-slug">Slug</label>

                    <div className="input-group">
                      <input
                        name="slug"
                        value={slug}
                        id="add-slug"
                        onChange={onChange}
                        type="text"
                        className="form-control"
                      />

                      <div className="input-group-append">
                        <button
                          className="btn btn-light"
                          type="button"
                          onClick={generateSlug}
                          disabled={!name}
                        >
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="add-logo">
                      <label htmlFor="add-logo">Logo</label>
                      {
                        logoLoading ? <Spinner /> : (
                          logo ? <img className="logo" src={logo} alt="logo" /> : <div className="no-logo">No logo</div>
                        )
                      }
                      <input
                        id="add-logo"
                        type="file"
                        className="input-file-custom"
                        ref={fileInputLogo}
                        onChange={onUploadLogo}
                      />
                      <label htmlFor="add-logo" className="input-file-label  btn btn-light">
                        <i className="ion-image" />&nbsp;
                        <span>Load logo</span>
                      </label>
                    </div>

                    <div className="add-logo-url">
                      <label htmlFor="add-logo-url">Logo URL</label>

                      <div className="input-group">
                        <input
                          name="logo"
                          value={logo}
                          id="add-logo-url"
                          onChange={onChange}
                          type="url"
                          className="form-control"
                          placeholder="Please, paste logo URL or load file"
                        />

                        <div className="input-group-append">
                          <button className="btn btn-light" type="button" onClick={deleteLogo} disabled={!logo}>
                            Clear
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>


                  <div className="col-md-6">
                    <div className="add-cover">
                      <label htmlFor="add-cover">Cover</label>
                      {
                        coverLoading ? <Spinner /> : (
                          cover ? <img className="cover" src={cover} alt="cover" /> : <div className="no-cover">No cover</div>
                        )
                      }
                      <input
                        id="add-cover"
                        type="file"
                        className="input-file-custom"
                        ref={fileInputCover}
                        onChange={onUploadCover}
                      />
                      <label htmlFor="add-cover" className="input-file-label  btn btn-light">
                        <i className="ion-image" />&nbsp;
                        <span>Load cover</span>
                      </label>
                    </div>

                    <div className="add-cover-url">
                      <label htmlFor="add-cover-url">Cover URL</label>

                      <div className="input-group">
                        <input
                          name="cover"
                          value={cover}
                          id="add-cover-url"
                          onChange={onChange}
                          type="url"
                          className="form-control"
                          placeholder="Please, paste cover URL or load file"
                        />

                        <div className="input-group-append">
                          <button className="btn btn-light" type="button" onClick={deleteCover} disabled={!cover}>
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
                  <div className="add-container__is-loading">
                    <Spinner />
                  </div>
                ) : (
                  <footer className="add-container__buttons">
                    <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
                    <Button disabled={!name || !slug || logoLoading || coverLoading} outline color="primary" type="submit">Save</Button>
                  </footer>
                )
              }
            </form>
          </div>
        </div>
      </section>
    </AddModal>
  );
}

export default AddCompany;
