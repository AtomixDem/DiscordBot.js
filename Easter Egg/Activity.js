/*
Discord bot script for set a activity in the bio of bot
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here

client.on('ready', () => {
    console.log('The Bot is ONLINE!') // When the Bot is online, print this message
    client.user.setActivity('\nSET_ACTIVITY_HERE', { type: 'PLAYING' }) // Set PLAYING - LISTENING - WATCHING
    .catch(console.error); // If the bot has a errors, print the errors in the console
});
