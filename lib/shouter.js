function Shouter() {}

Shouter.prototype.shout = Shouter$shout;

function Shouter$shout(name) {
	throw new Error('Necessary with $ in function name?');
}

exports.Shouter = Shouter;
exports.shout = Shouter$shout;