import React, { lazy, Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
const Message = lazy(() => import('@Components/Message'));
import { NavBar } from '@Components/components/NavBar/NavBar';
const Home = lazy(() => import('@Components/pages/Home'));
const Property = lazy(() => import('@Components/pages/Property'));
const Users = lazy(() => import('@Components/pages/Users'));
import { CNLoading } from '@Components/shared/CNLoading/CNLoading';

export const App = ({ title }) => {
  return (
    <>
      <Router>
        <NavBar currentTab={'properties'}></NavBar>
        <Suspense fallback={<CNLoading />}>
          <Switch>
            <Route path="/test">
              <Message />
            </Route>

            <Route path="/home" component={Home} />

            <Route path="/property" component={Property} />

            <Route path="/users" component={Users}></Route>
            <Route path="/">
              <Redirect
                to={{
                  pathname: '/home',
                }}
              />
            </Route>
          </Switch>
        </Suspense>
        {/* </Content> */}
      </Router>
    </>
  );
};
