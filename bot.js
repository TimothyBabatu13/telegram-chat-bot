const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TOKEN;

const bot = new TelegramBot(token, {polling: true});

const schedule = require('node-schedule');
let count = 0;

bot.on("message", (message)=> {
    const chatID = message.chat.id;
    console.log(message)
    bot.sendMessage(chatID, `${message.text}`)
})
// const job = schedule.scheduleJob('* * * * *', function(){
//     console.log("This works sha")
//     count++
//     bot.sendMessage("@testMyBot_channel", `Sending message to channel ${count}`)
// });


