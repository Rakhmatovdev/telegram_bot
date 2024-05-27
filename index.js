const TelegramBot = require("node-telegram-bot-api");
const token = "6224853340:AAGu1RDHzSGSeozV0BTuvQg0sNzc7mDk7XA";
const bot =new TelegramBot(token, { polling: true });

bot.setMyCommands([
    {
        command:"/start",description:"Botni ishga tushurish"
    }
    ,
    {
        command:"/info",description:"O'zingiz haqingizda ma'lumot"
    }
    ,
    {
        command:"/game",description:"Oyin o'ynaymizmi"
    }
])



bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
console.log(msg);
  if (text === "/start") {
      await bot.sendSticker(chatId,"https://sl.combot.org/spb8f996c4181c71758fe7e90fd10f0147_by_stckrrobot/webp/12xf09fa4a9.webp")
    return await bot.sendMessage(
      chatId,
      `Assalomu Alaykum xurmatli ${msg.from?.username} sizning ismingiz esa ${
        msg.from?.first_name
      } ${(msg.from?.last_name)}`
    );
  }

if(text==="/info"){
    await bot.sendSticker(chatId,"https://sl.combot.org/spb8f996c4181c71758fe7e90fd10f0147_by_stckrrobot/webp/101xf09f9882.webp")
    
    await bot.sendPhoto(chatId,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWgFmltQNGQX7Z-515QQ1C4jb8I4MsFRVHdg&s")

    return bot.sendMessage(chatId,"Biz haqimizda qanday ma'lumotga egasiz?")
}

bot.sendMessage(chatId,"Uzr siznig gapingizga tushunmayapman ):")
});
