const { Message, Client, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'now',
	aliases: ['np', 'now-playing'],
	/**
	 *
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (client, message, args) => {
		const capitalize = (str) => {
			return str.charAt(0).toUpperCase() + str.slice(1);
		};
		const color = message.guild.me.displayHexColor;
		if (!message.member.voice.channel)
			return message.reply(`Please Join a Voice Channel First!`);
		const queue = client.player.getQueue(message.guild, {
			metadata: {
				channel: message.channel,
			},
		});

		const current = queue.nowPlaying();
		const embed = new MessageEmbed()
			.setTitle(':play_pause: | Now Playing')
			.setDescription(
				`Title : [${current.title}](${current.url})\nAuthor : ${
					current.author
				}\nViews : ${current.views.toLocaleString()}\nDuration : \`${
					current.duration
				}\`\nRequested by ${current.requestedBy}`
			)
			.setImage(current.thumbnail)
			.setColor(color)
			.setFooter({ text: `Source : ${capitalize(current.source)}` });

		return await message.channel.send({
			embeds: [embed],
		});
	},
};
