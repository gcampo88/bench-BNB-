var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

var _benches = [];

var BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
	// debugger;
	return _benches.slice();
};

BenchStore.resetBenches = function (benches) {
	_benches = benches;
};

BenchStore.addBench = function(bench) {
	_benches.push(bench);
};

BenchStore.find = function (id) {
	var found;
	_benches.forEach(function (bench) {
		if (bench.id === id) {
			found = bench;
		}
		return found;
	});
};

BenchStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case BenchConstants.BENCHES_RECEIVED:
			BenchStore.resetBenches(payload.benches);
			BenchStore.__emitChange();
			break;
		case BenchConstants.BENCH_RECEIVED:
			BenchStore.addBench(payload.bench);
			BenchStore.__emitChange();
			break;



	}

};


module.exports = BenchStore;
