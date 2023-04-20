import React from 'react'
import { RouteProps, Navigate } from 'react-router';

export const PrivateRoute = ({ children, ...rest}: RouteProps): JSX.Element => {

    const isAuthenticated = false;
    if (isAuthenticated) {
        return <Navigate to="/" />;
    }
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
      );
  }