import React from 'react';
import { Link } from 'react-router-dom';

import { API_URL } from '../../api/apiUrl';


const UserApplied = props => {
  const { name, surname, email, appliedData } = props;

  return (
    <div className="applied-container">
      <h4 className="ph-detail-page__title">Jobs Applied</h4>
      <div className="ph-detail-page__subtitle">
        <span>{`${name} ${surname}`}</span>&nbsp;
        <a href={`mailto:${email}`}>{email}</a>
      </div>

      {
        appliedData.map(i => {
          return (
            <div className="cardbox  applied-container__item" key={i.id}>
              <div className="row">
                <div className="col-sm-6 applied-container__title">
                  <b>
                    <Link
                      to={`/jobs/${i.vacancy.id}`}
                      title={`/jobs/${i.vacancy.id}`}
                      target='_blank'
                    >
                      {i.vacancy.name}
                    </Link>
                  </b>
                </div>

                <div className="col-sm-6  text-right applied-container__locations">
                  <b>
                    <Link
                      style={{ fontWeight: 'normal' }}
                      to={`/companies/${i.vacancy.company.id}`}
                      title={`/companies/${i.vacancy.company.id}`}
                      target='_blank'
                    >
                      {i.vacancy.company.name}
                    </Link>
                  </b>

                  <ul className="locations-list">
                    {
                      i.vacancy.locations.map(j => {
                        if (j.alias_region) {
                          return <li>{`${j.name}, ${j.alias_region}`}</li>;
                        } else return <li>{j.name}</li>;
                      })
                    }
                  </ul>
                </div>

                <div className="col-md-3  applied-container__date">
                  <b>Applied</b><br/>
                  <span>{`${i.created.substring(0, 10)}` || ''}</span>
                </div>

                <div className="col-md-3  applied-container__phone">
                  <b>Phone</b><br/>
                  {
                    i.phone ? <a href={`tel:${i.phone}`}>{i.phone}</a> : 'ー'
                  }
                </div>

                <div className="col-md-3  applied-container__resume">
                  <b>Resume</b><br/>
                  {
                    <a
                      download
                      href={`${API_URL}${i.url}`}
                      title="Click to download"
                      target="_blank"
                    >
                      Download
                    </a>
                  }
                </div>

                <div className="col-md-3" />

                <div className="col-md-12">
                  <b>How do you know you are an amazing fit for this role?</b>
                  <p style={{ marginTop: '5px', marginBottom: 0 }}>{i.vacancy.description || 'ー'}</p>
                </div>

              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default UserApplied;
