define(
	[	
		'jQuery',
		'Underscore',
		'Backbone',
		'models/AlbumModel',
		'lib/backbone/backbone.localStorage'
	],

    function( $, _ ) {
	   
		var indexView = Backbone.View.extend({
			
            el : $('#newArtist'),
            
			initialize : function() {

			},
            
        	render : function() {
        	   
        	   $(this.el).append("<button id='addArtist'>Add new artist</button>");
			}
		});

		return indexView;
	}
);