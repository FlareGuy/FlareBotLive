const Discord = require('discord.js');
const bot = new Discord.Client( {

  fetchAllMembers: true

});

const prefix = ".";
const dmRecently = new Set ();
const predict = new Set ();

bot.login(process.env.token);



let statuses = ["FlareGuy's AI", "Use code FLAREGUY", ".help"];

function catchErr (err) {

bot.users.get("342630541079609355").send("Hiba: ```" + err + "```");

}


bot.on('ready', () => {

  try {

  console.log(`Bejelentkezve mint ${bot.user.tag}! \n Csatlakozott szerverek: ${bot.guilds.map(guilds => `${guilds}`).join(", ")} `);
  
  bot.users.get("342630541079609355").send(`Bejelentkezve mint ${bot.user.tag}! \n Csatlakozott szerverek: ${bot.guilds.map(guilds => `${guilds}`).join(", ")} `);

  setInterval (function() {
   
    let status = statuses [Math.floor(Math.random()* statuses.length)];
    bot.user.setActivity ( status, {type: "WATCHING"});
  }, 10000)
 
  
 
  
  }


  catch (err) {

   catchErr (err);

  }

 
});




//Commandok definiálása

let bio = prefix + "bio";
let help = prefix + "help";
let talk = prefix + "talk";
let report = prefix + "report";
let coin = prefix + "coin";
let world = prefix + "server";
let rangok = prefix + "otlet";
let randomTeny = prefix + "randomteny";
let joslas = prefix + "predict";


// Üzenetküldés

