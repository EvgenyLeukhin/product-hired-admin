import React from 'react';

import User          from '../../selects/user';
import Company       from '../../selects/company';

const Jobs = ({
  name, company, user,

  onChange, onChangeCompany, onChangeUser
}) => (
  <>
    <fieldset>
      <div className="form-group row">
        <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-name">Job title</label>

        <div className="col-md-10">
          <input
            required
            name="name"
            type="text"
            value={name}
            id="edit-name"
            onChange={onChange}
            className="form-control input-rounded"
          />
        </div>
      </div>
    </fieldset>

    <fieldset>
      <div className="form-group row">
        <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-company">Company</label>
        <div className="col-md-4">
          <Company value={company} onChange={onChangeCompany} />
        </div>

        <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-name">User</label>
        <div className="col-md-4">
          <User
            value={user}
            onChange={onChangeUser}
          />
        </div>
      </div>
    </fieldset>
  </>
);

export default Jobs;
