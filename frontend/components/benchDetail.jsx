var React = require('react');


var BenchDetail = React.createClass({
	showDetailView: function () {
		var url = "benches/" + this.props.bench.id;
		this.props.history.push(url);
	},

	render: function () {
		return(
			<div className="index-item" onClick={this.showDetailView} bench={this.props.bench}>
				<em>description:   </em>
				{this.props.bench.description} <br />
			</div>
		);
	}
});








module.exports = BenchDetail;
