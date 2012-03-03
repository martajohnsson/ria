define(
	[	
		'jQuery',
		'Underscore',
		'Backbone',
		//'models/AlbumModel',
		'lib/backbone/backbone.localStorage'
	],

    function( $, _, Backbone ) {
	   
		var mainView = Backbone.View.extend({
            
			initialize : function(artistCollection, albumCollection) {
                
                this.template = _.template($('#create-artist-template').html());
                this.artistCollection = artistCollection;
			},
            
        	render : function() {

               this.$el.html( this.template({
					artist : this.artistCollection.models
				}));
               
			}
		});

		return mainView;
	}
);