const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? 'https://i.imgur.com/WLQqA2D.jpeg

*👋𝑰 𝒂𝒎 𝑶𝒏𝒍𝒊𝒏𝒆 𝑵𝒐𝒘 🤖*

𝒀𝒐𝒖 𝑪𝒂𝒏 𝑨𝒍𝒔𝒐 𝑱𝒐𝒊𝒏 𝑶𝒖𝒓 𝑮𝒓𝒐𝒖𝒑👇

    𝐵𝛩𝑇 𝑊𝛨𝛥𝑇𝑆𝛥𝛲𝛲🤖

https://chat.whatsapp.com/HGZLdOeJuvQ85s29pvX2iB' : process.env.ALIVE_MSG,
LANG: process.env.LANG === undefined ? 'EN' : process.env.LANG,
ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.imgur.com/WLQqA2D.jpeg' : process.env.ALIVE_LOGO,
FOOTER: process.env.FOOTER === undefined ? '☠️мґ.ʊηкη◎ẘη☠️' : process.env.FOOTER,
CAPTION: process.env.CAPTION === undefined ? ',*☛мα∂є ву мґ.ʊηкη◎ẘη☠️*' : process.env.CAPTION,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
INBOX_BL_MSG: process.env.INBOX_BL_MSG === undefined ? '*Inbox not allowed' : process.env.INBOX_BL_MSG,
HOST: process.env.HOST === undefined ? '-' : process.env.HOST,
SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID
};
