/**************** THANK FOR  ***************/  
/* > Dika Ardnt 
/* > Febzabotz (Syngku)
/* > Irfan
/* > IqbalzzX
/* > April ( selingkuhan )
/* > Rifza 
/* > Aldi Fauzi ( Xziiyy )
/* > this adi

/**************** AKHIR THANK FOR ***************/  


"use strict";

require('./config')
process.on('uncaughtException', console.error) 

//Module
const {
        default: makeWASocket, 
        WASocket, 
        AuthenticationState, 
        WAMessage, 
        Contact, 
        areJidsSameUser,
        SocketConfig, 
        DisconnectReason, 
        BaileysEventMap, 
        GroupMetadata, 
        AnyMessageContent, 
        MessageType, 
        MiscMessageGenerationOptions, 
        BufferJSON, 
        delay, 
        proto, 
        useSingleFileAuthState, 
        downloadContentFromMessage, 
        WAMessageStubType, 
        generateWAMessage,
        prepareWAMessageMedia, 
        generateWAMessageFromContent 
        } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { fromBuffer } = require('file-type')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const moment = require("moment-timezone");
const { exec, spawn } = require("child_process");
const hx = require('hxz-api');
const axios = require('axios')
const speed = require('performance-now')
const os = require('os')
const { performance } = require('perf_hooks')
const ffmpeg = require('fluent-ffmpeg')
const yts = require('yt-search')
const mathjs = require('mathjs')
const maker = require('mumaker')
const textpro = require('../doraemon/textpro')
const imgbb = require('imgbb-uploader');
const fetch = require('node-fetch')
const brainly = require('brainly-scraper')
const ameApi = require('amethyste-api')
const ytsr = require('yt-search')
const google = require('google-it')
const { reSize, getRandom, pickRandom } = require('../lib/function')
const { ulartangga } = require('../game/ulartangga')
const sesiGame = './storage_cabinets/D-B/ulartangga/'
const request = require("request")
const hikki = require("hikki-me")
const xfar = require('xfarr-api')
const gcase = `break`
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif, writeExifStc } = require('../lib/exif')

const tod = '```'

/**************** SCRAPE ***************/

  const { TiktokDownloader } = require('../scrape/tiktokdl')
  const { youtube, searchResult } = require('../scrape/ytdl')
  const { pinterest } = require('../scrape/pinterest') 
  const { pinterestdl } = require('../scrape/pinterestdl') 
  const { recognize } = require('../scrape/ocr') 
  const { facebook } = require('../scrape/facebook') 
  const { wikiSearch } = require('../scrape/wiki') 
  const { herodetails } = require('../scrape/heroml') 
  const { mediafireDl } = require('../scrape/mediafire') 
  const { Text2Speech } = require('../scrape/gtts') 
  const { herolist } = require('../scrape/heroml') 
  const { sspdf } = require('../scrape/sspdf') 
  const cerpen = require('../scrape/cerpen')
  const { asahotak, family100, siapakah, siapakah2, susunkata, tekateki } = require('../scrape/game') 
  const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
  
/**************** AKHIR SCRAPE ***************/

/**************** LIBRARY ***************/
const { 
    urlShortener, 
    meme, 
    translate, 
    getLocationData,
    images,
    resep,
    rugaapi,
    rugapoi,
    cariKasar
} = require('../doraemon')
const { color,
        bgcolor } = require("../lib/color");
const { smsg, 
        formatp, 
        getBuffer, 
        fetchJson, 
        fetchText,  
        getGroupAdmins, 
        runtime, 
        isUrl,
        jsonformat,
        bytesToSize,
        sleep, 
        tanggal, 
        clockString} = require("../lib/myfunc");
const skrep = require('../lib/scrape')
const { yta, 
        ytv, 
        upload } = require("../lib/ytdl");
const { UploadFileUgu, 
        webp2mp4File, 
        TelegraPh } = require('../lib/uploader')
let setting = JSON.parse(fs.readFileSync('./config.json'));
let { ownerNumber, botName } = setting


const listmenu = JSON.parse(fs.readFileSync('./lib/listmenu.json')) 
const data_player = JSON.parse(fs.readFileSync('./data_load/user_data_save.json'))

moment.tz.setDefault("Asia/Jakarta").locale("id");
 
module.exports = async(bob, msg, m, M, help, setting, store) => {
try {
var budy = (typeof m.text == 'string' ? m.text : '')
let timeout = 60000
const time = moment.tz("Asia/Jakarta").format("DD/MM/YY HH:mm:ss z");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 2023").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const from = msg.key.remoteJid
const content = JSON.stringify(msg.message)

/*const chats = (M.mtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (M.mtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (M.mtype == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (M.mtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (M.mtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (M.mtype == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (M.mtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ""*/

const chats = (M.mtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (M.mtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.mtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.mtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.mtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.mtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.mtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.mtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''

/*var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : ''	  */

		if (bob.multi) {
			var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
		} else {
			if (bob.nopref) {
				prefix = ''
			} else {
				prefix = bob.prefa
			}
		}

//const command = chats.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const command = chats.toLowerCase().split(' ')[0] || ''
const args = chats.trim().split(/ +/).slice(1)

/**************** FUNCTION ULARTANGGA ***************/  
        
          const sleep = async (ms) => {
       return new Promise(resolve => setTimeout(resolve, ms))
   }
    
   async function ReadJsonUT(ID){
    const read = JSON.parse(fs.readFileSync(sesiGame + ID + '.json'))        
    return read
   }

/**************** AKHIR FUNCTION ***************/

/**************** GROUP MESSAGE ***************/

const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const isGroup = msg.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
const pushname = msg.pushName || "No Name"
const isCmd = command.startsWith(prefix)
const run = process.uptime()
const text = args.join(" ")
const q = args.join(" ")
const body = chats.startsWith(prefix) ? chats : ''
const botNumber = bob.user.id.split(':')[0] + '@s.whatsapp.net'
const groupMetadata = isGroup ? await bob.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isOwner = ownerNumber.includes(sender)
const isNumber = x => typeof x === 'number' && !isNaN(x)
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(M.quoted ? [M.quoted.sender] : [])])]
const mentionByTag = M.mtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByreply = M.mtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
                mention != undefined ? mention.push(mentionByreply) : []
//=================================================//
//rpg function\\
/*****
const { 
addInventoriDarah,  cekDuluJoinAdaApaKagaDiJson,  addDarah,  kurangDarah, getDarah 
//}= require('../src/darah.js')
///const { 
////cekInventoryAdaAtauGak,  addInventori, addBesi, addEmas, addEmerald,addUmpan,addPotion,kurangBesi, kurangEmas, kurangEmerald, kurangUmpan,kurangPotion,getBesi, getEmas, getEmerald, getUmpan, getPotion
//} = require('../src/alat_tukar.js')
//const {  addInventoriMonay,  cekDuluJoinAdaApaKagaMonaynyaDiJson,  addMonay,  kurangMonay, getMonay 
////} = require('../src/monay.js')
///const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam,  addKelinci,  addDomba,  addSapi, addGajah, kurangIkan, kurangAyam,  kurangKelinci,  kurangDomba,  kurangSapi, kurangGajah, getIkan, getAyam,  getKelinci,  getDomba,getSapi, getGajah
///} = require('../src/buruan.js')
///let DarahAwal =global.rpg.darahawal
///const isDarah = cekDuluJoinAdaApaKagaDiJson(M.sender)
///const isCekDarah = getDarah(M.sender)
///const isUmpan = getUmpan(M.sender)
///const isPotion = getPotion(M.sender)
///const isIkan = getIkan(M.sender)
///const isAyam = getAyam(M.sender)
///const isKelinci = getKelinci(M.sender)
///const isDomba = getDomba(M.sender)
///const isSapi = getSapi(M.sender)
///const isGajah = getGajah(M.sender)
///const isMonay = getMonay(M.sender)
///const isBesi = getBesi(M.sender)
//const isEmas = getEmas(M.sender)
//const isEmerald = getEmerald(M.sender)
///const isInventory = cekInventoryAdaAtauGak(M.sender)
///const isInventoriBuruan = cekDuluHasilBuruanNya(M.sender)
///const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(M.sender)
///const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(M.sender)
//const ikan = ['🐟','🐠','🐡']
//=================================================//
//rpg database\\
///let _buruan = JSON.parse(fs.readFileSync('../src/hasil_buruan.json'));
//let _darahOrg = JSON.parse(fs.readFileSync('../src/darah.json'))
//=================================================//
/***
  const orderCase = generateWAMessageFromContent(jid, proto.Message.fromObject({   	
 "orderMessage": {
///"orderId": orid, // Change ID
///"thumbnail": img, // Change the Image
///"itemCount": itcount, // Change the Item Count
//"status": "INQUIRY", // Don't Replace
//"surface": "CATALOG", // Don't Replace
//"orderTitle": title, // Change the title
//"message": text, // Change Message
//"sellerJid": sellers, // Change the seller
//"token": tokens, // Change the token
//"totalAmount1000": ammount, // Change the Total Amount
///"totalCurrencyCode": "IDR", // Up to you
//}
//}), { userJid: jid })
///bob.relayMessage(jid, order.message, { messageId: order.key.id})
////// EROR ///

const isUrl = (uri) => {
return uri.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

const jsonformat = (json) => {
return JSON.stringify(json, null, 2)
}

/**************** CHAT MASSAGE ***************/

const antibot = M.isBaileys
if(antibot === true)return
//const moci = (msg.mtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.mtype === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.mtype === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.mtype === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (msg.mtype === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.mtype === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (msg.mtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (msg.mtype == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
const chatmessage = (msg.mtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.mtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.mtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.mtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.mtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.mtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.mtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.mtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''
const ordermessage = (msg.mtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.mtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.mtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.mtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : (msg.mtype == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.mtype == 'listResponseMessage') && msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.mtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? msg.message.templateButtonReplyMessage.selectedId : ''
const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	      
const fatkuns = (M.quoted || M)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : msg.quoted ? msg.quoted : msg
const mime = (quoted.msg || quoted).mimetype || '' 
const isMedia = /image|video|sticker|audio/.test(mime)

const isWebp = (M.mtype === 'imageMessage' || M.mtype === 'videoMessage')
const isImage = (M.mtype == 'imageMessage')
const isVideo = (M.mtype == 'videoMessage')
const isSticker = (M.mtype == 'stickerMessage')
const isQuotedMsg = (M.mtype == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
const isQuotedTag = isQuotedMsg ? content.includes('mentionedJid') ? true : false : false
const isQuotedReply = isQuotedMsg ? content.includes('Message') ? true : false : false
                


if(setting.Mode === 'Self'){
if (!isOwner) return 
}

function parseMention(text) {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}


/**************** DATABASE ***************/

try {
let users = global.db.data.users[M.sender]
if (typeof users !== 'object') global.db.data.users[M.sender] = {}
if (users) {
if (!isNumber(users.afkTime)) users.afkTime = -1
if (!('banned' in users)) users.banned = false
if (!('afkReason' in users)) users.afkReason = ''
} else global.db.data.users[M.sender] = {
afkTime: -1,
banned: false,
afkReason: '',
}
 
let chats = global.db.data.chats[M.chat]
if (typeof chats !== 'object') global.db.data.chats[M.chat] = {}
if (chats) {
if (!('setWelcome' in chats)) chats.setWelcome = ''
if (!('setLeave' in chats)) chats.setLeave = ''
} else global.db.data.chats[M.chat] = {
setWelcome: '',
setLeave: '',
}

let settings = global.db.data.settings[botNumber]
if (typeof settings !== 'object') global.db.data.settings[botNumber] = {}
if (settings) {
if (!('available' in settings)) settings.available = false
if (!('composing' in settings)) settings.composing = false
if (!('recording' in settings)) settings.recording = false
} else global.db.data.settings[botNumber] = {
available: false,
composing: false,
recording: false,
}
} catch (err) {
console.log(err)
}
	
/**************** STATUS BOT***************/

const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {

cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})


// FUNC downloadMediaMessage

function _0x670e(_0x65ca96,_0x2fbbd9){const _0x34dedf=_0x34de();return _0x670e=function(_0x670ecb,_0x13dfce){_0x670ecb=_0x670ecb-0x1ba;let _0x450cb4=_0x34dedf[_0x670ecb];return _0x450cb4;},_0x670e(_0x65ca96,_0x2fbbd9);}function _0x34de(){const _0x274669=['257077unetvF','msg','7xOldYz','document','from','4261140yYcSJa','10078670FXeDFD','2568296AdpCPk','concat','18Tqksne','1672044AnTaAB','application','4520136abzeLa','2OUNvIj','807350MQvWjs','mimetype','split','replace'];_0x34de=function(){return _0x274669;};return _0x34de();}(function(_0x5901c0,_0x65ad42){const _0x483f6d=_0x670e,_0x8b9b58=_0x5901c0();while(!![]){try{const _0x2f6826=-parseInt(_0x483f6d(0x1c0))/0x1*(parseInt(_0x483f6d(0x1bb))/0x2)+parseInt(_0x483f6d(0x1ca))/0x3+parseInt(_0x483f6d(0x1c7))/0x4+parseInt(_0x483f6d(0x1bc))/0x5+parseInt(_0x483f6d(0x1c5))/0x6+parseInt(_0x483f6d(0x1c2))/0x7*(parseInt(_0x483f6d(0x1ba))/0x8)+-parseInt(_0x483f6d(0x1c9))/0x9*(parseInt(_0x483f6d(0x1c6))/0xa);if(_0x2f6826===_0x65ad42)break;else _0x8b9b58['push'](_0x8b9b58['shift']());}catch(_0x292d51){_0x8b9b58['push'](_0x8b9b58['shift']());}}}(_0x34de,0x58b18));const downloadMediaMessage=async _0x2becde=>{const _0xca4b49=_0x670e;let _0x17cd2b=(_0x2becde[_0xca4b49(0x1c1)]||_0x2becde)[_0xca4b49(0x1bd)]||'',_0x777061=_0x17cd2b['split']('/')[0x0][_0xca4b49(0x1bf)](_0xca4b49(0x1cb),_0xca4b49(0x1c3))?_0x17cd2b[_0xca4b49(0x1be)]('/')[0x0]['replace']('application',_0xca4b49(0x1c3)):_0x17cd2b[_0xca4b49(0x1be)]('/')[0x0],_0x287db7=_0x17cd2b[_0xca4b49(0x1be)]('/')[0x1];const _0x40c37d=await downloadContentFromMessage(_0x2becde,_0x777061);let _0x32882a=Buffer[_0xca4b49(0x1c4)]([]);for await(const _0x238df8 of _0x40c37d){_0x32882a=Buffer[_0xca4b49(0x1c8)]([_0x32882a,_0x238df8]);}return _0x32882a;};


const reply = (teks, men) => {
 return bob.sendMessage(from, { text: teks, mentions: men ? men : [] }, { quoted: msg })
}

const replyNtag = (teks) => {
bob.sendMessage(from, { text: teks, mentions: parseMention(teks) }, { quoted: msg })
}

const textImg = (teks, buffer = fs.readFileSync(setting.pathImg), mess, men) => {
 return bob.sendMessage(from, { text: teks, jpegThumbnail: buffer, mention: men ? men : [] }, { quoted: mess ? mess : msg })
}

const sendMess = (from, teks) => {
 return bob.sendMessage(from, { text: teks })
}

//=================================================// 
var sticWait = (hehe) => {
var ano = fs.readFileSync('./doraemon/gambarnye/wait.webp')
bob.sendImageAsSticker(M.chat, ano, M, { packname: global.packname, author: global.author })
}
var sticAdmin = (hehe) => {
var ano = fs.readFileSync('./doraemon/gambarnye/BotAdman.webp')
bob.sendImageAsSticker(M.chat, ano, M, { packname: global.packname, author: global.author })
}
var sticOwner = (hehe) => {
var ano = fs.readFileSync('./doraemon/gambarnye/owner.webp')
bob.sendImageAsSticker(M.chat, ano, M, { packname: global.packname, author: global.author })
}
var sticSukses = (hehe) => {
var ano = fs.readFileSync('./doraemon/gambarnye/SuksesCok.webp')
bob.sendImageAsSticker(M.chat, ano, M, { packname: global.packname, author: global.author })
}
var sticBanLu = (hehe) => {
var ano = fs.readFileSync('./doraemon/gambarnye/BanLu.webp')
bob.sendImageAsSticker(M.chat, ano, M, { packname: global.packname, author: global.author })
}
var groupon = (hehe) => {
var ano = fs.readFileSync('./doraemon/gambarnye/groupon.webp')
bob.sendImageAsSticker(M.chat, ano, M, { packname: global.packname, author: global.author })
}
var SiGroupadmin = (hehe) => {
var ano = fs.readFileSync('./doraemon/gambarnye/SiGroupadmin.webp')
bob.sendImageAsSticker(M.chat, ano, M, { packname: global.packname, author: global.author })
}

const sendRespon = (respon) => {
 return bob.sendMessage(from, { sticker: fs.readFileSync(`./media/sticker/${respon}.webp`)}, {quoted: msg})
}
//=================================================//

/**************** AWAL FAKE ***************/

	const fake = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6283102650464-1589321480@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `*Hallo* _${pushname} 👋_\n	╰≻ ${prefix + command}`,
                 "title": `Hmm`,
                 'jpegThumbnail': global.pathImg
                        }
	                  } 
                     }

