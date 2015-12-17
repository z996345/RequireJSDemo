var path = require('path');
var express = require('express');
var webApp = express();
webApp.use(express.static(__dirname));
webApp.use(express.static(path.join(__dirname, '..')));

var yargs = require('yargs').options({
	  'port': {
			'default': 3050,
			'description' : 'Port to listen on.'
	  },
	  'help': {
			'alias' : 'h',
			'type' : 'boolean',
			'description' : 'Show this help.'
	  }
});

var argv = yargs.argv;
if (argv.help) {
	  return yargs.showHelp();
}

var server = webApp.listen(argv.port, function() {
	  console.log('Server runing on port %d', server.address().port);
});

server.on('error', function (e) {
	  if (e.code === 'EADDRINUSE') {
			console.log('Error: Port %d is already in use, select a different port.', argv.port);
			console.log('Example: node server.js --port %d', argv.port + 1);
	  } else if (e.code === 'EACCES') {
			console.log('Error: This process does not have permission to listen on port %d.', argv.port);
			if (argv.port < 1024) {
				  console.log('Try a port number higher than 1024.');
			}
	  }
	  console.log(e);
	  process.exit(1);
});

server.on('close', function() {
	  console.log('Server stopped.');
});

process.on('SIGINT', function() {
	  server.close(function() {
			process.exit(0);
	  });
});
