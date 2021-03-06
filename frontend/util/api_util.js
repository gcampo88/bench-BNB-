var AppDispatcher = require('../dispatcher/dispatcher');
var ApiActions  = require('../actions/api_actions');

ApiUtil = {
	fetchBenches: function (params) {
		var query;
		if (params) {
			query = { filters: params };
		} else {
			query = "";
		}
		// debugger;
		$.ajax({
			url: "api/benches",
			type: "GET",
			data: query,
			dataType: "json",
			success: function (benches) {
				ApiActions.receiveAll(benches);
			},
			error: function () {
				console.log("failed ajax get request");
			}
		});

	},

	fetchSingleBench: function (id) {
		$.ajax({
			url: "api/benches/" + id,
			type: "GET",
			dataType: "json",
			success: function (bench) {
				ApiActions.receiveSingleBench(bench);
			},
			error: function () {
				console.log("failed ajax get request for single bench");
			}
		});
	},

	createBench: function (params) {

		$.ajax({
			url: "api/benches",
			type: "POST",
			data: params,
			dataType: "json",
			success: function (benches) {
				ApiActions.receiveAll(benches);
			},
			error: function () {
				console.log("failed AJAX post request");
			}
		});

	}


};

module.exports = ApiUtil;