const nay1 = { key: {fromMe: false, participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { contactMessage: { displayName: `Selamat ${salam}\n☏User: ${pushname}`, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + `item1.TEL;waid=${sender.split("@")[0]}:+${sender.split("@")[0]}\n` + 'item1.X-ABLabel:Ponsel\n' + 'END:VCARD' }}}

        global.fpay = {
                                "key": {
                                    "remoteJid": "0@s.whatsapp.net",
                                    "fromMe": true,
                                    "id": "BAE595C600522C9C",
                                    "participant": "0@s.whatsapp.net"
                                },
                                "message": {
                                    "requestPaymentMessage": {
                                        "currencyCodeIso4217": "USD",
                                        "amount1000": 999999999,
                                        "requestFrom": "0@s.whatsapp.net",
                                        "noteMessage": {
                                            "extendedTextMessage": {
                                                "text": ``
                                            }
                                        },
                                        "expiryTimestamp": 0,
                                        "amount": {
                                            "value": 27100,
                                            "offset": 1000,
                                            "currencyCode": "USD"
                                        }
                                    }
                                }
                            }
                            
 global.ffb = {
			fileLength: "82990",
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: "https://fb.watch/gKFy-FDa9r/",
						mediaType: 'VIDEO',
						description: 'Follow: followme ',
						title: 'hmm',
						body: 'Follow ig me',
						thumbnailUrl: "https://telegra.ph/file/441d98964c6a9afed2bdd.jpg",
						sourceUrl: "youtube.com/c/febzabotz",
					}
				}
			}
			
  global.fvn = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(M.chat ? 
            { remoteJid: "6289508503105-1589321480@g.us" } : {}) 
                       },
            message: { 
               audioMessage: {
                        mimetype:'audio/ogg; codecs=opus',
                        seconds: 99999,
                        ptt: true
                               }
                             } 
                            }
                            
        global.ftextt = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "15517868045@g.us" } : {}) 
                       },
            message: { 
               extendedTextMessage: {
                        text:'',
                        title: '',
                        jpegThumbnail: fs.readFileSync('./media/YanzBotz.mp3')
                               }
                             } 
                            }
                       
      global.fdocs = {
           key : {
                  participant : '0@s.whatsapp.net'
                               },
              message: {
                           documentMessage: {
                           mimetype: "application/vnd.ms-excel",
                           fileLength: "99999999999",
                           pageCount: "999", 
                           jpegThumbnail: fs.readFileSync('./media/boby.jpg')
                                 }
                               }
                             }
                             
            global.fvid = {
                                key: {
                                    participant: '0@s.whatsapp.net'
                                },
                                message: {
                                    videoMessage: {
                                        title: 'hy',
                                        h: 'Hmm',
                                        seconds: 30,
                                        caption: ' ',
                                        jpegThumbnail: fs.readFileSync('./media/boby.jpg')
                                    }
                                }
                            }
                            
              global.fpoll = {
                                key: {
                                    participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
                                },
                                message: {
                                    pollCreationMessage: {
                                        name: '👋',
                                    }
                                }
                            }
                            
          global.fgclink = {
           key : {
               fromMe : false,
               participant: '0@s.whatsapp.net',
               remoteJid: "0@s.whatsapp.net"
           },
           message: {
               groupInviteMessage: {
                   groupJid: "6289508503105-1589321480@g.us",
                   inviteCode: 'null',
                   groupName: 'Kawan YanzBotz', 
                   caption: '', 
                   jpegThumbnail: fs.readFileSync('./media/boby.jpg')
               }
           }
       }
       
       global.fliveLoc = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(M.chat  ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "caption":"YanzBotz","h": `oke`, 'jpegThumbnail': fs.readFileSync('./media/boby.jpg')}}
           }
           
           global.fliveLoc2 = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(M.chat ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "title": "YanzBotz","h": 'apa', 'jpegThumbnail': fs.readFileSync('./media/boby.jpg')}}
           }
           
           global.ftoko = {
       key: {
                   fromMe: false,
                   participant: `0@s.whatsapp.net`, ...(M.chat ? { remoteJid: "6289508503105@s.whatsapp.net" } : {})
               },
               message: {
                   productMessage: {
                       product: {
                           productImage:{
                               mimetype: "image/jpeg",
                               jpegThumbnail: fs.readFileSync('./media/boby.jpg') //Gambarnye
                           },
                           title: 'YanzBot', //Kasih namalu 
                           description: "Simple Bot Esm", 
                           currencyCode: "USD",
                           priceAmount1000: "999999999",
                           retailerId: "Ghost",
                           productImageCount: 1
                       },
                           businessOwnerJid: `0@s.whatsapp.net`
               }
           }
       }
       
       global.fakeig = {
		fileLength: "999999999999",
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: "https://instagram.com/ketutagus404",
						mediaType: 'VIDEO',
						description: 'salam',
						title: '👋 ' + salam + 'Kak' + pushname,
						body: "Follow",
						thumbnailUrl: "https://telegra.ph/file/441d98964c6a9afed2bdd.jpg",
						sourceUrl: "youtube.com/c/febzabotz",
					}
				}
			}
			
			global.fgif = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6289508503105-1625305606@g.us" } : {}) 
                       },
            message: { 
                        videoMessage: { 
                        title: salam,
                        h: `Hmm`,
                        seconds: '999999999', 
                        gifPlayback: 'true', 
                        caption: 'hai',
                        jpegThumbnail: fs.readFileSync('./media/boby.jpg')
                               }
                              }
                             }
                             
   const kel = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/ApPRbzvidZuNpHcHsCn2P1rVHawvt2T63DCZMyWnAgQZ.enc",
"fileSha256": "czwy7lIUZuU8GL9W2UP3sSo/vy9FlETMpqpQneQQ+w8=",
"fileEncSha256": "xOjP90WLzICVTQQvj7Ts+oJvcxhas5oOEPMvoqKVQ1E=",
"mediaKey": "/j2BjzjS/e88MHVCcaS8f3kaSCAVe18Nv4tQb/rZtrc=",
"mimetype": "image/webp",
"directPath": "/v/t62.7118-24/25076345_285509236738530_1931711252260953768_n.enc?ccb=11-4&oh=f6ef4b023e7424d5d2c4d03923c0ab1b&oe=616F03EF",
"height": 150000,
"width": 150000,
"fileLength": "10124",
"mediaKeyTimestamp": "1632147575",
"isAnimated": false
}}}
       
       global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: '9999999999999999999999999999999999999999999999999999999', status: 1, surface: 1, message: 'Hy', orderTitle: 'YanzBotz', sellerJid: '0@s.whatsapp.net' } } }
       
       /**************** AKHIR FAKE ***************/
       
/**************** DELET SESI ULARTANGGA ***************/
bob.DeleteMessage = async(mes, botNumber) => {
    var mekh = mes.length
    var pesan_ke = 0 
    async function me(){
     
      if(mekh == pesan_ke) return    
      await sleep(1000)       
        bob.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: mes[pesan_ke], participant: botNumber } })   
        pesan_ke += 1
        me()
      }
     me()
   }
   bob.Delete = async (KEY, botNumber) => {
   await bob.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: KEY, participant: botNumber } })
   }
        
/**************** AHKIR DELET SESI ULARTANGGA ***************/

const sendFile = async (from, url, caption, msg, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return bob.sendMessage(from, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: msg})
}
let type = mime.split("/")[0]+"Message"
if(mime.split("/")[0] === "image"){
return bob.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: nay1})
} else if(mime.split("/")[0] === "video"){
return bob.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: msg})
} else if(mime.split("/")[0] === "audio"){
return bob.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: msg })
} else {
return bob.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: msg })
}
}

//bob.sendReadReceipt(from, sender, [msg.key.id])


bob.createMessage = async (jidnya, kontennya, optionnya) => {
return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: bob.authState.creds.me.id,upload: bob.waUploadToServer})
}



if (M.message) {
console.log(chalk.black(chalk.magentaBright('[ PESAN ]')), chalk.black(chalk.greenBright(new Date)), chalk.black('\n' + chalk.whiteBright('=> Command ' + chats || M.mtype)) + '\n' + chalk.greenBright('=> Dari'), chalk.black(chalk.redBright(pushname)), chalk.yellowBright(M.sender) + '\n' + chalk.greenBright('=> Di'), chalk.black(chalk.cyanBright(M.isGroup ? groupName : 'Private Chat', M.chat)))
}


if (isOwner){
if (chats.startsWith("> ")){
console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`From Owner`))
try {
let evaled = await eval(chats.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
textImg(`${evaled}`)
} catch (err) {
textImg(`${err}`)
}
} else if (chats.startsWith("$ ")){
console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`From Owner`))
exec(chats.slice(2), (err, stdout) => {
if (err) return textImg(`${err}`)
if (stdout) textImg(`${stdout}`)
})
}
}


/**************** TAHUN BARU ***************/

msg.target_date = new Date('1 Jan 2023 00:00:00').getTime();
    msg.sekarang = new Date().getTime();
    msg.selisih = msg.target_date - msg.sekarang;
    msg.hari_ = Math.floor(msg.selisih / (1000 * 60 * 60 * 24));
    msg.jam_ = Math.floor(msg.selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    msg.menit_ = Math.floor(msg.selisih % (1000 * 60 * 60) / (1000 * 60));
    msg.detik_ = Math.floor(msg.selisih % (1000 * 60) / (1000));
    
/**************** AKHIR TAHUN BARU ***************/

/**************** USER BANNED ***************/
 if (db.data.users[M.sender].banned && isCmd) {
await replyNtag(`Maaf @${M.sender.split("@")[0]} Anda Telah Dibanned, Chat Owner Untuk Un Banned`)
return
}

/**************** AKHIR USER BANNED***************/

	/**************** AFK ***************/
try{
	for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
M.reply(`
Jangan tag dia!
Dia sedang    ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[M.sender].afkTime > -1) {
let user = global.db.data.users[M.sender]
M.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''

}
} catch {}

function _0x3725(){const _0x489e76=['quoted','toString','isGroup','emit','fileSha256','WebMessageInfo','541817vcekjD','12JuXTbL','fromObject','1026636ZmyoVn','data','pushName','10emQIEr','user','sender','key','fakeObj','msg','2021440ShtdnP','fromMe','5881162CdVdlY','append','197220iwUwKO','1497618DdogdV','chat','participant','10wOXdTy','messages.upsert','4303512zZyIRo','base64','cmd'];_0x3725=function(){return _0x489e76;};return _0x3725();}function _0x476b(_0x51cf4e,_0x5dfa94){const _0x3725b0=_0x3725();return _0x476b=function(_0x476bb1,_0x3c4c33){_0x476bb1=_0x476bb1-0xbc;let _0x55a5ae=_0x3725b0[_0x476bb1];return _0x55a5ae;},_0x476b(_0x51cf4e,_0x5dfa94);}const _0xa50f35=_0x476b;(function(_0x48760b,_0x4fd5d9){const _0x4214be=_0x476b,_0x394911=_0x48760b();while(!![]){try{const _0x4149ad=parseInt(_0x4214be(0xcf))/0x1+parseInt(_0x4214be(0xc4))/0x2*(-parseInt(_0x4214be(0xc0))/0x3)+parseInt(_0x4214be(0xd2))/0x4+parseInt(_0x4214be(0xbc))/0x5*(parseInt(_0x4214be(0xd0))/0x6)+-parseInt(_0x4214be(0xbe))/0x7+parseInt(_0x4214be(0xc6))/0x8+-parseInt(_0x4214be(0xc1))/0x9*(parseInt(_0x4214be(0xd5))/0xa);if(_0x4149ad===_0x4fd5d9)break;else _0x394911['push'](_0x394911['shift']());}catch(_0x33abc4){_0x394911['push'](_0x394911['shift']());}}}(_0x3725,0xc5afb));if(isMedia&&M[_0xa50f35(0xda)][_0xa50f35(0xcd)]&&M[_0xa50f35(0xda)][_0xa50f35(0xcd)]['toString'](_0xa50f35(0xc7))in global['db'][_0xa50f35(0xd3)][_0xa50f35(0xc8)]){let hash=global['db'][_0xa50f35(0xd3)]['cmd'][M['msg'][_0xa50f35(0xcd)][_0xa50f35(0xca)](_0xa50f35(0xc7))],{q,mentionedJid}=hash,messages=await generateWAMessage(M[_0xa50f35(0xc2)],{'text':q,'mentions':mentionedJid},{'userJid':bob[_0xa50f35(0xd6)]['id'],'quoted':M['quoted']&&M[_0xa50f35(0xc9)][_0xa50f35(0xd9)]});messages[_0xa50f35(0xd8)][_0xa50f35(0xbd)]=areJidsSameUser(M[_0xa50f35(0xd7)],bob[_0xa50f35(0xd6)]['id']),messages[_0xa50f35(0xd8)]['id']=M[_0xa50f35(0xd8)]['id'],messages[_0xa50f35(0xd4)]=M[_0xa50f35(0xd4)];if(M[_0xa50f35(0xcb)])messages[_0xa50f35(0xc3)]=M['sender'];let msg1={...msg,'messages':[proto[_0xa50f35(0xce)][_0xa50f35(0xd1)](messages)],'type':_0xa50f35(0xbf)};bob['ev'][_0xa50f35(0xcc)](_0xa50f35(0xc5),msg1);}
   
///
ulartangga(from, msg, bob, chatmessage)

// COMMAND
switch (command) {
	
	case prefix+'tesbut': 
               var anu = `HAI`
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://wa.me/message/ULFNDAIMIBKLK1'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        bob.send5ButImg(M.chat, anu, bob.user.name, global.pathImg, btn, global.pathImg)
                        } else if (setbot.templateGif) {
                        bob.send5ButGif(M.chat, anu, bob.user.name, global.visoka, btn, global.pathImg)
                        } else if (setbot.templateVid) {
                        bob.send5ButVid(M.chat, anu, bob.user.name, global.visoka, btn, global.pathImg)
                        } else if (setbot.templateMsg) {
                        bob.send5ButMsg(M.chat, anu, bob.user.name, btn)
                        } else if (setbot.templateLocation) {
                        bob.send5ButLoc(M.chat, anu, bob.user.name, global.pathImg, btn)
                        }
            break
	
case prefix+'tiktokstalk': 
      if (!q) throw `Example : ${prefix + command} wibu.xyz`
 bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
             var get_result = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${q}?apikey=${setting.lolkey}`)
             var get_result = get_result.result             
             var ini_txt = `
*▊▊▊TIKTOK STALK ▊▊▊*

*Data Successfully Obtained!*
\`\`\`📫 Username : ${get_result.username}\`\`\`
\`\`\`🎞 NAME : ${get_result.nickname}\`\`\`
\`\`\`📟 FOLOWERS : ${get_result.followers}\`\`\`
\`\`\`📮 FOLLOWING : ${get_result.followings}\`\`\`
\`\`\`📚 LIKES : ${get_result.likes}\`\`\`
\`\`\`📻 VIDEO : ${get_result.video}\`\`\`
\`\`\`🗃️ DESCRIPTION : ${get_result.bio}\`\`\`
`
bob.sendImage(M.chat, get_result.user_picture, `${ini_txt}`, { quoted : nay1 })
break
	
case prefix+'kalkulator2': case prefix+'kal2': {
if (args.length < 1) return msg.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
msg.reply('Error')
} else {
msg.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}}
break
	
case prefix+'rate':
if (!q) return msg.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const te = ra[Math.floor(Math.random() * ra.length)]
replyNtag(`Rate : ${q}\nJawaban : *${te}%*`, { quoted: nay1 })
break
	
case prefix+"darkjoke2": case prefix+"darkjokes":
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
var res = await Darkjokes()
var tttd = "*Darkjokes*"
bob.sendMessage(M.chat, { image : { url : res }, caption: tttd }, { quoted : nay1 })
break
	
case prefix+'lion': case prefix+'lionn':
  if(!q) return msg.reply(`Penggunaan ${command} teks`)
  bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴍsᴇs x ʏғ*` }, { quoted: msg }))
     .catch((err) => console.log(err));
     msg.reply('success')
break
	
case prefix+'3dstone': case prefix+'stone':
if(!q) return msg.reply(`Penggunaan ${command} teks`)
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴍsᴇs x ʏғ*` }, { quoted: msg }))
  .catch((err) => console.log(err));
   msg.reply('success')
