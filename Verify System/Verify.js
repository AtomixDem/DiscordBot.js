/*
Discord bot script for send a auto message
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();
const disbut = require("discord-buttons")
disbut(client);
const { MessageButton, MessageActionRow } = require("discord-buttons")

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here


// Commands
client.on("message", message => {
    if (message.content == "!verifica") {

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("**Non hai il permesso!** :neutral_face:");
            return;
        }

        var buttonverify = new MessageButton()
            .setLabel("Verificati")
            .setEmoji("🔰")
            .setStyle("green")
            .setID("idVerify")

        var embed = new Discord.MessageEmbed()
            .setTitle("VERIFICATI CLICCANDO SULLA REAZIONE!")
            .setURL("https://discord.com/channels/822390677539258388/854430804334870528/875159236626219069")
            .setDescription("Benvenuto su AtonBox Network!\n\nClicca sulla reazione <:Verified:825127538350096404> per __verificarti__ correttamente ed accedere a tutti i canali vocali e testuali disponibili! Una volta cliccata la reazione ti verrà assegnato il ruolo <@&823853843854131210>. Ricordati di leggere le <#823853864577925161> per evitare sanzioni!")
            .addField("PROBLEMI CON LA VERIFICA:", "Se hai qualche problema durante la verifica contatta <@550304770397569024> in privato.", true)

        message.channel.send(embed, buttonverify)
    }
})


client.on("clickButton", async (button) => {
    if (button.id == "idVerify") {

        
        const role = button.guild.roles.cache.get('840321947288207361')
        const member = button.clicker.member
        await member.roles.add(role)


        button.reply.send("Ti sei verificato correttamente! <:Verified:825127538350096404>", true)
        //button.reply.defer()

    }
})
