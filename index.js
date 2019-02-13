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

    if (message.content.startsWith(">sondage")){
        let args = message.content.split(" ").slice(1)
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
        .setDescription(`Sondage Par **${message.author.username}**`)
        .addField(thingToEcho, "Vous pouvez répondre par les réactions (disponible en dessous de ce message)")
        .setColor(0xD4FE00)
        .setFooter("surprise")
        message.channel.send(embed)
        .then(function (message) {
    message.react("❌")
    message.react("✔")    
        }).catch(function() {
        });
    }
if (message.content.startsWith(">annonce")){
    let args = message.content.split(" ").slice(1)
    let thingToEcho = args.join(" ")
    var embed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** Demande votre attention !`)
    .addField("[Important, Annonce]", thingToEcho)
    .setColor(0xD4FE00)
    .setFooter("surprise :3")
    message.channel.send(embed)
    .then(function (message) {
        message.react("✔") 
    })
}else{
    return message.reply("Une Erreur à été détécté !")
}}
)
function random(min, max) {
    min = Math.ceil(0)
    max = Math.floor(3)
    test = Math.floor(Math.random() * (max - min +1) + min);
 }
