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
		var benchesToRender = this.state.benches.map(function (bench) {
			return (<li>{bench.description}</li>);
		});
		return(
			<ul>
				<h3>Some of the benches available in this area:</h3>
				{benchesToRender}
			</ul>
		);
	}

});

module.exports = Index;
