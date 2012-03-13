define([
	'Backbone',
	'models/AlbumModel'
	],

	function( Backbone, AlbumModel ) {
	
    	var AlbumCollection = Backbone.Collection.extend({
    		model : AlbumModel,
    
    		localStorage : new Store("Albums"),
    
    		initialize : function() {
    			this.fetch();
    		},

            comparator : function( model ) {
                return model.get( 'albumTitle' );
            }
    	});
    
    	return AlbumCollection;	

	}
);