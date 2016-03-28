var React = require('react');
var Map = require('./map');
var Index = require('./index');
// var BenchForm = require('./benchForm');

Search = React.createClass({
	clickMapHandler: function (coords) {
		this.props.history.push(
				{
					pathname: 'benches/new',
					query: coords
				 }
			);
	},

	render: function () {
		return(
			<div>
				<Map onClick={this.clickMapHandler}/>
				<Index className="index" />


			</div>
		);
	}

});

module.exports = Search;
