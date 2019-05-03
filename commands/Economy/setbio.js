const Command = require("../../base/Command.js"),
Discord = require('discord.js');

class Setbio extends Command {

    constructor (client) {
        super(client, {
            name: "setdesc",
            description: (language) => language.get('SETBIO_DESCRIPTION'),
            dirname: __dirname,
            usage: "setdesc [description]",
            enabled: true,
            guildOnly: false,
            aliases: [setdescription],
            permission: false,
            botpermissions: [ "SEND_MESSAGES" ],
            nsfw: false,
            examples: "$setdesc Chef de la faction FadoBot",
            owner: false
        });
    }

    async run (message, args, membersdata, guild_data, data) {
        var bio = args.join(' '); // Gets the description 
        // if the member has not entered a description, display an error message
        if(!bio) return message.channel.send(message.language.get('SETBIO_MISSING_DESCRIPTION'));
        // if the description is too long, display an error message 
        if(bio.length > 100) return message.channel.send(message.language.get('SETBIO_100'));

        // save the description in the database
        this.client.databases[0].set(`${message.author.id}.bio`, bio);

        // Send a success message
        message.channel.send(message.language.get('SETBIO_SUCCESS'));
    }

}

module.exports = Setbio;
