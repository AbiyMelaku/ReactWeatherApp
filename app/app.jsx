var React = require('react');
var ReactDOM = require('react-dom');
//ES6 destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//var Router = require('react-router').Route;
//requiring our components here
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load Foundation (using the CSS loader and the style loader to inject CSS into our HTML)
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css')
//require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');
//fire up foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);