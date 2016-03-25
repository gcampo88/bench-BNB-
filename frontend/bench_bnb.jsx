var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('./stores/bench');
var ApiUtil = require('./util/api_util');
var Index = require('./components/index');
var Search = require('./components/search');


$(document).ready( function () {
	ReactDOM.render(<Search />, $('#content')[0]);
	}
);
