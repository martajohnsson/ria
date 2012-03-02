define([
	'Backbone',
	'AlbumCollection',
	'models/AlbumModel'
	], 
	
	function( Backbone, AlbumCollection, AlbumModel ) {
		var ArtistModel = Backbone.RelationalModel.extend({
			relations : [
		        {
		          type : Backbone.HasMany,
		          key : 'album',
		          relatedModel : AlbumModel,
		          includeInJSON : Backbone.Model.prototype.idAttribute,
		          collectionType : AlbumCollection,
		          reverseRelation : {
		            type : Backbone.HasOne,
		            key : 'artist'
		          }
		        }
		      ],
			/**
			  * @param {Array} attrs The attributes to validate.
			  * @returns {String} If something does not validate, return string
			  * (throw error in backbone.) does not run set or save on model.
			  */
			validate : function( attrs ) {
			if (  !attrs.artistName ) {
			       throw new Error( "The Artist object does not validate." ); 
				}
			}
		});

	return ArtistModel;
	}
);