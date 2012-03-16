define(
	['Backbone', 'Underscore', 'jQuery'],

	function(Backbone, _, $) {
	   
		return Backbone.View.extend({

			initialize : function() {
				this.template = _.template( $('#library-template').html() );  
			},

			events : {
				'click #remove' : 'remove',
				'click .songitem' : 'changeItem'
			},

			remove : function( e ) {
				// Destory the model.
				this.model.destroy();
			},

			changeItem : function() {
				var change = prompt("What do you want to change the value of " + this.model.get('albumTitle') + " to", this.model.get('albumTitle'))
				if (change!=null && change!="") {
					this.model.save({albumTitle: change});
					this.$el.empty();
					this.render();
				}
			},

			render : function() {
			 
				$(this.el).html( this.template({
					album : this.model.attributes
				}));

				return this;
			}
		});
});