var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filter_constants');

var FilterStore = new Store(AppDispatcher);

var filterParams = {
	bounds: {},
	minSeats: "",
	maxSeats: ""
};

FilterStore.boundsParams = function () {
	return filterParams;
};

FilterStore.receiveParams = function (params) {
	// debugger;
	if (params.hasOwnProperty("minSeats")) {
		filterParams.minSeats = params.minSeats;
	}
	if (params.hasOwnProperty("maxSeats")) {
		filterParams.maxSeats = params.maxSeats;
	}
	if (params.hasOwnProperty("bounds")) {
		filterParams.bounds = params.bounds;
	}
};

FilterStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case FilterConstants.FILTERS_RECEIVED:
			FilterStore.receiveParams(payload.params);
			FilterStore.__emitChange();
			// debugger;
			break;
	}
};


module.exports = FilterStore;
