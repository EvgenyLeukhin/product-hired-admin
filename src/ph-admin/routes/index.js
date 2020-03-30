import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

/* loader component for Suspense */
import Core        from '../../components/Core/Core';

import Companies       from './Companies/index.jsx';
import CompaniesDetail from './Companies/detail.jsx';

import Users        from './Users/index.jsx';
import UsersDetail  from './Users/detail.jsx';

import Jobs         from './Jobs/index.jsx';
import JobsDetail   from './Jobs/detail.jsx';

import Skills       from './Skills/index.jsx';
import SkillsDetail from './Skills/detail.jsx';

import Roles        from './Roles/index.jsx';
import RolesDetail  from './Roles/detail.jsx';

import Plans        from './Plans/index.jsx';
import PlansDetail  from './Plans/detail.jsx';

// common styles //
import '../../components/Bootstrap/Bootstrap';
import '../../components/Common/Common';
import '../../components/Colors/Colors';
import '../../components/FloatButton/FloatButton';
import '../../components/Utils/Utils';

import User from '../../views/User/User';


/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props} />;

const Routes = ({ location }) => {

  // get token
  const userData = JSON.parse(localStorage.getItem('ph-admin-user-data'));
  const token    = userData && userData.id;

  if (!token) {
    // clean localStorage
    localStorage.removeItem('ph-admin-user-data');

    // if not login
    return (
      <User.Layout>
        <Switch location={location}>
          <Route path="/login" component={waitFor(User.Login)}/>
          <Redirect to="/login" />
        </Switch>
      </User.Layout>
    );

  // if login (don't change Routes order)
  } else return (
    <Core>
      <Route path="/companies/:id" component={CompaniesDetail} />
      <Route path="/companies"     component={Companies} />

      <Route path="/users/:id"     component={UsersDetail} />
      <Route path="/users"         component={Users} />

      <Route path="/jobs/:id"      component={JobsDetail} />
      <Route path="/jobs"          component={Jobs} />

      <Route path="/skills/:id"    component={SkillsDetail} />
      <Route path="/skills"        component={Skills} />

      <Route path="/roles/:id"     component={RolesDetail} />
      <Route path="/roles"         component={Roles} />

      <Route path="/plans/:id"     component={PlansDetail} />
      <Route path="/plans"         component={Plans} />

      <Route path="*"              component={() => <h2>404 - Page not found</h2>} />

      {/* if wrong route */}
      <Redirect to="/companies" />
    </Core>
  );
}

export default withRouter(Routes);
