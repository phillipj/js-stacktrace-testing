var Greeter = require('./lib/greeter').Greeter;

var greet = new Greeter();
setImmediate(function() {
	greet.sayHello('James');
});