break
	
case prefix+'neondevil': case prefix+'neon': case prefix+'devil':
      if(!q) return msg.reply(`Penggunaan ${command} teks`)
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴍsᴇs x ʏғ*` }, { quoted: msg }))
         .catch((err) => console.log(err));
         msg.reply('Succes')
break

case prefix+'herryp': case prefix+'potter': case prefix+'heryy':
       if(!q) return msg.reply(`Penggunaan ${command} teks|teks`)
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
      var tekss = q.split("|")[0]
      var tekss = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${tekss}`,`${tekss}`])
 .then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴍsᴇs x ʏғ*` }, { quoted: msg }))
 .catch((err) => console.log(err)); 
 msg.reply('Sukses')
break
	
	case prefix+'transformer': case prefix+'fomer': case prefix+'trans':
      if(!q) return msg.reply(`Penggunaan ${command} teks`)
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴍsᴇs x ʏғ*` }, { quoted: msg }))
.catch((err) => console.log(err));
msg.reply('Sukses')
break
	
case prefix+'graf':
case prefix+'graffiti':
case prefix+'grafiti':
if(!q) return msg.reply(`Penggunaan ${command} teks|teks`)
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
var teks1 = q.split("|")[0]
var teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴍsᴇs x ʏғ*` }, { quoted: msg }))
  .catch((err) => console.log(err));
   msg.reply('Sukses')
break
	
case prefix+"merdekanews":
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
MerdekaNews().then(async (res) => {
var zyanz = ""
var nomer = 0
for (let i of res) {
nomer += 1
zyanz += `\n• ${nomer.toString()} •\n`
zyanz += `Berita: ${i.berita}\n`
zyanz += `Upload: ${i.berita_diupload}\n`
zyanz += `Link: ${i.berita_url}\n`
}
zyanz += ""
bob.sendMessage(M.chat, { image : { url : res[0].berita_thumb }, caption: zyanz }, { quoted : nay1 })
})
break;
	
case prefix+'cekmati':
if (!q) return msg.reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
var predea = await axios.get(`https://api.agify.io/?name=${q}`)
replyNtag(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
	
	case prefix+'jalantikus':
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
var res = await JalanTikusMeme()
var tel = ""
tel += "Jalan Tikus Meme\n\n"
tel += `Source: ${res}`
tel += ""
bob.sendMessage(M.chat, { image : { url : res }, caption: tel }, { quoted : nay1 })
break
	
	case prefix+'bisakah':
if (!q) return msg.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
bob.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: nay1 })
break
	
case prefix+'apakah':
if (!q) return msg.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
bob.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: nay1 })
break
	
case prefix+'bagaimanakah':
if (!q) return msg.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
bob.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: nay1 })
break
	
case prefix+'sangecek':
case prefix+'ceksange':
case prefix+'gaycek':
case prefix+'cekgay':
case prefix+'lesbicek':
case prefix+'ceklesbi':
if (!q) return msg.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
replyNtag(`Nama : ${q}\nJawaban : *${sange}%*`, { quoted: nay1 })
break
	
	case prefix+'kapankah':
if (!q) return msg.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
bob.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: nay1 })
break
	
	case prefix+'hadis': case prefix+'hadist': 
if (args.length < 1) return msg.reply(`Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1
Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
if (args.length < 2) return msg.reply(`Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
msg.reply(`No. ${number}
${arab}
${id}`)
} catch (e) {
reply(`Hadis tidak ditemukan !`)
}
break;
	
	case prefix+'detiknews':
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
DetikNews().then(async(res) => {
var no = 0
var yanzb = ""
for (let i of res) {
no += 1
yanzb += `\n• ${no.toString()} •\n`
yanzb += `Berita: ${i.berita}\n`
yanzb += `Upload: ${i.berita_diupload}\n`
yanzb += `Link: ${i.berita_url}\n`
}
yanzb += ""
bob.sendMessage(M.chat, { image : { url : res[0].berita_thumb }, caption: yanzb }, { quoted : nay1 })
})
break
	
	case prefix+'meme':
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
if (!quoted) throw `*Ngetik Yg Bener Dek!!* ${prefix + command}`
var anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme?APIKEY=apivproject`)
bob.sendMessage(M.chat, { image: anu, caption: `Bilek` }, { quoted: nay1 }).catch((err) => msg.reply('Maaf server YanzBotz sedang down'))
break
	
	case prefix+'darkjoke': case prefix+'darkjokes':
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
if (!quoted) throw `*Ngetik Yg Bener Dek!!* ${prefix + command}`
var anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=apivproject`)
bob.sendMessage(M.chat, { image: anu, caption: `Beliau ini....` }, { quoted: nay1}).catch((err) => msg.reply('Maaf server YanzBotz sedang down'))
break;
	
	case prefix+'cecanjepan':
	case prefix+'cecanjpn':
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
if (!quoted) throw `*Ngetik Yg Bener Dek!!* ${prefix + command}`
var tolo = `nih Kak >\\<`
var buffer = `https://api.zacros.my.id/asupan/japan`
bob.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted: nay1})
break;
	
	case prefix+'cecan':
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
if (!quoted) throw `*Ngetik Yg Bener Dek!!* ${prefix + command}`
var lot = `nih Kak >\\<`
var buffer = `https://api.zacros.my.id/asupan/cecan`
bob.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted: nay1 })
break;
	
	case prefix+'asupanukhty':
case prefix+'asupan-ukhty':
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
if (!quoted) throw `*Ngetik Yg Bener Dek!!* ${prefix + command}`
var tol = `nih Kak >\\<`
var buffer = `https://api.zacros.my.id/asupan/ukhty`
bob.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Creator : YanzBotz X Febzabotz\nJagan lupa subscribe"}, {quoted: nay1})
break;

	case prefix+'asupan':
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
var tolol = `nih Kak >\\<`
var buffer = `https://api.zacros.my.id/asupan/random`
bob.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Creator : YanzBotz X Febzabotz\nJagan lupa subscribe"}, {quoted:nay1})
break;

//═══════════[ Rpg Menu ]═══════════\\

 //cr thunder
case prefix+'inventori': case prefix+'inventory': case prefix+'profile':
if (!isDarah){ addInventoriDarah(M.sender, DarahAwal) }
if (!isInventory){ addInventori(M.sender) }
if (!isInventoriBuruan){ addInventoriBuruan(M.sender) }

let teksehmazeh = `_[ INFO USER ]_\n\n`
teksehmazeh += `*❤ ️•Darah kamu:* ${getDarah(m.sender)}\n`
teksehmazeh += `*◻️️ •Besi kamu:* ${getBesi(m.sender)}\n`
teksehmazeh += `*🌟 •Emas Kamu:* ${getEmas(m.sender)}\n`
teksehmazeh += `*❇️ •Emerald Kamu:* ${getEmerald(m.sender)}\n`
teksehmazeh += `*⏺ •️Limit kamu:* ${getLimit(m.sender)}\n`
teksehmazeh += `*🧪 •Potion Kamu:* ${getPotion(m.sender)}\n\n`
teksehmazeh += `_[ HASIL BURUAN ]_\n\n`
teksehmazeh += `*🐟 •Ikan:* ${getIkan(m.sender)}\n`
teksehmazeh += `*🐔 •Ayam:* ${getAyam(m.sender)}\n`
teksehmazeh += `*🐇 •Kelinci:* ${getKelinci(m.sender)}\n`
teksehmazeh += `*🐑 •Domba:* ${getDomba(m.sender)}\n`
teksehmazeh += `*🐄 •Sapi:* ${getSapi(m.sender)}\n`
teksehmazeh += `*🐘 •Gajah:* ${getGajah(m.sender)}\n\n`
reply(teksehmazeh)
break;

//═══════════[ Rpg Menu ]═══════════\\

case prefix+'cerpen':
				let yanzXfebz = [{
  				title: "List Cerpen",
  				rows: [
							{title: `Cerpen anak`,rowId: `#cerpenyanzfebpri anak`},
							{title: `Cerpen daerah`,rowId: `#Cerpenyanzfebpri daerah`},
							{title: `Cerpen bahasa Inggris`,rowId: `#Cerpenyanzfebpri bahasa Inggris`},
							{title: `Cerpen bahasa jawa`,rowId: `#Cerpenyanzfebpri bahasa jawa`},
							{title: `Cerpen bahasa sunda`,rowId: `#Cerpenyanzfebpri bahasa sunda`},
							{title: `Cerpen budaya`,rowId: `#Cerpenyanzfebpri budaya`},
							{title: `Cerpen cinta`,rowId: `#Cerpenyanzfebpri cinta`},
							{title: `Cerpen cinta islami`,rowId: `#Cerpenyanzfebpri cinta islami`},
							{title: `Cerpen cinta pertama`,rowId: `#Cerpenyanzfebpri cinta pertama`},
							{title: `Cerpen cinta romantis`,rowId: `#Cerpenyanzfebpri cinta romantis`},
							{title: `Cerpen cinta sedih`,rowId: `#Cerpenyanzfebpri cinta sedih`},
							{title: `Cerpen cinta segitiga`,rowId: `#Cerpenyanzfebpri cinta segitiga`},
							{title: `Cerpen cinta sejati`,rowId: `#Cerpenyanzfebpri cinta sejati`},
							{title: `Cerpen galau`,rowId: `#Cerpenyanzfebpri galau`},
							{title: `Cerpen gokil`,rowId: `#Cerpenyanzfebpri gokil`},
							{title: `Cerpen inspiratif`,rowId: `#Cerpenyanzfebpri inspiratif`},
							{title: `Cerpen jepang`,rowId: `#Cerpenyanzfebpri jepang`},
							{title: `Cerpen kehidupan`,rowId: `#Cerpenyanzfebpri kehidupan`},
							{title: `Cerpen keluarga`,rowId: `#Cerpenyanzfebpri keluarga`}, 
							{title: `Cerpen kisah nyata`,rowId: `#Cerpenyanzfebpri kisah nyata`},
							{title: `Cerpen korea`,rowId: `#Cerpenyanzfebpri korea`},
							{title: `Cerpen kristen`,rowId: `#Cerpenyanzfebpri kristen`},
							{title: `Cerpen liburan`,rowId: `#Cerpenyanzfebpri liburan`},
							{title: `Cerpen lingkungan`,rowId: `#Cerpenyanzfebpri lingkungan`},
							{title: `Cerpen lucu`,rowId: `#Cerpenyanzfebpri lucu`},
							{title: `Cerpen malaysia`,rowId: `#Cerpenyanzfebpri malaysia`},
							{title: `Cerpen mengharukan`,rowId: `#Cerpenyanzfebpri mengharukan`},
							{title: `Cerpen misteri`,rowId: `#Cerpenyanzfebpri misteri`},
							{title: `Cerpen motivasi`,rowId: `#Cerpenyanzfebpri motivasi`},
							{title: `Cerpen nasihat`,rowId: `#Cerpenyanzfebpri nasihat`}, 
							{title: `Cerpen nasionalisme`,rowId: `#Cerpenyanzfebpri nasionalisme`},
							{title: `Cerpen olahraga`,rowId: `#Cerpenyanzfebpri olahraga`},
							{title: `Cerpen patah hati`,rowId: `#Cerpenyanzfebpri patah hati`},
							{title: `Cerpen penantian`,rowId: `#Cerpenyanzfebpri penantian`},
							{title: `Cerpen pendidikan`,rowId: `#Cerpenyanzfebpri pendidikan`},
							{title: `Cerpen pengalaman pribadi`,rowId: `#Cerpenyanzfebpri pengalaman`},
							{title: `Cerpen pengorbanan`,rowId: `#Cerpenyanzfebpri pengorbanan`},
							{title: `Cerpen penyesalan`,rowId: `#Cerpenyanzfebpri penyesalan`},
							{title: `Cerpen perjuangan`,rowId: `#Cerpenyanzfebpri perjuangan`},
							{title: `Cerpen perpisahan`,rowId: `#Cerpenyanzfebpri perpisahan`},
							{title: `Cerpen persahabatan`,rowId: `#Cerpenyanzfebpri persahabatan`},
							{title: `Cerpen petualangan`,rowId: `#Cerpenyanzfebpri petualangan`},
							{title: `Cerpen ramadhan`,rowId: `#Cerpenyanzfebpri ramadhan`},
							{title: `Cerpen remaja`,rowId: `#Cerpenyanzfebpri remaja`},
							{title: `Cerpen renungan`,rowId: `#Cerpenyanzfebpri renungan`},
							{title: `Cerpen rindu`,rowId: `#Cerpenyanzfebpri rindu`},
							{title: `Cerpen rohani`,rowId: `#Cerpenyanzfebpri rohani`},
							{title: `Cerpen romantis`,rowId: `#Cerpenyanzfebpri romantis`},
							{title: `Cerpen sastra`,rowId: `#Cerpenyanzfebpri sastra`},
							{title: `Cerpen sedih`,rowId: `#Cerpenyanzfebpri sedih`},
							{title: `Cerpen sejarah`,rowId: `#Cerpenyanzfebpri sejarah`},
							{title: `Cerpen slice of life`,rowId: `#Cerpenyanzfebpri slice of life`},
							{title: `Cerpen terjemahan`,rowId: `#Cerpenyanzfebpri terjemahan`},
							{title: `Cerpen thriller`,rowId: `#Cerpenyanzfebpri thriller`}
				]},
				]
				bob.sendListMsg(from, `Judul cerpen yang tersedia lihat di list *CERPEN MENU*`, `\nDoraemon`, `Cerpen Menu`, `Click Here`, yanzXfebz, nay1)
				break;
	
	case prefix+'cerpenyanzfebpri':
if (!q) return msg.reply(`

Judul cerpen yang tersedia lihat di list *CERPEN MENU*
 
cerpen anak
cerpen bahasa daerah
cerpen bahasa inggrisKak
cerpen bahasa jawa
cerpen bahasa sunda
cerpen budaya
cerpen cinta
cerpen cinta islami
cerpen cinta pertama
cerpen cinta romantis
cerpen cinta sedih
cerpen cinta segitiga
cerpen cinta sejati
cerpen galau
cerpen gokil
cerpen inspiratif
cerpen jepang
cerpen kehidupan
cerpen keluarga
cerpen kisah nyata
cerpen korea
cerpen kristen
cerpen liburan
cerpen lingkungan
cerpen lucu
cerpen malaysia
cerpen mengharukan
cerpen misteri
cerpen motivasi
cerpen nasihat
cerpen nasionalisme
cerpen olahraga
cerpen patah hati
cerpen penantian
cerpen pendidikan
cerpen pengalaman pribadi
cerpen pengorbanan
cerpen penyesalan
cerpen perjuangan
cerpen perpisahan
cerpen persahabatan
cerpen petualangan
cerpen ramadhan
cerpen remaja
cerpen renungan
cerpen rindu
cerpen rohani
cerpen romantis
cerpen sastra
cerpen sedih
cerpen sejarah
cerpen slice of life
cerpen terjemahan
cerpen thriller

`)
let cerpe = await cerpen(q)
await bob.sendMessage(from, { text: `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}` }, {quoted: msg })
.catch(() => {
 msg.reply('Hayoloh ada yang eror')
 })
