var greeter = require('./lib/greeter');

setImmediate(function() {
	greeter.shout('Willeroy');
});