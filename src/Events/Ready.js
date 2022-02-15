const client = require('../../index');

client.on('ready', () => {
	console.log(`${client.user.tag} is up and ready to go!`);
	client.user.setStatus('dnd');
	client.user.setActivity({
		name: `in falcxxdev's bed`,
		type: 'PLAYING',
	});
});