break;
	
	case prefix+'pentol': 
	bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
	sendFile(M.chat, 'https://api.bobibot.repl.co/api/wallpaper/pentol?apikey=pebri', 'Nih Gambarnya', { quoted: nay1 })
             break;
	
	case prefix+'sfw': 
	case prefix+'nsfw':
				let febzsyng = [{
  				title: "List Nfsw",
  				rows: [
							{title: `Sfw Neko`,rowId: `#sfwyanzfebpri neko`},
							{title: `Sfw Smile`,rowId: `#sfwyanzfebpri smile`},
							{title: `Sfw Megumin`,rowId: `#sfwyanzfebpri megumin`},
							{title: `Sfw Cry`,rowId: `#sfwyanzfebpri cry`},
							{title: `Sfw Awoo`,rowId: `#sfwyanzfebpri awoo`},
							{title: `Sfw Lick`,rowId: `#sfwyanzfebpri lick`},
							{title: `Sfw Waifu`,rowId: `#sfwyanzfebpri waifu`},
							{title: `Sfw Bully`,rowId: `#sfwyanzfebpri bully`},
							{title: `Sfw Wave`,rowId: `#sfwyanzfebpri wave`},
							{title: `Sfw Pat`,rowId: `#sfwyanzfebpri pat`},
							{title: `Sfw Bonk`,rowId: `#sfwyanzfebpri bonk`},
							{title: `Sfw Wink`,rowId: `#sfwyanzfebpri wink`},
							{title: `Sfw Kick`,rowId: `#sfwyanzfebpri kick`},
							{title: `Sfw Happy`,rowId: `#sfwyanzfebpri happy`},
							{title: `Sfw Kill`,rowId: `#sfwyanzfebpri kill`},
							{title: `Sfw Glomp`,rowId: `#sfwyanzfebpri glomp`},
							{title: `Sfw Nom`,rowId: `#sfwyanzfebpri nom`},
							{title: `Sfw Bite`,rowId: `#sfwyanzfebpri bite`},
							{title: `Sfw Slap`,rowId: `#sfwyanzfebpri slap`}, 
							{title: `Sfw Smug`,rowId: `#sfwyanzfebpri smug`},
							{title: `Sfw Shinobu`,rowId: `#sfwyanzfebpri shinobu`},
							{title: `Sfw Hug`,rowId: `#sfwyanzfebpri hug`},
							{title: `Sfw Kiss`,rowId: `#sfwyanzfebpri kiss`},
							{title: `Sfw Yeet`,rowId: `#sfwyanzfebpri yeet`},
							{title: `Sfw Blush`,rowId: `#sfwyanzfebpri blush`},
							{title: `Sfw Highfive`,rowId: `#sfwyanzfebpri highfive`},
							{title: `Sfw Handhold`,rowId: `#sfwyanzfebpri handhold`},
							{title: `Sfw Cuddle`,rowId: `#sfwyanzfebpri cuddle`}
				]},
				]
				bob.sendListMsg(from, `Pilih sesuai kemauan anda`, `\nDoraemon`, `Jangan sampe ngetcrot ya`, `Click Here`, febzsyng, nay1)
				break;
	
	case prefix+'sfwyanzfebpri': {
       bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
     await fetchJson(`https://waifu.pics/api/sfw/${q}`).then(data => {   
     bob.sendMessage(from, {
				   image: { url: data.url },
				   caption: `Nih Gambarnya`,
				   buttons: [{buttonId: `#sfwyanzfebpri ${q}`, buttonText: { displayText: "Next" }, type: 1}],		
				   footer: `Nih sfw ${q}`
			      }, { quoted: nay1 })})
     }  
   break
	
	case prefix+'nulis':
            const nulisq = body.slice(7) 
            const nulisp = await tulis(q)
            await bob.sendImage(from, `${nulisp}`, '', 'Nih...')
            .catch(() => {
                msg.reply(from, 'Ada yang Error!')
            })
            break;
	
	case prefix+'fb':
		case prefix+'facebook':
			if (args.length == 0) return msg.reply(from, `Untuk mendownload video dari link facebook\nketik: ${prefix}fb [link_fb]`)
			fb(args[0])
			.then(async (res) => {
				const { link, linkhd, linksd } = res
				if (res.status == 'error') return bob.sendFileFromUrl(from, link, '', 'Maaf url anda tidak dapat ditemukan')
				await bob.sendFileFromUrl(from, linkhd, '', 'Nih ngab videonya')
				.catch(async () => {
					await bob.sendFileFromUrl(from, linksd, '', 'Nih ngab videonya')
					.catch(() => {
						bob.reply(from, 'Maaf url anda tidak dapat ditemukan')
					})
				})
			})
			break;
	
	case prefix+'translate':
            if (!q) return msg.reply(`Maaf, format pesan salah.\nSilahkan reply sebuah pesan dengan caption ${prefix}translate <kode_bahasa>\ncontoh ${prefix}translate id`)
            const quoteText = msg.type == 'chat' ? msg.body : msg.type == 'image' ? msg.caption : ''
            translate(quoteText, args[0])
                .then((result) => aruga.sendText(from, result))
                .catch(() => bob.sendText(from, 'Error, Kode bahasa salah.'))
            break;
	
	case prefix+'tts':
            if (args.length < 1) return msg.reply(`Mengubah teks menjadi sound (google voice)\nketik: ${prefix}tts <kode_bahasa> <teks>\ncontoh : ${prefix}tts id halo\nuntuk kode bahasa cek disini : https://anotepad.com/note/read/5xqahdy8`)
            const Text2Speech = require('../scrape/gtts')
            const dataText = body.slice(8)
                if (dataText === '') return msg.reply(from, 'apa teksnya syg..')
                try {
                    Text2Speech('./media/tts.mp3', dataText, function () {
                    bob.sendPtt(from, './media/tts.mp3')
                    })
                } catch (err) {
                    msg.reply(from, err)
                    }
            break
            
            case prefix+'shortlink':
            if (args.length < 1) return msg.reply(`Example : ${prefix + command} Url`)
            if (!isUrl(args[0])) return msg.reply(from, 'Maaf, url yang kamu kirim tidak valid.', id)
            const shortlink = await urlShortener(args[0])
            await bob.sendText(from, shortlink)
            .catch(() => {
                msg.reply(from, 'Ada yang Error!', id)
            })
            break
	
	case prefix+'gimage':
 if (args.length < 1) return msg.reply(`Example : ${prefix + command} Doraemon`)
        let gis = require('g-i-s')
        gis(q, async (error, result) => {
       var n = result
        var images = n[Math.floor(Math.random() * n.length)].url
        var buttons = [
                    {buttonId: `#gimage ${q}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${q}
🔗 *Media Url* : ${images}`,
                    footer: bob.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bob.sendMessage(M.chat, buttonMessage, { quoted: nay1 })
        })
        break
	
	case prefix+'google': 
                if (!q) throw `Example : ${prefix + command} Doraemon`
                let google = require('google-it')
                google({'query': q}).then(res => {
                let tekesi = `Google Search From : ${q}\n\n`
                for (let g of res) {
                tekesi += `⭔ *Title* : ${g.title}\n`
                tekesi += `⭔ *Description* : ${g.snippet}\n`
                tekesi += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                msg.reply(tekesi)
                })
                break
	
	case prefix+'bass': 
    case prefix+'blown': 
    case prefix+'deep': 
    case prefix+'earrape':
    case prefix+'fast': 
    case prefix+'fat': 
    case prefix+'nightcore': 
    case prefix+'reverse': 
    case prefix+'robot': 
    case prefix+'slow': 
    case prefix+'smooth': 
    case prefix+'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                msg.reply(mess.wait)
                let media = await bob.downloadAndSaveMediaMessage(q)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return msg.reply(err)
                let buff = fs.readFileSync(ran)
                bob.sendMessage(M.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : fpay })
                fs.unlinkSync(ran)
                })
                } else msg.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                msg.reply(e)
                }
                break;
	
	case prefix+'style': case prefix+'styletext':
	if (args.length < 1) return msg.reply(`Example : ${prefix + command} YanzBotz`)
		let { styletext } = require('../lib/scraper')
		if (!q) throw 'Masukkan Query text!'
                var anu = await styletext(q)
                var tek = `Srtle Text From ${q}\n\n`
                for (let i of anu) {
                    tek += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                msg.reply(tek)
	    break
	
	case prefix+'jadian':
            if (!isGroup) throw mess.group
            let mem = participants.map(u => u.id)
            let orang = mem[Math.floor(Math.random() * mem.length)]
            let jod = mem[Math.floor(Math.random() * mem.length)]
            let jaw = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jod.split('@')[0]}`
            let menst = [orang, jod]
            var buttons = [
                        { buttonId: '#jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await bob.sendButtonText(M.chat, buttons, jaw, bob.user.name, M, {mentions: menst})
            break
	
	case prefix+'jodohku': 
            if (!isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let met = M.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${met.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [met, jodoh]
            var buttons = [
                        { buttonId: '#jodohku', buttonText: { displayText: 'Jodoh Ku' }, type: 1 }
                    ]
                    await bob.sendButtonText(M.chat, buttons, jawab, bob.user.name, M, {mentions: ments})
            break;
	
	case prefix+'siapakahaku': 
   siapakah().then( result => {
  reply(`Pertanyaaan : ${result.pertanyaan}\nJawaban : ${result.jawaban}`)
})
break
	
	case prefix+'topup': 
				let yanzgege = [{
  				title: "Game Store",
  				rows: [
							{title: `*Free Fire*`,rowId: `#ff`, description: `\nFree Fire topup otomatis`},
							{title: `*Mobile Legends*`,rowId: `#ml`, description: `\nMobile Lengends topup otomatis`},
				]},
				]
				bob.sendListMsg(from, `Hallo kak ${pushname} Mau topup?\n\n[❗] *USER INFORMATION*\n ≻ *Username :* ${tod}${pushname}${tod}\n ≻ *Nomor :* ${tod}${msg.sender.split("@")[0]}${tod}\n ≻ *Prefix User :* ${tod}${prefix}${tod}`, `\nDoraemon`, `Hallo, Berikut layanan kami`, `Click Here`, yanzgege, fpay )
				break;
	
	case prefix+'tetsbuttonyanz':
	const templateButton =  [
{ index: 1, urlButton: { displayText: "Github", url: "https://github.com/YanzBotz"}},
{ index: 3, quickReplyButton: { displayText: "Free Fire", id: "#ff"}},
{ index: 4, quickReplyButton: { displayText: "Mobile Legend", id: "#ml"}},

]

const templateMessage = {
viewOnceMessage: {
message: {
templateMessage: {
hydratedTemplate: {
hydratedContentText: `Hallo kak ${pushname + ' ' + "Selamat" + ' ' + salam }\nMau topup? silahkan pilih di bawah ini!!`,
hydratedFooterText: "Doraemon",
mentions:[sender],
hydratedButtons: templateButton
}
}
}
}
}
bob.relayMessage(from, templateMessage, {})
break;
	
	case prefix+'speedtest': 
            msg.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) msg.reply(stdout)
        if (stderr.trim()) msg.reply(stderr)
            }
            break;
	
	case prefix+'imagenobg': case prefix+'removebg': case prefix+'remove-bg':
     var ngen = await bob.downloadMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
     var ranE = getRandom('.jpg')
       await fs.writeFileSync('./storage_cabinets/' + ranE, ngen)
     const _buff = './storage_cabinets/' + ranE
     var anu = await remove(fs.readFileSync(_buff))
     console.log(anu)
      	var ranJ = getRandom('.jpg')
        await fs.writeFileSync('./storage_cabinets/' + ranJ, anu)
        const buff = './storage_cabinets/' + ranJ        
          await bob.sendMessage(from, { image: { url: buff }, caption:"Success✓!"}, { quoted: msg })
        setTimeout(() => { fs.unlinkSync(buff) }, 10000)
        setTimeout(() => { fs.unlinkSync(_buff) }, 10000)     
	    break;
	
	case prefix+'dbinary': 
            if (args.length < 1) return msg.reply(`Kirim/reply text dengan caption ${prefix + command}`)
            let { dBinary } = require('../lib/binary')
            let komtol = q ? q : M.quoted && M.quoted.q ? M.quoted.q : M.q
            let db = await dBinary(komtol)
            msg.reply(db)
        break
	
	case prefix+'ebinary':
            if (args.length < 1) return msg.reply(`Kirim/reply text dengan caption ${prefix + command}`)
            let { eBinary } = require('../lib/binary')
            let kon = q ? q : M.quoted && M.quoted.q ? M.quoted.q : M.q
            let eb = await eBinary(kon)
            msg.reply(eb)
        break;
	
	case prefix+'emojimix': 
if (args.length < 1) return msg.reply(`Example : ${prefix + command} 😅+🤔`)
		var [emoji1, emoji2] = q.split`+`
		var anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    var encmedia = await bob.sendImageAsSticker(M.chat, res.url, M, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    break;
	
	case prefix+'listgc': 
                 var anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 var terk = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await YANZ.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 bob.sendTextWithMentions(M.chat, terk, fpay)
             break;
	
	case prefix+'ocr':
var { ocr } = require('../scrape/ocr')
bob.sendMessage(M.chat, sendFile, { quoted: nay1 })
break;
	
	case prefix+'shio': 
                if (args.length < 1) return msg.reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                var anu = await primbon.shio(q)
                if (anu.status == false) return msg.reply(anu.message)
                bob.sendText(M.chat, `⭔ *Hasil :* ${anu.message}`, nay1 )
            break;
	
	case prefix+'wallpaper':
                if (args.length < 1) return msg.reply(`Contoh penggunaan:\n${prefix + command} Doraemon`)
		let { wallpaper } = require('../lib/scraper')
               var anu = await wallpaper(q)
               var result = anu[Math.floor(Math.random() * anu.length)]
		var buttons = [
                    {buttonId: `wallpaper ${q}`, buttonText: {displayText: 'Next Wallpaper'}, type: 1}
                ]
                var buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: bob.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bob.sendMessage(M.chat, buttonMessage, { quoted: nay1 })
            break;
	
	case prefix+'wikimedia': 
                if (args.length < 1) return msg.reply(`Contoh penggunaan:\n${prefix + command} Doraemon`)
		let { wikimedia } = require('../lib/scraper')
               var anu = await wikimedia(q)
               var result = anu[Math.floor(Math.random() * anu.length)]
                var buttons = [
                    {buttonId: `wikimedia ${q}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                var buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: bob.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                bob.sendMessage(M.chat, buttonMessage, { quoted: nay1 })
            break;
	
	case prefix+'info': case prefix+'inviteinfo': case prefix+'inspect': 
   if (!q) return msg.reply("Harap sertakan link grub!")
   let _LinkINV = q.split("https://chat.whatsapp.com/")[1]
   if (!_LinkINV) return msg.reply("Link tidak valid!")
   bob.query({
    tag: "iq",
    attrs: {
     type: "get",
     xmlns: "w:g2",
     to: "@g.us"
    },
    content: [{ 
     tag: "invite", 
      attrs: { 
       code: _LinkINV 
      } 
    }]
  })
  .then(async(res) => { 
  console.log(res.content[0].content[0])
  var text = `• *「 Group Link Information」*\n\n`   
     text += `⇨ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}\n`
     text += `⇨ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}\n`
     text += `⇨ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}\n`
     text += `⇨ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}\n`
     text += `⇨ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}\n`
     text += `⇨ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}\n`
     text += `⇨ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member\n`
     text += `⇨ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}\n`
     text += `⇨ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}\n`
     text += `⇨ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.jid : "undefined"}\n`
     text += `ℹ️ Description : \n${res.content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}\n`
   try {
     var ppgc = await bob.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
    } catch {
     var ppgc = "https://telegra.ph/file/265c672094dfa87caea19.jpg"
    }
    await bob.sendMessage(M.chat, { image: { url: ppgc }, caption: text, mentions: await bob.parseMention(text) }, { quoted : nay1 })
   })
  break;
	
	case prefix+'tafsirsurah': 
		if (args.length < 1) return msg.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
		var res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		var txt = `「 *Tafsir Surah*  」
