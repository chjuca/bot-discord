"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js");
const config_json_1 = require("./config.json");
const client = new discord_js_1.Client();
client.on("ready", () => {
    console.log("Bot is ready!");
});
client.on("message", (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (message.content.startsWith(`${config_json_1.prefix}ping`)) {
        // message.channel.send("🚀 pong!")
        message.reply("🚀 pong!");
    }
    if (message.content.startsWith(`${config_json_1.prefix}ban`)) {
        if ((_a = message.member) === null || _a === void 0 ? void 0 : _a.hasPermission(['KICK_MEMBERS'])) {
            const member = (_b = message.mentions.members) === null || _b === void 0 ? void 0 : _b.first();
            if (member) {
                yield member.kick()
                    .then(() => {
                    const embed = new discord_js_1.MessageEmbed()
                        .setTitle('Usuario fue banneado')
                        .setImage('https://pbs.twimg.com/media/DE5rTLxUAAEiiqR?format=jpg&name=900x900');
                    message.channel.send(embed);
                });
            }
        }
        else {
            message.reply('Necesitas tener este permiso 😔');
        }
    }
    if (message.delete()) {
        console.log('borrado');
    }
}));
client.login(process.env.DISCORD_TOKEN);
