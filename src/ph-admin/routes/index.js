import React from 'react';
import { withRouter, Switch, Route, Redirect, lazy } from 'react-router-dom';

/* loader component for Suspense */
const Core            = lazy(() => import('../../components/Core/Core'));
const Profile         = lazy(() => import('./UserProfile/'));

const Companies       = lazy(() => import('./Companies/index.jsx'));
const CompaniesDetail = lazy(() => import('./Companies/detail.jsx'));

const Users           = lazy(() => import('./Users/index.jsx'));
const UsersDetail     = lazy(() => import('./Users/detail.jsx'));

const Jobs            = lazy(() => import('./Jobs/index.jsx'));
const JobsDetail      = lazy(() => import('./Jobs/detail.jsx'));

const Skills          = lazy(() => import('./Skills/index.jsx'));
const SkillsDetail    = lazy(() => import('./Skills/detail.jsx'));

const Roles           = lazy(() => import('./Roles/index.jsx'));
const RolesDetail     = lazy(() => import('./Roles/detail.jsx'));

const Plans           = lazy(() => import('./Plans/index.jsx'));
const PlansDetail     = lazy(() => import('./Plans/detail.jsx'));

const Campaings       = lazy(() => import('./Campaings/index.jsx'));
const CampaingsDetail = lazy(() => import('./Campaings/detail.jsx'));

const PagesForAdvertising       = lazy(() => import('./PagesForAdvertising/index.jsx'));
const PagesForAdvertisingDetail = lazy(() => import('./PagesForAdvertising/detail.jsx'));


// import Core        from '../../components/Core/Core';
// import Profile     from './UserProfile/';

// import Companies       from './Companies/index.jsx';
// import CompaniesDetail from './Companies/detail.jsx';

// import Users        from './Users/index.jsx';
// import UsersDetail  from './Users/detail.jsx';

// import Jobs         from './Jobs/index.jsx';
// import JobsDetail   from './Jobs/detail.jsx';

// import Skills       from './Skills/index.jsx';
// import SkillsDetail from './Skills/detail.jsx';

// import Roles        from './Roles/index.jsx';
// import RolesDetail  from './Roles/detail.jsx';

// import Plans        from './Plans/index.jsx';
// import PlansDetail  from './Plans/detail.jsx';

// import Campaings       from './Campaings/index.jsx';
// import CampaingsDetail from './Campaings/detail.jsx';

// import PagesForAdvertising       from './PagesForAdvertising/index.jsx';
// import PagesForAdvertisingDetail from './PagesForAdvertising/detail.jsx';

// common styles //
import '../../components/Bootstrap/Bootstrap';
import '../../components/Common/Common';
import '../../components/Colors/Colors';
import '../../components/FloatButton/FloatButton';
import '../../components/Utils/Utils';

// import User from '../../views/User/User';
const User = lazy(() => import('../../views/User/User'));


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

      <Route path="/campaings/:id" component={CampaingsDetail} />
      <Route path="/campaings"     component={Campaings} />

      <Route path="/pages-for-advertising/:id" component={PagesForAdvertisingDetail} />
      <Route path="/pages-for-advertising"     component={PagesForAdvertising} />

      <Route path="/profile" component={Profile} />

      {/* <Route path="*"              component={() => <h2>404 - Page not found</h2>} /> */}

      {/* if wrong route */}
      {/* <Redirect to="/companies" /> */}
    </Core>
  );
}

export default withRouter(Routes);
