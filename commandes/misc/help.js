const { MessageEmbed } = require("discord.js"), 
fs = require("fs"), 
ms = require("ms"),
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };

   let config = require("../../config.json")

function update(message, db) {
    fs.writeFile(`./serveur/${message.guild.id}.json`, JSON.stringify(db), (x) => {
        if (x) console.error(x)
      });
};

module.exports.run = async (client, message, args) => {
    emojis = require("./../../emotes.json")

    if(!message.guild) return;

       let dab = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"))
   let config = require("../../config.json")

    let prefix = dab.prefix
    if (prefix === null) prefix = dab.prefix

   filter = (reaction, user) => ['1️⃣','❌'].includes(reaction.emoji.name) && user.id === message.author.id,
   dureefiltrer = response => { return response.author.id === message.author.id }; 

   const msgembed = new MessageEmbed()
   .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic: true}))
       .setTitle(`**Page d’aide**`)
   .setDescription(`<:admin:917216134560899103> Mon prefix sur ce serveur est: \`${prefix}\`\n\n📂 Veuillez réagir a la réaction \`1️⃣\` pour obtenir toute les commandes du bot\n\n**<a:b_etoile:917223528640692254> Liens:**\n\n<:ServerBadgePartner:917217720884420628> [Serveur](https://discord.gg/angeles)\n<:blueline:917223531627020328> [Invite Moi](https://discord.com/api/oauth2/authorize?client_id=891569073035554848&permissions=8&)`)
   .setColor(dab.color)
   .setTimestamp()  

   
    message.channel.send(msgembed)
    .then(async m => { 
const collector = m.createReactionCollector(filter, { time: 900000 });
collector.on('collect', async r => { m.delete()  
if(r.emoji.name === "1️⃣") {

    const msgembedee = new MessageEmbed()
    .setTitle("Mes commandes")
    .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
    //.setAuthor(client.user.username,client.user.displayAvatarURL({dynamic : true }))
    .setDescription(`> Voici mon prefix :\`${prefix}\`
    > J'ai un total de \`${client.commands.size}\` commandes !\n`)
    .addField(`<:admin:917216134560899103>・Administration (6)`, ` \`autorole\`, \`membercount\`, \`statut\`, \`tempchannel\`, \`setlogs\`, \`embed\``)
    .addField(`<:invite:917226445372268564>・Invitations (8)`, `\`config\`, \`add-invites\`, \`invites\`, \`remove-invites\`, \`joinchannel\`, \`joinmessage\`, \`leavechannel\`, \`leavemessage\``)
    .addField(`<:Moderationcommands:917222823720804443>・Modération (19)`, `\`create\`, \`nick\`, \`resetnick\`, \`slowmode\`, \`massiverole\`, \`role\`, \`deleterole\`, \`clear\`, \`dm\`, \`lock\`, \`nuke\`, \`slowmode\`, \`ban\`, \`unban\`, \`banlist\`, \`botlist\`, \`mute\`, \`unmute\`,\`voicemove\``)
    .addField(`🛡️・Anti-Raid (8)`, `\`antiping\`, \`antibot\`, \`antijoin\`, \`antilink\`, \`antitoken\`, \`antiwebhook\`, \`secur-max\`, \`secur-opti\`, \`webhook\``)
    .addField(`<a:Giveway:917216140755861564>・Giveaway (2)`, `\`gstart/gcreate\`, \`greroll\``)
    //.addField(`<:server:845283397920489542>・Backup (4)`, `\`backup create\`, \`backup remove\`, \`backup load\`, \`backup list\``)
    .addField(`${emojis.fun.coin}・Fun (19)`, `\`betrayal\`, \`fishing\`, \`tweet\`, \`reunion\`, \`gaypic\`, \`pic\`, \`8ball\`, \`calcule\`, \`gay\`, \`fight\`, \`smoke\`, \`dance\`, \`hug\`, \`kiss\`, \`meteo\`, \`mind\`, \`wasted\``)
    .addField(`🏘️・Utilitaire (12)`, `\`dev\`, \`invite\`, \`adminlist\`, \`help\`, \`vc\`, \`snipe\`, \`emojis\`, \`serverpic\`, \`serverinfo\`, \`userinfo\`, \`channelinfo\`, \`speed\``)
    .addField(`<a:Couronne:917216146057478154>・Owner (8)`, `\`setcolor\`, \`setprefix\`, \`restart\`, \`leave\`,\`setactivity\`, \`setavatar\`, \`setname\`, \`serverlist\``)
    .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
    .setColor(dab.color)
    .setThumbnail(client.user.displayAvatarURL({dynamic : true}))
    .setTimestamp() 

          message.lineReply(msgembedee)
} else if(r.emoji.name === '❌') {
      m.delete()
    }
});
await m.react("1️⃣") 


await m.react("❌")
    });
};


module.exports.help = {
    name: "help",
    aliases: [],
    category: 'Gestion de serveur',
    description: "- Permet d'afficher le panel de configuration de l'autorole.",
  };