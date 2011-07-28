// For the demos, we don't want the form submission to go anywere.
// We'll just stop the default behaviour and then refresh the page
document.forms[0].onsubmit = function () {
	alert('All fields valid, form submission is a go. Refreshing page...');
	window.location.reload(true);
	return false;
};