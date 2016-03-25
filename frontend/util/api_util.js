var AppDispatcher = require('../dispatcher/dispatcher');
var ApiActions  = require('../actions/api_actions');

ApiUtil = {
	fetchBenches: function () {
		$.ajax({
			url: "api/benches",
			type: "GET",
			dataType: "json",
			success: function (benches) {
				ApiActions.receiveAll(benches);
			}
		});

	}


};

module.exports = ApiUtil;
