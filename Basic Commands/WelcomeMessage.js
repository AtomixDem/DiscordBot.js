/*
Discord bot script for send a welcome message
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here

// Commands
client.on("guildMemberAdd", (member) => {
    client.channels.cache.get("CHANNEL_ID").send("Welcome " + member.toString() + " to **" + member.guild.name + "**! Member **#" + member.guild.memberCount + "**", {files: ["Welcome.jpg"]}); // Welcome message
})