*Pendek* : ${res.result.data.tafsir.id.short}
*Panjang* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		msg.reply(txt)
		break;
	
	case prefix+'alquran':
		if (args.length < 1) return msg.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
		var res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		var txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		msg.reply(txt)
		bob.sendMessage(M.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg', ptt:true }, { quoted : fpay })
		break;
		
		case prefix+'artinama':
                if (args.length < 1) return msg.reply(`Example : ${prefix + command} YanzBotz`)
                var anu = await primbon.arti_nama(q)
                if (anu.status == false) return msg.reply(anu.message)
                bob.sendText(M.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, nay1)
            break;
	
	case prefix+'artimimpi': case prefix+'tafsirmimpi':
                if (args.length < 1) return msg.reply(`Example : ${prefix + command} belanja`)
                var anu = await primbon.tafsir_mimpi(q)
                if (anu.status == false) return msg.reply(anu.message)
                bob.sendText(M.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, nay1 )
            break;
	
	case prefix+'quotesanime': case prefix+'quoteanime': 
		let { quotesAnime } = require('../lib/scraper')
                var anu = await quotesAnime()
               var result = anu[Math.floor(Math.random() * anu.length)]
                var buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                var buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                bob.sendMessage(M.chat, buttonMessage, { quoted: nay1 })
            break;
	
	case prefix+'setnamabot': case prefix+'setnamebot': 
	        if (!isOwner) return reply(mess.owner)
            if (args.length < 1) return msg.reply(`Example : ${prefix + command} ドラえもん`)
            var name = await bob.updateProfileName(q)
            msg.reply(`_Success mengganti nama bot_`)
            break;
            
            case prefix+'setstatus': case prefix+'setbiobot': case prefix+'setbotbio': 
            if (!isOwner) return reply(mess.owner)
            if (args.length < 1) return msg.reply(`Example : ${prefix + command} ドラえもん`)
            var name = await bob.updateProfileStatus(q)
            msg.reply(`_Success mengganti bio bot_`)
            break;
	
	case prefix+'film':
		if (args.length < 1) return msg.reply(`Film apa yng mau di cari`)
xfar.Film(q)
    .then(data => {console.log(data)
    var krl = `*❒「  Film ${q} 」*\n*Author* : ${data[0].author}\n*Penata Ulang* : 𝒀𝒂𝒏𝒛 𝑩𝒐𝒕\n\n`
			    for (let i of data) {
                krl += (`\n────────────────────\n\n *❒ Judul :* ${i.judul}\n *❒ Quality :* ${i.quality}\n *❒ Tipe : ${i.type}*\n *❒ Upload :* ${i.upload}\n *❒ Source :* ${i.link}`)
                }
               bob.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: nay1 })		    
             });
           break;
	
	case prefix+'confess':
				if (m.isGroup) return msg.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (args.length < 1) return msg.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				var nomor = q.split('|')[0] ? q.split('|')[0] : q
				var saking = q.split('|')[1] ? q.split('|')[1] : q
				var pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return msg.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				 let teksnya = `Assalamualaikum kak ada Menfess nih!!\n─────────────\n*Doraemon*\n─────────────\n\nDari : _${saking}_ \nPesan : _${pesan}_ `
				var header = 'hayyy'
					var gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`

				 var but = [
					{ urlButton: { displayText: `𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐔𝐬!`, url : `https://instagram.com/ketutagus404 ` } },
                    { quickReplyButton: { displayText: `𝐓𝐞𝐫𝐢𝐦𝐚 𝐌𝐞𝐧𝐟𝐞𝐬𝐬`, id: `menfesconfirm ${m.sender}` } },
                    { quickReplyButton: { displayText: `𝐊𝐢𝐫𝐢𝐦 𝐌𝐞𝐧𝐟𝐞𝐬𝐬𝐦𝐮`, id: `Menfess` } }
                		]
					bob.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, templateButtons: but, footer: `Ciee ada yang ngirim pesan nih\nJangan lupa bales pesannya ya` })
				msg.reply(`Sukses Mengirim Menfess!!`)
				break
	
	case prefix+'stickerpin': case prefix+'pinstick': case prefix+'pintereststicker':
   if (args.length < 1) return msg.reply('Cari gambar apa?')
     bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
     try{
   const pint = await pinterest(`${q}`)
     var xm_za = pint[Math.floor(Math.random() * pint.length)];
       console.log(xm_za)      
     var hek = await getBuffer(xm_za)
     var buffers = await writeExifImg(hek, { packname: global.packname, author: global.author })
       await bob.sendMessage(M.chat, { sticker: { url: buffers } }, { quoted: nay1 })
       } catch (e) { e = String(e)
      msg.reply('Tidak ditemukan!')
   }
  break;
	
	case prefix+'getcase': 
if (!isOwner) return m.reply(mess.owner)
if (!args[0]) return msg.reply("Mau ngambil case apa?")
try {
msg.reply('case ' + `'${args[0]}'` + fs.readFileSync('./bob.js').toString().split(`case '${args[0]}'`)[1].split(gcase)[0] + gcase)
} catch {
msg.reply("Case Tidak Ditemukan")
}
break;

case prefix+'get':
case prefix+'fetch':
if (!isOwner) return msg.reply(mess.owner)
if (!args[0]) return msg.reply('linknya?')
fetch(args[0]).then(res => res.text())  
.then(bu =>{
msg.reply(bu)
})   
break;
	
	case prefix+'couple': 
                msg.reply(mess.wait)
                var anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                bob.sendMessage(M.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: nay1 })
                bob.sendMessage(M.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: nay1 })
	          break;
	
	case prefix+'tomp3': 
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            msg.reply(mess.wait)
            let med = await quoted.download()
            let { toAudio } = require('../lib/converter')
            let audio = await toAudio(med, 'mp4')
            bob.sendMessage(M.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : nay1 })
            break;
            
            case prefix+'tovn': case prefix+'toptt': 
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            msg.reply(mess.wait)
            var me = await quoted.download()
            let { toPTT } = require('../lib/converter')
            var audi = await toPTT(me, 'mp4')
            bob.sendMessage(M.chat, {audio: audi, mimetype:'audio/mpeg', ptt:true }, {quoted: nay1})
            break;
	
	case prefix+'waifu': case prefix+'megumin':
  case prefix+'shinobu':
  case prefix+'awoo': case prefix+'neko':{
   bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
    try{
     let za = await fetchJson(`https://waifu.pics/api/sfw/${command}`)  
     var buttons = [
      {
       buttonId: `#${command}`, 
       buttonText: {
        displayText: 'Next'
      }, type: 1},
     ]
    var buttonMessage = {
       image: { url: za.url },
       caption: "Result",
       footer: global.packname,
       buttons: buttons,
       headerType: 4
       }
      await bob.sendMessage(M.chat, buttonMessage, { quoted: nay1 })
     } catch (e){ msg.reply("Maaf, sepertinya terjadi kesalahan dalam pengiriman gambar") }
    }
   break
	
	case prefix+'pin2': case prefix+'pinterest2':
           if (args.length < 1) return msg.reply('Cari gambar apa?')
             bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
              try{
               const pint = await pinterest(`${q}`)
               var xmza = pint[Math.floor(Math.random() * pint.length)];
                console.log(xmza)
               var buttons = [
               {  buttonId: `#pinterest ${q}`, 
                 buttonText: {  displayText: 'Next'
               }, type: 1},
               ]
              var buttonMessage = {
                 image: { url: xmza },
                 caption: `[ PINTEREST SEARCH ]\nHasil dari pencarian ${args.join(' ')}`,
                 footer: global.packname,
                 buttons: buttons,
                 headerType: 4
               }
               bob.sendMessage(M.chat, sendbuttonMessage, { quoted: nay1 })
             } catch (e){ msg.reply("Maaf, sepertinya terjadi kesalahan dalam pengiriman gambar") }
                msg.reply('Tidak ditemukan!')
         break;
      
case 'bot':
let awdi = {
         audio: fs.readFileSync('./media/bot.mp3'),
         ptt: true, 
         mimetype: 'audio/mp4',
          contextInfo:{
           externalAdReply:{
             title: time,
             body: `Selamat ${salam + ' ' + M.pushName}`,
             thumbnail: global.pathImg,
             sourceUrl: "https://instagram.com/ketutagus404",
             mediaUrl: "https://github.com/YanzBotz",
             //renderLargerThumbnail: true,
             //showAdAttribution: true,
             mediaType: 1
            }
           }
         }
        bob.sendMessage(from, awdi, { quoted : nay1 })
        break;
	
	case 'assalamualaikum':
let b = `_Walaikumsalam, @${msg.sender.split("@")[0]} Ada Yang Bisa Kami Bantu!!_`
const a = {
 extendedTextMessage: {
text: b,
contextInfo: {
mentionedJid: parseMention(b),
externalAdReply: {
title: `${global.packname}`,
body: 'Follow ig me',
previewType: "PHOTO",
thumbnail: fs.readFileSync('./media/boby.jpg'),
sourceUrl: "https://instagram.com/ketutagus404"}}}}
bob.relayMessage(M.chat, a, nay1, {})
            break;
	
	case prefix+'colongsw':
	if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
var anu = await bob.downloadAndSaveMediaMessage(quoted)
bob.sendMessage(sender, {image: {url: anu}, caption: q})
msg.reply("Sukses")
} else if (/video/.test(mime)) {
anu = await bob.downloadAndSaveMediaMessage(quoted)
bob.sendMessage(sender, {video: {url: anu}, caption: q})
msg.reply("Sukses")
} else {
msg.reply("Reply sw foto / video yg mau dicolong")
}
break;

case prefix+'stalkff': 
		let { stalkff } = require('../plugins/stalkff')
		if (!q) return msg.reply(`stalkff 444667253`)
                var anu = await stalkff(q)
          bob.sendMessage(from, { text: `ID : ${anu.id} 
Nickname : ${anu.nickname}` }, {quoted: fpay})
	    break;
	
	case prefix+'ml':
bob.sendMessage(from, { text: "Coming soon" }, {quoted: fpay })
break;

case prefix+'ff': 
				if (args.length < 1) return msg.reply(`Masukan Id ff + nominal\n Contoh : ${prefix}ff 444667253`)
				let nyobb = [{
  				title: "Game Store",
  				rows: [
							{title: `*Free Fire 5 Diamond*`,rowId: `#epep ${q}|5`, description: `\nTop up diamond free fire 5`},
							{title: `*Free Fire 12 Diamond*`,rowId: `#epep ${q}|12`, description: `\nTop up diamond free fire 12`},
							{title: `*Free Fire 70 Diamond*`,rowId: `#epep ${q}|70`, description: `\nTop up diamond free fire 70`},
							{title: `*Free Fire 140 Diamond*`,rowId: `#epep ${q}|140`, description: `\nTop up diamond free fire 140`},
							{title: `*Free Fire 355 Diamond*`,rowId: `#epep ${q}|355`, description: `\nTop up diamond free fire 355`},
							{title: `*Free Fire 720 Diamond*`,rowId: `#epep ${q}|720`, description: `\nTop up diamond free fire 720`}
				]},
				]
				bob.sendListMsg(from, `Pilih layanan sesuai dengan yang ingin anda beli!\njika anda membeli followers maka pilih followers\ndiharapkan anda sudah faham.`, `\nDoraemon`, `Hallo, Berikut layanan kami`, `Click Here`, nyobb, nay1)
				break;
				
     case prefix+'epep':
           var id_ff = q.split("|")[0]
var jml_dm = q.split("|")[1]                 
var tff = await hikki.game.topupFreeFire(`${id_ff}`, `${jml_dm}`)
var payff = await hikki.game.payDiamond(tff, `085883359262`)
bob.sendMessage(M.chat, { image: { url: payff.qrCode }, caption: `Product : ${tff.data.product.name}\nId : ${tff.data.gameId}\nName : ${tff.data.gameDetail.userName}\nTotal : ${tff.data.item.name}\nPrice : ${tff.data.item.price}\nType : ${tff.data.paymentName}\nQr : ${payff.qrCode}\nExpired : ${payff.timerCount}`}, {quoted: fpay})
          break;
	
	case prefix+'wanted':
    case prefix+'utatoo':
    case prefix+'unsharpen': 
    case prefix+'thanos':
    case prefix+'sniper': 
    case prefix+'sharpen': 
    case prefix+'sepia': 
    case prefix+'scary': 
    case prefix+'rip': 
    case prefix+'redple': 
    case prefix+'rejected': 
    case prefix+'posterize': 
    case prefix+'ps4': 
    case prefix+'pixelize': 
    case prefix+'missionpassed':
    case prefix+'moustache': 
    case prefix+'lookwhatkarenhave': 
    case prefix+'jail': 
    case prefix+'invert': 
    case prefix+'greyscale': 
    case prefix+'glitch':
    case prefix+'gay': 
    case prefix+'frame': 
    case prefix+'fire': 
    case prefix+'distort': 
    case prefix+'dictator': 
    case prefix+'deepfry': 
    case prefix+'ddungeon': 
    case prefix+'circle': 
    case prefix+'challenger':
    case prefix+'burn': 
    case prefix+'brazzers': 
    case prefix+'beautiful': 
           
   if ((msg.isQuotedImage)) {
   msg.reply(keywords[0]['message'][6])
    let buff = await bob.downloadAndSaveMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
     let teph = await TelegraPh(buff)
      ameApi['generate'](command, { url : teph}).then(gambar => {
       bob.sendMessage(from, {image: gambar, caption: "Nih"  }, {quoted: nay1 })
        fs.unlinkSync(buff) 
       })
        } else if (isQuotedTag || isQuotedReply) {
        let users = mentionByreply? mentionByreply : mentionByTag[0]
         let profile = await bob.profilePictureUrl(users, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
          ameApi['generate'](command.split(' ')[0], { url : profile}).then(gambar => {
                bob.sendMessage(from, { image: gambar },{ quoted: nay1 })    
          })
     } else { msg.reply(`Reply gambar dengan caption ${prefix + command}\nAtau Tag teman satu grup kalian dgn caption ${prefix + command} @YanzBotz`) }
   break;
	
	case prefix+'chat':
if (!args.join(" ")) return msg.reply(`Example :\n${prefix + command} 628588xxxxxx|Hi`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
const lolh = `${pesny}`
bob.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted: nay1 })
await msg.reply("_Success dikirim_")
break;
	
	case prefix+'pinterest': 
                msg.reply(mess.wait)
		let { pinterest } = require('../scrape/pinterest')
                var anu = await pinterest(q)
                var result = anu[Math.floor(Math.random() * anu.length)]
                bob.sendMessage(M.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: fpay })
            break;
	
	case prefix+'cp': case prefix+'caripesan':
   if (!q) return msg.reply(`Contoh : \n⇨ ${order} hallo\n⇨ ${order} <text>`)
    try {
    var lele = store.message[from].array.filter(v => RegExp(args.join(" "), "gi").test(v.body))
     console.log(lele)
     for (let i of lele) {
     sleep(1000)
     await bob.sendMessage(from, {forward:i}, {quoted:i})
     }
     await msg.reply(`Hanya ${lele.length} pesan yang ditemukan`)
     } catch {
     msg.reply(`Tidak ditemukan!`)
     }
    break;
	
	case prefix+'tinyurl':
   if(!q) return msg.reply('link?')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  msg.reply(body)
  } catch (e) {
  msg.reply(e)
  }
  })
 break;
	
	case prefix+'tourl':
                msg.reply(mess.wait)
		let { UploadFileUgu, TelegraPh } = require('../lib/uploader')
                let media = await bob.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    msg.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    msg.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            break;
	
	case prefix+'add':
           if (!isGroup) return msg.reply('Khusus Grup')
           if (!isGroupAdmins) return msg.reply('Khusus Admin')
           if (!isBotGroupAdmins) return msg.reply('Bot Bukan Admin')
             if (args[1]){
                 let number = msg.quoted ? msg.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                 let response = await bob.groupParticipantsUpdate(from, [number], "add")
                 let o = await response[0]
                 let inv = o.status       
                       if(inv == 408) return msg.reply('Dia baru-baru saja keluar dari grub ini!')
                       if(inv == 409) return msg.reply('Dia sudah join!')
                       if(inv == 500) return msg.reply('Grub penuh!')
                       if(inv == 403){
                             bob.sendMessage(from, { text: `@${number.split('@')[0]} tidak dapat ditambahkan karena target private acc*\nUndangan akan dikirimkan ke -> wa.me/${q.replace(/[^0-9]/g, '')} Melalui jalur pribadi`, mentions: [number] }, { quoted : nay1 }) 
                             bob.sendMessage(`${number}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin:\nwa.me/${msg.sender}\n Mengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, mentions: [number] }, { quoted : nay1 }) 
                        } else { msg.reply('Errr')  }
                        console.log(inv)
              } else {
                    let response = await bob.groupParticipantsUpdate(from, mentionUser, "add")
                    let o = await response[0]
                    let inv = o.status
                    let invv = await bob.groupInviteCode(from) 
                      console.log(inv)
                      console.log(mentionUser)
                       if(inv == 408) return msg.reply('Dia baru-baru saja keluar dari grub ini!')
                       if(inv == 409) return msg.reply('Dia sudah join!')
                       if(inv == 500) return msg.reply('Grub penuh!')
                       if(inv == 403){
                            bob.sendMessage(from, { text: `${mentionUser} tidak dapat ditambahkan karena target private acc*\nUndangan akan dikirimkan ke -> wa.me/${mentionUser} Melalui jalur pribadi`, mentions: [mentionUser] }, { quoted : nay1 }) 
                            bob.sendMessage(`${mentionUser}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin:\nwa.me/${msg.sender}\n Mengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, mentions: [mentionUser] }, { quoted : nay1 }) 
                         } else { msg.reply('Errr') }
                        console.log(inv)
                        }
                      break;

