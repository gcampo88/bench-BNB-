var React = require('react');
var ApiUtil = require('../util/api_util');
var BenchStore = require('../stores/bench');

var BenchDetailItem = React.createClass({

	getCurrentBench: function () {
		console.log("in get current bench and state is now" + this.state);
		return { bench: BenchStore.find(parseInt(this.props.params.benchId)) };
	},


	_onChange: function () {
		console.log("in on change and state is now"  + this.state);

		// this.setState(this.getCurrentBench());
	},

	getInitialState: function () {
		console.log("in get initial state and state is now"  + this.state);

		return this.getCurrentBench();
	},

	componentWillReceiveProps: function (newProps) {
		console.log("in will receive props and state is now"  + this.state);

		// debugger;
		ApiUtil.fetchSingleBench(parseInt(this.props.params.benchId));
	},

	componentDidMount: function () {
		// debugger;
		console.log("in did mount and state is now"  + this.state);

		this.listener = BenchStore.addListener(this._onChange);

		ApiUtil.fetchSingleBench(parseInt(this.props.params.benchId));
	},

	componentWillUnmount: function () {
		this.listener.remove();
	},


	render: function () {
		console.log("in render and state is now"  + this.state);
		debugger;
		if (this.state.bench === undefined) { return <div>Undefined. why?</div>; }

		debugger;
		return (<div>
			latitude: {this.state.bench.lat} <br />
			longitude: {this.state.bench.lng} <br />
			description: {this.state.bench.description} <br />
			seating: {this.state.bench.seating} <br />
		</div>);
	}
});


module.exports = BenchDetailItem;
