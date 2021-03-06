import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import pubsub from "pubsub-js";
import { withNamespaces, Trans } from "react-i18next";
import { NavLink } from 'react-router-dom';

import "./Sidebar.scss";

import SidebarRun from "./Sidebar.run";
import { SVGReplace } from "../Utils/Utils";

import Menu from "../../Menu.js";

//
// Stateless reusable components
// for Sidebar contructions
//

const SingleItemLabel = ({ label }) => (
  <span className="float-right nav-label">
    <span className={"badge " + label.className}>{label.value}</span>
  </span>
);

const SingleItemIcon = ({ src }) => (
  <span className="nav-icon">
    <SVGReplace src={src} className="invisible" />
  </span>
);

const SingleItem = ({ item }) => (
  <Link to={item.path} className="ripple">
    {item.label && <SingleItemLabel label={item.label} />}
    {item.icon && <SingleItemIcon src={item.icon} />}
    <span>{item.name}</span>
  </Link>
);

const SubMenuItem = ({ item, routeActive }) => [
  <a href={`#${item.name}`} className="ripple" key="0">
    <span className="float-right nav-caret">
      <em className="ion-ios-arrow-right" />
    </span>
    {item.label && <SingleItemLabel label={item.label} />}
    {item.icon && <SingleItemIcon src={item.icon} />}
    <span>{item.name}</span>
  </a>,
  <ul className="sidebar-subnav" key="1">
    {item.submenu.map((sitem, si) => (
      <li className={routeActive(sitem.path)} key={si}>
        <SingleItem item={sitem} />
      </li>
    ))}
  </ul>
];

class Sidebar extends Component {
  state = {
    sidebarModes: {
      header: true,
      toolbar: true,
      offcanvas: false
    },
    name: '',
    avatar: null,
  };

  UNSAFE_componentWillMount() {
    this.pubsub_token = pubsub.subscribe("sidebarmode", (msg, mode) => {
      this.setState({
        sidebarModes: {
          ...this.state.sidebarModes,
          [mode]: !this.state.sidebarModes[mode]
        }
      });

      if (mode === "offcanvas") {
        document.body.classList[
          this.state.sidebarModes["offcanvas"] ? "add" : "remove"
        ]("sidebar-offcanvas");
      }
    });

    // Listen for routes changes in order to hide the sidebar on mobile
    this.props.history.listen(() => {
      document
        .querySelector(".layout-container")
        .classList.remove("sidebar-visible");
    });
  }

  componentDidMount() {
    SidebarRun();

    const userData = JSON.parse(localStorage.getItem('ph-admin-user-data'));

    // username
    const name = userData && `${userData.user.name} ${userData.user.surname}`;
    if (name) this.setState({ name });

    // avatar
    const avatar = userData && `${userData.user.image.url}`;
    if (avatar !== 'null') this.setState({ avatar });
  }

  componentWillUnmount() {
    pubsub.unsubscribe(this.pubsub_token);
  }

  routeActive = paths => {
    paths = Array.isArray(paths) ? paths : [paths];
    return paths.some(p => this.props.location.pathname.indexOf(p) > -1)
        ? "active"
        : "";
  };

