import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as routes from '../../routes/path';

const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props => (
        localStorage.getItem('userId') ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: routes.UserRegister,
            state: { from: props.location },
          }}
          />
        )
      )}
    />
  );
};

export default PrivateRoute;
