/*
Discord bot script for send a Embed message
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here

// Commands

var embed = new Discord.MessageEmbed()
    .setColor("#ff0000") // Embed color
    .setTitle("Title") // Embed Title
    .setURL("LINK") // Link of the Embed title
    .setAuthor("Name", "IMAGE_LINK", "LINK") // Embed name + link image + name link
    .setDescription("Questa è una descrizione!") // Embed description
    .setThumbnail("IMAGE_LINK") // Embed cover (paste a link)
    .setImage("IMAGE_LINK") // Embed image (paste a link)
    .setFooter("Follow me on GitHub!", "IMAGE_LINK") // Embed Footer
    .setTimestamp(); // Embed send time


client.on("message", (message) =>{
    if(message.content == '!embed'){ // Your command
        message.channel.send(embed)
    }
})


