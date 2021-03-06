import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

// Vendor dependencies
import './Vendor';

// App Routes
import Routes from './ph-admin/routes';

import './components/Ripple/Ripple.init.js';

class App extends Component {

  componentDidMount() {
    const theme = localStorage.getItem('ph-admin-theme', theme);

    // add color theme if it saved in localStore
    if (theme) {
      document.body.classList.remove('theme-1');
      document.body.classList.add(theme);
    }
  }

  render() {

    // specify base href from env varible 'PUBLIC_URL'
    // use only if application isn't served from the root
    // for development it is forced to root only
    /* global PUBLIC_URL */
    const basename = process.env.NODE_ENV === 'development' ? '/' : (PUBLIC_URL || '/');

    return (
      <Router basename={basename}>
        <Routes />
      </Router>
    );
  }
}

export default App;
