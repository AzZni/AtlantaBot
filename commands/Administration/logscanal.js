const Command = require("../../base/Command.js"),
Discord = require('discord.js');

class Setlogs extends Command {

    constructor (client) {
        super(client, {
            name: "logscanal",
            description: (language) => language.get('SETLOGS_DESCRIPTION'),
            dirname: __dirname,
            usage: "logscanals",
            enabled: true,
            guildOnly: true,
            aliases: [],
            permission: "MANAGE_GUILD",
            botpermissions: [ "SEND_MESSAGES" ],
            nsfw: false,
            examples: "$logscanal",
            owner: false
        });
    }

    async run (message, args, membersdata, guild_data, data) {
        
        // Update database
        this.client.databases[1].set(`${message.guild.id}.channels.modlogs`, message.channel.id);

        // Send success message
        message.channel.send(message.language.get('SETLOGS_SUCCESS', message.channel.id));
    }

}

module.exports = Setlogs;
