var Browser = require("zombie");
browser = new Browser()
browser.visit("https://nimiqintest.blogspot.com/", function () {
	console.log(browser.dump());
	setInterval(function() {
		console.log(browser.html('p'));
	},1000); 
});
