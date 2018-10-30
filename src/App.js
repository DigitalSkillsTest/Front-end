import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withLocalize } from 'react-localize-redux';
import { renderToStaticMarkup } from 'react-dom/server';
import globalTranslations from './translations/global.json';
import estranslate from './translations/es.json';
import * as routes from './routes/path';
import { Loader, Timeout } from './components/CommonComponent';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.initialize({
      languages: [
        { name: 'Spanish', code: 'es' },
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup },
    });
    this.props.addTranslationForLanguage(estranslate, 'es');
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="container">
        {isLoading && <Loader isLoading={isLoading} />}
        <BrowserRouter basename="/dskills">
          <Switch>
            <Route component={WelComepage} path={routes.WelComepage} exact />
            <Route component={UserRegister} path={routes.UserRegister} exact />
            <PrivateRoute component={HowTestWorks} path={routes.HowTestWorks} exact />
            <PrivateRoute component={TestStart} path={routes.TestStart} exact />
            <PrivateRoute component={TestFinish} path={routes.TestFinish} exact />
            <PrivateRoute component={SendMail} path={routes.SendMail} exact />
            <PrivateRoute component={TestResultByCategory} path={routes.TestResultByCategory} exact />
            <PrivateRoute component={TestResult} path={routes.TestResult} exact />
            <Route component={Timeout} path={routes.Timeout} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({ isLoading: state.loader.isLoading, color: '' });

export default connect(mapStateToProps)(withLocalize(App));

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
