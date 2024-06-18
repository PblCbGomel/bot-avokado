const TelegramBot = require("node-telegram-bot-api");

const token = "7402142202:AAEjCbVeObCaYM3ecYEDicbqaNW5vkAyiY8";

const bot = new TelegramBot(token, { polling: true });

const webAppUrl = "https://monumental-puffpuff-7cfd01.netlify.app/";

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "Открой Web-приложение", {
      reply_markup: {
        keyboard: [
          [
            {
              text: "Открыть Web-приложение",
              web_app: { url: webAppUrl },
            },
          ],
        ],
      },
    });
  }
  bot.sendMessage(chatId, "Received your message");
});
