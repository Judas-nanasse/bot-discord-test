const {Client , GatewayIntentBits} = require('discord.js')
require("dotenv/config")
const client = new Client({
    intents:  [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.on('ready', function () {
  console.log("Je suis connecté !")
})

client.login(process.env.TOKEN)

client.on('messageCreate', message => {
    if (message.content.toLowerCase().includes('pourquoi')) {
        message.reply("parce que feur je crois.")
    } else if (message.content.toLowerCase().includes("c'est quoi") ) {
      message.reply("c'est feur je crois.")
    }else if (message.content.toLowerCase().includes('quoi') ) {
    message.reply('https://tenor.com/view/feur-th%C3%A9obabac-not-funny-gif-22130648')
  } else if (message.author.username === "Envy" ) {
    message.reply('Ta gueule')
  }
})

