var React = require('react');
var BenchStore = require('../stores/bench');


var Map = React.createClass({

	// getInitialState: function () {
	//
	// },
	//
	componentDidMount: function () {
		var mapDOMNode = this.refs.map;
		var mapOptions = {
			center: {lat: 40.712784, lng: -74.005941},
			zoom: 13
		};
		this.map = new google.maps.Map(mapDOMNode, mapOptions);
		this.listener = BenchStore.addListener(this._onChange);

		this.listenForIdleAfterMove();
	},

	_onChange: function () {
		var benches = BenchStore.all();
		benches.forEach(this.addBench);
	},

	componentWillUnmount: function () {
		this.listener.remove();
	},

	addBench: function (bench) {
		var marker;
		var pos = new google.maps.LatLng(bench.lat, bench.lng);
		marker = new google.maps.Marker({
			position: pos,
			map: this.map
		});



		marker.addListener('click', function () {
			alert(bench.description);
		});

	},

	listenForIdleAfterMove: function () {
		var that = this;
		this.map.addListener('idle', function (e) {
			console.log("idling after move");
			ApiUtil.fetchBenches();
		});
	},

	render: function () {
		return (
			<div className="map" ref="map"></div>
		);
	}

});

module.exports = Map;
