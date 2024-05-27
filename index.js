const TelegramBot = require("node-telegram-bot-api");
const { gameOptions, againOptions } = require("./options");
const token = "6224853340:AAGu1RDHzSGSeozV0BTuvQg0sNzc7mDk7XA";
const bot =new TelegramBot(token, { polling: true });


const result={
}




const StartGame= async(chatId)=>{
    await bot.sendSticker(chatId,"https://sl.combot.org/hangseed9/webp/15xf09f988c.webp")
    await bot.sendMessage(chatId,"Kampyuter 0 dan 9 gacha son o'yladi shuni topishga harakat qiling ")
    const randomNumber=Math.floor(Math.random()*10)
    result[chatId]=randomNumber
    await bot.sendMessage(chatId,"To'g'ri sonni toping ",gameOptions)
}

const botStart=()=>{

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

if(text==="/game"){
return StartGame(chatId)
}

bot.sendMessage(chatId,"Uzr siznig gapingizga tushunmayapman ):")
});   

bot.on('callback_query',async(msg)=>{
const data =msg.data
const chatId=msg.message.chat.id

if(data ==="/again"){
    return StartGame(chatId)
}

if(data == result[chatId]){
await bot.sendSticker(chatId,"https://sl.combot.org/hangseed9/webp/11xf09f9283.webp")
    return bot.sendMessage(chatId,`Ta'briklayman men shu  ${data} sonni oylagan edim !`,againOptions)

}else{
    await bot.sendSticker(chatId,'https://sl.combot.org/hangseed9/webp/14xf09f988d.webp')
    return bot.sendMessage(chatId,`Afsuski men bu  ${data} sonni oylaman edim ! men ${result[chatId]} sonini oylagan edim `,againOptions)
 
}


bot.sendMessage(chatId,`Siz tanlagan son ${data}`)

})
}
botStart()



