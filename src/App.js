import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import * as routes from './Routes/path';
import './App.css';

import { WelComepage, UserRegister, HowTestWorks } from './containers';
import TestCategoty from './components/TestComponent/TestCategory';
import TestComponent from './components/TestComponent/TestComponent';

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Switch>
        <Route component={WelComepage} path={routes.WelComepage} exact />
        <Route component={UserRegister} path={routes.UserRegister} />
        <Route component={HowTestWorks} path={routes.HowTestWorks} />
        <Route component={TestComponent} path={routes.TestComponent} />
        <Route component={TestCategoty} path={routes.TestCategoty} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
