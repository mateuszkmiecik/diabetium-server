var memory = {
};


exports.getMemory = function getMemory() {
	return memory;
};


exports.setEntries = function setEntries(data) {
	if(!memory[data.clientId]){
		memory[data.clientId] = {};
	}
	memory[data.clientId].entries = data.entries;
};