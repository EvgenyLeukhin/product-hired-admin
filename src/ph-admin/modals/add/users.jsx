import React from 'react';

const Users = ({ name, surname, password, email, onChange }) => (
  <fieldset>
    <div className="form-group row">
      <div className="col-md-6">
        <label htmlFor="edit-name">Name</label>

        <input
          required
          autoComplete="off"
          name="name"
          value={name}
          id="edit-name"
          onChange={onChange}
          type="text"
          className="form-control"
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="edit-surname">Surname</label>

        <input
          required
          autoComplete="off"
          name="surname"
          value={surname}
          id="edit-surname"
          onChange={onChange}
          type="text"
          className="form-control"
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="edit-password">Password</label>

        <input
          required
          autoComplete="off"
          name="password"
          value={password}
          id="edit-password"
          onChange={onChange}
          type="password"
          className="form-control"
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="edit-email">Email</label>

        <input
          required
          autoComplete="off"
          name="email"
          value={email}
          id="edit-email"
          onChange={onChange}
          type="email"
          className="form-control"
        />
      </div>
    </div>
  </fieldset>
);

export default Users;
