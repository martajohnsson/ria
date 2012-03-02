define([
	'jQuery',
	'Underscore',
	'Backbone',
	'router' ],

	function( $, _, Backbone, Router ) {
		return {
			init : function() {
				var router = new Router();
				Backbone.history.start();
			}
	}
});