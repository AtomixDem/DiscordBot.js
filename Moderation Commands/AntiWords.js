/*
Installing the library:

1. $ npm install anti-swear-words-packages-discord

*----------------------------------------------------*
This script works without database, as it uses the one from the library.
In addition to blocking forbidden words, it also creates warns for the user.
*----------------------------------------------------*

Discord bot script for block words + warn
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();
const antiSwearWords = require("anti-swear-words-packages-discord")

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here


// Commands
client.on('message', async message => {
    antiSwearWords(client, message, {
        warnMSG: `<@${message.author.id}>**, You can't write these words!**`,
        // Behind the warnMSG will be an Warn Count
        ignoreWord: ["Word"], // Words allowed
        customWord: ["Word1", "Word2", "Word3"], // Forbidden words
        muteRole: "ROLE_ID",  // ID of the muted role
        muteCount: 3, // Number when the user get muted
        kickCount: 30, // Number when the user get kicked
        banCount: 50,  // Number when the user get banned
    });                       
});
