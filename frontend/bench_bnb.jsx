var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var BenchStore = require('./stores/bench');
var ApiUtil = require('./util/api_util');
var Index = require('./components/index');
var Search = require('./components/search');
var BenchForm = require('./components/benchForm');



var App = React.createClass({
	render: function () {
		return (
			<div>
				<header className="header">
					<h1>Bench BNB!</h1>
					<h4>Find your dream bench.</h4>
				</header>
				{this.props.children}
			</div>);
	}

});

var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Search} />
		<Route path="benches/new" component={BenchForm} />
	</Route>
);

$(document).ready( function () {
	ReactDOM.render(<Router>{routes}</Router>, $('#content')[0]);
	}
);
