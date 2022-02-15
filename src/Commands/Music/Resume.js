const { Message, Client } = require('discord.js');

module.exports = {
	name: 'resume',
	aliases: [],
	/**
	 *
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (client, message, args) => {
		if (!message.member.voice.channel)
			return message.reply(`Please Join a Voice Channel First!`);
		const queue = client.player.getQueue(message.guild, {
			metadata: {
				channel: message.channel,
			},
		});

		queue.setPaused(false);

		return await message.channel.send({
			content: `:play_pause: | Resumed current song`,
		});
	},
};
