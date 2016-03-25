var React = require('react');
var BenchStore = require('../stores/bench');


var Index = React.createClass({
	getInitialState: function () {
		return({ benches: BenchStore.all() });
	},

	componentDidMount: function () {
		this.benchListener = BenchStore.addListener(this._onChange);
		ApiUtil.fetchBenches();
	},

	_onChange: function () {
		this.setState({ benches: BenchStore.all() });
	},

	componentWillUnmount: function () {
		this.benchListener.remove();
	},


	render: function () {

		return(
			<div>WE'RE IN INDEX RENDER FUNCTION</div>
		);
	}

});

module.exports = Index;
