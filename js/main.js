require.config({
	paths: {		
		'jquery': '../bower_components/jquery/dist/jquery',
		'moduleT' : 'moduleTest',
        'def' : 'defineJSTest'
	},
	shim: {
		'moduleT':['jquery']
	}
});
require(['moduleT','def'],
	function (Test) {
		Test.show()
		console.log($);
        
	}
);