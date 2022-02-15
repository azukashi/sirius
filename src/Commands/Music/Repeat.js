const { Message, Client } = require('discord.js');

module.exports = {
	name: 'repeat',
	aliases: ['loop'],
	/**
	 *
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (client, message, args) => {
		if (!message.member.voice.channel)
			return message.reply(`Please Join a Voice Channel First!`);
		const mode = args.join(' ');
		const queue = client.player.getQueue(message.guild, {
			metadata: {
				channel: message.channel,
			},
		});
		if (!mode)
			return message.reply({ content: 'Please specify a mode to use!' });
		if (mode === 'song' || 'track') {
			queue.setRepeatMode(1);
			message.channel.send({
				content: `:repeat_one: | Repeat enabled for current song!`,
			});
		} else if (mode === 'queue' || 'list') {
			queue.setRepeatMode(2);
			message.channel.send({
				content: `:repeat: | Repeat enabled for current queue list!`,
			});
		} else if (mode === 'off' || 'disable') {
			queue.setRepeatMode(0);
			message.channel.send({
				content: `:repeat: | Repeat is disabled.`,
			});
		} else {
			message.channel.send({ content: 'The option given is not valid!' });
		}
	},
};
