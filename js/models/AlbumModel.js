define([
      'Backbone'
    ],
  function( Backbone ) {
    var AlbumModel = Backbone.RelationalModel.extend({
      
      validate : function( attrs ) {
        if (  !attrs.albumTitle) {
               throw new Error( "The Album object does not validate." );
        }
      }  
    });

    return AlbumModel;
  }
);