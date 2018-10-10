module.exports = function (templateParams) {
	console.log('--------------------------------')
	console.log(templateParams)
	console.log('--------------------------------')
	var _cssList = ['index'];
	var webAssetsHelp = require('./webAssetsHelp.js')(templateParams, _cssList);
	var _html = "{% extends './layout.html' %} " +
		"{% block title %}{{title}}{% endblock %}" +
		"{% block styles %} " +
		webAssetsHelp.styles +
		"{% endblock %}" +
		'{% block content %}  {% include "../widget/index.html" %} {% endblock %}' +
		'{% block script%}' +
		webAssetsHelp.scripts +
		'{% endblock%}';
	return _html;
}