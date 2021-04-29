/*
Discord bot script for send a goodbye message
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here

// Commands
client.on("guildMemberRemove", (member) => {
    client.channels.cache.get("CHANNEL_ID").send("Goodbye " + member.toString() + "! We hope to see you again on **" + member.guild.name + "**."); // Goodbye message
})
