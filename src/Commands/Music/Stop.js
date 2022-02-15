const { Message, Client } = require('discord.js');

module.exports = {
	name: 'stop',
	aliases: ['dc'],
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

		queue.stop();

		return await message.channel.send({
			content: `:stop_button: | Stopped and disconnected from voice room`,
		});
	},
};
