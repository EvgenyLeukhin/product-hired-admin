import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* loader component for Suspense */
import PageLoader from './components/Common/PageLoader';

/* eslint-disable-next-line */
import Core from './components/Core/Core';
/* eslint-disable-next-line */
import Bootstrap from './components/Bootstrap/Bootstrap';
/* eslint-disable-next-line */
import Common from './components/Common/Common';
/* eslint-disable-next-line */
import Colors from './components/Colors/Colors';
/* eslint-disable-next-line */
import FloatButton from './components/FloatButton/FloatButton';
/* eslint-disable-next-line */
import Utils from './components/Utils/Utils';

import User from './views/User/User';

/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props}/>;

const Dashboard = lazy(() => import('./views/Dashboard/Dashboard'));
const Cards = lazy(() => import('./views/Cards/Cards'));
const Charts = lazy(() => import('./views/Charts/Charts'));
const Forms = lazy(() => import('./views/Forms/Forms'));
const Elements = lazy(() => import('./views/Elements/Elements'));
const Tables = lazy(() => import('./views/Tables/Tables'));
const Layouts = lazy(() => import('./views/Layouts/Layouts'));
const Maps = lazy(() => import('./views/Maps/Maps'));
const Pages = lazy(() => import('./views/Pages/Pages'));


// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
    '/login',
    '/signup',
    '/recover',
    '/lock'
];

const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };
    const token = localStorage.getItem('ph-admin-token');

    const animationName = 'rag-fadeIn';

    if(listofPages.indexOf(location.pathname) > -1 && !token) {
        return (
            // Page Layout component wrapper
            <User.Layout>
                <Switch location={location}>
                    <Route path="/login" component={waitFor(User.Login)}/>
                </Switch>
            </User.Layout>
        )
    }
    else {
        if (token) {
            return (
                // Layout component wrapper
                <Core>
                  <TransitionGroup>
                    <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
                        <div>
                            <Suspense fallback={<PageLoader/>}>
                                <Switch location={location}>
                                    <Route path="/dashboard" component={waitFor(Dashboard)}/>
                                    <Route path="/cards" component={waitFor(Cards)}/>
                                    <Route path="/charts" component={waitFor(Charts)}/>
                                    <Route path="/forms" component={waitFor(Forms)}/>
                                    <Route path="/tables" component={waitFor(Tables)}/>
                                    <Route path="/layouts" component={waitFor(Layouts)}/>
                                    <Route path="/elements" component={waitFor(Elements)}/>
                                    <Route path="/maps" component={waitFor(Maps)}/>
                                    <Route path="/pages" component={waitFor(Pages)}/>
    
                                    <Redirect to="/dashboard"/>
                                </Switch>
                            </Suspense>
                        </div>
                    </CSSTransition>
                  </TransitionGroup>
                </Core>
            );
        } else {
            return (
                <Redirect to='/login' />
            )
        }
        
    }
}

export default withRouter(Routes);
