require.config({
	paths: {		
		'jquery': '../bower_components/jquery/dist/jquery',
		'moduleT' : 'moduleTest'
	},
	shim: {
		'moduleT':['jquery']
	}
});
require(['moduleT'],
	function (Test) {
		Test.show()
		console.log($);
	}
);