    render() {
      const hasSubmenu = item => item.submenu && item.submenu.length;
      const { name, avatar } = this.state;

      return (
        <aside className="sidebar-container">
          {this.state.sidebarModes.header && (
            <div className="sidebar-header">
              <div className="float-right pt-lg text-muted invisible">
                <em className="ion-close-round" />
              </div>

              <div className="sidebar-header-logo">
                <NavLink to='/companies'>
                  <SVGReplace src="img/logo.svg" alt="Logo" width={120} />
                </NavLink>
                {/* <span className="sidebar-header-logo-text">PH Admin</span> */}
              </div>
            </div>
          )}

          <div className="sidebar-content">
            {this.state.sidebarModes.toolbar && (
              <div className="sidebar-toolbar text-center">
                <a href="#user">
                  <img className="rounded-circle thumb64" src={avatar || 'img/user/01.jpg'} alt="Profile" />
                </a>

                <div className="mt">
                  <Trans i18nKey="user.WELCOME" />, {`${name}`}
                </div>
              </div>
            )}

            <nav className="sidebar-nav">
              <ul>
                {/* Iterates over all sidebar menu items */}
                {Menu.map((item, i) => {
                  const routes = hasSubmenu(item)
                    ? item.submenu.map(i => i.path)
                    : [item.path];

                  return (
                    <li className={this.routeActive(routes)} key={i}>
                      {hasSubmenu(item)
                        ? <SubMenuItem item={item} routeActive={this.routeActive} />
                        : <SingleItem item={item} />
                      }
                    </li>
                  );
                })}
              </ul>
            </nav>

            <nav hidden={true}>
              <ul>
                <li><NavLink to='/Cards'>Cards</NavLink></li>
                <li>...</li>
                <li><NavLink to='/elements/bootstrapui'>Elements/Bootstrapui</NavLink></li>
                <li><NavLink to='/elements/buttons'>Elements/Buttons</NavLink></li>
                <li><NavLink to='/elements/colors'>Elements/Colors</NavLink></li>
                <li><NavLink to='/elements/grid'>Elements/Grid</NavLink></li>
                <li><NavLink to='/elements/gridMasonry'>Elements/GridMasonry</NavLink></li>
                <li><NavLink to='/elements/icons'>Elements/Icons</NavLink></li>
                <li><NavLink to='/elements/lists'>Elements/Lists</NavLink></li>
                <li><NavLink to='/elements/spinners'>Elements/Spinners</NavLink></li>
                <li><NavLink to='/elements/swal'>Elements/Swal</NavLink></li>
                <li><NavLink to='/elements/sweetalert'>Elements/Sweetalert</NavLink></li>
                <li><NavLink to='/elements/toastify'>Elements/Toastify</NavLink></li>
                <li><NavLink to='/elements/typography'>Elements/Typography</NavLink></li>
                <li><NavLink to='/elements/utilities'>Elements/Utilities</NavLink></li>
                <li><NavLink to='/elements/whiteframes'>Elements/Whiteframes</NavLink></li>
                <li>...</li>
                <li><NavLink to='/forms/advanced'>Forms/Advanced</NavLink></li>
                <li><NavLink to='/forms/classic'>Forms/Classic</NavLink></li>
                <li><NavLink to='/forms/dropzone'>Forms/Dropzone</NavLink></li>
                <li><NavLink to='/forms/editor'>Forms/Editor</NavLink></li>
                <li><NavLink to='/forms/material'>Forms/Material</NavLink></li>
                <li><NavLink to='/forms/validation'>Forms/Validation</NavLink></li>
                <li>...</li>
                <li><NavLink to='/layouts/boxed'>Layouts/LayoutsBoxed</NavLink></li>
                <li><NavLink to='/layouts/columns'>Layouts/LayoutsColumns</NavLink></li>
                <li><NavLink to='/layouts/containers'>Layouts/LayoutsContainers</NavLink></li>
                <li><NavLink to='/layouts/overlap'>Layouts/LayoutsOverlap</NavLink></li>
                <li><NavLink to='/layouts/tabs'>Layouts/LayoutsTabs</NavLink></li>
                <li>...</li>
                <li><NavLink to='/tables/classic'>Tables/Classic</NavLink></li>
                <li><NavLink to='/tables/datatable'>Tables/Datatable</NavLink></li>
                <li><NavLink to='/tables/datagrid'>Tables/Datagrid</NavLink></li>
              </ul>
            </nav>
          </div>
        </aside>
      );
    }
}

Sidebar.contextTypes = {
  router: PropTypes.object
};

Sidebar.propTypes = {
  location: PropTypes.object.isRequired
};

export default withNamespaces("translations")(withRouter(Sidebar));
