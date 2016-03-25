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
				console.log(benches.length + " currently been fetched")
				ApiActions.receiveAll(benches);
			},
			error: function () {
				// debugger;
				console.log("failed ajax call, query was:" + query);
			}
		});

	}


};

module.exports = ApiUtil;
