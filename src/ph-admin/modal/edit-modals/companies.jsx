import React from 'react';
import { Input } from "reactstrap";

import Spinner from '../../../components/Spinner';

const Companies = props => {
  const {
    slug,
    domain,
    weight,
    onChange,

    // logo
    logo, logoLoading, onUploadLogo, fileInputLogo,

    // cover
    cover, coverLoading, onUploadCover, fileInputCover,

  } = props;

  return (
  <>
    <div>
      <label htmlFor="edit-domain">Domain</label>
      <Input
        id="edit-domain"
        type="text"
        value={domain}
        name="domain"
        onChange={onChange}
      />
    </div>

    <div>
      <label htmlFor="edit-slug">Slug</label>
      <Input
        id="edit-slug"
        type="text"
        value={slug}
        name="slug"
        onChange={onChange}
      />
    </div>

    <div>
      <label htmlFor="edit-weight">Weight</label>
      <Input
        id="edit-weight"
        type="number"
        value={weight}
        name="weight"
        onChange={onChange}
      />
    </div>

    {/* empty space */}
    <div />

    <div className="image-container">
      <label htmlFor="edit-logo">Logo</label>
      <Input
        // disabled
        id="edit-logo"
        type="url"
        value={logo}
        name="logo"
        onChange={onChange}
      />

      { logoLoading ? <Spinner /> : <img className="logo" src={logo} alt="logo" /> }

      <input type="file" ref={fileInputLogo} onChange={onUploadLogo} />
    </div>

    <div className="image-container">
      <label htmlFor="edit-cover">Cover</label>
      <Input
        // disabled
        id="edit-cover"
        type="url"
        value={cover}
        name="cover"
        onChange={onChange}
      />

      { coverLoading ? <Spinner /> : <img className="cover" src={cover} alt="cover" /> }

      <input type="file" ref={fileInputCover} onChange={onUploadCover} />
    </div>
  </>
  );
}

export default Companies;
