import { Login } from 'Pages/Account';
import { AppState } from 'Store';
import { AccountState } from 'Store/Account/types';
import React from 'react'
import { useSelector } from 'react-redux';
import { RouteProps, Navigate } from 'react-router';

export const AccountRoute = ({ children, ...rest}: RouteProps): JSX.Element => {
    const account: AccountState = useSelector((state: AppState) => state.account);
    if (account.token) {
      return <Navigate to="/admin" />;
    }else{
      <Login />;
    }
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
      );
  }