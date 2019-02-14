const Discord = require('discord.js');
 const bot = new Discord.Client();
 
 var prefix = (">")
 var randnum = 0;
 var battle_ennemy = false;
 
 bot.on('ready', function() {
     bot.user.setUsername("MobileBot")
     bot.user.setPresence({ game: { name: 'Candy Crush sa mère'}, status: 'dnd'}) //en ligne;
     console.log("Connected")
 });
 
 bot.login(process.env.TOKEN);
 

  bot.on('message', message => {
    if(message.content.startsWith(">test") ){ 
 
        const embed = new Discord.RichEmbed()
        .setTitle("blblbl")
         .setColor(0xD4FE00)
         .setDescription("Liste")
         .setFooter(":smirk:")
              .addField(":smirk:",
                        "blblblbl")
     
         message.channel.send({embed});
    }
   if (message.content.startsWith(">sms_admin")){
    if("234368202379886593 323807479651631104 528533266286772235".includes(message.author.id)){
    let args = message.content.split(" ").slice(1)
    let thingToEcho = args.join(" ")
    message.delete();
    message.channel.send(`${thingToEcho}`)  
   }}
   if(message.content.startsWith(">téléphone") ){ 
 
    const embed = new Discord.RichEmbed()
    .setTitle("Iphone X Demon")
     .setColor(0xD4FE00)
     .setDescription("---")
     .addField("               X.                   X.                    X.                ",
               "             >appel              >livre                >help               ")
 
     message.channel.send({embed});
}
if(message.content.startsWith(">appel") ){ 
 
    const embed = new Discord.RichEmbed()
    .setTitle("Iphone X Demon")
     .setColor(0xD4FE00)
     .setDescription("---")
     .addField("Partie Appel\s>appel (mention de la personne a appeller)",
               "Partie SMS.\s>sms_help **message**\s>sms (mention personne) **message**")
 
     message.channel.send({embed});
}
}
)
