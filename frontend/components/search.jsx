var React = require('react');
var Map = require('./map');
var Index = require('./index');


Search = React.createClass({

	render: function () {
		return(
			<div>
				<Map />
				<Index />
			</div>
		);
	}

});

module.exports = Search;
