import React, { Suspense } from 'react';
import { CNLoading } from '@Components/shared/CNLoading/CNLoading';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import loadable from '@loadable/component';

const FormAddRoom = loadable(() => import('./form/AddRoom'), {
  fallback: <CNLoading />,
});
const HomeListPage = loadable(() => import('../Property/list/index'), {
  fallback: <CNLoading />,
});

const Users = (props) => {
  const { path } = useRouteMatch();
  console.log('🚀 ~ path', path);

  return (
    <>
      <Suspense fallback={<CNLoading />}>
        <Switch>
          <Route path={`${path}/add-room`} component={FormAddRoom} />
          <Route path={`${path}`} component={HomeListPage} />
          {/* <Route path="/" /> */}
        </Switch>
      </Suspense>
    </>
  );
};
export default Users;
