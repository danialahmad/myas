import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRouter from '../components/Common/PrivateRouter';

import Login from '../pages/Login';
import Home from '../pages/Home/Home';
import Error401 from '../pages/Error/Error401';
import AuthHelper from '../helpers/AuthHelper';

import '../assets/css/style.css';
import '../assets/css/responsive.css';

const AppRouter = () => (
    <React.Fragment>
        {/*
       <Route exact path="/" render={() => (
            <Redirect to="/login/" />
        )} />
    */}
        <Route path="/login/" render={() => (
            AuthHelper.isUserAuthenticated()?<Redirect to="/" />:<Login/>
        )} />
        <PrivateRouter exact path="/" component={Home} />
        <Route path="/401/" component={Error401}/>
    </React.Fragment>
);

export default AppRouter;