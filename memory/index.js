var memory = {
	entries: []
};


exports.getMemory = function getMemory() {
	return memory;
};


exports.setEntries = function setEntries(entries) {
	memory.entries = entries;
};