import React from 'react';

import User          from '../../selects/user';
import Company       from '../../selects/company';

const Jobs = ({ name, company, user, onChange, onChangeCompany, onChangeUser }) => (
  <fieldset>
    <div className="form-group row">
      <div className="col-md-12">
        <label htmlFor="edit-name ">Job title</label>

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

      <div className="col-md-6">
        <label htmlFor="edit-company">Company</label>
        <Company value={company} onChange={onChangeCompany} />
      </div>

      <div className="col-md-6">
        <label htmlFor="edit-name">User</label>
        <User value={user} onChange={onChangeUser} />
      </div>
    </div>
  </fieldset>
);

export default Jobs;
