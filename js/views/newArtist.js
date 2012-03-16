define([
		'jQuery',
		'Underscore',
		'Backbone',
		'models/ArtistModel'
	],
	
	function( $, _, Backbone, ArtistModel ) {
	   
		var newArtistView = Backbone.View.extend({
		  
			el : $('#newArtist'),

			initialize : function() {
                
				$('#newArtist-wrapper').css( 'display', 'block' );
                
				this.template = _.template( $( '#create-artist-template' ).html() );
                
			},

			events : {
			 	'click #submit-artist-form' : 'submitNewArtist',
                'keypress .artist-name' : 'onArtistEnter',
			},


			render : function() {
				$(this.el).html( this.template );
			},
            
            
            //hämtar ut data from formulären och försöker skapa en ny artist 
            submitNewArtist : function (e) {
                
                try{
                    this.collection.create({
                    	artistName : this.$('.artist-name').val()
                    });
                    
                    this.trigger('artistAdded');

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

		});

		return newArtistView;
	}	
);