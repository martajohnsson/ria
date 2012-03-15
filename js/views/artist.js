define(
	[
		'Backbone', 
		'views/libraryItem'
	],

	function( Backbone, LibraryItemView )  {
		var artistView = Backbone.View.extend({
			className : 'artist',

			events : {
				'click #removeArtist' : 'remove'
			},

			initialize : function() {
			},

			remove : function( e ) {
				this.model.destroy();
			},

			render : function() {
			     //visar H2 med artist namn
				this.$el.append( '<h2 class="artisth2">'+this.model.attributes.artistName+'</h2>' );
				this.$el.append('<img src="images/remove.png" alt="remove button" title="remove '+this.model.attributes.artistName+'" id="removeArtist" />');
                
                //och för varje sådan artist visar en lista med dess albums
				if ( this.model.attributes.album )
                {
					var albumCount = this.model.attributes.album.models.length;
                    
					for( var i = 0; i < albumCount; i++ ) 
                    {
						var libraryItemView = new LibraryItemView( {  model : this.model.attributes.album.models[i] } );
						this.$el.append( libraryItemView.render().$el );
					}
				}
				return this;
			}
		});

		return artistView;
	}
);


