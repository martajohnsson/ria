define(
	['Backbone', 'Underscore', 'jQuery'],

	function(Backbone, _, $) {
	   
		return Backbone.View.extend({

			initialize : function() {
				this.template = _.template( $('#library-template').html() );  
			},

			events : {
				'click #remove' : 'remove'
			},

			remove : function( e ) {
				// Destory the model.
				this.model.destroy();
			},

			render : function() {
			 
				$(this.el).html( this.template({
					album : this.model.attributes
				}));

				return this;
			}
		});
	}
);