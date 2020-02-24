import React from 'react';
import EditModal from '../../components/Modals/Edit/EditModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";


const EditSkill = ({
  name, domain, slug, weight, logo, cover, original, // fields

  fileInputLogo, logoLoading, onUploadLogo, // logo
  fileInputCover, coverLoading, onUploadCover, // cover


  isOpen, closeModal, onChange, onSubmit, modalLoading
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

                    <input
                      name="slug"
                      value={slug}
                      id="edit-slug"
                      onChange={onChange}
                      type="text"
                      className="form-control"
                    />
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

                  <div className="col-md-6  edit-logo">
                    <label htmlFor="edit-logo">Logo</label>

                    {
                      logoLoading ? <Spinner /> : (
                        logo ? <img className="logo" src={logo} alt="logo" /> : <div className="no-logo">No logo</div>
                      )
                    }

                    <input
                      name="logo"
                      value={logo}
                      id="edit-logo"
                      onChange={onChange}
                      type="url"
                      className="form-control"
                      placeholder="Paste image URL or load file"
                    />

                    <input type="file" ref={fileInputLogo} onChange={onUploadLogo} />
                  </div>

                  <div className="col-md-6  edit-cover">
                    <label htmlFor="edit-cover">Cover</label>

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
                      className="form-control"
                      placeholder="Paste image URL or load file"
                    />

                    <input type="file" ref={fileInputCover} onChange={onUploadCover} />
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
                    <Button outline color="secondary" onClick={closeModal}>Cancel</Button>
                    <Button outline color="primary" type="submit">Save</Button>
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

export default EditSkill;
