/*
Discord bot script for add a reactions in a message and execute a commands
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here

// Commands
client.on("message", (message) => {
    if(message.content == "!reaction") { // Your message
        message.channel.send("Hello!") // Bot message
        .then(function (message) {
            message.react("👍"); // Reaction 1
            message.react("👎"); // Reaction 2
        })
    }

})

client.on("message", (message) => {
    if(message.content == "!choose") {
        message.channel.send("Choose a reaction!")
        .then(reactmessage => {
            reactmessage.react("👍"); // Reaction 1
            reactmessage.react("👎"); // Reaction 2

            var filter = (reaction, user) => ["👍", "👎"].includes(reaction.emoji.name) && user.id == message.author.id;

            reactmessage.awaitReactions(filter, { max: 1, time: 10000}) // Time available to react
                .then(collected => {
                    var reaction = collected.first().emoji.name;
                    if(reaction == "👍"){ // Reaction 1
                        message.channel.send("Perfect!"); // Response reaction 1
                    }
                    if(reaction == "👎"){ // Reaction 1
                        message.channel.send("I'm sorry!"); // Response reaction 2
                    }
                }).catch(collected =>{
                    return message.channel.send("Time out! You took too long to react."); // Time out to react
                })
        })
    }

})
