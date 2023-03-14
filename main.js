const {Client , GatewayIntentBits, bold, italic, underscore, strikethrough, blockQuote, spoiler , } = require('discord.js')
require("dotenv/config")
const client = new Client({
    intents:  [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
})

client.on('ready', function () {
  console.log("Mark is on !")
})

client.login(process.env.TOKEN)


client.on('messageCreate', async message => {
     if (message.content.toLowerCase().includes("c'est quoi") || message.content.toLowerCase().includes("c’est quoi") ) {
    message.reply("c'est feur mec.")
    }else if (message.content.toLowerCase() === "/rand100") {
      message.reply(String(Math.floor(Math.random() * 101)))
    }else if (message.content.toLowerCase().includes("c'est pourquoi") || message.content.toLowerCase().includes("c’est pourquoi")) {
      message.reply("c'est pour feur je crois.")
    }else if (message.content.toLowerCase().includes('pourquoi')) {
      message.reply("parce que feur mon gars !")
    }else if (message.content.toLowerCase().includes('quoi') ) {
      let randomquoi = Math.floor(Math.random() * 250)
      switch (randomquoi) {
        default:
          message.reply('https://tenor.com/view/feur-th%C3%A9obabac-not-funny-gif-22130648')
          break
          case 1:
            message.reply("quoicoubeh")
            break
      }
  } else if (message.author.id == "261540167406321666" && message.content.toLowerCase().includes('mark ratio') ) {
    message.channel.messages.fetch({ limit: 100 }).then(messages => {
      let mention = message.mentions.users.first();
      const lastUserMessages = messages.filter(v =>  v.author.id === mention.id);
      if (!lastUserMessages) {
          message.reply('This user didn\'t wrote something the last 100 message');
          return;
      }
      const lastUserMessage = lastUserMessages.first();
      if (!lastUserMessage) {
          message.reply('This user didn\'t wrote something the last 100 message');
          return;
      }
  
      lastUserMessage.react('🇷');
      lastUserMessage.react('🇦');
      lastUserMessage.react('🇹');
      lastUserMessage.react('🇮');
      lastUserMessage.react('🇴');
      
  }).catch(console.error);
  }else if (message.author.username != "Mark Zuckerberg") {
    let random = Math.floor(Math.random() * 600)
    switch (random) {
      case 0 :
        message.react('🇷');
        message.react('🇦');
        message.react('🇹')
        message.react('🇮')
        message.react('🇴')
        break
      case 1 :
        message.react('🇵');
        message.react('🇦');
        message.react('🇸')
        message.react('🇱')
        message.react('🇺')
        break
      case 2:
        message.react('🇲');
        message.react('🇪');
        message.react('🇳')
        message.react('🇫')
        message.react('🇴')
        message.react('🇺')
        break
      case 3 :
        message.reply('Tu peux mourir stp ça serait bien plutôt que faire chier avec tes messages inutile.')
        break
      case 4:
        message.reply('Ta gueule')
        break
      case 5:
             (await message.author.createDM()).send("Salut bebou tu fais quoi ce soir ? ça te dirais de boire un verre avec moi beau gosse ?")
        break
      case 6:
        message.reply("attend quoi ?")
        break
      case 7:
          (await message.author.createDM()).send("NULOOOOOOOOOS")
          break
      case 8:
        message.channel.send("GO FUMER OMG!")
        break
      case 9:
          message.react('💦')
          message.react('🍆')
          break
      case 10:
        message.channel.send("Les gars vous pensez que je devrait intégrer un mode +18 pour fb2 ou pas ?")
        break
      case 11:
        message.reply("tu suce ?")
        break
      case 12:
        message.channel.send("bite cul chatte lol mdrrr ptdrrr wzagjcurrr")
        break
      case 13:
        message.channel.send("en vrai les gars Hitler il était pas si méchant non?")
        break
      case 14:
        message.channel.send("LES GARS JE VIENS DE VOIR SUR MON SITE ENFAIT LE COVID IL A ETE CREE PAS L'INSTITUT PASTEUR ET C'EST UN COMPLOT MONDIAL ON EST DANS LA MERDE !!!")
        break
      case 15:
        message.channel.send("bebou vaisselle vite")
        message.channel.send("oups deso mauvais channel")
        break
      case 16:
          (await message.author.createDM()).send("t'est trop bonne \ntu m'exite\nj'ai vraiment envie de te baiser la\neuh j'ai les couilles qui sentent hyper fort le sperme la putain\nj'ai la bite en feu\ntu sais que je suis entrain de me branler la encore\ntu me fais bander fort tu va me faire ejaculer encore\nSUCE MOI PAR PITIER")
      break
      case 17:
        message.channel.send("negro")
        break
      case 18:
        message.channel.send("tkt je serai la pour la réu avec les illuminati")
        message.channel.send("ha deso je me suis trompé de serv")
        break
      case 19:
        message.channel.send("putain je viens de réecouter du MJ en vrai c'était a chier comment il a fais pour être connue ce bouffon")
         message.channel.send("en plus c'est un pedo")
        break
      case 20:
          message.channel.send(blockQuote(strikethrough(underscore(bold(italic("oua les gars je suis bourré ou what la wtf ooooooooooooooooooo")))))  )
        break
      case 21:
        message.channel.send(spoiler("bakugo il meurt dans mha"))
        break
      case 22:
        message.channel.send("Vml2ZSBsZXMgcGluZ291aW4=")
        break
      case 23:
        message.reply(message.content.length.toString())
        break   
      case 24:
        message.member.roles.add("1085208112715284582")
        break     
      case 25:
        if (message.author.id != "261540167406321666") {
          message.member.setNickname("nulossman en personne")
        }
        break
      case 26:
        if (message.author.id != "261540167406321666") {
        message.member.timeout(1*60*1000 , "cheh")
        }
        break
      case 27:
        message.reply("c'est fou comment je m'en branle")
        break
      case 28:
        message.channel.send("merci pour ce doujin de fou j'ai adorer la partie avec le rape loli fury tentacules aliens c'était ma meilleure branlette")
        message.channel.send("aaaaa mauvais destinataire faite pas attention")
        break
      case 29:
        (await message.author.createDM()).send("hentai loli fury crossdressing rape gore")
        message.member.send("oups pardon j'avais pas vu que j'étais sur discord je fesait des recherche pour le travail fais pas attention")
        break
      
    }
      

       
  }
})