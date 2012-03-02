define([
      'Backbone'
    ],
  function( Backbone ) {
    var AlbumModel = Backbone.RelationalModel.extend({
      
      validate : function( attrs ) {
        if (  !attrs.content) {
               throw new Error( "The Album object does not validate." );
        }
      }  
    });

    return AlbumModel;
  }
);