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
            
            events : {
				'click #submit-artist-form' : 'submitNewArtist',
                'keypress .artist-name' : 'onEnter'
			},
            
        	render : function() {
                //window.localStorage.clear()
               this.$el.html( this.template({
					artist : this.artistCollection.models
				}));
               
			},
            
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
            
            onEnter : function( e ) {
				if ( e.keyCode == 13) {
					this.submitNewArtist( e );
					return false;
				}
			},
		});

		return mainView;
	}
);