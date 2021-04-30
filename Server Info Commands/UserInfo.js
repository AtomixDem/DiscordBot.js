/*
Discord bot script for view a user info
Script by AtomixDem -> https://github.com/AtomixDem
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("PASTE YOUR TOKEN HERE"); // Paste your Token Bot here


// Commands
client.on("message", message => {
    if (message.content.startsWith("!userinfo")) {
        if (message.content == "!userinfo") {
            var user = message.member;
        }
        else {
            var user = message.mentions.members.first();
        }

        if (!user) {
            message.channel.send("I have not found this user!")
            return
        }

        var permissionsList = "";
        if (user.hasPermission("ADMINISTRATOR")) {
            permissionsList = "👑 ADMINISTRATOR";
        }
        else {
            var permissions = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS"]

            for (var i = 0; i < permissions.length; i++) {
                if (user.hasPermission(permissions[i])) {
                    permissionsList += "- " + permissions[i] + "\r";
                }
            }
        }

        var embed = new Discord.MessageEmbed()
            .setTitle(user.user.tag)
            .setDescription("All the info of this user")
            .setThumbnail(user.user.avatarURL())
            .addField("User id", "```" + user.user.id + "```", true)
            .addField("Status", "```" + user.user.presence.status + "```", true)
            .addField("Is a bot?", user.user.bot ? "```Yes```" : "```No```", true)
            .addField("Account created", "```" + user.user.createdAt.toDateString() + "```", true)
            .addField("Joined this server", "```" + user.joinedAt.toDateString() + "```", true)
            .addField("Permissions", "```" + permissionsList + "```", false)
            .addField("Roles", "```" + user.roles.cache.map(ruolo => ruolo.name).join("\r") + "```", false)

        message.channel.send(embed)

    }
});
