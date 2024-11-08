const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    alive: 'https://github.com/Navinofc44/Autovoice-data/raw/refs/heads/main/Converted%20By%20%C2%BBS%CA%9C%C9%9B%CA%9C%CA%8C%CA%80%CA%8C.mp3'
                    }
let des = `*👋 Hello ${pushname}*

*╔╭────────────╮╕*
*╭│I'm Alive Now!!👋  │─◎◎▷*
*╘╰────────────╯╜*
*│A QUEEN-CHOOTY-NELUMI-MD │Whatsapp Bot Based │Many │Services With A │RealTime* *Automated │Consversational* *││Experience, Enjoy💫.*
*| So,I Think This Bots Are Useful To You.📍*
*│*
*│Type .menu To Get Bot User*
*│Menu💫*
*╰───────────────◎◎▷*
 *➣ ʏᴏᴜᴛᴜʙᴇ⚡*= https://www.youtube.com/@Slnethumax

*➣ ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ⚡* = https://whatsapp.com/channel/0029VagCogPGufJ3kZWjsW3A

*©ᴘᴏᴡᴇʀᴅ ʙʏ Qᴜᴇᴇɴ ᴄʜᴏᴏᴛʏ ɴᴇʟᴜᴍɪ ᴍᴅ ᴛᴇᴀᴍ*`
await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
return await conn.sendMessage(from,{image: {url: `https://imgur.com/a/cRf2GXD`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
