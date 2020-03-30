import React from 'react';
import { Link } from 'react-router-dom';

import { API_URL } from '../../api/apiUrl';

import Spinner from '../../../components/Spinner';
import getUserApplied    from './api/getUserApplied';

class UserApplied extends React.Component {
  state = {
    data: [],
    loading: false,
  }

  catchErrors = error => {
    const { name, statusCode, message } = error.response.data.error;
    if (statusCode === 401) {
      localStorage.removeItem('ph-admin-user-data');
      this.props.history.push('/login');

    } else {
      this.setState({
        errorAlertIsOpen: true,
        loading: false,
        alertType: 'error',
        alertIsOpen: true,
        alertErrorText: `${name}, ${message}`
      });
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    const { id } = this.props;

    getUserApplied(id).then(res => {
      const { data } = res;
      this.setState({ data, loading: false });
    }).catch(error => this.catchErrors(error));
  }

  render() {
    const { data, loading } = this.state;
    const { name, surname, email } = this.props;
    return (
      <div className="applied-container">
        <h4 className="ph-detail-page__title">Jobs Applied</h4>
        <div className="ph-detail-page__subtitle">
          <span>{`${name} ${surname}`}</span>&nbsp;
          <a href={`mailto:${email}`}>{email}</a>
        </div>

        {
          loading ? (
            <div className="ph-detail-page__is-loading"><Spinner /></div>
          ) : data.map(i => {
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
                    <a href={`tel:${i.phone}`}>{i.phone || ''}</a>
                  </div>

                  <div className="col-md-6" />

                  <div className="col-md-12">
                    <b>How do you know you are an amazing fit for this role?</b>
                    <p style={{ marginTop: '5px' }}>{i.vacancy.description}</p>
                  </div>

                  <div className="col-md-6">
                    <a
                      download
                      style={{ fontWeight: 'bold' }}
                      href={`${API_URL}/${i.url}`}
                      title="Click to download"
                      target="_blank"
                    >
                      Download CV
                    </a>
                  </div>

                </div>

              </div>
            );
          })
        }
      </div>
    );
  }
}

export default UserApplied;
