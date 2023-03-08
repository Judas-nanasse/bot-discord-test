const {Client , GatewayIntentBits , } = require('discord.js')
require("dotenv/config")
const client = new Client({
    intents:  [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.on('ready', function () {
  console.log("Mark is on !")
})

client.login(process.env.TOKEN)

client.on('messageCreate', message => {
  if (message.content.toLowerCase().includes("c'est quoi") ) {
    message.reply("c'est feur mec.")
    }else if (message.content.toLowerCase() === "/rand100") {
      message.reply(String(Math.floor(Math.random() * 101)))
    }else if (message.content.toLowerCase().includes("c'est pourquoi")) {
      message.reply("c'est pour feur je crois.")
    }else if (message.content.toLowerCase().includes('pourquoi')) {
      message.reply("parce que feur mon gars !")
    }else if (message.content.toLowerCase().includes('quoi') ) {
    message.reply('https://tenor.com/view/feur-th%C3%A9obabac-not-funny-gif-22130648')
  } else if (message.author.username === "Envy" ) {
    message.reply('Ta gueule')
  }else if (message.author.username === "Athiellana" ) {
    message.reply('Tu peux mourir stp ça serait bien plutôt que faire chier avec tes messages inutile.')
  }else if (message.author.username === "W̴̽̉r̶͛̒a̶͗͗t̴̀̆h̶͒̏" ) {
        message.react('🇷');
        message.react('🇦');
        message.react('🇹')
        message.react('🇮')
        message.react('🇴')
  }
})







