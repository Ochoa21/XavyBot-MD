let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*—◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙴𝚂 wa.me/573146224366*
`.trim()   
let buttonMessage= {
'document': { url: `no` },
'mimetype': `application/${document}`,
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'no',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.instagram.com/ochoa_ofc' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '👾 𝙼𝙴𝙽𝚄 👾'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '📮 𝙳𝙾𝙽𝙰𝚁 📮'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑;;;\nFN:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nORG:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nTITLE:\nitem1.TEL;waid=5219996125657:+521 999 612 5657\nitem1.X-ABLabel:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nX-WA-BIZ-DESCRIPTION:[❗] ᴄᴏɴᴛᴀᴄᴛᴀ ᴀ ᴇsᴛᴇ ɴᴜᴍ ᴘᴀʀᴀ ᴄᴏsᴀs ɪᴍᴘᴏʀᴛᴀɴᴛᴇs.\nX-WA-BIZ-NAME:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: 'Bruno Sobrino 👑', contacts: [{ vcard }] }}, {quoted: m})
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
