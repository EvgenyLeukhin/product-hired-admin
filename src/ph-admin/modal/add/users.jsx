import React from 'react';

const Users = ({ name, surname, password, email, onChange }) => (
  <>
    <fieldset>
      <div className="form-group row">
        <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-name">Name</label>
        <div className="col-md-4">
          <input
            required
            autoComplete="off"
            name="name"
            value={name}
            id="edit-name"
            onChange={onChange}
            type="text"
            className="form-control input-rounded"
          />
        </div>

        <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-surname">Surname</label>
        <div className="col-md-4">
          <input
            required
            autoComplete="off"
            name="surname"
            value={surname}
            id="edit-surname"
            onChange={onChange}
            type="text"
            className="form-control input-rounded"
          />
        </div>
      </div>
    </fieldset>

    <fieldset>
      <div className="form-group row">
        <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-password">Password</label>
        <div className="col-md-4">
          <input
            required
            autoComplete="off"
            name="password"
            value={password}
            id="edit-password"
            onChange={onChange}
            type="password"
            className="form-control input-rounded"
          />
        </div>

        <label className="col-md-2 col-form-label text-bold text-right" htmlFor="edit-email">Email</label>
        <div className="col-md-4">
          <input
            required
            autoComplete="off"
            name="email"
            value={email}
            id="edit-email"
            onChange={onChange}
            type="email"
            className="form-control input-rounded"
          />
        </div>
      </div>
    </fieldset>
  </>
);

export default Users;
