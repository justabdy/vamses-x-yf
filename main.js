// THANKS TO DIKA ARDNT.

"use strict";
require('./message/config')

const { default: WASocket,               
        DisconnectReason,                 
        fetchLatestBaileysVersion,          
        useMultiFileAuthState,
        generateForwardMessageContent,      
        prepareWAMessageMedia,  
        generateWAMessageFromContent,         
        proto,
        downloadContentFromMessage 
        } = require("@adiwajshing/baileys")
const figlet = require("figlet");
const fs = require("fs");
const { existsSync, watchFile } = require('fs')
const path = require('path')
const chalk = require('chalk')
const fetch = require('node-fetch')
const FileType = require('file-type')
const Pino = require('pino')
const yargs = require('yargs')
const CFonts  = require('cfonts')
const store = require('./store')
const help = require('./lib/help')
const syntaxerror = require('syntax-error')
const { color, bobLog } = require("./lib/color");
let setting = JSON.parse(fs.readFileSync('./config.json'));
let sesion = `./${setting.sessionName}.json`

const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, formatp, sleep, getBuffer } = require('./lib/myfunc')

//----> Jangan di ubah nanti error
existsSync('./data_load/baileys_store.json') && store.readFromFile('./data_load/baileys_store.json')
setInterval(() => {
    store.writeToFile('./data_load/baileys_store.json')
}, 10000)

//----> get function api
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

global.db = new (require('./lib/database'))(`${opts._[0] ? opts._[0] + '_' : ''}database.json`, null, 2)
global.db.data = {
users: {},
chats: {},
database: {},
absen: {},
cmd: {},
settings: {},
...(global.db.data || {})
}

//-----> Plugins 
let pluginFolder = path.join(__dirname, 'plugins')
let pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
  try {
    global.plugins[filename] = require(path.join(pluginFolder, filename))
  } catch (e) {
    console.log(e)
    delete global.plugins[filename]
  }
}

//-----> SYSTEM PLUGINS
global.reload = (_event, filename) => {
  if (pluginFilter(filename)) {
    let dir = path.join(pluginFolder, filename)
    if (dir in require.cache) {
      delete require.cache[dir]
      if (fs.existsSync(dir)) console.log(color(`Done Update plugins '${filename}'`, 'aqua'))
      else {
        console.log(color(`deleted plugin '${filename}'`, 'yellow'))
        return delete global.plugins[filename]
      }
    } else console.log(color(`requiring new plugin '${filename}'`, 'lime'))
    let err = syntaxerror(fs.readFileSync(dir), fs.existsSync(dir) ? filename : 'Execution Function')
    if (err) console.log(color(`syntax error while loading '${filename}'\n${err}`, 'red'))
    else try {
      global.plugins[filename] = require(dir)
    } catch (e) {
      console.log(e)
    } finally {
      global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
    }
  }
}
Object.freeze(global.reload)
fs.watch(path.join(__dirname, 'plugins'), global.reload)
//----> END

//----> Function QR & Run
const start = async () => {
const { state, saveCreds } = await useMultiFileAuthState(path.resolve(`${setting.sessionName}-session`), Pino({ level: 'silent' }))
CFonts.say('vamses', {
  font: 'simple3d',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`created by vamses x yf`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
console.log('\x1b[1;31m×\x1b[1;37m>', '<\x1b[1;32m🤖︎\x1b[1;37m>', color('WARNING'), 'Membaca plugins...')	
await sleep(3000)
console.log(Object.keys(global.plugins))
let { version, isLatest } = await fetchLatestBaileysVersion()
	 const bob = WASocket({
        printQRInTerminal: true,
        auth: state,
        logger: Pino({ level: 'silent' }),
        version,
    })
    store.bind(bob.ev) 
    
    bob.multi = true 
    bob.nopref = false
    bob.prefa = '/'
          console.log(color('Connected....', 'aqua'))
          bob.ev.on('messages.upsert', async m => {
          if (!m.messages) return
          const msg = m.messages[0]
          const M = smsg(bob, msg)
          switch (M.mtype) {
          case "imageMessage": 
          case "videoMessage":
          case "audioMessage":
          case "stickerMessage":
          case "documentMessage":
          case "senderKeyDistributionMessage":
          if (!M.key.fromMe) await sleep(1000)
          const quoted = M.msg ? M.msg.url : M.quoted.url
          if (!quoted) await bob.refreshMediaConn(true)
          break
} 	
require('./message/bob')(bob, msg, m, M, help, setting)
})



    //----> Function participants group
    bob.ev.on('group-participants.update', async (anu) => {
        require('./message/group')(bob, anu)
    })

    //---->   
    bob.ev.on('chats.set', () => {
        console.log('got chats', store.chats.all().length) //----> gk usah di apus
    })

    bob.ev.on('contacts.set', () => {
        console.log('got contacts', Object.values(store.contacts).length) //----> gk ush di apus
    }) 
    
    let dbJson = JSON.stringify(global.db.data)
        if (!opts['test']) setInterval(() => {
                console.log(chalk.redBright('Reading Database...'))
        if (JSON.stringify(global.db.data) == dbJson) console.log(chalk.redBright('Database Update Now...'))
        else {
              global.db.save()
                console.log(chalk.redBright('Done Update Database...'))
        let dbJson = JSON.stringify(global.db.data)
        }
        }, 60 * 1000) //----> Set Default 


 /** Resize Image
      *
      * @param {Buffer} Buffer (Only Image)
      * @param {Numeric} Width
      * @param {Numeric} Height
      */
      bob.reSize = async (image, width, height) => {
       let jimp = require('jimp')
       var oyy = await jimp.read(image);
       var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
       return kiyomasa
      } 
      
      bob.ev.on('creds.update', saveCreds)
      bob.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect } = update
      if (connection === 'close') {
      console.log(bobLog('connection closed, try to restart'))
      lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut 
      ? start()
      : console.log(bobLog('Wa web terlogout.'))
      }
})


