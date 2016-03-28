var React = require('react');
var FilterActions = require('../actions/filter_actions');

var SeatFilter = React.createClass({
	//add max & min seating bounds into params
	getInitialState: function () {
		return({
			maxSeats: null,
			minSeats: null

		});
	},

	handleNewMax: function (e) {
		this.setState({ maxSeats: e.currentTarget.value });

		var filterParams = this.props.filterParams;
		// debugger;
		filterParams.maxSeats = e.currentTarget.value;
		FilterActions.receiveNewFilters(filterParams);

	},

	handleNewMin: function (e) {
		this.setState({ minSeats: e.currentTarget.value });

		var filterParams = this.props.filterParams;
		filterParams.minSeats = e.currentTarget.value;
		FilterActions.receiveNewFilters(filterParams);
	},

	render: function () {
		return(
			<form className="seatFilter" >
				<h3>Filter by number of seats</h3>
				<label>Minimum
					<input type="text" onChange={this.handleNewMin} placeholder="so few seats" value={this.state.minSeats} />
				</label>

				<label>Maximum
					<input type="text" onChange={this.handleNewMax} placeholder="all the seats" value={this.state.maxSeats} />
				</label>

			</form>
		);
	}
});

module.exports = SeatFilter;