case prefix+'tiktok': case prefix+'tiktoknowm': case prefix+'tt': case prefix+'tete':
   sendRespon('apa')
   msg.reply('Downloading.....')
    try{
	 await TiktokDownloader(args[0])
 	 .then(async hasil => {
	
	  var { media } = hasil
	  console.log(hasil)	  
	    msg.reply('```「▰▰▰▰▰▰▰▰▱▱」Sending...```')
         let vid = {
          video: {
           url: media[1].url
           }, 
          caption: hasil.title,     
          contextInfo:{
           externalAdReply:{
             title: time,
             body: `${m.sayingtime + m.timoji + ' ' + m.pushName}`,
             thumbnail: global.pathImg,
             sourceUrl: "https://instagram.com/ketutagus404",
             mediaUrl: "https://instagram.com/ketutagus404",
             //renderLargerThumbnail: true,
             showAdAttribution: true,
             mediaType: 1
            }
           }
         }
        bob.sendMessage(from, vid, { quoted : fpay })
    })
          } catch (e){
    msg.reply(`Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain\n\nType err :\n${e}`)
    }  
   break;
   
   case prefix+'ytmp3':
   if (args.length < 1) return msg.reply('linknya?')
   msg.reply('```Downloading....```')
   let tex = q.split("|")[0]
   let text = q.split("|")[1] || 'mp3'    
   try {
   await youtube(tex).then(async hasil => {
      const { title, mp3 } = hasil
      if (mp3 === 'undefined') return msg.reply('Link tidak dapat di akses!')   
        let bup = await getBuffer(mp3)
   	    let ranV = getRandom('.mp3')
        await fs.writeFileSync('./storage_cabinets/' + ranV, bup)
        const buff = './storage_cabinets/' + ranV    
        console.log(hasil)       
     msg.reply('```「▰▰▰▰▰▰▰▰▱▱」Sending...```')     
      
      if (text === 'm4a') {
      let aud = {
          audio: {
           url: buff
           },      
          mimetype: 'audio/mp4',
          contextInfo:{
           externalAdReply:{
             title: time,
             body: `${msg.sayingtime + m.timoji + ' ' + m.pushName}`,
             thumbnail: global.thumb,
             sourceUrl: "https://instagram.com/rifza.p.p",
             mediaUrl: "https://instagram.com/rifza.p.p",
             //renderLargerThumbnail: true,
             showAdAttribution: true,
             mediaType: 1
            }
           }
         }
        bob.sendMessage(from, aud, { quoted : nay1 })
       } else if (text === 'mp3') {
         let aud = {
          document: {
           url: buff

           },      
          fileName: `${title + '.mp3'}`,
          mimetype: 'audio/mp3',
          contextInfo:{
           externalAdReply:{
             title: time,
             body: `${msg.sayingtime + m.timoji + ' ' + msg.pushName}`,
             thumbnail: global.pathImg,
             sourceUrl: "https://instagram.com/ketutagus404",
             mediaUrl: "https://instagram.com/ketutagus404",
             //renderLargerThumbnail: true,
             showAdAttribution: true,
             mediaType: 1
            }
           }
         }
         bob.sendMessage(from, aud, { quoted : nay1 })
        } else { m.reply('Undefined!') }
         setTimeout(() => { fs.unlinkSync(buff) }, 10000) 
     })
     } catch (e){
    msg.reply(`Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain\n\nType err :\n${e}`)
   }
  break;
   
   case prefix+'ytmp4':
  if (args.length < 1) return msg.reply('linknya?')
  msg.reply('```Downloading....```')
   try{
           let nuh = await youtube(q)
      const { title, link } = nuh
      console.log(nuh)
      await getBuffer(link)
      .then(async result => {
   	    let ranV = getRandom('.mp4')
        await fs.writeFileSync('./storage_cabinets/' + ranV, result)
        const buff = './storage_cabinets/' + ranV    
        console.log(result)                

     if (link === 'undefined') return msg.reply('Link tidak dapat di akses!')
     msg.reply('```「▰▰▰▰▰▰▰▰▱▱」Sending...```')
         let vid = {
          video: {
           url: buff
           }, 
          caption:"*Done✔️*\n" + '```' + title + '```',     
          contextInfo:{
           externalAdReply:{
             showAdAttribution: true,
             mediaType: 1
            }
           }
         }
        bob.sendMessage(from, vid, { quoted : nay1 })
       setTimeout(() => { fs.unlinkSync(buff) }, 10000)

       })
      } catch (e){
    msg.reply(`Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain\n\nType err :\n${e}`)
   }
   break;

case prefix+'kodekeras':{
if (!q) return reply('```Mau yang versi cwe apa cwo?```')
var typex = q
reply('Sayang bisa jalan gk?')
await sleep(3000)
const sections = [
    {
	title: "Pilihan 1 Terima",
	rows: [	    
	    {title: "Ayo sayang", rowId: `${prefix}jawab terima`}
	]
    },
   {
	title: "Pilihan 2 Tolak",
	rows: [
	    {title: "Gak ah males", rowId: `${prefix}jawab tolak`}
	    //{title: "Option 4", rowId: "option4", description: "This is a description V2"}
	]
    },
]

const listMessage = {
  text: "Pilih jawaban ",
  footer: "Beta version kodekeras",
  title: "-",
  buttonText: "-",
  sections
}
const sendMsg = await bob.sendMessage(M.chat, listMessage)
}
break

case prefix+'jawab':
if (!q) return console.log('kok kosong?')
var jwb = q
if (jwb == 'terima'){
bob.sendMessage(M.chat, { text : 'Mau jalan ke mana ayang👀😘'})
} else if (jwb == 'tolak'){
bob.sendMessage(M.chat, { text : 'Kok kamu gtu sih😠'})
}
break

case prefix+'tes': {
const { createLogin } = require('./_create.js')
await createLogin(bob, 'Nama', 'Nama 2')
}
break



case prefix+'setcmd': {
if (!isOwner)return reply('Only Onwer..')
global.db.data.cmd = global.db.data.cmd || {}
if (!M.quoted)return reply(`Reply stiker!!\nExample : ${prefix + command} menu\n\n\n*Note : Tidak dapat disertai Prefix!!*`)
if (!M.quoted.fileSha256)return reply('SHA256 Hash Missing')
if (!q)return reply(`Untuk Command Apa?`)
let sticker = global.db.data.cmd
let hash = M.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked)return reply('You have no permission to change this sticker command')
sticker[hash] = {
    q,
    mentionedJid: M.mentionedJid,
    creator: M.sender,
    at: + new Date,
    locked: false,
}
reply(`Done!`)
}
break
   
case prefix+'delcmd': {
if (!isOwner)return reply('Only Onwer..')
let hash = M.quoted.fileSha256.toString('base64')
if (!hash)return reply(`Tidak ada hash`)
let sticker = global.db.data.cmd
if (sticker[hash] && sticker[hash].locked)return reply('You have no permission to delete this sticker command')
delete sticker[hash]
reply(`Done!`)
}
break

case prefix+'listcmd': {
if (!isOwner)return reply('Only Onwer..')
let teks = `
*List Hash*
Info: *bold* hash is Locked

*Hash :*
 ${Object.entries(global.db.data.cmd).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} 
*Command: ${value.q}*
*Creator : @${value.creator.split("@")[0]}*
*Create Time : ${clockString(new Date - value.at)} ago*
*Locked : ${value.locked}*

`).join('\n')}
`.trim()
replyNtag(teks)
}
break

case prefix+'lockcmd': {
if (!isOwner)return reply('Only Onwer..')
if (!M.quoted)return reply('Reply Pesan!')
if (!M.quoted.fileSha256)return reply('SHA256 Hash Missing')
let sticker = global.db.data.cmd
let hash = M.quoted.fileSha256.toString('base64')
if (!(hash in sticker))return reply('Hash not found in database')
sticker[hash].locked = !/^un/i.test(command)
M.reply('Done!')
}
break

case prefix+'afk': {
let user = global.db.data.users[M.sender]
user.afkTime = + new Date
let text = q ? q : 'Tidak Ada!'
user.afkReason = text
replyNtag(`@${M.sender.split("@")[0]} Telah Afk dengan alasan ${text}`)
}
break


case prefix+'menu': case prefix+'help': case prefix+'bob':{
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
var buttons = [{buttonId: `${prefix}owner`, buttonText: { displayText: 'owner' }, type: 1 }]
var buttonMessage = {
document: global.pathImg, 
fileName: `Selamat ${salam}`, 
mimetype: pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"]),
fileLength: "99999999999",
pageCount: "999", 
caption: help.listMenu(prefix, listmenu, M),
mentions:[sender],
footer: `ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴍsᴇss x ʏғ `, 
buttons: buttons,
headerType: 3,
contextInfo: {
"externalAdReply": { 
"mentionedJid" : sender,
"title" : global.botName,
"mediaType" : 1,
"renderLargerThumbnail" : true , 
"showAdAttribution": true, 
"jpegThumbnail": global.pathImg, 
"mediaUrl": 'youtube.com/c/febzabotz', 
"thumbnail": global.pathImg, 
"thumbnailUrl": 'https://telegra.ph/file/bf6550c4756412430a47e.jpg',
"sourceUrl" : 'youtube.com/c/febzabotz', 
}}
}
bob.sendMessage(from, buttonMessage, { quoted: fpay }) }
break

case '@6289508503105':
let aud = {
         audio: fs.readFileSync('./lib//audio/YanzBotz.mp3'),
         ptt: true, 
         mimetype: 'audio/mp4',
          contextInfo:{
           externalAdReply:{
             title: time,
             body: `Selamat ${salam + ' ' + M.pushName}`,
             thumbnail: global.pathImg,
             sourceUrl: "https://instagram.com/ketutagus404",
             mediaUrl: "https://github.com/YanzBotz",
             //renderLargerThumbnail: true,
             //showAdAttribution: true,
             mediaType: 1
            }
           }
         }
        bob.sendMessage(from, aud, { quoted : nay1 })
        break;


case prefix+'sc': case prefix+'script': {
textImg(`Minta ke ${global.ownerName} :D`)
console.log(chalk.rgb(0,250,154).underline('Bang ' + global.ownerName + ' ada yang minta sc!!'));
}
break

case prefix+'owner': case prefix+'creator':
let vcard = 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n' 
    + 'N:;PBZ463.;;;'
    + 'FN:PBZ463.\n'
    + 'ORG:ᴠᴀᴍsᴇs;\n'
    + 'item1.TEL;type=CELL;type=VOICE;waid=6289508503105:+62 858-8335-9262\n' 
    + 'item1.X-ABLabel:Febzabotz My Friend\n'
    + 'item2.EMAIL;type=INTERNET:chonixbot@gmail.com\n'
    + 'item2.X-ABLabel:Email\n'
    + 'item3.URL:http://instagram.com/ketutagus404\n'
    + 'item3.X-ABLabel:Instagram\n'
    + 'item4.ADR:;;Neima Ward Tokyo;;;;\n'
    + 'item4.X-ABLabel:Region\n'
    + 'END:VCARD'
bob.sendMessage(from, { contacts: { displayName: 'Depelover 🅥', contacts: [{ vcard }] } }, { quoted: fpay })
break
	
case prefix+'del': case prefix+'delete': case prefix+'d': {
if (!M.quoted) throw false
let { chat, fromMe, id, isBaileys } = M.quoted
bob.sendMessage(M.chat, { delete: { remoteJid: M.chat, fromMe: false, id: M.quoted.id, participant: M.quoted.sender } })
}
break

case prefix+'testmenu': 							
    bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
                var buttons = [
{buttonId: `${prefix}pedia`, buttonText: {displayText: '𝙱𝙾𝚃 𝙿𝙴𝙳𝙸𝙰'}, type: 1},
{buttonId: `${prefix}owner`, buttonText: {displayText: '𝙾𝚆𝙽𝙴𝚁'}, type: 1}, 
{buttonId: `${prefix}listmenu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄 𝚁𝙴𝙶𝚄𝙻𝙴𝚁'}, type: 1}
]
var buttonMessage = {
document: fs.readFileSync('./media/boby.jpg'), 
fileName: `Doraemon`, 
mimetype: `application/pdf`,
jpegThumbnail: global.pathImg,
caption: ` `,
footer: `[❗] *USER INFORMATION*\n ≻ *Username :* ${tod}${pushname}${tod}\n ≻ *Link :* ${tod}wa.me/${msg.sender.split("@")[0]}${tod}\n ≻ *Prefix User :* ${tod}${prefix}${tod}\n\n[ 🤖 ] *BOT INFORMATION*\n ≻ *BotName :* ${tod}${botName}${tod}\n ≻ *OwnerName :* ${tod}${ownerName}${tod}\n ≻ *Type :*  ${tod}WhatsApps - Bot • Multi  - Device${tod}\n ≻ *Lib :*  ${tod}Baileys Multi-device || 6.0.3${tod}\n ≻ *Language :* ${tod}JavaScript${tod}\n ≻ *Runtime :* ${tod}${runtime(process.uptime())}${tod}\n`,
fileLength: "99999999999", 
pageCount: "999", 
mentions:[sender],
buttons: buttons,
headerType: 4,
contextInfo: {
"externalAdReply": {
"renderLargerThumbnail" : true , 
"showAdAttribution": true,
"title": `Hai Kak ${salam}`, 
"mediaType": 2, 
"thumbnail": global.pathImg,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/Kq-yD0O4MBw',
"sourceUrl": 'https://github.com/YanzBotz'
}}
}
bob.sendMessage(M.chat, buttonMessage,  { quoted: nay1 })			       				                     
				break;

case prefix+'donasi': case prefix+'donate':
reply('seiklas nya:V')
break

case prefix+'listp':
console.log(Object.keys(global.plugins))
break

