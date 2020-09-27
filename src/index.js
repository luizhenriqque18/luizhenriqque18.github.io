import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

import './configs/i18n.config';
import './assert/scss/thema.scss';
import 'bootstrap/js/src'

import App from './App';
import Blog from './blog'
import NavBar from "./ui/navbar";
import br from "./assert/image/brazil.png";
import usa from "./assert/image/usa.png";
import ReactMarkdown from "react-markdown";

ReactDOM.render(
    <BrowserRouter>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <NavBar/>
                </div>
            </div>
            <Switch>
                <Route exact path={'/portfolio'} component={App}/>
                <Route exact path={'/blog'} component={Blog}/>
            </Switch>
        </div>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
