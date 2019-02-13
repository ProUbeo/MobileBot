const Discord = require('discord.js');
 const bot = new Discord.Client();
 
 var prefix = (">")
 var randnum = 0;
 var battle_ennemy = false;
 
 bot.on('ready', function() {
     bot.user.setUsername("MobileBot")
     bot.user.setPresence({ game: { name: 'Candy Crush'}, status: 'dnd'}) //en ligne;
     console.log("Connected")
 });
 
 bot.login(process.env.TOKEN);
 
 bot.on("guildMemberAdd", member => {
    if(message.content === ">test" ){ 
 
        const embed = new Discord.RichEmbed()
        .setTitle("blblbl")
         .setColor(0xD4FE00)
         .setDescription("Liste")
         .setFooter("blblblblbl")
              .addField("...",
                        "blblblbl")
     
         message.channel.send({embed});
    }
   }
)
function random(min, max) {
    min = Math.ceil(0)
    max = Math.floor(3)
    test = Math.floor(Math.random() * (max - min +1) + min);
 }