case prefix+'kick': {
	if (args.length < 1) return msg.reply(`Tag orangnya yang ingin di kick`)
		if (!isGroup) throw mess.group
                if (!isBotGroupAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = msg.mentionedJid[0] ? msg.mentionedJid[0] : msg.quoted ? msg.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bob.groupParticipantsUpdate(M.chat, [users], 'remove').then((res) => msg.reply(jsonformat(res))).catch((err) => msg.reply(jsonformat(err)))
		}
	break;
	
	case prefix+'promote': 
	if (args.length < 1) return msg.reply(`Tag orang nya yang ingiin di promote`)
		if (!isGroup) throw mess.group
                if (!isBotGroupAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = msg.mentionedJid[0] ? msg.mentionedJid[0] : msg.quoted ? msg.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bob.groupParticipantsUpdate(M.chat, [users], 'promote').then((res) => msg.reply(jsonformat(res))).catch((err) => msg.reply(jsonformat(err)))
	break;

case prefix+'join': case prefix+'joingc': {
if (!isOwner) return reply(mess.owner)
if (!q) return textImg(mess.link)
if (!isUrl(q)) return textImg(mess.link)
if (!q.includes('chat.whatsapp.com')) return textImg("Link Invalid")
let query = q.split('https://chat.whatsapp.com/')[1]
let data = await bob.groupAcceptInvite(query)
await reply(jsonformat(data))
}
break


case prefix+'setwelcome': {
if (!M.isGroup)return reply(mess.group)
if (!isBotGroupAdmins)return reply(mess.botAdmin)
if (!isGroupAdmins)return reply(mess.admin)
if (!q)return reply(`Teksnya Mana? Contoh ${prefix + command} ${mess.example1}`)
global.db.data.chats[M.chat].setWelcome = q
reply('Succes Change Caption Welcome')
}
break

case prefix+'cekwelcome':{
if (!M.isGroup)return reply(mess.group)
if(!isGroupAdmins && !isOwner)return
let chat = global.db.data.chats[from]
let text = chat.setWelcome ? chat.setWelcome : '*Selamat Datang Di Group @subject*\n─────────────────\n*Nama : @user*\n*Pada : @tanggal*\n*Jangan Lupa Baca Rules Group*\n─────────────────\n*@desc*'
textImg('*CEK CAPTION WELCOME*\n\n' + text)
}
break

case prefix+'delwelcome':{
if (!M.isGroup)return reply(mess.group)
if(!isBotGroupAdmins && !isOwner)return
global.db.data.chats[from].setWelcome = ''
textImg('Done menghapus caption welcome!')
}
break
            
case prefix+'setleave': {
if (!M.isGroup)return reply(mess.group)
if (!isBotGroupAdmins)return reply(mess.botAdmin)
if (!isGroupAdmins)return reply(mess.admin)
if (!q)return reply(`Teksnya Mana? Contoh ${prefix + command} ${mess.example2}`)
global.db.data.chats[M.chat].setLeave = q
reply('Succes Change Caption Leave')
}
break

case prefix+'cekleave': case prefix+'cekleft':{
if (!M.isGroup)return reply(mess.group)
if(!isGroupAdmins && !isOwner)return
let chat = global.db.data.chats[from]
let text = chat.setLeave ? chat.setLeave : '*Sayonara* 👋\n─────────────────\n*Nama : @user*\n*Pada : @tanggal*\n\nTelah Meninggalkan Group @subject'
textImg('*CEK CAPTION LEAVE*\n\n' + text)
}
break

case prefix+'delleave': case prefix+'delleft':{
if (!M.isGroup)return reply(mess.group)
if(!isBotGroupAdmins && !isOwner)return
global.db.data.chats[from].setLeave = ''
textImg('Done menghapus caption leave!')
}
break


case prefix+'setpp': case prefix+'setppbot':
if (!isOwner) return reply(mess.owner)
if (isImage || isQuotedImage) {
let img = await bob.downloadAndSaveMediaMessage(quoted)
await bob.updateProfilePicture(botNumber, { url: img}).then(res => fs.unlinkSync(img))
await reply('Done..')
} else {
reply('Reply Img nya')
}
break

//Group Sistem
case prefix+'revoke':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.botAdmin)
let link = await bob.groupRevokeInvite(from)
await textImg('Done' + `\n\n*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`)
break

case prefix+'leave':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
reply('Sayonara~ 👋').then(async res => await bob.groupLeave(from))
break

case prefix+'tagall': case prefix+'infoall':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
let teks = `*Mention All\n*Message :  ${q ? q : 'Nothing'}*\n\n`
for (let mem of groupMembers) {
teks += `࿃➡️ @${mem.id.split('@')[0]}\n`
}
teks += `\n*${botName}*`
bob.sendMessage(from, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: msg })
break

case prefix+'hidetag':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
bob.sendMessage(from, { text : q ? q : '' , mentions: groupMembers.map(a => a.id)})
break

/* *********************************************************/

case prefix+'sendbuffer':
if (args.length < 1) return msg.reply('Linknya mana bg?')
try{
await textImg('```「▰▰▰▰▰▰▰▰▱▱」Sending...```')
sendFile(M.chat, isUrl(q)[0], '', M)
} catch (err){
await reply(err)
console.log(err)
}
break

/* *********************************************************/

case prefix+'ping': case prefix+'speed':{
const timestamp = speed();
const latensi = speed() - timestamp 
const neww = performance.now()
const oldd = performance.now()
textImg(`
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_

${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`)
 
}
break

case prefix+'runtime':{
textImg(`${runtime(run)}`)
}
break 

case prefix+'tomp4': case prefix+'tovideo': {
if (!/webp/.test(mime))return reply(`balas stiker dengan caption *${prefix + command}*`)
let media = await bob.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await bob.sendMessage(M.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: msg})
    await fs.unlinkSync(media)
}
break

case prefix+'togif': {
if (!/webp/.test(mime))return reply(`balas stiker dengan caption *${prefix + command}*`)
let media = await bob.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await bob.sendMessage(M.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: msg })
    await fs.unlinkSync(media)
}
break

case prefix+'take': case prefix+'colong': case prefix+'swm': case prefix+'stickerwm': case prefix+'wm': case prefix+'exif': {
if (!quoted)return textImg(`Reply Media dengan caption ${prefix + command} Punya|Senkuu`)
let { writeExif } = require('../lib/exif')
let media = {}
media.mimetype = mime
media.data = await M.getMsgBuffer(quoted)
let encmedia = await writeExif(media, {packname: q.split("|")[0] ? q.split("|")[0] : global.packname,author: q.split("|")[1] ? q.split("|")[1] : global.author })
bob.sendMessage(M.chat, { sticker: { url: encmedia } }, { quoted: msg})
await fs.unlinkSync(encmedia)
}
break

case prefix+'randomasupan':
await textImg('Tunggu sebentar..')
const asu = ['bocil','rikagusriani','hijab','ukhty','gea']
const asupannya = asu[Math.floor(Math.random() * asu.length)]
switch(asupannya){
case prefix+'bocil': 
fetchText('https://raw.githubusercontent.com/rapzz/asupan/master/bocil').then(async data => {
var bocl = data.split('\n')
var bocil  = bocl[Math.floor(Math.random() * bocl.length)]
sendFile(from, bocil , '*Asupan Bocil*', msg)
})
break
case prefix+'rikagusriani':
fetchText('https://raw.githubusercontent.com/rapzz/asupan/master/rikagusriani').then(async data => {
var rikagus = data.split('\n')
var rikagusriani  = rikagus[Math.floor(Math.random() * rikagus.length)]
sendFile(from, rikagusriani, '*Asupan Rikagusriani*', msg)
})
break
case prefix+'ukhty':
fetchText('https://raw.githubusercontent.com/rapzz/asupan/master/ukhty').then(async data => {
var ty = data.split('\n')
var ukhty  = ty[Math.floor(Math.random() * ty.length)]
 bob.sendMessage(from, {
				   video: { url: ukhty },
				   caption: `tes`,
				   buttons: [{buttonId: `${prefix}`, buttonText: { displayText: "tez" }, type: 1 },
					{buttonId: `${prefix}`, buttonText: { displayText: "tez" }, type: 1 }],
				   footer: "tes"
			      }, { quoted: nay1 })
//sendFile(from, ukhty, '*Asupan Ukti*', msg)
})
break
case prefix+'hijab':
fetchText('https://raw.githubusercontent.com/rapzz/asupan/master/hijaber').then(async data => {
var jb = data.split('\n')
var hijab = jb[Math.floor(Math.random() * jb.length)]
sendFile(from, hijab, '*Asupan Hijab*', msg)
})
break
case'gea':
fetchText('https://raw.githubusercontent.com/rapzz/asupan/master/geayubi').then(async data => {
var ya = data.split('\n')
var gea = ya[Math.floor(Math.random() * ya.length)]
sendFile(from, gea, '*Asupan Gea*', msg)
})
break
}
break

/**************** NO PLUGINS ***************/


case prefix+'absen':
global.db.data.absen = global.db.data.absen || {} 
if (!(from in global.db.data.absen)) return reply(`Tidak ada absen berlangsung!`) 
let absen = global.db.data.absen[from][1] 
const wasVote = absen.includes(M.sender) 
if (wasVote)return reply('Kamu sudah absen!')
absen.push(M.sender) 
let d = new Date 
let date = d.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let caption = `Tanggal: ${date}

${global.db.data.absen[from][2] ? global.db.data.absen[from][2] + '\n' : ''}
╭─「 Daftar Absen 」
│ Total: ${absen.length}
${list}
╰────`.trim()
await replyNtag(caption)
//bob.sendMessage(from,{text : caption},{quoted:msg})
break


case prefix+'cekabsen':
global.db.data.absen = global.db.data.absen || {}
if (!(from in global.db.data.absen))return reply(`Tidak ada absen berlangsung!`)
let dd = new Date 
let datee = dd.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let absenn = global.db.data.absen[from][1] 
let listt = absenn.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let captionn = `Tanggal: ${datee}
${global.db.data.absen[from][2] ? global.db.data.absen[from][2] + '\n' : ''}
╭─「 Daftar Absen 」
│ Total: ${absenn.length}
${listt}
╰────`.trim() 
replyNtag(captionn)
break

case prefix+'deleteabsen':
case prefix+'delabsen':
if (M.isGroup) { 
  if (!(isGroupAdmins || isOwner))return reply('Only Admin')
  } 
  global.db.data.absen = global.db.data.absen || {}
  if (!(from in global.db.data.absen))return reply(`Tidak ada absen berlangsung!`)
  delete global.db.data.absen[from]
M.reply(`Absen berhasil dihapus`)
break


case prefix+'absenstart':
if(!q)return reply('Absennya apa?')
if (M.isGroup) { 
  if (!(isGroupAdmins || isOwner))return reply('Only Admin')
} 
global.db.data.absen = global.db.data.absen || {}
if (from in global.db.data.absen)return reply(`Masih ada absen di chat ini!`)
global.db.data.absen[from] = [
  await bob.sendMessage(from,{text:'Absen Di Mulai..'},{quoted:msg}),
  [], 
  q ]
break



/**************** PLUGINS ***************/


case prefix+'igstalker': case prefix+'igstalk':
let igstalker = require('../plugins/igstalk')
igstalker(M, reply, prefix, sendFile, bob, q)
break

case prefix+'lirik':
let lirik = require('../plugins/lirik')
lirik(q , sendFile , M , textImg , sendMess)
break

case prefix+'githubstalk' : //Azfir
          if(!q) return msg.reply('Nau stalk github siapa?')
          msg.reply( '```「▰▰▰▰▰▰▰▰▱▱」Mencari...```')
          try{
          let urelwe = await fetchJson(`https://api.github.com/users/${q}`)
          let { url, avatar_url, id, login, updated_at, created_at, following, followers, name } = urelwe
          let teks = `📝Name : ${name}\n📋nick : ${login}\n📋id : ${id}\n💙following : ${following}\n👥followers : ${followers}\n📖created : ${created_at}\n⬆️update : ${updated_at}\n`
          let buttons = [{buttonId: `#owner`,buttonText:{displayText: `OWNER👤`},type:1}]
          let buttonMessage = {
               image: { url: `${avatar_url}` },
                caption: '*[ GITHUB STALKER ]*',
                footer: teks,
                buttons: buttons,
                headerType: 4
              }
           await bob.sendMessage(from, buttonMessage, {quoted: nay1 })
          } catch { msg.reply('Tidak ditemukan!') }
        break;

case prefix+'suit':
let suit = require('../plugins/suit')
suit(q,reply,prefix)
break


case prefix+'calc': case prefix+'calculator': case prefix+'kalkulator':
let calc = require('../plugins/calculator')
calc(M, bob, q)
break

case prefix+'namaninja':
let namaninja = require('../plugins/namaninja')
namaninja(q,M)
break

case prefix+'alay':
let alay = require('../plugins/alay')
alay(M, q)
break

case prefix+'group': case prefix+'grup':
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply(mess.admin)
let groupsettings = require('../plugins/groupSettings')
groupsettings(q, bob, M)
break


