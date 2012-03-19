define(
	[
		'Backbone',
		'views/artist',
		'jQuery'
	],

	function( Backbone, ArtistView, $) {
		var ArtistCollectionView = Backbone.View.extend({

			initialize : function() {
				this.collection.bind( 'all', this.render, this );
			},

			render : function() {
				this.$el.empty();
				
				for( var i = 0; i < this.collection.length; i++ ) {
					var artistView = new ArtistView( { collection : this.collection,  model : this.collection.at( i ) } );
					this.$el.append(artistView.render().$el);
				}

				return this;
			}
		});
		return ArtistCollectionView;
	}
);