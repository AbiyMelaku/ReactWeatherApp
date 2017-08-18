var React = require('react');
var ReactDOM = require('react-dom');
//ES6 destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//var Router = require('react-router').Route;
//requiring our components here
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);