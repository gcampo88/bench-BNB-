var React = require('react');
var BenchStore = require('../stores/bench');

var BenchForm = React.createClass({
	getInitialState: function () {
		return (
			{
				 lat: this.props.location.query.lat,
				 lng: this.props.location.query.lng,
				 description: "",
				 seating: ""
			 }
		);
	},

	handleSubmit: function (e) {
		e.preventDefault();

		var params = { bench: this.state };
		ApiUtil.createBench(params);
		this.props.history.push("/");

		this.setState({
			lat: "",
			lng: "",
			description: "",
			seating: ""
		});

	},

	updateLat: function (e) {
		this.setState({ lat: e.currentTarget.value });
		console.log("updating!");
	},

	updateLng: function (e) {
		this.setState({ lng: e.currentTarget.value });
		console.log("updating!");

	},

	updateDescr: function (e) {
		this.setState({ description: e.currentTarget.value });
		console.log("updating!");

	},

	updateSeating: function (e) {
		this.setState({ seating: e.currentTarget.value });
		console.log("updating!");

	},

	render: function () {
		return(
			<form className="benchform" onSubmit={this.handleSubmit}>
				<h1>Add a new bench!</h1>

				<label>Latitude<br></br>
					<input type="text" placeholder="type latitude here" value={this.state.lat} onChange={this.updateLat}>
					</input>
				</label><br />

				<label>Longitude<br></br>
					<input type="text" placeholder="type longitude here" value={this.state.lng}  onChange={this.updateLng}>
					</input>
				</label><br />

				<label>Description<br></br>
					<textarea placeholder="brief description of bench" value={this.state.description}  onChange={this.updateDescr}>
					</textarea>
				</label><br />

				<label>Seating<br></br>
					<input type="text" placeholder="number of seats" value={this.state.seating} onChange={this.updateSeating}>
					</input>
				</label><br />

				<input type="submit" value="Create Bench!" />


			</form>


		);


	}

});

module.exports = BenchForm;
