var React = require('react');
var Map = require('./map');
var Index = require('./index');
var Bootstrap = require('bootstrap');

Search = React.createClass({

	render: function () {
		return(
			<div className="container">
				<Map />
				<Index />
			</div>
		);
	}

});

module.exports = Search;