bob.sendText = (jid, text, quoted = '', options) => bob.sendMessage(jid, { text: text, ...options }, { quoted })

bob.sendImageAsSticker = async (jid, path, quoted, options = {}) => {

let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}



await bob.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

/**
 * 
 * @param {*} jid 
 * @param {*} path 
 * @param {*} quoted 
 * @param {*} options 
 * @returns 
 */


bob.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}

await bob.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

     //
    bob.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
       let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
         
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    bob.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
     
     /**
      *
      * @param {*} jid
      * @param {*} url
      * @param {*} caption
      * @param {*} quoted
      * @param {*} options
      */
     
     bob.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return bob.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return bob.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return bob.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return bob.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return bob.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
    
    /** Send List Messaage
      *
      *@param {*} jid
      *@param {*} text
      *@param {*} footer
      *@param {*} title
      *@param {*} butText
      *@param [*] sections
      *@param {*} quoted
      */
    
    bob.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        bob.sendMessage(jid, listMes, { quoted: quoted })
        }
        
        /** Send Button 5 Message
     * 
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} button
     * @returns 
     */
        bob.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        bob.sendMessage(jid, templateMessage)
        }

    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    bob.send5ButImg = async (jid , text = '' , footer = '', img, but = [], buff, options = {}) =>{
    bob.sendMessage(jid, { image: img, caption: text, footer: footer, templateButtons: but, ...options })
    }

      /** Send Button 5 Location
       *
       * @param {*} jid
       * @param {*} text
       * @param {*} footer
       * @param {*} location
       * @param [*] button
       * @param {*} options
       */
      bob.send5ButLoc = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
      let bb = await bob.reSize(lok, 300, 150)
      bob.sendMessage(jid, { location: { jpegThumbnail: bb }, caption: text, footer: footer, templateButtons: but, ...options })
      }

    /** Send Button 5 Video
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Video
     * @param [*] button
     * @param {*} options
     * @returns
     */
    bob.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], buff, options = {}) =>{
    let lol = await bob.reSize(buf, 300, 150)
    bob.sendMessage(jid, { video: vid, jpegThumbnail: lol, caption: text, footer: footer, templateButtons: but, ...options })
    }

    /** Send Button 5 Gif
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Gif
     * @param [*] button
     * @param {*} options
     * @returns
     */
    bob.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], buff, options = {}) =>{
    let ahh = await bob.reSize(buf, 300, 150)
    let a = [1,2]
    let b = a[Math.floor(Math.random() * a.length)]
    bob.sendMessage(jid, { video: gif, gifPlayback: true, gifAttribution: b, caption: text, footer: footer, jpegThumbnail: ahh, templateButtons: but, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    bob.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        bob.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    bob.sendText = (jid, text, quoted = '', options) => bob.sendMessage(jid, { text: text, ...options }, { quoted, ...options })
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    bob.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await bob.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    bob.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await bob.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    bob.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await bob.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    bob.sendTextWithMentions = async (jid, text, quoted, options = {}) => bob.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })
    /**

bob.send5ButLoc = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
      let bb = await bob.reSize(lok, 300, 150)
      bob.sendMessage(jid, { location: { jpegThumbnail: bb }, caption: text, footer: footer, templateButtons: but, ...options })
      }

/**
 * Send Buttons
 * @param {String} jid
 * @param {String} content
 * @param {String} footer
 * @param {String} button1
 * @param {String} row1
 * @param {Object} quoted
 * @param {Object} options
 */

bob.sendButton = async(jid, content, footer, button1, row1, quoted, options = {}) => {
return await bob.sendMessage(jid, {
text: content,
footer: footer,
buttons: [
  { buttonId: row1, buttonText: { displayText: button1 }, type: 1 }
],
headerType: 1
  },{quoted, ...options})
}

bob.send2Button = async(jid, content, footer, button1, row1, button2, row2, quoted, options = {}) => {
return await bob.sendMessage(jid, {
text: content,
footer: footer,
buttons: [
  { buttonId: row1, buttonText: { displayText: button1 }, type: 1 },
  { buttonId: row2, buttonText: { displayText: button2 }, type: 1 }
],
headerType: 1
  },{quoted, ...options })
}

   
   
bob.getFile = async (path) => {
let res
let data = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (res = await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
	mime: 'application/octet-stream',
	ext: '.bin'
}

return {
	res,
	...type,
	data
}
}

/**** SEND MEDIA
bob.sendMedia = async (jid, path, filename, quoted = '', options = {}) => {
	 let { ext, mime, data } = await bob.getFile(path)
	 let messageType = mime.split("/")[0]
	 let pase = messageType.replace('application', 'document') || messageType
	 return await bob.sendMessage(jid, { [`${pase}`]: data, mimetype: mime, fileName: filename+ext ? filename+ext : getRandom(ext), ...options }, { quoted })

}   

/**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    bob.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await bob.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await bob.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

   
   
   
/**
 * 
 * @param {*} jid 
 * @param {*} message 
 * @param {*} forceForward 
 * @param {*} options 
 * @returns 
 */
bob.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
	message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
	vtype = Object.keys(message.message.viewOnceMessage.message)[0]
	delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
	delete message.message.viewOnceMessage.message[vtype].viewOnce
	message.message = {
...message.message.viewOnceMessage.message
	}
}

let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await bob.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

bob.cMod = (jid, message, text = '', sender = bob.user.id, options = {}) => {
let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
	...content,
	...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === bob.user.id

return proto.WebMessageInfo.fromObject(copy)
}   
  
return bob
}

start()
.catch(err => console.log(err))
