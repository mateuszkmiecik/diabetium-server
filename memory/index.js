var memory = {
};


exports.getMemory = function getMemory() {
	return memory;
};

exports.getOne = function getOne(id){
	return memory[id];
};


exports.setEntries = function setEntries(data) {
	if(!memory[data.clientId]){
		memory[data.clientId] = {};
	}
	memory[data.clientId].entries = data.entries;
};

exports.clear = function () {
	Object.keys(memory).forEach(function (k) {
		delete memory[k];
	})
};