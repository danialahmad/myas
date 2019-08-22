import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthHelper from '../../helpers/AuthHelper';

const PrivateRoute = ({ component: Component,role:role, ...rest }) => (
    <Route {...rest} render={(props) => (
        AuthHelper.isUserAuthenticated()
        ? checkForAuthorize(Component,props,role)
        : <Redirect to='/login' />
    )} />
  )

  function checkForAuthorize(Component,props,role){
    
     if(AuthHelper.isAuthorized(role)){
        return <Component {...props} />;
     }
     return <Redirect to='/401' />;
  }

  export default PrivateRoute;