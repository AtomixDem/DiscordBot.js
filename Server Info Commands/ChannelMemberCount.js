/*
Discord bot script for member count
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here


// Commands
client.on("guildMemberAdd", member => {
    var channel = client.channels.cache.get("CHANNEL_ID") // Paste the channel ID
    channel.setName("Member: " + member.guild.memberCount) // Name of the channel
})

client.on("guildMemberRemove", member => {
    var channel = client.channels.cache.get("CHANNEL_ID") // Paste the channel ID
    channel.setName("Member: " + member.guild.memberCount) // Name of the channel
})
