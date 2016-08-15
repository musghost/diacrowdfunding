import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/main';

import {Projects} from './app/projects/projects';
import {Cases} from './app/cases/cases';
import {Upload} from './app/upload/upload';
import {Contact} from './app/contact/contact';
import {Platforms} from './app/platforms/platforms';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/cases" component={Cases}/>
    <Route path="/upload" component={Upload}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/platforms" component={Platforms}/>
  </Router>,
  document.getElementById('root')
);
