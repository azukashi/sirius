const { Message, Client, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'play',
	aliases: ['p'],
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
		const query = args.join(' ');
		if (!query) return message.reply('Please specify a song to play!');
		const queue = client.player.createQueue(message.guild, {
			metadata: {
				channel: message.channel,
			},
		});

		try {
			if (!queue.connection) await queue.connect(message.member.voice.channel);
		} catch {
			queue.destroy();
			return await message.reply({
				content: 'Could not join your voice channel!',
			});
		}

		const track = await client.player
			.search(query, {
				requestedBy: message.author,
			})
			.then((x) => x.tracks[0]);
		if (!track)
			return await message.channel.send({
				content: `❌ | Track **${query}** not found!`,
			});

		queue.play(track);

		const embed = new MessageEmbed()
			.setTitle(`:white_check_mark: | Successfully added 1 song to queue!`)
			.setDescription(
				`Title : [${track.title}](${track.url})\nAuthor : ${
					track.author
				}\nViews : ${track.views.toLocaleString()}\nDuration : \`${
					track.duration
				}\`\nRequested by ${track.requestedBy}`
			)
			.setImage(track.thumbnail)
			.setColor(color)
			.setFooter({ text: `Source : ${capitalize(track.source)}` });
		return await message.channel.send({
			embeds: [embed],
		});
	},
};
