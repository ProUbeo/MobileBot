const Discord = require('discord.js');
 const bot = new Discord.Client();
 
 var prefix = (">")
 var randnum = 0;
 var battle_ennemy = false;
 var party_launch = false;
 var number_random = 0;
 
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
     console.log("test effectué")
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
     .setDescription("----------")
     .addField("               X                   X                    X                  ",
               "             >appel              >numbor                >journal               ")
 
     message.channel.send({embed});
}
if(message.content.startsWith(">appel") ){ 
 
    const embed = new Discord.RichEmbed()
    .setTitle("Iphone X Demon")
     .setColor(0xD4FE00)
     .setDescription("----------")
     .addField("Partie Appel",
               ">appel (mention de la personne a appeller) ")
     .addField("Partie SMS",
               ">sms_help **message**\n>sms (mention personne) **message**")
     message.channel.send({embed});
}

if (message.content.startsWith(prefix + "journal")){
    var embed = new Discord.RichEmbed()
    .setTitle("Iphone X Demon")
    .addField("***Journal des Démons du mois de Février***", "ㅤㅤ")
    .addField("Union Upsilon : Extermination par les démons ?", "La semaine dernière , L'Union Upsilon à du faire face au 3 chefs démoniaque !\nLeur chef , Guten , nous explique leur défaite :\n*Nous étions environ 50 000 face à eux ! Notre Union étant l'une des plus puissante , pensions gagner facilement quand les 3 grands chefs démoniaque sont apparus et ont exterminés les*")
    .addField("ㅤㅤ",
    "*3 quarts de mes hommes ... Surtout que les chefs démoniaques n'étaient normalement que rang D ! Je ne sais pas ce qui leur est arrivé , mais ils sont devenus beaucoup plus fort qu'avant , et*")
    .addField("ㅤㅤ",
    "*c'est d'ailleurs pour cette raison que ces 3 là sont passés en rang B ! Même leur pion était plus fort et intelligent qu'avant , ils ont changés quelques chose mais quoi ? Nous envoyons une Union plus\nforte enquêter sur le sujet !*\nAlors est-ce que les démons ont pris la relève ? Va t'on reperdre notre territoire et se faire exterminer une bonne fois pour toute ? A suivre ...")
    .setColor(0xD4FE00)
    message.channel.send(embed)
}

if(message.content == ">numbor start"){
    if(party_launch == true){
        message.channel.send(`une manche est deja en cours ${message.author}`)
    }else{
aléa1();

    if (alé1 == 1){
        message.channel.send(":arrow_forward: cette manche sera entre 0 est 5000 :arrow_forward: ")
        
        number_random = Math.floor(Math.random() * (5000 - 0) + 0)
        console.log(number_random);
}
if (alé1 == 2){
    message.channel.send(":arrow_forward: cette manche sera entre 0 est 20000 :arrow_forward: ")
    
    number_random = Math.floor(Math.random() * (20000 - 0) + 0)
    console.log(number_random);
}
if (alé1== 3){
    message.channel.send(":arrow_forward: cette manche sera entre 0 est 100000 :arrow_forward: ")
    number_random = Math.floor(Math.random() * (100000 - 0) + 0)
    console.log(number_random);
}
party_launch = true;
}
}
if(party_launch && message.content !=null){
    if(Number.isInteger(parseInt(message.content))){
        if(message.content > number_random){
            message.channel.send(":arrow_down: plus petit :arrow_down: ")
        }
        else if(message.content < number_random){
            message.channel.send(":arrow_up: plus grand :arrow_up: ")
        }
        else{
                message.channel.send(`:ballot_box_with_check: ${message.author} a gagner cette manche :ballot_box_with_check:`);
            party_launch = false
        }
    }
}
if(message.content == ">numbor stop"){
    if(party_launch == true){
            message.channel.send(`:stop_button: ${message.author} a décider de stoper la manche :stop_button: `)
        party_launch = false;
}else{
 message.channel.send("aucune manche en cours")
}
}
}
)
function aléa1(min, max) {
    min = Math.ceil(0)
    max = Math.floor(3)
    alé1 = Math.floor(Math.random() * (max - min +1) + min);
 }
