import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import * as routes from './Routes/path';
import './App.css';

import { WelComepage, UserRegister } from './containers';

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Switch>
        <Route component={WelComepage} path={routes.WelComepage} exact />
        <Route component={UserRegister} path={routes.UserRegister} exact />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
