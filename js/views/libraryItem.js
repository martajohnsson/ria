define(
	['Backbone'],

	function( Backbone ) {
	   
		var libraryItemView = Backbone.View.extend({

			initialize : function() {
				this.template = _.template( $('#library-template').html() );
                
			},

			render : function() {
				$(this.el).html( this.template({
					album : this.model.attributes
				}));

				return this;
			}
		});
	
		return libraryItemView;
	}
);