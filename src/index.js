import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import '../node_modules/bootstrap/scss/bootstrap.scss';
import AppRouter from './routes/AppRouter';

ReactDOM.render(
    <BrowserRouter basename='/myas/'>
        <AppRouter />
    </BrowserRouter>, document.querySelector('#root')
);
