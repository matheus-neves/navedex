import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CreateNaver from '../pages/CreateNaver';
import EditNaver from '../pages/EditNaver';

import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/cadastrar" component={SignUp} />
    <Route path="/home" component={Home} isPrivate />
    <Route path="/create-naver" component={CreateNaver} isPrivate />
    <Route path="/edit-naver/:naverId" component={EditNaver} isPrivate />
  </Switch>
);

export default Routes;
