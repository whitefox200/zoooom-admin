const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Impossible / مستحيل`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});













let emojiss = require("node-emoji");//npm i node-emoji
client.on("message", msg=>{
if(msg.content.startsWith(`${prefix}setRole`)){
if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("you don't have permission").then(s => {s.delete(1600);})
msg.reply("منشن الروم الي تبي فيه التفعيل").then(msgs=>{
  const filter = response => response.author.id === msg.author.id;
  msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
  .then( collected =>{
    msg.delete();
    let idC = msg.guild.channels.find(c=>c.id == collected.first().mentions.channels.first().id)
    if(!idC) return msgs.edit("لم اجد الروم");
     idC = idC.id;
     msgs.edit(`${msg.author}, ادخل الايموجي الذي تريدة للتفعيل`)
const filter = response => response.author.id === msg.author.id;
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
.then( collected =>{
if(!emojiss.hasEmoji(collected.first().mentions._content)) return msgs.edit("ادخل ايموجي صحيح !");
newemoji = collected.first().mentions._content;
msg.delete();
msgs.edit(`${msg.author}, منشن للرتبة الذي تريدها`)
const filter = response => response.author.id === msg.author.id;
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
.then( collected =>{
let roleW = collected.first().mentions.roles.first()
if(!roleW) {
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:x: - منشن الرتبة `);
  msg.reply(embed).then( z => z.delete(3000)); return
};
let role = msg.guild.roles.find(`name`, roleW.name);
if(!role) {
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:x: - Could't find \`${roleW.name}\` role.`);
msg.reply(embed).then( msgs => msgs.delete(3000));
return
}
roleNew = role;
msgs.edit(`${msg.author}, ادخل النص الذي تريدة`)
const filter = response => response.author.id === msg.author.id;
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
.then( collected =>{
stringNew = collected.first().mentions._content;
let channel = msg.guild.channels.get(idC);
if(!channel) {
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:x: - Could't find \`${idC}\` Channel.`);
msg.reply(embed).then( msgs => msgs.delete(3000));
return
}
channel.bulkDelete(100)
channel.send(`@here || @everyone
${msg.guild.name}© :arrow_down:
 
${stringNew}
`).then( msgA =>{
msgA.react(newemoji).then(()=>{
  const Ac = (reaction, user) => reaction.emoji.name === newemoji && !user.bot;
  const Acc = msgA.createReactionCollector(Ac, {time: 120000});
  Acc.on("collect", r=>{
  let member = msg.guild.members.get(r.users.last().id);
  if(!member) return;
  r.remove(member.user);
if(member.roles.find(r=>r.name == roleNew.name)) return;
    member.addRole(roleNew);
  channel.send(`${member.user}, تم تفعيلك`).then(z => z.delete(1500));
})})})
}).catch(e => {console.log(e.message)});  
}).catch(e => {console.log(e.message)});
}).catch(e => {console.log(e.message)});
}).catch(e => {console.log(e.message)});
})
///
}});











let vojson = JSON.parse(fs.readFileSync('vojson.json', 'utf8'))
client.on('message', message => {
    if(message.content.startsWith("^setVc")) {
let channel = message.content.split(" ").slice(1).join(" ")
let channelfind = message.guild.channels.find('name', `${channel}`)
if(!channel) return message.channel.send('Please Type The Voice Channel Name Example: !setVc <Channel name>')
if(!channelfind) return message.channel.send('Please Type The Voice Channel Name Example: !setVc <Channel name>')
vojson[message.guild.id] = {
stats: 'enable',
chid: channelfind.id,
guild: message.guild.id

}
channelfind.setName(`VoiceOnline: ${message.guild.members.filter(m => m.voiceChannel).size}`)
message.channel.send('**Done The Voice Online  Is Turned On**')
}
    if(message.content.startsWith("^vc off")) {
      message.guild.channels.find('id', `${vojson[message.guild.id].chid}`).delete()
    vojson[message.guild.id] = {
        stats: 'disable',
        chid: 'undefined',
        guild: message.guild.id
        }
        message.channel.send('**Done The Voice Online Is Turned Off**')

}
fs.writeFile("./vojson.json", JSON.stringify(vojson), (err) => {
    if (err) console.error(err)
  })
})

client.on('voiceStateUpdate', (oldMember , newMember) => {
            if(!vojson[oldMember.guild.id]) vojson[oldMember.guild.id] = {
                stats: 'disable',
                chid: 'undefined',
                guild: 'undefined'
            }
                    if (vojson[oldMember.guild.id].stats === 'enable') {
                        let ch = vojson[oldMember.guild.id].chid
                        let channel = oldMember.guild.channels.get(ch)
                        let guildid = vojson[oldMember.guild.id].guild
                        channel.setName(`VoiceOnline: ${oldMember.guild.members.filter(m => m.voiceChannel).size}`)
                    };
                    if (vojson[oldMember.guild.id].stats === 'disable') {
                    return;
                    }
        });













client.login(process.env.BOT_TOKEN);
