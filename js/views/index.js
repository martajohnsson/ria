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
                
                //this.template = _.template($('#create-artist-template').html());
                
                this.template = _.template($('#create-album-template').html());
                this.artistCollection = artistCollection;
                this.albumCollection = albumCollection;
                
                //Bind a callback function to an object.
				//this.albumCollection.bind( 'add', this.addOneAlbum, this );
                //this.artistCollection.bind( 'add', this.addOneArtist, this );
			},
            
            events : {
				'click #submit-artist-form' : 'submitNewArtist',
                'keypress .artist-name' : 'onArtistEnter',
                'click #submit-album-form' : 'submitNewAlbum',
                'keypress .album-title' : 'onAlbumEnter',
			},
            
//            addOneAlbum : function( albumModel ) {
//				
//                albumModel.save();
//				// Reset the text-input-field.
//				$('.album-title').val('');
//			},
            
//            addOneArtist : function( artistModel ) {
//				
//                artistModel.save();
//				 //Reset the text-input-field.
//				$('.artist-name').val('');
//			},

        	render : function() {
                //window.localStorage.clear()
               this.$el.html( this.template({
					artist : this.artistCollection.models
				}));
               
			},
            
            //hämtar ut data from formulären och försöker skapa en ny artist 
            submitNewArtist : function (e) {
                
                var artistName = this.$('.artist-name').val();
                
                try{
                    this.artistCollection.create({
                        artistName : artistName
                    });
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