import React from 'react';
import { Input } from "reactstrap";

const Users = ({ surname, email, job_title, experience, emailVerified, status, roles, onChange }) => {
  return (
    <>
      <div>
        <label htmlFor="edit-surname">Surname</label>
        <Input
          id="edit-surname"
          type="text"
          value={surname}
          name="surname"
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="edit-email">Email</label>
        <Input
          id="edit-email"
          type="email"
          value={email}
          name="email"
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="edit-job-title">Job Title</label>
        <Input
          id="edit-job-title"
          type="text"
          value={job_title}
          name="job_title"
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="edit-experience">Experience</label>
        <Input
          id="edit-experience"
          type="number"
          value={experience}
          name="experience"
          onChange={onChange}
        />
      </div>

      <div className="checkbox-wrapper">
        <label htmlFor="edit-email-verified">Email verified</label>
        <Input
          id="edit-email-verified"
          type="checkbox"
          name="emailVerified"
          checked={emailVerified}
          onChange={onChange}
        />
      </div>

      <div className="checkbox-wrapper">
        <label htmlFor="edit-user-status">Active status</label>
        <Input
          id="edit-user-status"
          type="checkbox"
          name="status"
          checked={status}
          onChange={onChange}
        />
      </div>

      <div className="checkbox-wrapper">
        <label htmlFor="edit-admin-status">Admin status</label>
        <Input
          id="edit-admin-status"
          type="checkbox"
          name="roles"
          checked={roles.length && roles[0].name === 'admin' ? true : false} // w/o mapping
          disabled
        />
      </div>
    </>
  )
};

export default Users;
