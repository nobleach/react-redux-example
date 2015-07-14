import React from 'react';
import {Route} from 'react-router';
import App from 'views/App';
import Home from 'views/Home';
import SignUp from 'views/SignUp';
import Login from 'views/Login';
import Search from 'views/Search';
import Product from 'views/Product';

export default (
  <Route component={App}>
    <Route path="/" component={Home}/>
    <Route path="/sign-up" component={SignUp}/>
    <Route path="/login" component={Login}/>
    <Route path="/search" component={Search}/>
    <Route path="/product" component={Product}/>
  </Route>
);
