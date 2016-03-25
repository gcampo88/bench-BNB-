var AppDispatcher = require('../dispatcher/dispatcher');
var ApiActions  = require('../actions/api_actions');

ApiUtil = {
	fetchBenches: function (params) {
		var query = params || "";
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
				console.log("failed ajax call");
			}
		});

	}


};

module.exports = ApiUtil;
