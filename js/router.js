define([
	'jQuery',
	'Underscore',
	'Backbone',
	'views/index'],

	function( $, _, Backbone, IndexView ) 
    {
		return AppRouter = Backbone.Router.extend({
			
            initialize : function() {

			},

			routes : {
				'' : 'Home'
			},

			Home : function() {
                
				var indexView = new IndexView();
				indexView.render();
			}
		});
});
