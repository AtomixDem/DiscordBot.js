/*
Discord bot script for view a server info
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here


// Commands
client.on("message", (message) => {
    if(message.content == "!serverinfo") { // Your command
        var server = message.member.guild;

        var botCount = server.members.cache.filter(member => member.user.bot).size;
        var usersCount = server.memberCount - botCount;

        var categoryCount = server.channels.cache.filter(c => c.type == "category").size
        var textCount = server.channels.cache.filter(c => c.type == "text").size
        var voiceCount = server.channels.cache.filter(c => c.type == "voice").size

        var embed = new Discord.MessageEmbed()
            .setTitle(server.name)
            .setDescription("All info on this server!")
            .setThumbnail(server.iconURL())
            .addField("Owner:", "```" + server.owner.user.username + "```", true)
            .addField("Server ID:", "```" + server.id + "```", true)
            .addField("Server region: ", "```" + server.region + "```", true)
            .addField("Members:", "```Total: " + server.memberCount + " - Users: " + usersCount + " - Bots: " + botCount + "```", false)
            .addField("Channels:", "```Category: " + categoryCount + " - Text: " + textCount + " - Voice: " + voiceCount + "```", false)
            .addField("Server created:", "```" +  server.createdAt.toDateString() + "```", true)
            .addField("Boost level:", "```Level " + server.premiumTier + " (Boost: " + server.premiumSubscriptionCount + ")```", true)

        message.channel.send(embed)


    }
})
