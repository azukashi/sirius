const client = require('../../index');

client.on('ready', () => {
	console.log(`${client.user.tag} is up and ready to go!`);
	client.user.setStatus('online');
	client.user.setActivity({
		type: 'COMPETING',
		name: `development branch`,
	});
});
