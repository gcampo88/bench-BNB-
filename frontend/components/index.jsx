var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');
var BenchDetail = require('./benchDetail');

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
		// debugger;
	},

	componentWillUnmount: function () {
		this.benchListener.remove();
	},


	render: function () {
		var that = this;
		var benchesToRender = this.state.benches.map(function (bench) {
			return (<BenchDetail bench={bench} history={that.props.history}/>);
		});

		return(
			<ul className="index">
				<h3>Some of the benches available in this area:</h3>
				{benchesToRender}
			</ul>
		);
	}

});

module.exports = Index;
