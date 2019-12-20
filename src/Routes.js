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

const Users     = lazy(() => import('./views/Pages/Users'));
const Companies = lazy(() => import('./views/Pages/Companies'));
const Talents   = lazy(() => import('./views/Pages/Talents'));
const Employers = lazy(() => import('./views/Pages/Employers'));
const Filters   = lazy(() => import('./views/Pages/Filters'));
const Jobs      = lazy(() => import('./views/Pages/Jobs'));
const Skills    = lazy(() => import('./views/Pages/Skills'));
const Roles     = lazy(() => import('./views/Pages/Roles'));
const Plans     = lazy(() => import('./views/Pages/Plans'));
const Profile   = lazy(() => import('./views/Pages/Profile'));


// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [ '/login', '/signup', '/recover', '/lock' ];

const Routes = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 500, exit: 500 };
  const token = localStorage.getItem('ph-admin-token');

  const animationName = 'rag-fadeIn';

  if (listofPages.indexOf(location.pathname) > -1 && !token) {
    return (
      // Page Layout component wrapper
      <User.Layout>
        <Switch location={location}>
          <Route path="/login" component={waitFor(User.Login)}/>
        </Switch>
      </User.Layout>
    );
  } else {
    if (token) {
      return (

        // Layout component wrapper
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

    } else {
      // clean localStorage
      localStorage.removeItem('ph-admin-id');
      localStorage.removeItem('ph-admin-token');
      localStorage.removeItem('ph-admin-username');
      localStorage.removeItem('ph-admin-avatar');

      return <Redirect to='/login' />;
    }
  }
}

export default withRouter(Routes);
