const Command = require("../../base/Command.js"),
Discord = require('discord.js');

class Setprefix extends Command {

    constructor (client) {
        super(client, {
            name: "changeprefix",
            description: (language) => language.get('SETPREFIX_DESCRIPTION'),
            dirname: __dirname,
            usage: "changeprefix [préfixe]",
            enabled: true,
            guildOnly: true,
            aliases: [],
            permission: "MANAGE_GUILD",
            botpermissions: [ "SEND_MESSAGES" ],
            nsfw: false,
            examples: "$changeprefix !",
            owner: false
        });
    }

    async run (message, args, membersdata, guild_data, data) {

        var prefix = args[0];
        if(!prefix) return message.channel.send(message.language.get('VALID_PREFIX'));
        if(prefix.length > 5) return message.channel.send(message.language.get('PREFIX_CHARACTERS'));

        // Update server data 
        this.client.databases[1].set(`${message.guild.id}.prefix`, prefix);

        // Sucess
        return message.channel.send(message.language.get('PREFIX_SUCCESS', (prefix)));
        
    }

}

module.exports = Setprefix;
