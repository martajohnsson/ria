define(
	[	
		'jQuery',
		'Underscore',
		'Backbone',
		'models/AlbumModel',
		'lib/backbone/backbone.localStorage'
	],

    function( $, _, Backbone, Albummodel ) {
	   
		var mainView = Backbone.View.extend({
            
			initialize : function(artistCollection, albumCollection) {
                
                //this.template = _.template($('#create-artist-template').html());
                this.template = _.template($('#create-album-template').html());
                this.artistCollection = artistCollection;
                this.albumCollection = albumCollection;
			},
            
            events : {
				'click #submit-artist-form' : 'submitNewArtist',
                'keypress .artist-name' : 'onEnter',
                'click #submit-album-form' : 'submitNewAlbum'
			},
            
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
            onEnter : function( e ) {
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
                } 
                catch(error) 
                {
                    console.log("Error: ", error.message);
                }
            },
		});

		return mainView;
	}
);