const { Message, Client } = require('discord.js');

module.exports = {
	name: 'pause',
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

		queue.setPaused(true);

		return await message.channel.send({
			content: `:pause_button: | Paused current song`,
		});
	},
};
