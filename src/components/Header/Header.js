import React, { Component } from "react";
import pubsub from 'pubsub-js';
import axios from 'axios';
import API_URL from '../../consts/apiUrl';

import { Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Alert, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './Header.scss';
import './HeaderMenuLinks.scss';

import SpinnerFull from "../SpinnerFull";

class Header extends Component {

    state = {
        pageTitle: '',
        navIcon: 'menu-link-slide',
        dropdownOpen: false,
        logOutSuccsess: false,
        loading: false,
        error: false,
        redirect: false
    }

    UNSAFE_componentWillMount() {
        this.pubsub_token = pubsub.subscribe('setPageTitle', (ev, title) => {
            this.setState({pageTitle: title});
        });
        this.pubsub_token_icon = pubsub.subscribe('setNavIcon', (ev, icon) => {
            this.setState({navIcon: icon});
        });
    }

    componentWillUnmount() {
        pubsub.unsubscribe(this.pubsub_token);
        pubsub.unsubscribe(this.pubsub_token_icon);
    }

    // showSearch(e) {
    //     e.preventDefault();
    //     pubsub.publish('showsearch');
    // }

    showSettings(e) {
        e.preventDefault();
        pubsub.publish('showsettings');
    }

    toggle = () => {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    logOut = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const userToken = localStorage.getItem('ph-admin-token');

        axios.post(
            `${API_URL}/api/api/users/logout`, {},
            {
              headers: { Authorization: userToken }
            }
          )
          .then(() => {
            // remove token
            localStorage.removeItem('ph-admin-id');
            localStorage.removeItem('ph-admin-token');
            localStorage.removeItem('ph-admin-email');
      
            this.setState({ logOutSuccsess: true });
      
            // redirect
            setTimeout(() => {
              this.setState({ redirect: true });
            }, 1000);
          })

          .catch(() => {
            this.setState({ error: true, loading: false });

            setTimeout(() => {
                this.setState({ error: false });
              }, 2000);
          });
    }

    render() {
        const { navIcon, pageTitle, dropdownOpen } = this.state
        const { isOpenOnMobile, logOutSuccsess, error, redirect, loading } = this.state;

        return (
            <header className="header-container">
                { redirect && <Redirect to='/login' />}
                { error          && <Alert color="danger">Error</Alert> }
                { logOutSuccsess && <Alert color="success">Log out</Alert> }
                { loading && <SpinnerFull /> }
                <nav>
                    <ul className="d-lg-none">
                        <li>
                            <a id="sidebar-toggler" href="#dummylink1" className={"menu-link "+navIcon}>
                                <span><em/></span>
                            </a>
                        </li>
                    </ul>
                    <ul className="d-none d-lg-block">
                        <li>
                            <a id="offcanvas-toggler" href="#dummylink2" className={"menu-link "+navIcon}>
                                <span><em/></span>
                            </a>
                        </li>
                    </ul>
                    <h2 className="header-title">{pageTitle}</h2>

                    <ul className="float-right">
                        {/* <li>
                            <a href="#dummylink3" className="ripple" onClick={this.showSearch}>
                                <em className="ion-ios-search-strong"/>
                            </a>
                        </li> */}
                        <Dropdown id="basic-nav-dropdown" tag="li" isOpen={dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav className="has-badge ripple">
                              <em className="ion-person"/>
                              {/* <sup className="badge bg-danger">3</sup> */}
                            </DropdownToggle>

                            <DropdownMenu right className="md-dropdown-menu" >
                                <LinkContainer to="/profile">
                                    <DropdownItem>
                                        <em className="ion-home icon-fw"/>
                                        Profile
                                    </DropdownItem >
                                </LinkContainer>

                                {/* <LinkContainer to="/pages/messagesboard">
                                    <DropdownItem>
                                        <em className="ion-gear-a icon-fw"/>
                                        Messages
                                    </DropdownItem >
                                </LinkContainer> */}

                                <DropdownItem divider />
                                
                                <LinkContainer to="/login" onClick={this.logOut}>
                                    <DropdownItem>
                                        <em className="ion-log-out icon-fw"/>
                                        Logout
                                    </DropdownItem >
                                </LinkContainer>
                            </DropdownMenu>
                        </Dropdown>

                        <li>
                            <a href="#dummylink4" className="ripple" onClick={this.showSettings}>
                                <em className="ion-gear-b"/>
                            </a>
                        </li>
                    </ul>

                </nav>
            </header>
        );
    }
}

export default Header;
