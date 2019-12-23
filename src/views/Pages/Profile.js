import React, { Component } from "react";
import axios from 'axios';

import { withHeaderTitle } from '../../components/Header/HeaderTitle';

import API_URL from '../../consts/apiUrl';
import "../Elements/List.scss";

class Profile extends Component {
  state = {
    error: false,
    name: '',
    position: '',
    avatar: '',
    id: null,
    email: '',
    created: '',
    city: '',
    country: '',
  }
  UNSAFE_componentWillMount() { this.props.setHeaderTitle('Profile') }

    componentDidMount() {
      // id & token
      const userData = JSON.parse(localStorage.getItem('ph-admin-user-data'));
      const token = userData && userData.id;
      const userId = userData && userData.userId;

      // get userData
      axios.get(`${API_URL}/api/api/users/${userId}`, {
        headers: { Authorization: token }
      })

      .then(res => {
        this.setState({
          name: `${res.data.name} ${res.data.surname}`,
          position: res.data.job_title,
          avatar: res.data.image.url,
          id: res.data.id,
          email: res.data.email,
          created: res.data.created,
          city: res.data.location.name,
          country: res.data.location.alias_region,
        });
      })

      .catch(error => {
        // TODO
        console.log(error);
        this.setState({ error: true });
      });
    }

    render() {
      const { name, position, avatar, id, email, created, city, country } = this.state;

      return (
        <section className="section-container">
          <div className="container-overlap bg-blue-500">
            <div className="media m0 pv">

              <div className="d-flex mr">
                <a href="#dummy">
                  <img alt="User" className="rounded-circle thumb64" src={ avatar || 'img/user/01.jpg' }  />
                </a>
              </div>

              <div className="media-body">
                <h4 className="mt-sm mb0">{ name || ''}</h4>
                <span className="text-muted" style={{ textTransform: 'capitalize' }}>
                  { position && `Product Hired ${position}` }
                </span>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 col-xl-8">
                <form className="cardbox">
                  <h5 className="cardbox-heading pb0">Contact Information</h5>

                    <div className="cardbox-body">
                      <table className="table table-striped">
                        <tbody>
                          <tr>
                            <td><em className="ion-ios-contact icon-fw mr" />Position</td>
                            <td>
                              <span className="is-editable text-inherit" style={{ textTransform: 'capitalize'}}>
                                {position || '—'}
                              </span>
                            </td>
                          </tr>

                          <tr>
                            <td><em className="ion-ios-checkmark icon-fw mr" />User ID</td>
                            <td><span className="is-editable text-inherit">{id || '—'}</span></td>
                          </tr>

                          <tr>
                            <td><em className="ion-email icon-fw mr" />Email</td>
                            <td>
                              <span className="is-editable text-inherit"><a href={`mailto:${email}`}>{email || '—'}</a></span>
                            </td>
                          </tr>


                          <tr>
                            <td><em className="ion-android-calendar icon-fw mr" />Created</td>
                            <td>
                              <span className="is-editable text-inherit">{created.substring(0, 10) || '—'}</span>
                            </td>
                          </tr>

                          <tr>
                            <td><em className="ion-android-home icon-fw mr" />Location</td>
                            <td>
                              <span className="is-editable text-inherit">
                                { city && `${city}, ${country}` || '—' }
                              </span>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default withHeaderTitle(Profile);
