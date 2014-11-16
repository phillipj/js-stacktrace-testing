var greeter = require('./lib/greeter');

setImmediate(function() {
	greeter.sayHello('James');
});