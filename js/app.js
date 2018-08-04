'use strict'
document.addEventListener('DOMContentLoaded', function() {
	main();
}, true);
var main = function () {
	var city = 'Moscow';
	showData();
	createSiteMap();
	showTable();
	weather(city);
	document.addEventListener('change', function() {
		var city = event.target.value;
		weather(city);
	});
}
function showTable() {
	createHead();
	start();
}
