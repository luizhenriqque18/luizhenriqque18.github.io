import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

import './configs/i18n.config';
import './assert/scss/thema.scss';
import 'bootstrap/js/src'
import './App.css';
import NavBar from "./ui/navbar";
import Home from "./components/home";
import About from "./components/about";
import Abstract from "./components/abstract";
import Portifolio from "./components/portifolio";

ReactDOM.render(
    <BrowserRouter>
        <div className="container-fluid">
            <div className="row fixed-top">
                <div className="col-md-12">
                    <NavBar/>
                </div>
            </div>
            <div className="row">
                <div id='home' className='col-md-12 p-0'>
                    <Home/>
                </div>
                <div id='about' className='col-md-12'>
                    <About/>
                </div>
                <div id='abstract' className='col-md-12'>
                    <Abstract/>
                </div>
                <div id='portfolio' className='col-md-12'>
                    <Portifolio/>
                </div>
            </div>
            {/*<Switch>
                <Route exact path={'/portfolio'} component={App}/>
                <Route exact path={'/blog'} component={Blog}/>
            </Switch>*/}
        </div>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
