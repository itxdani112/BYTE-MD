
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923140870854";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEhvT1lLbzQrZ2VESjFpK05HaCtUMFhPQ1ZURmtRTCs5eW5VMHg3QkJYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkdTdHRhVUpWQ2N3NllmWFZEZ3IxZ2UrTjV5clR3NkxlV09QVEVSTHdCOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQVlKeG0wTGpSR2VOMlRaWTlROXFmdGg1d2F3ZWZLeHZETVZrVkhlRkVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0a2tuSDMvU28rSWkyYm1zR1h6OWxkNTFWMDR3dHlKZU9qVXhqckV2d3kwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFGcUtqazhycit6eUpZbVRDdmROY2hJR3RNY0ZXdVNEdHA1VnlUN25GVjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl1L3NnaTR6S0Y4YVhLRmRXSmNkbEhWYTg0ZGRjSWFsUEEyTzRNNFE1akk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU9LOEVhTW92dlNXUmF0MUo3dUJPRnVjekJGd25mcXdSMkdKeUZvcmUzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2NQVkVPUHJsS0JmbFRxbUVhZzVLdTRsTXpramY3ZkhCcTJvNXM2UHN3QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZJT1RaVlFML2pvNDdpenFYaDkvRmNlZWRkMms2QTlUUlVzazlRM0NkcTNrTGhVVkt6WHljbUcrYzRZS3ErS3h6WWtmS3RXU3VCRWZXTFBkSkJCRGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDksImFkdlNlY3JldEtleSI6IksvNjFBSUtBdXFBbmNlVWo4YzRIZHBUWFRMaU1YdXdySzFES3Y0djBTajQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJJYkVIc3BhVFZ1LTQ5Tm4zSUxya1EiLCJwaG9uZUlkIjoiNjU1MGI2MjYtNDNhYy00MzkwLTliNjItZThhOWJmNTA0YWU1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdTQ1hsNHBVdFBDbHZ1blhtWEdvK3c0aURjZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1RVFUSVE0bVdZTTRBbnBqZm5MOVRoTDhLTEk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlpDN0Y3QlAiLCJtZSI6eyJpZCI6IjkyMzE0MDg3MDg1NDo1OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiItIOqcm8aeMCAwxp5lIE1pacaeZSBcIiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDYrL084QkVJVDZvN1FHR0JnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUlRtY3ZGNm84ZGVjYVczbzNnTzYyYWdDSVZUOFBJMkthVG85anNHSDNVTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicFNYM3RBL2JPWVJZUVJXNnQ4bExJV2EvVzVrSDh3a0lVRzE3cjFQdWQ2NUY0Z0FxQXcyeElGNDc2ZkZNVGRIa3VLcXNjNHBhR0FrM2lDdXdpc3ZZQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IjRwNzRleXU2a2lNeFphL0ozR21FZC8yRk5VU1B0TTVnMWI5ODJFUTh4S1FQUnptY1RzN2xCamVyTGVEb1VIRnY5bFJCalFFeGM5UnkwMlEvdDR0ZGd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTQwODcwODU0OjU5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVVNW5MeGVxUEhYbkdsdDZONER1dG1vQWlGVS9EeU5pbWs2UFk3Qmg5MUQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAyNTM3MDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRTVHIn0=" //Make sure session id starts with Byte;;;
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "DANI BOT",
  ownername: process.env.OWNER_NAME || "DANI MUGHAL",
  errorChat: process.env.ERROR_CHAT || "923140870854",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