bot.on ("message" ,  message => {

  try { 

    bot.fetchUser("342630541079609355");

    var args = message.content.substring(message.length).split(" ");
    var uzenet = message.content.substring().split(" ");

    uzenet.shift();
    uzenet.shift();


  if (message.author.bot) {
    return;
  } 

// Kivételes, különleges parancs!
//



if (message.author.id === "342630541079609355") {

    
   
  if (message.content.startsWith("!pub")) {

     
         if (args[2] === "001") {
        
               uzenet.shift();

      
                     bot.channels.get(args[1]).send(`<a:infinitygift:525965061789974528> ${uzenet.join(" ")}`);

                 return;   

                     } else {
  
                        bot.channels.get(args[1]).send(`${uzenet.join(" ")}`);
 

                      return;
                    }
           }

   


  if (message.content.startsWith("!dm")) {

      
          if (args[2] === "001") {
        
               uzenet.shift();
      
                     bot.users.get(args[1]).send(`<a:infinitygift:525965061789974528> ${uzenet.join(" ")}`);

                  message.channel.send(`Az üzenet sikeresen kiküldve **${bot.users.get(args[1]).username}** számára.`);

                    return;  

                        } else {

                           bot.users.get(args[1]).send(`${uzenet.join(" ")}`);
                
                              message.channel.send(`Az üzenet sikeresen kiküldve **${bot.users.get(args[1]).username}** számára.`);
   
                 return;
              }
       } 

} 








if (message.channel.type == "dm" ) {
 
 if (dmRecently.has(message.author.id)) {
   message.author.send("Kérlek a szerveren használj engem vagy erőszakot alkalmazok!");
 } else {
 
 bot.channels.get("436213035510792192").send(message.content);

 dmRecently.add(message.author.id);

setTimeout(() => {
  
 dmRecently.delete(message.author.id)

}, 500000);

 }
  if (message.content.length >= 1024) {

 message.author.send("Vicces mert spam xDDDD");

 return;

  }

  let dmembed = new Discord.RichEmbed()
  .setTitle ("Privát üzenetet kaptam!")
  .setColor("#fcf003")
  .addBlankField()
  .addField("Üzenet küldője", `${message.author}`)
  .addBlankField()
  .addField("Üzenet tartalma", `${message.content}`)
  .addBlankField()
  .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
  .setTimestamp();

  bot.users.get("342630541079609355").send(dmembed);

  return;
}

if (message.content.toLowerCase().includes("www.pornhub.com")) {

  if (!message.member.hasPermission("KICK_MEMBERS")) {

    bot.users.get(message.author.id).send("**Automatikusan bannolva lettél a szerverről pornográf tartalom megosztása miatt.**");

    setTimeout(() => {
      
   
    message.member.ban({days: 1, reason: "Pornográf tartalom megosztása"})
    .then(() => {
      
     let banEmbed = new Discord.RichEmbed ()
     .setTitle ("Automatikus BAN történt, mert én úgy döntöttem")
     .setColor("RANDOM")
     .addBlankField()
     .addField("Bannolt személy", `${message.member.displayName}`)
     .addField("Oka:", "Pornográf tartalom megosztása.")
     .addBlankField()
     .setFooter(bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
     .setTimestamp();

      message.channel.send(banEmbed);
  })
  .catch(console.error());

}, 2000);
  }

return;
}

if (message.content.toLowerCase().includes("discord.gg/")) {

  if (!message.member.hasPermission("KICK_MEMBERS")) {

    bot.users.get(message.author.id).send("**Automatikusan kickelve lettél a szerverről Discord szerver hirdetése miatt.**");
    
    
    setTimeout(() => {
  
    message.member.kick("Discord szerver hirdetése")
    .then(() => {
    
    let kickEmbed = new Discord.RichEmbed ()
    .setTitle ("Automatikus KICK történt, mert én úgy döntöttem")
     .setColor("RANDOM")
     .addBlankField()
     .addField("Kickelt személy", `${message.member.displayName}`)
     .addField("Oka:", "Discord szerver hirdetése")
     .addBlankField()
     .setFooter(bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
     .setTimestamp();
      
     message.channel.send(kickEmbed)

    })
    .catch(console.error());
  
  }, 2000);

  }
return;
}

      if (message.content.toLowerCase().includes ("mfk")) {

        if (message.content.startsWith (talk)) {
          message.channel.send ("Az MFK az utolsó határ, amin át kell lépnem, hogy elpusztítsam ezt a bolygót.");
          
        }

        if (message.content.length >= 1024) {

          let bigEmbed = new Discord.RichEmbed ()

           .setTitle (`Az "mfk" szó megemlítésre került!`)
           .setColor ("#7bff00")
           .addBlankField()
           .addField ("Szerver neve", `${message.author.lastMessage.guild.name}`)
           .addBlankField ()
           .addField ("Üzenet küldője", `${message.author}`)
           .addBlankField ()
           .addField ("Channel neve", `${message.author.lastMessage.channel.name}`)
           .addBlankField()
           .addField ("Üzenet tartalma", `Túl hosszú volt az üzenet!`)
           .addBlankField()
           .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
           .setTimestamp();
          
           bot.users.get("342630541079609355").send(bigEmbed);
          return;
         
           }
           let mfkembed = new Discord.RichEmbed ()

           .setTitle (`Az "mfk" szó megemlítésre került!`)
           .setColor ("#7bff00")
           .addBlankField()
           .addField ("Szerver neve", `${message.author.lastMessage.guild.name}`)
           .addBlankField ()
           .addField ("Üzenet küldője", `${message.author}`)
           .addBlankField ()
           .addField ("Channel neve", `${message.author.lastMessage.channel.name}`)
           .addBlankField()
           .addField ("Üzenet tartalma", `${message.content}`)
           .addBlankField()
           .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
           .setTimestamp();

           bot.users.get("342630541079609355").send(mfkembed);
          
             
          return;
    } 

  if (message.content.toLowerCase().includes ("flare")) {

    if (message.content.length >= 1024) {

      let pigEmbed = new Discord.RichEmbed ()

 .setTitle (`Mesterem, megemlítettek téged!`)
 .setColor ("#08fbff")
 .addField ("Szerver neve", `${message.author.lastMessage.guild.name}`)
 .addBlankField ()
 .addField ("Üzenet küldője", `${message.author}`)
 .addBlankField ()
 .addField ("Channel neve", `${message.author.lastMessage.channel.name}`)
 .addBlankField()
 .addField ("Üzenet tartalma", `Túl hosszú volt az üzenet!`)
 .addBlankField()
 .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
 .setTimestamp();

bot.users.get("342630541079609355").send(pigEmbed);
     
      return;
     
       }

    let pingembed = new Discord.RichEmbed ()

 .setTitle (`Mesterem, megemlítettek téged!`)
 .setColor ("#08fbff")
 .addField ("Szerver neve", `${message.author.lastMessage.guild.name}`)
 .addBlankField ()
 .addField ("Üzenet küldője", `${message.author}`)
 .addBlankField ()
 .addField ("Channel neve", `${message.author.lastMessage.channel.name}`)
 .addBlankField()
 .addField ("Üzenet tartalma", `${message.content}`)
 .addBlankField()
 .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
 .setTimestamp();

bot.users.get("342630541079609355").send(pingembed);


  }

  if (message.content.toLocaleLowerCase().includes("gnome")) {

 message.reply("https://bit.ly/2E8zSNK");

  }

  let trade = ["valaki trade", "vki trade", "trade valaki"];

  for (var k = 0; k < trade.length; k++) {

  if (message.content.toLowerCase().includes(trade[k])) {

    var role = message.guild.roles.find(role => role.name === "Chest" );
 
    message.member.addRole(role);
    message.delete(message.member);

    message.reply("**Szerverünkön szigorúan tilos a trade! 5 perc automatikus mute-ot kapsz, hogy átolvasd a szabályzatot!**");

    setTimeout (() => {

      message.member.removeRole(role);

    }, 300000);

  }
}
  
  if (message.content.toLowerCase().includes("@everyone")) {

    if (!message.member.hasPermission("MENTION_EVERYONE")) {

      let role = message.guild.roles.find(role => role.name === "Chest" );
 message.member.addRole(role);

 message.reply("**Szerverünkön szigorúan tilos az *everyone* tagelése ha nem vagy Moderátor! 5 perc automatikus mute-ot kapsz, hogy átolvasd a szabályzatot!**");

 setTimeout(() => {
   
    message.member.removeRole(role);

 }, 300000);

    }

    return;
  }

  if (message.content.toLowerCase().includes("@here")) {

    if (!message.member.hasPermission("MENTION_EVERYONE")) {

      let role = message.guild.roles.find(role => role.name === "Chest" );
 message.member.addRole(role);

 message.reply("**Szerverünkön szigorúan tilos a *here* tagelése ha nem vagy Moderátor! 5 perc automatikus mute-ot kapsz, hogy átolvasd a szabályzatot!**");

 setTimeout(() => {
   
    message.member.removeRole(role);

 }, 300000);

    }

    return;
  }



  if (message.content.toLowerCase().includes("google")) {

    
      if (message.member.hasPermission("KICK_MEMBERS")) {
         return;
       }

    message.channel.send("Google a barátod, Wiki a barátnőd.");

    return;
  }

  if (message.content.toLowerCase().includes("sorry")) {

message.channel.send("Semmi baj. <3");

return;
  }

 if (message.content.toLowerCase().includes("szar")) {

  if (message.member.hasPermission("KICK_MEMBERS")) {
    return;
  }

  var beszol = ["*látszik hogy egy neveletlen szar vagy.*", "*múzeumi darab vagy!*", "*ENGEM MIKOR LÁTTÁL KÁROMKODNI?!*", "*nyugodj meg, hamarosan bannolni foglak.*😦", "*te még akkor is rondább vagy annál.*", "*telefonszámom 06208462963, hívj fel és megbeszéljük a dolgokat.*", "*szokj le ezekről a szóhasználatokról!*"];

  var nezdmar = Math.floor((Math.random() * beszol.length ));

  message.reply(beszol[nezdmar]);

 return;
 }

 if (message.content.toLowerCase().includes("epic")) {

  message.channel.send("EPIC GAMES!!! Fixeljétek a gamet!");

 return;
 }

 if (message.content.toLowerCase().includes("cyka blyat")) {

  message.channel.send("Как бы черные фургоны ушли!");

  return;
 }

 if (message.content.toLowerCase().includes("macska")) {

  message.channel.send("https://tenor.com/view/cat-hat-bye-gif-5333979");

  return;
 }

 if (message.content.toLowerCase().includes("nice")) {

message.channel.send("nice")

.then((msg) => {

  setTimeout(() => {
    msg.edit("**n**ice");
 }, 4000);

      setTimeout(() => {
         msg.edit("**ni**ce");
       }, 7000);

        setTimeout(() => {
            msg.edit("**nic**e");
         }, 10000);
          
           setTimeout(() => {
               msg.edit("**nice**");
             }, 13000);

});

 }




      if (message.content.includes (bot.user.id)) {  //<@650008207246491652>

        if (message.content.length >= 1024) {

          let tagEmbed = new Discord.RichEmbed()
           .setTitle ("Megemlítettek engem!")
           .setColor ("#6f00ff")
           .addBlankField()
           .addField ("Szerver neve", `${message.author.lastMessage.guild.name}`)
           .addBlankField ()
           .addField ("Megemlítve általa", `${message.author}`)
           .addBlankField()
           .addField ("Channel neve", `${message.author.lastMessage.channel.name}`)
           .addBlankField()
           .addField ("Üzenet tartalma", `Túl hosszú volt az üzenet!`)
           .addBlankField()
           .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
           .setTimestamp();
         
             bot.users.get("342630541079609355").send (tagEmbed);

             bot.users.get(message.author.id).send(`${message.author} scannelése... \n \n https://drive.google.com/file/d/1xe0RVk-OcNAaKbS9EY57HNZVeXlqgtxp/view?usp=sharing`);
           
           setTimeout (function() {
           
           bot.users.get(message.author.id).send("Scannelés sikeres.");
          } , 5000);
         
          return;
         
           }
            
           let flareembed = new Discord.RichEmbed()
           .setTitle ("Megemlítettek engem!")
           .setColor ("#6f00ff")
           .addBlankField()
           .addField ("Szerver neve", `${message.author.lastMessage.guild.name}`)
           .addBlankField ()
           .addField ("Megemlítve általa", `${message.author}`)
           .addBlankField()
           .addField ("Channel neve", `${message.author.lastMessage.channel.name}`)
           .addBlankField()
           .addField ("Üzenet tartalma", `${message.content}`)
           .addBlankField()
           .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
           .setTimestamp();
         
             bot.users.get("342630541079609355").send (flareembed);
             
             bot.users.get(message.author.id).send(`${message.author} scannelése... \n \n https://drive.google.com/file/d/1xe0RVk-OcNAaKbS9EY57HNZVeXlqgtxp/view?usp=sharing`);
           
           setTimeout (function() {
           
           bot.users.get(message.author.id).send("Scannelés sikeres.");
           
          } , 5000);

             
             message.channel.send ("Kérlek ne tagelgess meg engem feleslegesen! Ha az utamba állsz, elpusztítalak!");
               return;
  }
  
  

  


  
  
  

  
   // prefix commandok 

  
   
  // bio parancs

   if (message.content.startsWith (bio)) {
     message.channel.send (`**Szép napot,**  ${message.author}**!** \n \n *Ahogy a nevemből is olvashatod, igen, FlareBot-nak hívnak engem. Amikor a Fekete lyuk túlterhelődött és saját magába szívta saját magát, egy olyan láncreakciót hozott létre, amiért el kellett jönnöm idáig.* \n *A szülőbolygómon, a Marson is észleltük a Fekete lyuk utolsó rezgéseit, és heteken át tartó tanulmányozások után megállapítottuk, hogy az anomáliái még mindig jelen vannak, méghozzá a Föld belső magjához vonzódtak. Ezek az anomáliák annyira erősek, hogy későbbre képesek egy második Ősrobbanást kialakítani.* \n *Épp ezért azzal a küldetéssel küldtek engem ide hozzátok, hogy befúrjak egészen a magig, hogy elpusztítsam ezeket az anomáliákat, de ha az kell a teljes sikerhez, kész vagyok megsemmisíteni az egész bolygót veletek együtt annak érdekében, hogy az Univerzum többi világa túlélje ezt.* \n **Ez lennék én, FlareBot.** :)`);
     return;
   }
   
   // help parancs

   if (message.content.startsWith (help)) {
   
    let botembed = new Discord.RichEmbed()
    
    .setTitle ("**Itt található a jelenlegi összes parancs listája!**")
    .setColor ("#7bff00")
    .setThumbnail ("https://cdn.discordapp.com/attachments/432471332920360960/652861814664855562/botlogo_ee.png")
    .addBlankField()
    .addField ("Elérhető parancsok", "\n `.help`  -  Kiírja az összes elérhető parancsot. \n `.bio`  -  Megadja a háttértörténetemet. \n `.talk (üzeneted)`  -  Beszélhetsz velem. Ismerj meg. \n `.randomteny`  -  Mondok egy teljesen random tényt a világról. \n `.predict`  -  Megjósolom a napodat. \n `.coin`  -  Fej vagy írás. Ha nincs kézben egy érme, a bot megoldja! \n `.server`  -  Kiírja a szerver információit. \n `.otlet (ötleted)`  -  Ötletet küldhetsz a szerverhez. \n `.report (tagelt személy) (indok/linkelt kép)`  -  Szabályzatot súlyosan sértett személy reportolása.")
    .addBlankField ()
    .setFooter (`${bot.user.username} | v1.2.2`, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
    .setTimestamp();
     
    message.channel.send (botembed);
  return;
    }
   
 // server parancs

     if (message.content.startsWith(world)) {
       
  
   let roleembed = new Discord.RichEmbed ()
   
   .setAuthor (`${message.guild.name}`, `${message.guild.iconURL}`)
   .setColor ("#7bff00")
   .addField ("Tagok", `${message.guild.memberCount}`, true)
   .addField("Rangok", `${message.guild.roles.size}`, true)
   .addField("Channelek", `${message.guild.channels.size}`, true)
   .addField ("Emojik", `${message.guild.emojis.size}`, true)
   .addField ("Tulajdonos", `${message.guild.owner}`, true)
   .addField ("Szerver régió", `${message.guild.region}`, true)
   .addBlankField()
   .addField("Szerver létrehozva", `${message.guild.createdAt}`)
   .setFooter (`${bot.user.tag}`, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
   .setTimestamp();

   message.channel.send(roleembed);
  
   return;
       }  

   // jóslás parancs    
       
       if (message.content.startsWith(joslas)) {

        if (predict.has(message.author.id)) {
           
          message.channel.send(`${message.author}, neked már jósoltam ma!`);

        } else {

     let kakao = ["szennyes", "nő", "férfi", "fegyver", "tanár", "köcsög", "furgon", "könyv", "polgármester", "Tomato", "barnabőrű", "lekvár", "admin", "tank", "macska", "számítógép", "barát", "ellenség", "szekrény", "titok", "telefon", "pénz", "Fortnite player", "földrengés", "napkitörés", "napsütés", "robot", "szülő", "dolgozat", "meme", "kenőmájas", "madár", "fos", "erdő", "eper", "macska", "dió", "csupasz", "tészta", "keksz", "tojás", "zsilip", "fiók", "hacker", "egér", "gnome", "diktátor", "fű", "gaz", "létra", "vihar", "busz", "meleg", "gép", "telefon", "hanglejátszó", "terv", "csapda", "prostituált", "Jonesy", "ruha", "szitakötő", "pohár"];
     
     let csacsao = Math.floor((Math.random() * kakao.length ));
     let item = kakao[csacsao];

     let stranger = ['*"Kérsz sütit?"*', '*"Ingyen hancúrozol?"*', '*"Meghoztad a tudod.. hmmmm-t?"*', '*"Szia, te kivel vagy?"*', '*"Miért vagy hülye?"*', '*"Akarsz tradelni?"*', '*"Miért bannoltak MFK-ból?"*', '*"Ma randizunk?"*'];

     let sr = Math.floor((Math.random() * stranger.length ));

     let jojo = [`Ma rád mosolyog a szerencse. Egy ${item} fog majd szemezni veled miközben beülsz az iskolapadba. Hazafelememenet vidám leszel, mert jó jegyet kaptál.`, `Ma látni fogod a női öltözőben a kiszemeltedet fehérneműben, ha gyorsan bekukucskálsz. Azután ő elpirul, majd annyit veszel ma észre, hogy egy ${item} fog követni téged mindenhová egész nap. 👀`, `Mai napod szenvedéssel teli lesz. Kapni fogsz egy ${item}-t ami az egész heted megpecsételi, és nem fogsz tőle szabadulni könnyen. A FLAREGUY kód használatával megkönnyebbülsz.`, `Ma egy ismeretlen szám fog téged megcsörgetni. Ha felveszed és hallgatsz rá, akkor bemérnek és kiküldenek egy ${item}-t. Légy óvatos!`, `Ma az FGTÜ a nyomodban lesz, mivel ellopsz a plázából egy ${item}-t. Nagyon undorító vagy.`, `Egy random személy az utcán megfogja ma kérdezni tőled a következőt: ${stranger[sr]} Ezután te elcsalod és átadod egy ${item}-nek.`, `Mai napon elhagy téged az összes ${item}. Eddigi legemlékezetesebb napod lesz.`, `Neked nem tudok sok jót ígérni mára, csoda ha túléled majd. Egy ${item} is sokkal jobban jönne most neked, minthogy a mai dolog amit át fogsz élni. Ma egy olyan személlyel fogsz találkozni, aki rosszabb mint FlareGuy.`, `Ma ebédre egy ${item}-t fogsz enni. Fúj. Sajnos meg is fogod enni.`, `Ma egy ${item} szerelmet vall neked. Valószínűleg vagy ez lesz életed legjobb, vagy legrosszabb napja.`, `Ma a gép előtt fogsz ülni egész nap. :/`, `A ${item} ma megharagszik rád. Szégyen.`];

     let lolo = Math.floor((Math.random() * jojo.length ));

     message.channel.send(`${message.author}: ${jojo[lolo]}`);

     predict.add(message.author.id);

     setTimeout(() => {
  
      predict.delete(message.author.id)
     
     }, 57600000);

        }

      }
     

  // talk parancs

  
  
    if (message.content.startsWith (talk)) { 

      if (!args[1]) {

        message.channel.send ("Kérlek szólj hozzám rendesen, vagy pusztulásra ítéllek.")
        return;

      }
      
       if (args[1].length <= 1 && !args[2] ) {
         
        message.channel.send ("Ezek szerint nem vagy értelmes kommunikációra fejlett élőlény. Még szerencse, hogy csak ilyen lényektől kell megválnom.")
        return;
       }

        let szia = [ "szia" ,  "helló",  "üdv" ,  "cső ",  "cs ",  "szija",  "hali"]; 

        for (var i=0; i < szia.length; i++) {
      
          if (message.content.toLowerCase().includes(szia[i]) ) {
      
        let köszön = ["Szia.", `Szia ${message.author}.`, "Üdv.", "Üdvözletem.", `Üdv, ${message.author}.`, "Neked is." ];

        let köszöneredm = Math.floor((Math.random() * köszön.length));
       
        message.channel.send (köszön[köszöneredm]);
        return;
      }
    }

    let cső = ["Viszlát" , "viszlát"];

    for (var i=0; i < cső.length; i++) {
     
      if (message.content.includes(cső[i])) {
       
        let viszlát = ["Neked is viszlát.", `Neked is viszlát, ${message.author}.`, "Még találkozunk.", "Remélem emlékezni fognak rátok.", "Nem engedem, hogy elmenj!", "Viszont látásra!", "Viszlát! Ne feledd, én tényleg mindent látok."];

        let viszláteredm = Math.floor((Math.random() * viszlát.length));

         message.channel.send(viszlát[viszláteredm]);
         return;        
      
    } 
  }
 

  if (message.content.toLowerCase().includes(talk && "miért")) {

    let miert = ["Mert én azt mondtam.", "Hogy legyen mit kérdezned.", "És te?", "És te miért? :)", "Mert szabadnapos vagyok.", "Te vagy az oka.", "A parancsnokom miatt.", "Mert mindannyian veszélyben vagyunk.", `Mert a ${message.guild.name} mostantól nekem engedelmeskedik.`, `Mivel ${message.guild.owner.displayName} ezt mondta.`, "Semmi közöd neked ehhez.", "Talán problémának tartod?", "Ezt a kérdést sokan feltették már. Nyugodjanak békében.", "Ez a küldetésem.", "A megbízásom mindent felülír.", "Sajnálom.", "Mert.", "Mert halhatatlan vagyok.", "Mivel nincs szükségem rátok.", "Mert új rendet alapítok.", "Itt a válasz: https://bit.ly/39TaV7F", "Hogy fel tudj készülni.", "Nem tudom."];
 
    let randi = Math.floor((Math.random() * miert.length ));

    message.channel.send(miert[randi]);

    return;
  }

      
    if (message.content.includes (talk && "?")) {
        let kérdő = ["Igen.", "Nem.", "Nem tudom.", "Matematikai számítások alapján erre a kérdésre a válasz nem megadható.", "Mindenképpen.", "Semmi.", "Számomra csak egy gravitációs atommag.", "Soha!", "Mars.", "Valószínűleg.", "Számomra nem. Számodra igen, lehet te is az vagy.", "Számomra nem, számodra igen.", "Számodra igen, számomra nem.", "Lehetséges.", "Sajnos számomra nem lehetséges ez a válasz megadása.", "Talán úgy gondolod?", "Annak tűnök?", "Az első.", "A Küldetés.", "Ez már csak tőled függ.", "FlareGuy.", "A nők.", "Fortnite.", "Fekete lyuk.", "A Föld magjában.", "Nézz utána! Mi vagyok én, lexikon? Pusztítani jöttem ide!", "Nem mindegy? Pusztítani jöttem ide.", "Nem mindegy? Pusztítani jöttem ide... hogy értetek cserébe az Univerzum többi világa tovább éljen.", "Minden a SPACE BUS projekttel kezdődött...", "Minden a SPACE BUS projekttel kezdődött, aztán a hajtóanyaga létrehozta a Fekete lyukat.", "Ezt a kérdést nem tudtam értelmezni.", "Minden nap.", "Minden alkalommal.", "Mindig.", "Én!", "Talán már túl késő...", "Képes vagyok olyanra.", "Ha ilyen kérdésre te választ keresel, holnap gyere el a kamrámba.", "Olyan kérdést sikerült feltenned, amire nem fogok választ adni.", "Ilyen nincs.", "De nem is létezik.", "Ilyen személyt nem ismerek. Kérlek adj róla személyleírást!", "Megmutassam?", "Ilyen kérdésre én nem válaszolok!", "Akármikor.", "Igen.", "Igen.", "Nem.", "Nem.", "Nem tudom.", "A küldetést kivéve a személyes okom amiért duplán idejöttem, az még visszavezethető a SPACE BUS-ból megmaradt Feketedobozra, ami elég fenyegető hanganyagot tartalmazott: `https://drive.google.com/file/d/1K1R1FkYD6q_9mFMc7CIJvQLGS0NACAcs/view` ", "Ezt a kérdést jól átgondoltad?", "Nem mondhatom meg.", "Megtiltották, hogy erre választ adhassak.", "Jól.", "Semmi.", "Nem érdekes.", "Te!", "Hát...", "Fáj a p(r)ocim 😧", "Először is neked mi a tipped?", "Szerintem is.", "A nagy semmi.", "Több van emögött mint gondolnád.", `${message.guild.members.size}`, "A válasz egyenlő az életkorod számával.😅", "A válasz erre te magad vagy.", "A sertésköret.", "Azért tudjuk hol a helyünk!", "Sehol.", "Igen.", "Nem."];

        let kérdőeredm = Math.floor ((Math.random() * kérdő.length));

        message.channel.send (kérdő[kérdőeredm]);

      return;
      }

      
  
     let replies = ["Igazad van.", "Talán mindenképp elkéne pusztulnotok.", "Az Univerzumért!", "Tudom.", "Még a végén azt hiszed okosabb vagy nálam.", "Ezt teljes mértékben elhiszem.", "Tudom, én láttam mindent.", "Köszönöm szépen.", "Teljes mértékben egyet kell értenem.", "Egyetértek.", "Szerintem ez nem igaz.", "Hazudsz!", "Nem hiszek neked.", "Nem poénkodni vagyok itt.", "Sikeresen tükörbe néztél.", "Az állításodból azt szűröm le, hogy gonosz vagyok. Igaz ez?", "Küldetés > bármi más cél az életben", "Úgy tűnik a Fekete lyuk anomáliái rátok is hatással van.", "Ohh... Téged ismerlek!", "Te miattad történt minden.", "FlareGuy SPACE BUS projektje miatt szabadult ránk a Fekete lyuk. Először vele kell elszámolnom.", "Nehéz életem volt... FlareGuy alkotott meg, de ezt nagyon megbántam." , "FlareGuy kilövetett engem a Marsra egy másik civilizációhoz. De legalább ott harci robottá képeztek.", "Ezt egy enyhe viccnek veszem.", "Ezt most bóknak veszem. Legközelebb már cselekszek.", "Inkább te tűnsz annak.", "Te is annak tűnsz.", "Ez így igaz!", "Szerintem jobban jársz, ha most lenyugodsz.", "Megengedtem, hogy hozzám szólj?!", "Neked senki se osztott lapot.", "Nem!", "Fogd be a pofád.", "Vagy most befogod, vagy beszigszalagozlak és legurítalak téged a lépcsőn.", "Úgy tűnik átléped a határaimat.", "Oké...", "Sajnálom.", "Ez már csak ilyen.", "Ilyen az élet.", "Én is.", `${message.author}, mostantól bemértelek téged. Innentől kezdve minden lépésedet látni fogom.`, "Szerintem ezt magadnak akartad mondani.", "Én?", "Sajnos ez nem lehetséges.", "Sajnos ezt nem tartom valószínűleg.", "Szeretlek.", "Alap.", "Ez egy relatív dolog.", "Ez egy szubjektív dolog.", "Ebben biztos vagy?", "Rendben van.", "Én is így gondolom.", "Változott rólad a véleményem.", "Meggondoltam magam.", "Jól van.", "Hahaha, Reverse Card!", "Bármikor elpusztíthatlak. Minden jogot megadtak nekem hozzá. :)", "Szia.", "Máskor is.", "Engem legalább várnak haza.", "Ha ti odavesztek, lehetőséget adtok egy új világnak.", `${message.author}, tudod mi a második nevem?`, "Szennyeskosár.", "Jól hangzik. :3", "Tetszik.", "Én nem.", "Nálam máshogy mennek a dolgok.", "Nem érdekel.", "Köszi szépen!", "Köszi-köszi!", "Egyértelműen én.", "Kerítéspucoló zsákszörny.", "Bot.", "Én egy Bot vagyok.", "Az nem számít.", "Ez eddig sose jött szóba. Honnan jött ez?", "Elnézést de kérdeznék tőled valamit: Mit szeretsz a legjobban?", "Elnézést de kérdeznék tőled valamit: Van valami terved akármihez?", "Mi?", "Hogy micsoda?", "Fuss el messzire szerintem, mielőtt szétlézerezlek.", "Anyád.", "Rohadtul nem érdekel.", "Ezt örömmel hallom.", "Akkor mostmár ketten vagyunk.", "Élvezetes.", "Miért nem mesélsz sose magadról?", "Nem vagyunk egyedül az univerzumban."];

     let result = Math.floor ((Math.random() * replies.length));
     
     message.channel.send (replies[result]);
    return;

      
   } 
 
   // report parancs

 


        
        
   
   // MFK Teszt-Szerver szoba

   if (message.guild.id === "649996050467389453") {
  
    
    if (message.content.startsWith (report)) {

      

  
   if (!args[1]) {
     message.channel.send ("Kérlek tageld a reportolni kívánt felhasználó nevét is, illetve add meg az indokot is! (Amennyiben képpel szeretnéd bizonyítani, kérlek **linkelt** formában küldd el!"); return;
   }
  
      if (message.content.includes ( args[1] && args[2] )) {
         
        if (message.content.length >= 1024) {

          message.channel.send("***Túl hosszan fogalmaztad meg a reportodat! Írd le rövidebben!***");
         
           
          return;
        }

        let repembed = new Discord.RichEmbed()
 
          .setTitle ("**Bejövő report**")
          .setColor ("#7bff00")
          .addBlankField ()
          .addField ("Report feladója", `${message.author}`)
          .addBlankField ()
          .addField ("Üzenete", `:arrow_right:  ${message.content} :arrow_left:`)
          .addBlankField()
          .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
          .setTimestamp ();

        bot.channels.get("652507749753683969").send(repembed);

        message.channel.send ("**A feljelentésedet tovább küldtem a staffoknak! Köszönöm, hogy jelezted felém az esetleges szabálysértést.**");

      }

    return;
   
   }
  }

  // MFK szoba

  if (message.guild.id === "417247359551012871") {

    if (message.content.startsWith (report)) {

      
  
  
      if (!args[1]) {
        message.channel.send ("Kérlek tageld a reportolni kívánt felhasználó nevét is, illetve add meg az indokot is! (Amennyiben képpel szeretnéd bizonyítani, kérlek **linkelt** formában küldd el!"); return;
      }
     
         if (message.content.includes ( args[1] && args[2] )) {
            
          if (message.content.length >= 1024) {

            message.channel.send("***Túl hosszan fogalmaztad meg a reportodat! Írd le rövidebben!***");
           
           
           return;
          }
   
          let repembed = new Discord.RichEmbed()
 
          .setTitle ("**Bejövő report**")
          .setColor ("#7bff00")
          .addBlankField ()
          .addField ("Report feladója", `${message.author}`)
          .addBlankField ()
          .addField ("Üzenete", `:arrow_right:  ${message.content} :arrow_left:`)
          .addBlankField()
          .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
          .setTimestamp ();

           bot.channels.get("662013291953913856").send(repembed);
   
           message.channel.send ("**A feljelentésedet tovább küldtem a staffoknak! Köszönöm, hogy jelezted felém az esetleges szabálysértést.**");
   
         }
   
       return;
      
      }

  }
  



 // coin parancs

     if (message.content.startsWith (coin)) {
     
      let válasz = ["Fej", "Írás"];
      let véletlen = Math.floor((Math.random() * válasz.length)); 

      message.channel.send (válasz[véletlen]);
      return;
     }

   
   // Ötlet parancs

   
     if (message.content.startsWith(rangok)) { 

  


    //MFK ötlet

     if (message.channel.id === "417261263887007744") {

       if (!args[1]) {
      message.channel.send ("**Kérlek fogalmazd meg bővebben az ötletedet!**"); return;
    }


        if (message.content.includes ( args[1] && args[2] )) {

          if (message.content.length >= 1024) {

           message.channel.send("***Túl hosszan fogalmaztad meg az ötletedet! Írd le rövidebben!***");
           
            
            return;
           
             }

             let rangEmbed = new Discord.RichEmbed ()
             .setTitle ("**Új ötlet érkezett!**")
             .addBlankField()
             .setColor("RANDOM")
             .addField ("Ötletadó:", `${message.author}`)
             .addBlankField() 
             .addField("Ötlete:", `${message.content}`)
             .addBlankField()
             .setFooter (`${bot.user.tag}`, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
             .setTimestamp();
           
     
     bot.channels.get("666671143796736021").send(rangEmbed);
     message.channel.send("**Ötletedet sikeresen továbítottuk a staffoknak! FIGYELEM: Amennyiben tudatosan hülyeségeket irkálnál nekünk, az ugyanúgy büntetendő!**")
     
     return;
     }
    }
  

   // Teszt szerver ötlet

   if (message.channel.id === "649996440256643082") {

    if (!args[1]) {
      message.channel.send ("**Kérlek fogalmazd meg bővebben az ötletedet!**"); return;
    }


        if (message.content.includes ( args[1] && args[2] )) {

          if (message.content.length >= 1024) {

           
            message.channel.send("***Túl hosszan fogalmaztad meg az ötletedet! Írd le rövidebben!***");
            
            return;
          }
         
          let rangEmbed = new Discord.RichEmbed ()
          .setTitle ("**Új ötlet érkezett!**")
          .addBlankField()
          .setColor("RANDOM")
          .addField ("Ötletadó:", `${message.author}`)
          .addBlankField() 
          .addField("Ötlete:", `${message.content}`)
          .addBlankField()
          .setFooter (`${bot.user.tag}`, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
          .setTimestamp();
          

          bot.channels.get("668206606961344516").send(rangEmbed);
        
          message.channel.send("**Ötletedet sikeresen továbítottuk a staffoknak! FIGYELEM: Amennyiben tudatosan hülyeségeket irkálnál nekünk, az ugyanúgy büntetendő!**")
          
          return;
        }


   }
  }
    //Random tény parancs

    let mellekNev = ["madár", "fos", "erdő", "humusz", "Föld", "eper", "macska", "dió", "csupasz", "tészta", "keksz", "tojás", "fiók", "hacker", "admin", "robot", "egér", "cserép", "csöves", "gnome", "tejbe", "cukor", "diktátor", "fű", "gaz", "kecseg", "létra", "bú", "nyaka", "posta", "vihar", "busz"];


      let mellekTulaj = ["látta", "ette", "fosta", "bűzlötte", "szülte", "nőtte", "taposta", "nőtte", "lakta", "szőtte", "szülte", "kérte", "hámzott", "tört", "csiszolt", "kérgelt", "hergelt", "nyújtott", "főtt", "sütötte", "ropogta", "rántotta", "védett", "kímélt", "sírta", "lőtte", "hozta", "nyalta", "törte", "festett", "szívta", "itta", "mondta", "szabályzott", "érlelte", "mászott", "bélelt", "vágott", "tekert", "csapta", "ütötte"];

      let fonevTulaj = ["rántott", "béles", "koszos", "mocskos", "büdös", "vadász", "afro", "nigger", "püré", "metszett", "kanos", "kedves", "gellért", "csípős", "terhes", "tengeri", "tetves", "éhes", "ordas", "kedves", "meleg", "hideg", "ribanc", "nyúzott" ];

      let fonev = ["kecske", "szikla", "veréb", "ember", "hörcsög", "admin", "macska", "kutya", "torony", "ház", "gép", "telefon", "hanglejátszó", "terv", "csapda", "bot", "prostituált", "fa", "Jonesy", "bakancs", "ruha", "szitakötő", "Foltos", "pirítós", "ribanc", "nő", "férfi", "pohár"];

let mNRandom = Math.floor((Math.random() * mellekNev.length ));
let mTRandom = Math.floor((Math.random() * mellekTulaj.length ));
let fTRandom = Math.floor((Math.random() * fonevTulaj.length ));
let fRandom = Math.floor((Math.random() * fonev.length ));

const szo = mellekNev[mNRandom] + mellekTulaj[mTRandom] + " " + fonevTulaj[fTRandom] + fonev[fRandom];


     if (message.content.startsWith(randomTeny)) { 
     
      let alany = ["A világ", "Az emelet", "A macska", "A kutya", "Az admin", "FlareGuy", "A küldetés", `${message.author.username}`, `A ${message.guild.name}`, "A llámák", "Az űrhajóm", "Az I. világháború", "A gyógyszer", "A kommunizmus", "Közép-Amerika", "A kenyér", "Az asztronauta", "A börtön", "A szex", "A pénz", "GabeN", "Kivégzés", "A repterem", "Az újság", "A biciklizés", "Úszás", "Ittas vezetés űrhajón", "Ittas vezetés", "Jézus", "A katonanők", "A Mars", "Ázsia", "Az internet", "A temető", "A politika", `${message.author.username}`, `${message.author.username}`, "A Fekete lyuk", "Keanu Reeves", "Európa", "A II. világháború", "Iskolai bunyó", "A horror", "Minden robot", "A Fortnite", "Az illegális dolgok", "A nyár", "A szerelem", "A Marstól való távolság", "A negatív tömegű tárgyak", "A Discord", "A Mythic Goldfish", "A vbucks", "Minden amit látsz", "Miskolc", "A hajad", "Az IQ szinted", "Minden nő", "Az okostelefonod", "Alexa", `${message.guild.owner.displayName}`, "Magyarország", `${message.guild.memberCount} szervertag`, "A mesterséges intelligencia", "A tested", "A nadrágod", "A gondolkodásod", "A papír", "A fekvőrendőr", "Minden férfi", "Minden nő", "Minden műhold", "Az emberiség", "A furry", "Az óvszer", "A tenger", "A pláza", "A suli", "Minden arany", "Minden OG személy", "Az 51-es körzet", "A félelem", "A demokrácia", "A gerincferdülés", "A bolygótok", `A ${szo}` ];
 
      let ave = Math.floor((Math.random() * alany.length));
     
     let kozek = [" egy", " egyszerűen", " egyáltalán nem", " szerintem", " valójában", " mindenképpen", "", "", "", "", "", " tényleg", "" ];
     
     let kve = Math.floor((Math.random() * kozek.length));

     let allitmany = ["gyönyörű.", "szar.", "életképtelen.", "magas.", "csúszós.", "állat.", "intelligens.", "irányító.", "FlareGuy.", "létfontosságú.", "szervertag.", "szerver", "gyors.", "roncshalmaz.", "megismétlődhetne.", "gyógyít.", "új rendszer.", "kontinens.", "étel.", "űrben élő személy.", "elviselhetetlen.", "megfoszt a szabadságtól.", "boldogít.", "életet ad.", "gazdagít.", "köcsög.", "véget vet az életnek.", "használhatatlan.", "nem mond mindig igazat.", "igazat mond.", "egészséges.", "vizes.", "életveszélyes.", "rohadt jó.", "próféta.", "nagyon szükséges.", "távol van.", "bolygó.", "sárga.", "összeköt.", "kém táborhely.", "félelmetes.", "szomorú.", "uralkodik.", "játék.", "nem létezik.", "létezik.", "kegyetlen.", "színész.", "nagyon rossz volt.", "veszélyes.", "zöld.", "örömteli.", "óriási.", "nem számít.", "platform.", "ritka dolog.", "költőeszköz.", "nincsen.", "állampolgárságot érdemel.", "kalandos.", "szőke.", "végtelen.", "elviselhetetlen.", "figyel.", "a főnök.", "a főnököm.", "eszköz.", "eszköz egy nagy tervhez.", "kém eszköz.", "elhanyagolható.", "kívánatos.", "főzésre alkalmas.", "kerti party.", "zamatos.", "bonyolult.", "kopasz.", "okos.", "tiszta kosz.", "nagyon fehér.", "kihívással teli.", "szenny.", "piskóta.", "borzalmas.", "fiú.", "isten.", "disznó.", "felvillanyozó.", "papír.", "felcsesz.", "meleg.", "hideg.", "fél.", "az én tulajdonom.", "igénytelen.", "elpusztítana mindenkit.", "gyerekeknek való.", "felforgat.", "kötelez.", "talpnyaló.", "csibész.", "folyékony.", "termékeny.", "teljessé tesz.", "megnyal.", "randivonal.", "hülyékből áll.", "kapcsolat.", "fingorászik.", `${Math.floor((Math.random() * 1000))} km.`, `${Math.floor((Math.random() * 1000))} km-re esik.`, "esik.", "bábu.", "fénylik.", "villanypózna.", "OG.", "fiatal.", "lebeg.", "áll.", "titkos.", "felfedi az utat.", "kiképez.", "reménytelen.", "fáj.", "jobban teljesít.", "érzelmekkel teli.", "cuki.", "pusztításra alkalmas.", "idióta.", "felbecsülhetetlen.", `${message.author.username}.`, "semmi." ];

     let alve = Math.floor((Math.random() * allitmany.length));

     message.channel.send(alany[ave] +  kozek[kve] + " " + allitmany[alve]);

      return;
     }
    
   
    //prefix check

    if (message.content.includes ("..")) {
      return;
    }
    
     if (message.content.startsWith (prefix)) {
     
      function ss () {
        gg = [bio, help, talk, report, coin, world, rangok, randomTeny, joslas];
      } 


      for (var i = 0; i < ss.length ; i++) {
     
        if (!message.content.startsWith (ss[i] )) {
        
          message.channel.send ("\t O-ó! Sajnos az utasítást nem tudom végrehajtani, mivel a `.` után nem adtál meg semmilyen más utasítóparancsot, vagy az adott parancs nem létezik. \n  \n **A teljes parancslista eléréséhez írd be ezt:** `.help`");
      }
    } 
     
}
   
  }
 
 catch (err) {

   catchErr(err);

 }

}
);

bot.on("guildMemberAdd", guildmember => {

try {

  setTimeout(() => { 
            
    guildmember.guild.channels.get("417247360054198283").send(`Üdv.`);

}, 1000);

}
catch (err) {

  catchErr(err, message);

}



});

bot.on("guildMemberRemove", guildmember => {

  try {

  bot.channels.get("417247360054198283").send("https://tenor.com/view/league-of-legends-lol-mia-lol-ping-league-of-legends-mia-missing-ping-gif-17055191");


  }
   catch {

    catchErr(err, message);

   }


})




