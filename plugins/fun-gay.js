let handler = async (m, { conn }) => {
let vn = './media/a.mp3';
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/gay', {  
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),   
}), 'error.png', `*🏳️‍🌈 ¡¡¡𝗧𝗘 𝗛𝗔𝗦 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗗𝗢 𝗘𝗡 𝙂𝘼𝙔!!! 🏳️‍🌈*`, m)   
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { 
type: 'audioMessage', 
ptt: true });
};
handler.help = ['gay']
handler.tags = ['maker']
handler.command = /^(gay)$/i
export default handler
