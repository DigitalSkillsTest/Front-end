import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as routes from './routes/path';
import { Loader } from './components/CommonComponent';
import PrivateRoute from './components/HOC/PrivateRoute';

import {
  WelComepage,
  UserRegister,
  HowTestWorks,
  TestStart,
  TestFinish,
  TestResult,
  TestResultByCategory,
  SendMail,
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
          <PrivateRoute component={TestStart} path={routes.TestStart} />
          <PrivateRoute component={TestFinish} path={routes.TestFinish} />
          <PrivateRoute component={SendMail} path={routes.SendMail} />
          <PrivateRoute component={TestResultByCategory} path={routes.TestResultByCategory} />
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
