import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'views/App';
import Home from 'views/Home';
import CreateUser from 'views/CreateUser';
import UpdateUser from  'views/UpdateUser';
import Logout from 'views/logout';

const _ById = (id) => document.getElementById(id)

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='createUser' component={ CreateUser } />
      <Route path='updateUser' component={ UpdateUser } />
    </Route>
      <Route path="logout" component={Logout}></Route>
  </Router>,
  _ById('app') // eslint-disable-line
);
