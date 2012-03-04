define(
	[
		'Backbone', 
		'views/libraryItem'
	],

	function( Backbone, LibraryItemView )  {
		var artistView = Backbone.View.extend({
			className : 'artist',

			initialize : function() {
			},

			render : function() {
			     //visar H2 med artist namn
				this.$el.append( '<h2>'+this.model.attributes.artistName+'</h2>' );
                
                //och för varje sådan artist visar en lista med dess albums
				if(this.model.attributes.album){
					var albumCount = this.model.attributes.album.models.length;
					for( var i = 0; i < albumCount; i++ ) {
						var libraryItemView = new LibraryItemView( { model : this.model.attributes.album.models[i] } );
						this.$el.append( libraryItemView.render().$el );
					}
				}
				return this;
			}
		});

		return artistView;
	}
);


