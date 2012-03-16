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
                
                //template: Compiles JavaScript templates into functions that can be evaluated for rendering. 
                //Useful for rendering complicated bits of HTML from JSON data sources.
                
                this.template = _.template($('#create-album-template').html());
                
                this.artistCollection = artistCollection;
                this.albumCollection = albumCollection;
				this.artistCollection.bind( 'all', this.render, this );
			},
            
            events : {
                'click #submit-album-form' : 'submitNewAlbum',
                'keypress .album-title' : 'onAlbumEnter',
			},
            
        	render : function() {
                //window.localStorage.clear()
               //lägger till artist modelen för create-album-template och renderar ut html
               this.$el.html( this.template({
					artist : this.artistCollection.models
				}));   
            
			},

            //hämtar ut data from formulären och försöker skapa en ny album för en vald artist 
            submitNewAlbum : function (e) {
                $('#albumValidationMessage').css('visibility', 'hidden');
                
                if( $('.album-title').val() != '' )
                {
                   try {
                        this.albumCollection.create({
                            albumTitle : this.$('.album-title').val(),
                            artist : this.artistCollection.get( this.$('.album-artist').val() )
                        });
                        $('.album-title').val('');
                    } 
                    catch(error) 
                    {
                        console.log("Error: ", error.message);
                    } 
                }
                else
                {
                    $('#albumValidationMessage').css('visibility', 'visible');
                }
            },
            
            //anropar submitNewAlbum när använadren trycker på E knappen
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