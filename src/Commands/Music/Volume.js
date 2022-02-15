const { Message, Client } = require('discord.js');

module.exports = {
	name: 'volume',
	aliases: ['vol', 'set-vol'],
	/**
	 *
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (client, message, args) => {
		if (!message.member.voice.channel)
			return message.reply(`Please Join a Voice Channel First!`);
		const amount = args.join(' ');
		if (!amount)
			return message.reply('Please specify ammount to set! (1 - 100)');
		const queue = client.player.getQueue(message.guild, {
			metadata: {
				channel: message.channel,
			},
		});

		queue.setVolume(true);

		return await message.channel.send({
			content: `Set current volume to **${amount}**`,
		});
	},
};
