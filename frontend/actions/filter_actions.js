var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filter_constants');

var FilterActions = {
	receiveNewFilters: function (params) {
		// debugger;
		AppDispatcher.dispatch({
			actionType: FilterConstants.FILTERS_RECEIVED,
			params: params
		});
	}


};


module.exports = FilterActions;