case prefix+'s': case prefix+'sticker': case prefix+'stiker':
if ((isMedia && !msg.message.videoMessage || msg.isQuotedImage) && args.length == 0) {
            bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
             var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
             var buffer = Buffer.from([])
               for await(const chunk of stream) {
                  buffer = Buffer.concat([buffer, chunk])
               }
             let buffers = await writeExifImg(buffer, { packname: global.packname, author: global.auhor })
           await bob.sendMessage(from, { sticker: { url: buffers } }, { quoted: msg })
          } else if ((isMedia && msg.message.videoMessage.seconds < 11 || msg.isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
                var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
                var buffer = Buffer.from([])
                  for await(const chunk of stream) {
                     buffer = Buffer.concat([buffer, chunk])
                  }
             let buffers = await writeExifVid(buffer, { packname: global.packname, author: global.author })
           await bob.sendMessage(from, { sticker: { url: buffers } }, { quoted: nay1 })
           } else { msg.reply(`Reply gambar/video/sticker dengan caption ${prefix + 'sticker'} \n*(MAKSIMAL 10 DETIK!)*`) }
break

case prefix+'mode': case prefix+'set': 
 if (!isOwner) return reply(mess.owner)
let mode = require('../plugins/mode')
mode(prefix, bob, M)
break


case prefix+'self':{
if (!isOwner) return reply(mess.owner)
setting.Mode = 'Self'
textImg('Done..')
}
break

case prefix+'public':{
if (!isOwner) return reply(mess.owner)
setting.Mode = 'Public'
textImg('Done..')
}
break

case prefix+'toimg':
let toimg = require('../plugins/toimg')
toimg(bob, M, quoted, isQuotedSticker, textImg )
break

case prefix+'ig': case prefix+'instagram':
let instagram = require('../plugins/instagram')
instagram(M, q, sendFile, prefix, bob)
break

case prefix+'broadcast': case prefix+'bcgc':
let bcgc = require('../plugins/broadcast')
bcgc(M , q , bob, isOwner)
break


case prefix+'ytstalk':
let ytstalk = require('../plugins/ytstalk')
ytstalk(M, sendFile, q)
break


case prefix+'smeme':
let smeme = require('../plugins/smeme')
smeme(M, bob, sendFile, q, setting)
break;

case prefix+'smemelower':
let smemelower = require('../plugins/smemelower')
smemelower(M, bob, sendFile, q, setting)
break;

/// MENU CASE ///

////case prefix+'vn':
//////let aud = {
         ////audio: fs.readFileSync('./lib//audio/YanzBotz.mp3'),
         /////ptt: true, 
         ///mimetype: 'audio/mp4',
          /////contextInfo:{
           ////externalAdReply:{
             ////title: time,
             ////body: `Selamat ${salam + ' ' + M.pushName}`,
             //thumbnail: global.pathImg,
             ///sourceUrl: "https://instagram.com/ketutagus404",
             ///mediaUrl: "https://github.com/YanzBotz",
             //renderLargerThumbnail: true,
             //showAdAttribution: true,
             ///mediaType: 1
            //}
           //}
         //}
        ////bob.sendMessage(from, aud, { quoted : nay1 })
        ////break;

  case prefix+'play':  //INI BUATAN RIFZA!!
   if (args.length < 1) return msg.reply('lagu apa?')
   const fresh_ =  await ytsr.search(args.join(' '))
   const fresh = fresh_.all
   console.log(fresh)
    let sections = []   
    for (let i = 0; i < fresh.length; i++) {    
    const list = {title: `${i + 1}. ${fresh[i].title}`,
     rows: [
	    {
	     title: "[ 🎵 ] AUDIO", 
	     rowId: `#selegyanz ${fresh[i].url}`,
	     description: `🔖Title: ${fresh[i].title}\n\n📄 Description: ${fresh[i].description}\n\n📊Duration : ${fresh[i].duration}\n\n🔎Source : ${fresh[i].url}\n\nℹ️Id : ${fresh[i].videoId}`,
	    },
	    {
	     title: "[ ▶️ ] VIDEO", 
	     rowId: `#selegyanz ${fresh[i].url}`, 
	     description: `🔖Title: ${fresh[i].title}\n\n📄 Description: ${fresh[i].description}\n\n📊Duration : ${fresh[i].duration}\n\n🔎Source : ${fresh[i].url}\n\nℹ️Id : ${fresh[i].videoId}`,
	    },
       ]
      }
     sections.push(list)  
     }      
    await bob.sendMessage(from, { text: "The most complete collection of songs mp3/mp4✔️", footer: global.packname, title: "[ YouTube Music Search🔎 ]", buttonText: "Click and see search results➡️", sections }, {quoted: nay1 })
  break;
  
  case prefix+'selegyanz':
				let yanz = [{
  				title: "MP3/MP4",
  				rows: [
							{title: `[ 🎵 ] MP3`,rowId: `#ytmp3 ${args[0]}|mp3`, description: `\nPilih mp3 untuk audio`},
							{title: `[ 🎵 ] MP4`,rowId: `#ytmp4 ${args[0]}|mp4`, description: `\nPilih mp4 untuk video`}
				]},
				]
				bob.sendListMsg(from, `MP3/MP4`, `\nドラえもん 🅥`, `TYPE AUDIO/VIDEO TO SEND`, `Click Here`, yanz, nay1)
				break;
   
case prefix+'brainly':
        if (args.length < 1) return msg.reply('Soalnya apa')
        let brien = args.join(' ')
         brainly(`${brien}`).then(res => {
         let teks = '<──────────────────>️\n'
         for (let Y of res.data) {
           teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n<──────────────────>\n`
         }
        msg.reply(teks)
        }).catch(e => {
         msg.reply(`"${e}"`)
        })
       break;   
       
case prefix+'delsesiut': //By Rifza
      var _0x598549=_0x3451;(function(_0x50f204,_0x2d5c12){var _0x5682ae=_0x3451,_0x3a7726=_0x50f204();while(!![]){try{var _0x172f02=parseInt(_0x5682ae(0xbd))/0x1+parseInt(_0x5682ae(0xbf))/0x2+-parseInt(_0x5682ae(0xbb))/0x3+-parseInt(_0x5682ae(0xc0))/0x4*(parseInt(_0x5682ae(0xc4))/0x5)+parseInt(_0x5682ae(0xc5))/0x6*(-parseInt(_0x5682ae(0xba))/0x7)+-parseInt(_0x5682ae(0xc6))/0x8+parseInt(_0x5682ae(0xbc))/0x9;if(_0x172f02===_0x2d5c12)break;else _0x3a7726['push'](_0x3a7726['shift']());}catch(_0x349d5a){_0x3a7726['push'](_0x3a7726['shift']());}}}(_0x5848,0x8f072));var LoaD=await ReadJsonUT(from),nu='./storage_cabinets/D-B/ulartangga/'+from+_0x598549(0xc3);function _0x5848(){var _0x545d9d=['1044232PvVhDg','144932SKhFTO','「\x20Success\x20」\x0a\x20History\x20Game\x20Sukses\x20Dihapus!!','unlinkSync','.json','40lIKSOv','3660918eTGbgO','2119304hRGahI','DeleteMessage','reply','7muVyaP','3459423KsPEPm','17029764WCxLlM','489601SJGAoD','key'];_0x5848=function(){return _0x545d9d;};return _0x5848();}function _0x3451(_0x169950,_0x3fcbfb){var _0x584850=_0x5848();return _0x3451=function(_0x3451d5,_0x2c646b){_0x3451d5=_0x3451d5-0xb9;var _0x3435dc=_0x584850[_0x3451d5];return _0x3435dc;},_0x3451(_0x169950,_0x3fcbfb);}bob[_0x598549(0xc7)](LoaD[_0x598549(0xbe)],botNumber)['then'](()=>{var _0x50b7cc=_0x598549;msg[_0x50b7cc(0xb9)](_0x50b7cc(0xc1)),fs[_0x50b7cc(0xc2)](nu);});
      break;         

case prefix+'ulartangga': ///By Rifza
var _0x4c7f23=_0x1a7e;(function(_0x2b5393,_0xe54634){var _0x3539a8=_0x1a7e,_0x58e55d=_0x2b5393();while(!![]){try{var _0x11f313=parseInt(_0x3539a8(0xcf))/0x1+-parseInt(_0x3539a8(0xea))/0x2*(parseInt(_0x3539a8(0xda))/0x3)+parseInt(_0x3539a8(0xe7))/0x4*(parseInt(_0x3539a8(0xd5))/0x5)+-parseInt(_0x3539a8(0xca))/0x6+parseInt(_0x3539a8(0xd8))/0x7*(parseInt(_0x3539a8(0xd0))/0x8)+parseInt(_0x3539a8(0xe1))/0x9+-parseInt(_0x3539a8(0xe6))/0xa;if(_0x11f313===_0xe54634)break;else _0x58e55d['push'](_0x58e55d['shift']());}catch(_0x3fd8e8){_0x58e55d['push'](_0x58e55d['shift']());}}}(_0x4f91,0xe7773));function _0x1a7e(_0x443ac7,_0x1f866e){var _0x4f9135=_0x4f91();return _0x1a7e=function(_0x1a7eb9,_0x25458f){_0x1a7eb9=_0x1a7eb9-0xc9;var _0x2bbf1a=_0x4f9135[_0x1a7eb9];return _0x2bbf1a;},_0x1a7e(_0x443ac7,_0x1f866e);}if(!isGroup)return msg[_0x4c7f23(0xdd)]('*𝗙𝗜𝗧𝗨𝗥\x20𝗗𝗜\x20𝗧𝗢𝗟𝗔𝗞*\x20〄\x0a\x20Fitur\x20ini\x20Hanya\x20bisa\x20di\x20Akses\x20Di\x20Group\x20!');if(fs[_0x4c7f23(0xd6)](_0x4c7f23(0xd7)+from+'.json'))return msg[_0x4c7f23(0xdd)](_0x4c7f23(0xdf)+prefix+_0x4c7f23(0xce));function _0x4f91(){var _0x194ef1=['137406YgqaGh','.jpg','@s.whatsapp.net','reply','[()+-/\x20+/]','「\x20Anda\x20masih\x20dalam\x20permainan!!\x20」\x0asilahkan\x20ketik\x20*','sender','5178150qgUNKw','https://telegra.ph/file/42d2a0e0881e349806028.jpg','./storage_cabinets/image/','Tag\x20orang\x20yang\x20ingin\x20kamu\x20ajak\x20bermain!!','writeFileSync','15679010pcgdfs','482904sLgVjD','stringify','image','2QkjOiV','sendMessage','7478814yqDwgN','extendedTextMessage','replace','\x20Mengajak\x20@','delsesiut*\x20untuk\x20menghapus\x20history\x20permainan\x20anda','1536372UKazcq','168JaYWHZ','message','.json','split','profilePictureUrl','60lplMAT','existsSync','./storage_cabinets/D-B/ulartangga/','82607YtwpAL','\x20untuk\x20bermain\x20🐍\x20ulartangga\x20bersama\x0a\x0aKetik\x20:\x20Y\x20[\x20Untuk\x20Menyetujui]\x0aKetik\x20:\x20N\x20[\x20Untuk\x20Menolak\x20]'];_0x4f91=function(){return _0x194ef1;};return _0x4f91();}if(msg[_0x4c7f23(0xd1)][_0x4c7f23(0xcb)]===undefined||msg[_0x4c7f23(0xd1)][_0x4c7f23(0xcb)]===null)return msg[_0x4c7f23(0xdd)](_0x4c7f23(0xe4));let PL=mentionByTag[0x0]?mentionByTag[0x0]:mentionByreply?mentionByreply:q[_0x4c7f23(0xcc)](new RegExp(_0x4c7f23(0xde),'gi'),'')+_0x4c7f23(0xdc);var playersUT1=msg[_0x4c7f23(0xe0)],playersUT2=PL,ID_UT=from,turnUT=playersUT2;try{var ppus1=await bob[_0x4c7f23(0xd4)](msg[_0x4c7f23(0xe0)],_0x4c7f23(0xe9));}catch{ppus1=_0x4c7f23(0xe2);}try{var ppus2=await bob['profilePictureUrl'](PL,_0x4c7f23(0xe9));}catch{ppus2='https://telegra.ph/file/265c672094dfa87caea19.jpg';}let resz1=await reSize(ppus1,0x22,0x22),resz2=await reSize(ppus2,0x22,0x22);var randpic1=await getRandom(_0x4c7f23(0xdb)),randpic2=await getRandom(_0x4c7f23(0xdb)),randTemp=await getRandom(_0x4c7f23(0xdb));await fs[_0x4c7f23(0xe5)](_0x4c7f23(0xe3)+randpic1,resz1),await fs['writeFileSync']('./storage_cabinets/image/'+randpic2,resz2);const pic1='./storage_cabinets/image/'+randpic1,pic2=_0x4c7f23(0xe3)+randpic2,templatePath=_0x4c7f23(0xe3)+randTemp;var sesi={'gilir':0x0,'key':[],'template':templatePath,'player1':{'id':playersUT1,'jalan':0x1,'picture':pic1},'player2':{'id':playersUT2,'setuju':![],'jalan':0x1,'picture':pic2}};fs[_0x4c7f23(0xe5)](_0x4c7f23(0xd7)+from+_0x4c7f23(0xd2),JSON[_0x4c7f23(0xe8)](sesi,null,0x2)),bob[_0x4c7f23(0xc9)](from,{'text':'\x20@'+msg[_0x4c7f23(0xe0)][_0x4c7f23(0xd3)]('@')[0x0]+_0x4c7f23(0xcd)+PL[_0x4c7f23(0xd3)]('@')[0x0]+_0x4c7f23(0xd9),'mentions':[PL,msg[_0x4c7f23(0xe0)]]},{'quoted':nay1});
      break;
      
case prefix+'ssweb':
              if (!q) return msg.reply('Harap sertakan link!')
                bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
               bob.sendMessage(from, { image: { url : 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q }, caption: `Result✔️`}, { quoted: nay1 } )
         break;
case prefix+'p':
 	var _0x4df8c0=_0x2e88;function _0x2e88(_0x15f30c,_0x401459){var _0x29a9ce=_0x29a9();return _0x2e88=function(_0x2e88f5,_0x316581){_0x2e88f5=_0x2e88f5-0xe7;var _0x49e0d7=_0x29a9ce[_0x2e88f5];return _0x49e0d7;},_0x2e88(_0x15f30c,_0x401459);}function _0x29a9(){var _0x5d8151=['11990oHTvUd','relayMessage','24542JUEKqx','sender','USD','Hallo,\x20','1746iJhKJQ','2563847KaImTy','4YZQfER','2990652pYhuGT','1968880hUgbVJ','1716729qrgqNE','2mrhRAo','96uooJEh','72CaiyNJ','861163EzQGTm','\x20Ada\x20Yang\x20Bisa\x20Kami\x20Bantu!!'];_0x29a9=function(){return _0x5d8151;};return _0x29a9();}(function(_0x3235e0,_0x12a3bb){var _0x4142db=_0x2e88,_0x4943df=_0x3235e0();while(!![]){try{var _0x2424d0=parseInt(_0x4142db(0xe8))/0x1*(-parseInt(_0x4142db(0xf6))/0x2)+parseInt(_0x4142db(0xf5))/0x3*(-parseInt(_0x4142db(0xf2))/0x4)+parseInt(_0x4142db(0xf4))/0x5+parseInt(_0x4142db(0xf3))/0x6+-parseInt(_0x4142db(0xec))/0x7*(parseInt(_0x4142db(0xf7))/0x8)+parseInt(_0x4142db(0xf0))/0x9*(-parseInt(_0x4142db(0xea))/0xa)+-parseInt(_0x4142db(0xf1))/0xb*(-parseInt(_0x4142db(0xe7))/0xc);if(_0x2424d0===_0x12a3bb)break;else _0x4943df['push'](_0x4943df['shift']());}catch(_0x473395){_0x4943df['push'](_0x4943df['shift']());}}}(_0x29a9,0x8e3c4),bob[_0x4df8c0(0xeb)](from,{'requestPaymentMessage':{'currencyCodeIso4217':_0x4df8c0(0xee),'amount1000':0x3b9ac9ff,'requestFrom':msg[_0x4df8c0(0xed)],'noteMessage':{'extendedTextMessage':{'text':_0x4df8c0(0xef)+pushname+_0x4df8c0(0xe9)}},'expiryTimestamp':0x0,'amount':{'value':0x69dc,'offset':0x3e8,'currencyCode':'USD'}}},{}));
break;

default:
      if (isCmd) {		
		            reply(`Maaf kak fitur *${command}* tidak terdaftar di list *${prefix+'menu'}*`)
		          }
		
const _0x142e99=_0x3c4c;(function(_0x5ee224,_0x4e5d56){const _0x2bd975=_0x3c4c,_0x4ec28d=_0x5ee224();while(!![]){try{const _0x58ba2f=-parseInt(_0x2bd975(0x1f6))/0x1*(-parseInt(_0x2bd975(0x1f4))/0x2)+parseInt(_0x2bd975(0x1ec))/0x3*(parseInt(_0x2bd975(0x1f7))/0x4)+parseInt(_0x2bd975(0x1ed))/0x5+-parseInt(_0x2bd975(0x1f8))/0x6+parseInt(_0x2bd975(0x1fa))/0x7+-parseInt(_0x2bd975(0x1f0))/0x8*(-parseInt(_0x2bd975(0x1ee))/0x9)+-parseInt(_0x2bd975(0x1f1))/0xa*(parseInt(_0x2bd975(0x1e9))/0xb);if(_0x58ba2f===_0x4e5d56)break;else _0x4ec28d['push'](_0x4ec28d['shift']());}catch(_0x5a92bf){_0x4ec28d['push'](_0x4ec28d['shift']());}}}(_0x55f6,0x922d9));function _0x55f6(){const _0x16ff11=['10QOuMmw','done','63443jrwooW','1575096TEDebT','3134232AJkmWF','readFileSync','4366292DrwiGe','stringify','sender','deposit\x20anda\x20adalah\x20','depo','key','4664tbjCNS','existsSync','reply','3wxHdDC','4016670jDFqlu','37566glCXxr','Harus\x20berup\x20angka!','488lhqIoU','29990UMGWAE','.json','fromMe'];_0x55f6=function(){return _0x16ff11;};return _0x55f6();}function _0x3c4c(_0x6c0dfd,_0x2ab66e){const _0x55f656=_0x55f6();return _0x3c4c=function(_0x3c4ccd,_0x2d8478){_0x3c4ccd=_0x3c4ccd-0x1e4;let _0x4a53ff=_0x55f656[_0x3c4ccd];return _0x4a53ff;},_0x3c4c(_0x6c0dfd,_0x2ab66e);}if(fs[_0x142e99(0x1ea)]('./'+msg[_0x142e99(0x1e5)]+_0x142e99(0x1f2))){if(msg[_0x142e99(0x1e8)][_0x142e99(0x1f3)])return;chet=chatmessage;let rfz=JSON['parse'](fs[_0x142e99(0x1f9)]('./'+msg[_0x142e99(0x1e5)]+'.json'));!rfz[_0x142e99(0x1e7)]==!![]&&(!isNaN(chet)?(msg[_0x142e99(0x1eb)](_0x142e99(0x1e6)+chatmessage+'\x0a\x20ketik\x20Y\x20untuk\x20menyetujui!'),fs['writeFileSync']('./'+msg['sender']+'.json',JSON[_0x142e99(0x1e4)]({'depo':!![]},null,0x2))):msg[_0x142e99(0x1eb)](_0x142e99(0x1ef))),chatmessage=='Y'&&(rfz[_0x142e99(0x1e7)]==!![]&&(fs['unlinkSync']('./'+msg[_0x142e99(0x1e5)]+_0x142e99(0x1f2)),msg[_0x142e99(0x1eb)](_0x142e99(0x1f5))));}

if (/6289508503105/.test(m.text)){
         let aud = {
         audio: fs.readFileSync('./media/tag.mp3'),
         ptt: true, 
         mimetype: 'audio/mp4',
          contextInfo:{
           externalAdReply:{
             title: time,
             body: `${salam + ' ' + m.pushName}`,
             thumbnail: global.pathImg,
             sourceUrl: "https://instagram.com/ketutagus404",
             mediaUrl: "https://github.com/VamsesOfficial",
             //renderLargerThumbnail: true,
             //showAdAttribution: true,
             mediaType: 1
            }
           }
         }
        bob.sendMessage(from, aud, { quoted : fpay })
            }
            
if (budy.includes('gabut') || budy.includes('hehe') || budy.includes('Gabut') || budy.includes('apa')) {
	let mojii = ["🤧","🤨","🗿","🤪","🤫","🤬","🤭","🤮","🤯","🥶","🤠","🤡","🤢","🤣","🤤","🤥","🤐","🤑","🤒","🤓","🤔","🤕","🤖","🤗","🐦"]
			let ran = mojii[Math.floor(Math.random() * mojii.length)]
const reactionMessage = {
    react: {
        text: ran, // use an empty string to remove the reaction
        key: m.key
    }
}
bob.sendMessage(from, reactionMessage)
	}
	
if (budy.startsWith('>')) {
                    if (!isOwner) return msg.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await msg.reply(evaled)
                    } catch (err) {
                        await msg.reply(String(err))
                    }
                }
                
                if (budy.startsWith('$')) {
                    if (!isOwner) return msg.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return msg.reply(err)
                        if (stdout) return msg.reply(stdout)
                    })
                }

}
} catch (err) {
console.log(color('[ERROR]', 'red'), err)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})