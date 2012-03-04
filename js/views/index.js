define(
	[	
		'jQuery',
		'Underscore',
		'Backbone',
		'models/AlbumModel',
		'lib/backbone/backbone.localStorage'
	],

    function( $, _, Backbone, AlbumModel ) {
	   
		var mainView = Backbone.View.extend({
            
			initialize : function(artistCollection, albumCollection) {
                
                //Compiles JavaScript templates into functions that can be evaluated for rendering. 
                //Useful for rendering complicated bits of HTML from JSON data sources.
                
                //this.template = _.template($('#create-artist-template').html());
                this.template = _.template($('#create-album-template').html());
                
                this.artistCollection = artistCollection;
                this.albumCollection = albumCollection;
			},
            
            events : {
				'click #submit-artist-form' : 'submitNewArtist',
                'keypress .artist-name' : 'onArtistEnter',
                'click #submit-album-form' : 'submitNewAlbum',
                'keypress .album-title' : 'onAlbumEnter',
			},
            
        	render : function() {
                //window.localStorage.clear()
               this.$el.html( this.template({
					artist : this.artistCollection.models,
				}));              
			},
            
            //hämtar ut data from formulären och försöker skapa en ny artist 
            submitNewArtist : function (e) {
                
                var artistName = this.$('.artist-name').val();
                
                try{
                    this.artistCollection.create({
                        artistName : artistName
                    });
                    $('.artist-name').val('');
                } 
                catch(error) 
                {
                    console.log("Error: ", error.message);
                }
            },
            
            //anropar submitNewArtist när använadren trycker på E knappen
            onArtistEnter : function( e ) {
				if ( e.keyCode == 13) {
					this.submitNewArtist( e );
					return false;
				}
			},
            
            submitNewAlbum : function (e) {
                
                var album = this.$('.album-title').val();
                var artistId = this.$('.album-artist').val();
                var artist = this.artistCollection.get(artistId);
                
                try{
                    this.albumCollection.create({
                        albumTitle : album,
                        artist : artist
                    });
                    $('.album-title').val('');
                } 
                catch(error) 
                {
                    console.log("Error: ", error.message);
                }
            },
            
            onAlbumEnter : function( e ) {
				if ( e.keyCode == 13) {
					this.submitNewAlbum( e );
					return false;
				}
			},
		});

		return mainView;
	}
);