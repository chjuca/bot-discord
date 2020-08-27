import { config } from "dotenv"
config();

import { Client, MessageEmbed } from "discord.js";
import { prefix } from './config.json';

const client = new Client();

client.on("ready", () => {
    console.log("Bot is ready!")
})

client.on("message", async (message) => {

    if (message.content.startsWith(`${prefix}ping`)) {
        message.reply("🚀 pong!");
    }

    if (message.content.startsWith(`${prefix}ban`)) {

        if (message.member?.hasPermission(['KICK_MEMBERS'])) {
            const member = message.mentions.members?.first();
            if (member) {
                await member.kick()
                    .then(() => {
                        const embed = new MessageEmbed()
                            .setTitle('Usuario fue banneado')
                            .setImage('https://pbs.twimg.com/media/DE5rTLxUAAEiiqR?format=jpg&name=900x900')
                        message.channel.send(embed);
                    })
            }
        } else {
            message.reply('Necesitas tener este permiso 😔')
        }
    }

});

client.login(process.env.DISCORD_TOKEN);


