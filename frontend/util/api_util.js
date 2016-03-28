var AppDispatcher = require('../dispatcher/dispatcher');
var ApiActions  = require('../actions/api_actions');

ApiUtil = {
	fetchBenches: function (params) {
		var query = params || "";
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
