const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const axios = require('axios');
const cron = require('node-cron');
const TelegramBot = require('node-telegram-bot-api');

const token = '1803618612:AAH-strrlFztQKM7mbUWahrumZnlIVnQDDM';
const bot = new TelegramBot(token, {polling: true});
let k=0;
function getPrice() {
    axios.get('https://api.pancakeswap.info/api/v2/tokens/0x1e446CbEa52BAdeB614FBe4Ab7610F737995fB44')
    .then(function (response) {
      // handle success
      console.log(k++);
      console.log(typeof response.data.data.price);
      //bot.sendMessage(1187274865, response.data.data.price);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

bot.on('message', (msg) => {
  console.log(msg.chat.id);
  //type other code here
});

cron.schedule("*/5 * * * * *", function(){
    //getPrice();
})
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});