define([
	'Backbone',
	'models/ArtistModel',
	],

	function( Backbone, ArtistModel ) {
	
    	var ArtistCollection = Backbone.Collection.extend({
    		model : ArtistModel,
    
    		localStorage : new Store( "Artists" ),
    
    		initialize : function() {
    			this.fetch();
    
    			// If collection is empty, create defaults.
    			if ( this.models.length === 0 ) {
                    this.create( { artistName : 'Madonna' } );
                    this.create( { artistName : 'Kazik' } );
                    this.create( { artistName : 'Zorro' } );
    			}
    		}
    	});
    
    	return ArtistCollection;
	}
);