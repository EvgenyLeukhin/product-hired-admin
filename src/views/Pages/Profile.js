import React, { Component } from "react";
import { withHeaderTitle } from '../../components/Header/HeaderTitle';
import axios from 'axios';

import API_URL from '../../consts/apiUrl';

import "../Elements/List.scss";

class Profile extends Component {
    state = {
        error: false,
        name: '',
        surname: '',
        position: '',
        imageUrl: '',
        id: null,
        email: '',
        created: '',
        city: '',
        country: '',
        usersList: []
    }
    UNSAFE_componentWillMount() {
        this.props.setHeaderTitle('Profile');
    }

    componentDidMount() {
        const userId = localStorage.getItem('ph-admin-id');
        const userToken = localStorage.getItem('ph-admin-token');

        // get userData
        axios.get(`${API_URL}/api/api/users/${userId}`, {
            headers: { Authorization: userToken }
        })
            .then(res => {
                this.setState({
                    position: res.data.job_title,
                    name: res.data.name,
                    surname: res.data.surname,
                    imageUrl: res.data.image.url,
                    id: res.data.id,
                    email: res.data.email,
                    created: res.data.created,
                    city: res.data.location.name,
                    country: res.data.location.alias_region,
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({ error: true });
            });

        axios.get(`${API_URL}/api/api/users`, {
            headers: { Authorization: userToken }
        })
            .then(res => {
                console.log(res);
            })
    }

    render() {
        const { name, surname, position, imageUrl, id, email, created, city, country } = this.state;

        return (
            <section className="section-container">
                <div className="container-overlap bg-blue-500">
                    <div className="media m0 pv">
                        <div className="d-flex mr">
                            <a href="#dummy">
                                <img 
                                    alt="User"
                                    className="rounded-circle thumb64" 
                                    src={ imageUrl || 'img/user/01.jpg' }  />
                            </a>
                        </div>

                        <div className="media-body">
                            <h4 className="mt-sm mb0">{`${name} ${surname}`}</h4>
                            <span className="text-muted">
                                { name && 'Product Hired Administrator' }
                            </span>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 col-xl-8">
                            <form className="cardbox">

                                <h5 className="cardbox-heading pb0">Contact Information</h5>

                                <div className="cardbox-body">
                                    <table className="table table-striped">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <em className="ion-ios-contact icon-fw mr" />
                                                    Position
                                                </td>
                                                <td>
                                                    <span className="is-editable text-inherit" style={{ textTransform: 'capitalize'}}>
                                                        {position || ''}
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <em className="ion-ios-checkmark icon-fw mr" />
                                                    User ID
                                                </td>
                                                <td>
                                                    <span className="is-editable text-inherit">
                                                        {id || ''}
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <em className="ion-email icon-fw mr" />
                                                    Email
                                                </td>
                                                <td>
                                                    <span className="is-editable text-inherit">
                                                        <a href="#">{email || ''}</a>
                                                    </span>
                                                </td>
                                            </tr>
                                            

                                            <tr>
                                                <td>
                                                    <em className="ion-android-calendar icon-fw mr" />
                                                    Created
                                                </td>
                                                <td>
                                                    <span className="is-editable text-inherit">
                                                        {created.substring(0, 10) || ''}
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <em className="ion-android-home icon-fw mr" />
                                                    Location
                                                </td>
                                                <td>
                                                    <span className="is-editable text-inherit">
                                                        {`${city}, ${country}` || ''}
                                                    </span>
                                                </td>
                                            </tr>
                                            
                                            
                                        </tbody>
                                    </table>
                                </div>

                            </form>
                        </div>


                        {/* Admin list */}
                        <div className="col-lg-5 col-xl-4">
                            <div className="cardbox">
                                <div className="cardbox-heading">
                                    <h5 className="m-0">Admin list</h5>
                                </div>

                                <div className="mda-list">
                                    <div className="mda-list-item">
                                        <img
                                            className="mda-list-item-img"
                                            src="img/user/01.jpg"
                                            alt="List user"
                                        />

                                        <div className="mda-list-item-text mda-2-line">
                                            <h3>
                                                <a href="#">Eric Graves</a>
                                            </h3>
                                            <div className="text-muted text-ellipsis">
                                                Ut ac nisi id mauris
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mda-list-item">
                                        <img
                                            className="mda-list-item-img"
                                            src="img/user/02.jpg"
                                            alt="List user"
                                        />
                                        <div className="mda-list-item-text mda-2-line">
                                            <h3>
                                                <a href="#">Jessie Cox</a>
                                            </h3>
                                            <div className="text-muted text-ellipsis">
                                                Sed lacus nisl luctus
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mda-list-item">
                                        <img
                                            className="mda-list-item-img"
                                            src="img/user/03.jpg"
                                            alt="List user"
                                        />
                                        <div className="mda-list-item-text mda-2-line">
                                            <h3><a href="#">Marie Hall</a></h3>
                                            <div className="text-muted text-ellipsis">Donec congue sagittis mi</div>
                                        </div>
                                    </div>


                                    <div className="mda-list-item">
                                        <img
                                            className="mda-list-item-img"
                                            src="img/user/04.jpg"
                                            alt="List user"
                                        />
                                        <div className="mda-list-item-text mda-2-line">
                                            <h3><a href="#">Guy Carpenter</a></h3>
                                            <div className="text-muted text-ellipsis">Donec convallis arcu sit</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cardbox-body pv0 text-right">
                                    <a className="btn btn-flat btn-info" href="#">View all</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withHeaderTitle(Profile);
