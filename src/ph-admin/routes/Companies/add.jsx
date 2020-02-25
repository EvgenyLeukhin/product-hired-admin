import React from 'react';
import AddModal from '../../components/Modals/Add/AddModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";


const AddCompany = ({
  name, domain, slug, weight, logo, cover,     // fields

  fileInputLogo, logoLoading, onUploadLogo,    // logo
  fileInputCover, coverLoading, onUploadCover, // cover

  isOpen, closeModal, onChange, onSubmit, modalLoading, deleteLogo, deleteCover
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
                  <div className="col-md-6">
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

                  <div className="col-md-6">
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

                  <div className="col-md-6">
                    <label htmlFor="add-slug">Slug</label>

                    <input
                      name="slug"
                      value={slug}
                      id="add-slug"
                      onChange={onChange}
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="add-weight">Weight</label>

                    <input
                      name="weight"
                      value={weight}
                      id="add-weight"
                      onChange={onChange}
                      type="number"
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-6  add-logo">
                    <label htmlFor="add-logo">Logo</label>

                    { logo && <div className="delete" onClick={deleteLogo} /> }

                    {
                      logoLoading ? <Spinner /> : (
                        logo ? <img className="logo" src={logo} alt="logo" /> : <div className="no-logo">No logo</div>
                      )
                    }

                    <input
                      name="logo"
                      value={logo}
                      id="add-logo"
                      onChange={onChange}
                      type="url"
                      className="form-control"
                      placeholder="Please, paste image URL or load file"
                    />

                    <input type="file" ref={fileInputLogo} onChange={onUploadLogo} />
                  </div>

                  <div className="col-md-6  add-cover">
                    <label htmlFor="add-cover">Cover</label>

                    { cover && <div className="delete" onClick={deleteCover} /> }

                    {
                      coverLoading ? <Spinner /> : (
                        cover ? <img className="cover" src={cover} alt="cover" /> : <div className="no-cover">No cover</div>
                      )
                    }

                    <input
                      name="cover"
                      value={cover}
                      id="add-cover"
                      onChange={onChange}
                      type="url"
                      className="form-control"
                      placeholder="Please, paste image URL or load file"
                    />

                    <input type="file" ref={fileInputCover} onChange={onUploadCover} />
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
