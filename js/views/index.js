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
				'click #submit-artist-form' : 'submitNewArtist'
			},
            
        	render : function() {

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
            }
		});

		return mainView;
	}
);