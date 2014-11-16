var Shouter = require('./shouter').Shouter;
var shout = require('./shouter').shout;

function Greeter() {
	this.name = '';
	this.shouter = new Shouter();
}

Greeter.prototype.sayHello = sayHello;
Greeter.prototype.shout = function(name) {
	this.shouter.shout(name);
};

function sayHello(name) {
	throw new Error('What does my stacktrace look like?');
}

exports.Greeter = Greeter;
exports.sayHello = sayHello;
exports.shout = shout;