var React = require('react');
var BenchStore = require('../stores/bench');


var Map = React.createClass({

	componentDidMount: function () {
		var mapDOMNode = this.refs.map;
		var mapOptions = {
			center: {lat: 40.712784, lng: -74.005941},
			zoom: 13
		};
		this.map = new google.maps.Map(mapDOMNode, mapOptions);
		this.listener = BenchStore.addListener(this._onChange);

		this.listenForIdleAfterMove();
		this.markers = [];
	},

	_onChange: function () {
		this.markers.forEach(function(marker) {
			marker.setMap(null);
		});

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

		this.markers.push(marker);



		marker.addListener('click', function () {
			alert(bench.description);
		});

	},

	listenForIdleAfterMove: function () {
		var that = this;
		this.map.addListener('idle', function (e) {
			var nE = that.map.getBounds().getNorthEast();
			var northEastParams = {
				lat: nE.lat(),
				lng: nE.lng()
			};


			var sW = that.map.getBounds().getSouthWest();
			var southWestParams = {
				lat: sW.lat(),
				lng: sW.lng()
			};

			var boundsParams = {
				bounds: {
						northEast: northEastParams,
						southWest: southWestParams
					}
				};

			ApiUtil.fetchBenches(boundsParams);
		});

		this.map.addListener("click", function (e) {
			var clickedLat = e.latLng.lat();
			var clickedLng = e.latLng.lng();
			var coords = {
				lat: clickedLat,
				lng: clickedLng
			};
			// debugger;
			that.props.onClick(coords);
		});

	},

	render: function () {
		return (
			<div className="map" ref="map"></div>
		);
	}

});

module.exports = Map;
