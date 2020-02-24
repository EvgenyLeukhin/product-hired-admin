import React from 'react';
import AddModal from '../../components/Modals/Add/AddModal';

import Spinner from '../../../components/Spinner';
import { Button } from "reactstrap";


const AddSkill = ({
  name, slug, weight, markers, // fields
  isOpen, closeModal, onChange, onSubmit, modalLoading
}) => {

  return (
    <AddModal isOpen={isOpen} modalLoading={modalLoading} closeModal={closeModal}>
      <section className="section-container add-container">
        <h4 className="add-container__title">Add skill</h4>

        <span className="ion-close-round add-container__close" onClick={closeModal} />

        <div className="cardbox">
          <div className="cardbox-body">
            <form action="" onSubmit={onSubmit}>

            <fieldset>
              <div className="form-group row">
                <div className="col-md-5">
                  <label htmlFor="add-name">Skill</label>

                  <input
                    name="name"
                    type="text"
                    value={name}
                    id="add-name"
                    onChange={onChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="add-slug">Slug</label>

                  <input
                    name="slug"
                    type="text"
                    value={slug}
                    id="add-slug"
                    onChange={onChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-2">
                  <label htmlFor="add-weight">Weight</label>

                  <input
                    min={0}
                    max={999}
                    name="weight"
                    type="number"
                    value={weight}
                    id="add-weight"
                    onChange={onChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="add-aliases">Aliases</label>

                  <textarea
                    rows={3}
                    type="text"
                    name="markers"
                    value={markers}
                    id="add-aliases"
                    onChange={onChange}
                    className="form-control"
                  />
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
                    <Button disabled={!name || !slug} outline color="primary" type="submit">Save</Button>
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

export default AddSkill;
