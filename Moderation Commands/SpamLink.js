/*
Installing the library:

1. $ npm install anti-link-discord

Discord bot script to prevent link spam
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();
const antiLink = require("anti-link-discord"); // Library

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here


// Commands
client.on('message', async message => {
    antiLink(client, message, {
          staffRole: "ROLE_ID", // Staff/Admin/Mod role id (will ignore this role)
          warnMSG: `<@${message.author.id}> **You can't send links!** 😐`, // Warn message
      });                  
});
