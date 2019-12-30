import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* loader component for Suspense */
import PageLoader  from './components/Common/PageLoader';
import Core        from './components/Core/Core';

// common styles //
import './components/Bootstrap/Bootstrap';
import './components/Common/Common';
import './components/Colors/Colors';
import './components/FloatButton/FloatButton';
import './components/Utils/Utils';

import User from './views/User/User';


/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props} />;

const Users     = lazy(() => import('./ph-admin/routes/Users'));
const Companies = lazy(() => import('./ph-admin/routes/Companies'));
const Talents   = lazy(() => import('./ph-admin/routes/Talents'));
const Employers = lazy(() => import('./ph-admin/routes/Employers'));
const Filters   = lazy(() => import('./ph-admin/routes/Filters'));
const Jobs      = lazy(() => import('./ph-admin/routes/Jobs'));
const Skills    = lazy(() => import('./ph-admin/routes/Skills'));
const Roles     = lazy(() => import('./ph-admin/routes/Roles'));
const Plans     = lazy(() => import('./ph-admin/routes/Plans'));
const Profile   = lazy(() => import('./ph-admin/routes/Profile'));


const Routes = ({ location }) => {
  const animationName = 'rag-fadeIn';
  const timeout       = { enter: 500, exit: 500 };
  const currentKey    = location.pathname.split('/')[1] || '/';

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

  // if login
  } else return (
    <Core>
      <TransitionGroup>
        <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>

          <div>
            <Suspense fallback={<PageLoader/>}>
              <Switch location={location}>
                <Route path="/companies" component={waitFor(Companies)} />
                <Route path="/users"     component={waitFor(Users)} />
                <Route path="/jobs"      component={waitFor(Jobs)} />
                <Route path="/talents"   component={waitFor(Talents)} />
                <Route path="/employers" component={waitFor(Employers)} />
                <Route path="/filters"   component={waitFor(Filters)} />
                <Route path="/skills"    component={waitFor(Skills)} />
                <Route path="/roles"     component={waitFor(Roles)} />
                <Route path="/plans"     component={waitFor(Plans)} />
                <Route path="/profile"   component={waitFor(Profile)} />

                <Redirect to="/companies" />
              </Switch>
            </Suspense>
          </div>

        </CSSTransition>
      </TransitionGroup>
    </Core>
  );
}

export default withRouter(Routes);
