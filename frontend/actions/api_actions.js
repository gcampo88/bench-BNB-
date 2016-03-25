var BenchConstants = require('../constants/bench_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

ApiActions = {
	receiveAll: function (benches) {
		AppDispatcher.dispatch({
			actionType: BenchConstants.BENCHES_RECEIVED,
			benches: benches
		});
	}


};


module.exports = ApiActions;
