var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filter_constants');

var FilterStore = new Store(AppDispatcher);

var filterParams = {
	bounds: {},
	minSeat: "",
	maxSeat: ""
};

FilterStore.boundsParams = function () {
	return filterParams;
};

FilterStore.receiveParams = function (params) {
	filterParams = params;
};

FilterStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case FilterConstants.FILTERS_RECEIVED:
			FilterStore.receiveParams(payload.params);
			FilterStore.__emitChange();
			break;
	}
};


module.exports = FilterStore;
