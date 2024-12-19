//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2349123731026";
global.sudo = process.env.SUDO || "2349123731026";
global.owner = process.env.OWNER_NUMBER || "2349123731026";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk0xYkh4S1c2dzR4L3QxTkpKTFE1bkdhaXRuY2RQcVRRNnhmSWswMS8xdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2p2TVhNL1Zhd0JDL01qOWV0UmtrSFh6d295NjMxODF3cVQ4R2pFdm9SVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQ1pTY2RiT2JENUNjUE9KeFUxNlNkT0c5aUhLcDlKUTQ1YmdnaUNvYzFrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5M2hMdUFCMmd3eHNkMVVFZjdvb2xUTnJpaEQxci81em9ha2pNSCt2dmtBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZCS2s4VGNVVi9TOHBrbm5HNWQrdExOMU1Ba2d0OVdDYW5YbzFvR1piSEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFtWmtLRGM5cEg1VEtZc0haek9tODMzaTduQW1Ec01MSC83dUxxU2J4U1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUQ4aExNUkdGTlVUeEpvMUFhZVNnZE5QdXk1RE9sZkZFd3E3SjlLUlhGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3VQUXNaR0ZTS3VLSHlMOVlVQ2FZSXFlRnhWalBFUHBBdVdXMklyNnNScz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFINWlLbUtPTTAxTzhPSkl5VlVsQzJIZ1M4OUFnY2ljaENhVXBYSnFiOHlPRXlHMEI5cGlPQVVtdk1wbTQ3ek43QWw2R1NNOUxlNG5uTldXeFZnemh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTMsImFkdlNlY3JldEtleSI6IjBQZFlyNjlObGo3VWVhYllVMXpEK2NHTTdEa3ozaEI1b0ZnWTlFcTQ2dDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik41aDhMdGhxUlQtRjdUaWNMUklONVEiLCJwaG9uZUlkIjoiZjE1N2JlMGEtNzEyOS00ZjU4LWIwYjUtMWNjNzQ0YzM2NGU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJXNUYwV2xtWXN3SXA1bXBNcktjWjVsUDVaQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHOFVNMUNadEI5cWxtVGxSR2NoU1VzU3NVMTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUlpZRVNSNEQiLCJtZSI6eyJpZCI6IjIzNDcwNTg4MDc3NDM6MjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oCiLl8u4oCi4oCiwrTCr2Bg4oCiLsK4wrgu4oCiYCBWw69sbMOvw6XDsSBg4oCiLsK4wrgu4oCiwrTCtMKvYOKAouKAoi5fLuKAoiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUENoK0UwUWl2MlF1d1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicW5jRzNZcDl4T0lCL1VvY0dlY21vVW8xUHVCUVQ1QU9mRmxMaVN3MnltWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ2t1akx5alZSa2Ryc0ZtWjNOVGdreXVuU0NHUS9ILzI5ejZKQ1hGVVRiVC9kaTZsSTdza0pvUjVPbmVJWmlTZDBLdlVrSTFXTEQzZS9maXpReVF3Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6Ilh0aGpVcmdha0VLdDczM3FVSVp1ejlVRXJ6S01mdmV2UmZWTUFyNHdJbFczVmp5WHhsWWdrOFhPT1lEVFYvY0xaWEZ5RXhHMnlwcDJ3ZzhJa3Y4a2lnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA1ODgwNzc0MzoyN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhcDNCdDJLZmNUaUFmMUtIQm5uSnFGS05UN2dVRStRRG54WlM0a3NOc3BtIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0NjIyODcxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUw1ZCJ9
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0NDM2R1LzFFNC9YYlZFOGFZcUNqOS9oZHVrdkdZWTFBL3NQalduZzlVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXEzaFpiNkdnbVdIYjU5N1ZaTlQzMUh1Sm5raDdSY1RKdmpsUnNISnpnST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyT01FeVdVcndGMGR4amhRL3NwMTdxOVpKY2pZdGhEbXFsV292a1Y5N1VBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpdnJueDhXbmxmNnYycjdiMEFBUnFDdW9yQ0NYZVdkWXhJaU9VVy8zaVVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlIV1hZQ1FHdTRiZmJScERnc0NTR1VOcjZYeXp3ZzBEclZmKzhtcDNMR0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikw1T3g5N09aYjQyLzM2YkYydVhOTndDRTA2UzhiVHhhY1dxYm1IZERQRmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0FkMnVZa2QvS2hTVUJLWFNHM0ttRFFXZllrZUdMRmU0dVpQNThlbmxVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHUwOElScFMrbmtjVVR3enlFaVBnUlFidEQwYlMzZzNvc0dwWGQrTzZVRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY5c2RWQ2hVZHVTYkFtdkM1Z0RqUG9iZy9oOUlEUHU1TmlOUUg0dVRxeFhhK0dwQmxka1RZQmVVN0NhL01Da3M3WEM1bmdsbVNjYVNPN1ZHNFZBckRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjksImFkdlNlY3JldEtleSI6IkJydG5xYnB3Rk51Ulc5bFMrQXMyT284SzMvNmpyeExwTTBpbU15bjZRc289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2NDQyNzA1ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzhCMUU4QzU5RENEOUY0QzI4RUUyRkUyREZENUMwNDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzM2MDMxM30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2NDQyNzA1ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjgyNzJGQ0QyNkNDMDYwN0ExMEY2OTc3QTdDQUQ1NkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzM2MDMxM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoid0k0dE9jVlZTT2lCZVZsSXp0NGc4USIsInBob25lSWQiOiI5YmIzMWZiNi05MTA2LTQ5MDQtYWU3ZS05OTRkOWY4MGQ1ZTAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHphVVJwUldESjVhN3MyVitiUWJFQ3V4QklZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVsZUk0MEk1MTNhRHI2NVpmdVpoc2FTZnZkUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2RFE4Wk01WiIsIm1lIjp7ImlkIjoiMjc2NDQyNzA1ODg6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLSU5HIFBIQU5UT00g8J+RkSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDZYcExJRkVLamExYmNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOTUvbnI3Rk5ZKytCd3hHVGQ5c2ttN0VWb0JQbTdSQWpiSVhPb05PaXpRVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiai94TjV6eEdqNURIODJIY2JuRUpxVWpnYzVibXQ0YXd2QTFac3B3U1R3aFdiUGZNb3ZwdHNpZHkxRHV0ZXBTOEpGY2dMZ1UwNHV0Q09MK3FDdzhaRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjFmZXh1cVhvNVo1bVp5M3RMTXU2Y2cxbnZiWVhrYVFkMjgwNjdKRGJQbFl0UmYvS3BZV0lVTUhpaWVNYTczQlZVZWRjOVF2UEpIY25aL1VDUnJHbERnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2NDQyNzA1ODg6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmZWY1Nit4VFdQdmdjTVJrM2ZiSkp1eEZhQVQ1dTBRSTJ5RnpxRFRvczBGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MzYwMzA5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5kSiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
