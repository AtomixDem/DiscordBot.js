/*
Discord bot script for send an announce in the specific channel
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here

client.on("message", (message) => {

    if (message.content.startsWith("!announce")) { // Your Commnad
       if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("**You don't have the permission!** :neutral_face:");
            return
        }
    
        var count = message.content.slice(10);
        var id_canale = client.channels.cache.get('CHANNEL_ID'); // Paste the ID channel when the bot send the announce (message)

        id_canale.send(count); // The bot send the announce
        message.channel.bulkDelete(1, true);
        message.channel.send("> :white_check_mark: Messaggio inviato con successo!\n> \n> **Canale:** <#" + id_canale + ">\n> **Messaggio:** \n> " + count) // Report of what you have sent

    }
})
