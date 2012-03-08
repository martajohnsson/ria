define([
	'jQuery',
	'Underscore',
	'Backbone',
    'ArtistCollection',
    'AlbumCollection',
	'views/index',
    'views/ArtistCollectionView',
    'views/newArtist'],

    function( $, _, Backbone, ArtistCollection, AlbumCollection ,IndexView, ArtistCollectionView, NewArtistView )
    {
		return AppRouter = Backbone.Router.extend({
			
            initialize : function() {
                
                //models
                this.artistCollection = new ArtistCollection();
                this.albumCollection = new AlbumCollection();
			},

			routes : {
				'' : 'Index',
                'newArtist' : 'NewArtist'
			},

			Index : function() {
                
                //indexView ger möjligheten att lägga till nya albums för en vald artist
                var indexView = new IndexView(this.artistCollection, this.albumCollection);
				indexView.render();
                
                var artistCollectionView = new ArtistCollectionView( { collection:this.artistCollection } );
                artistCollectionView.render();

                $('#newAlbum').html( indexView.el );
                $('#library-holder').html( artistCollectionView.el ); 
                
			},
            
            NewArtist : function(){
                var newArtistView = new NewArtistView({ collection: this.artistCollection });
                newArtistView.render();
                
                newArtistView.on( 'artistAdded', function() {
						this.navigate('', { trigger : true } );
						newArtistView.remove();
				}, this );
            }
		});
});
