var React = require('react');
var Map = require('./map');
var Index = require('./index');
var FilterStore = require('../stores/filter');
var ApiUtil = require('../util/api_util');
var SeatFilter = require('./seatFilter');

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
			<div className="search group">
				<Map onClick={this.clickMapHandler}/>
				<Index className="index" history={this.props.history}/>

				<SeatFilter className="seatFilter" filterParams={this.state.filterParams} />


			</div>
		);
	}

});

module.exports = Search;
