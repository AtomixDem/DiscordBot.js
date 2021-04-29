/*
Discord bot script for ban a user
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here

// Commands
client.on("message", (message) => {
    if(message.content.startsWith("!ban")) { // Your command

        var userBan = message.mentions.members.first();

        if(!message.member.hasPermission("BAN_MEMBERS")) { // Permission required
            message.channel.send("Non hai il permesso!");
            return;
        }
        
        if(!userBan) {
            message.channel.send("Non hai menzionato nessun utente!");
            return;
        }

        if(!userBan.bannable) {
            message.channel.send("Non posso farlo!");
            return;
        }

        var embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("Utente Bannato!")
            .addField("Utente:", "<@" + userBan + ">", false)


        userBan.ban()
            .then(() => message.channel.send(embed)) // Bot message

    }
})
