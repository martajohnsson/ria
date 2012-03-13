define( ['order!lib/backbone/backbone-full',
		'order!lib/backbone/backbone.localStorage',
		'order!lib/backbone/backbone-relational'],
        
	function() {
		_.noConflict();
        $.noConflict();
        return Backbone.noConflict();
	}
);