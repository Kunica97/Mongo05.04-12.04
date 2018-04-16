const User = require('./bd');
(async () => {
	let newUser = {login: 'Sophia Kunitsyna'};
	newUser = new User(newUser);
	await newUser.save();
	process.exit(0);
})();