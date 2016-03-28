var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var FilterStore = new Store(AppDispatcher);

var filterParams = {
	bounds: {},
	minSeat: "",
	maxSeat: ""
};

FilterStore.receiveParams = function (params) {
	filterParams = params;
	FilterActions.receiveNewFilters(filterParams);
};

FilterStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case expression:

			break;
		default:

	}
}


module.exports = FilterStore;
