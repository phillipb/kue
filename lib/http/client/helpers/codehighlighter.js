Ember.Handlebars.helper('codeHighlighter', function(value, options) {
	var safeString = Ember.Handlebars.SafeString;
	var json = JSON.stringify(value, null, 2);
	return new safeString(hljs.highlightAuto(json).value);
});
