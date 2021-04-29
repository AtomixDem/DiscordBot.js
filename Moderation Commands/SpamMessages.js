/*
Installing the library:

1. $ npm initi -y
2. $ npm i discord.js dotenv

Discord bot script for ban a user
Script by AtomixDem -> https://github.com/AtomixDem
*/



require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here


const usersMap = new Map();

// Commands
client.on('message', message => {
    if(message.author.bot) return;

    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        let msgCount = usersMap.get(message.author.id).msgCount;
        ++msgCount;
        if(parseInt(msgCount) === 5) {
            const role = message.guild.roles.cache.get('RULE_ID'); // Paste the muted role id
            message.member.roles.add(role);
            message.channel.send('You have been muted!'); // Bot message where he muted a user
        }
        else {
        userData.msgCount = msgCount;
        usersMap.set(message.author.id, userData);
        }
    }
    else {
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage: message,
            timer: null
        });
        setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('Removed from map.');
        }, 5000);
    }

});
