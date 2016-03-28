var React = require('react');
var Map = require('./map');
var Index = require('./index');
var FilterStore = require('../stores/filter');
// var BenchForm = require('./benchForm');

Search = React.createClass({
	getInitialState: function () {
		return({
			filterParams: FilterStore.boundsParams()
		});

	},

	componentDidMount: function () {
		var that = this;

		FilterStore.addListener( function () {
			var currentParams = FilterStore.boundsParams();
			ApiUtil.fetchBenches(currentParams);
			that.setState({ filterParams: currentParams });
		});
	},

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
