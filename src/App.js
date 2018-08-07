import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as routes from './routes/path';
import Loader from './components/Loader';
import PrivateRoute from './components/HOC/PrivateRoute';
import TestCategoty from './components/TestComponent/TestCategory';
import TestComponent from './components/TestComponent/TestComponent';
import {
  WelComepage,
  UserRegister,
  HowTestWorks,
  TestFinish,
  TestResult,
} from './containers';

function App(props) {
  const { isLoading } = props;
  return (
    <div className="container">
      {isLoading && <Loader isLoading={isLoading} />}
      <BrowserRouter>
        <Switch>
          <Route component={WelComepage} path={routes.WelComepage} exact />
          <Route component={UserRegister} path={routes.UserRegister} />
          <PrivateRoute component={HowTestWorks} path={routes.HowTestWorks} />
          <PrivateRoute component={TestComponent} path={routes.TestComponent} />
          <PrivateRoute component={TestCategoty} path={routes.TestCategoty} />
          <PrivateRoute component={TestFinish} path={routes.TestFinish} />
          <PrivateRoute component={TestResult} path={routes.TestResult} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => ({ isLoading: state.loader.isLoading });

export default connect(mapStateToProps)(App);

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
