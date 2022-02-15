const client = require('../../index');

client.player.on('trackStart', (queue, track) => {
	queue.metadata.channel.send(`🎶 | Now playing : **${track.title}**!`);
});

client.player.on('channelEmpty', (queue) => {
	queue.metadata.channel.send(
		`:outbox_tray: | Channel is empty. Stopping the queue and leaving.`
	);
});

client.player.on('trackAdd', (queue, track) => {
	queue.metadata.channel.send(`🎶 | Added song to queue : **${track.title}**`);
});

client.player.on('error', (queue, error) => {
	queue.metadata.channel.send(
		`:x: | An error has been occured. Please check the console!`
	);
	console.log(error);
});
