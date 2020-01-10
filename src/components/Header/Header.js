import React, { Component } from "react";
import pubsub from 'pubsub-js';

import { Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Alert, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import logOut from './../../ph-admin/api/logOut';

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

  showSettings(e) {
    e.preventDefault();
    pubsub.publish('showsettings');
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  logout = (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    logOut().then(() => {
      // logOutSuccsess alert
      this.setState({ logOutSuccsess: true });

      // redirect
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 1000);
    });
  }

  render() {
    const { navIcon, pageTitle, dropdownOpen } = this.state
    const { logOutSuccsess, error, redirect, loading } = this.state;

    return (
      <header className="header-container">
        { redirect       && <Redirect to='/login' />}
        { error          && <Alert color="danger">Error</Alert> }
        { logOutSuccsess && <Alert color="success">Log out</Alert> }
        { loading        && <SpinnerFull /> }

        <nav>
        <ul className="d-lg-none">
          <li>
            <a id="sidebar-toggler" href="#dummylink1" className={"menu-link "+navIcon}>
              <span><em /></span>
            </a>
          </li>
        </ul>

        <ul className="d-none d-lg-block">
          <li>
            <a id="offcanvas-toggler" href="#dummylink2" className={"menu-link "+navIcon}>
              <span><em /></span>
            </a>
          </li>
        </ul>

        <h2 className="header-title">{pageTitle}</h2>

        <ul className="float-right">
            <Dropdown id="basic-nav-dropdown" tag="li" isOpen={dropdownOpen} toggle={this.toggle}>
              <DropdownToggle nav className="has-badge ripple">
                <em className="ion-person"/>
              </DropdownToggle>

              <DropdownMenu right className="md-dropdown-menu">
                <LinkContainer to="/profile">
                  <DropdownItem>
                    <em className="ion-home icon-fw"/> Profile
                  </DropdownItem>
                </LinkContainer>

                <DropdownItem divider />

                <LinkContainer to="/login" onClick={this.logout}>
                  <DropdownItem>
                    <em className="ion-log-out icon-fw"/> Logout
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
