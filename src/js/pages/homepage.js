var template = require('../../templates/index.hbs'),
	content = require('../contentful/content');

module.exports = function() {
	window.onload = function() {
		content.getHomepage()
			.done(function(results) {
				console.log(results);
			});

		document.body.outerHTML = template({
			data: "An instantiated template!"
		});
	}
};
