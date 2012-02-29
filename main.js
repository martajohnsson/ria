require.config({
	paths: {
		jQuery : 'jquery',
		Underscore : 'underscore',
		Backbone : 'backbone',
        MainRouter: 'src/routers/main',
	}
});

require( ['src/app'], function( App ) { App.init(); } );
