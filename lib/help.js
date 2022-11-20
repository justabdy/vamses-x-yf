const fs = require('fs')
exports.listMenu = (prefix, listmenu, M) => {

var Media = ""
var Owner = ""
var Group = ""
var Fun = ""
var Download = ""
var Random = ""
var Stalk = ""
var Search = ""
var Game = ""
var Short = ""
var Rdm = ""
var Msm = ""
var Arti = ""
var Tr = ""
var Tp = ""
var As = ""
var Msc = ""
var Bw = ""
var Mt = ""
var number = 0


Object.keys(listmenu.media).forEach((i) => {number++
Media += `\n  ≻ *${prefix}` + listmenu.media[i] + "*"})

Object.keys(listmenu.owner).forEach((i) => {number++
Owner += `\n  ≻ *${prefix}` + listmenu.owner[i] + "*"})

Object.keys(listmenu.group).forEach((i) => {number++
Group += `\n  ≻ *${prefix}` + listmenu.group[i] + "*"})

Object.keys(listmenu.fun).forEach((i) => {number++
Fun += `\n  ≻ *${prefix}` + listmenu.fun[i] + "*"})

Object.keys(listmenu.random).forEach((i) => {number++
Random += `\n  ≻ *${prefix}` + listmenu.random[i] + "*"})

Object.keys(listmenu.stalker).forEach((i) => {number++
Stalk += `\n  ≻ *${prefix}` + listmenu.stalker[i] + "*"})

Object.keys(listmenu.download).forEach((i) => {number++
Download += `\n  ≻ *${prefix}` + listmenu.download[i] + "*"})

Object.keys(listmenu.search).forEach((i) => {number++
Search += `\n  ≻ *${prefix}` + listmenu.search[i] + "*"})

Object.keys(listmenu.game).forEach((i) => {number++
Game += `\n  ≻ *${prefix}` + listmenu.game[i] + "*"})

Object.keys(listmenu.shor).forEach((i) => {number++
Short += `\n  ≻ *${prefix}` + listmenu.shor[i] + "*"})

Object.keys(listmenu.rdm).forEach((i) => {number++
Rdm += `\n  ≻ *${prefix}` + listmenu.rdm[i] + "*"})

Object.keys(listmenu.msm).forEach((i) => {number++
Msm += `\n  ≻ *${prefix}` + listmenu.msm[i] + "*"})

Object.keys(listmenu.arti).forEach((i) => {number++
Arti += `\n  ≻ *${prefix}` + listmenu.arti[i] + "*"})

Object.keys(listmenu.tr).forEach((i) => {number++
Tr += `\n  ≻ *${prefix}` + listmenu.tr[i] + "*"})

Object.keys(listmenu.tp).forEach((i) => {number++
Tp += `\n  ≻ *${prefix}` + listmenu.tp[i] + "*"})

Object.keys(listmenu.as).forEach((i) => {number++
As += `\n  ≻ *${prefix}` + listmenu.as[i] + "*"})

Object.keys(listmenu.msc).forEach((i) => {number++
Msc += `\n  ≻ *${prefix}` + listmenu.msc[i] + "*"})

Object.keys(listmenu.bw).forEach((i) => {number++
Bw += `\n  ≻ *${prefix}` + listmenu.bw[i] + "*"})

Object.keys(listmenu.mt).forEach((i) => {number++
Mt += `\n  ≻ *${prefix}` + listmenu.mt[i] + "*"})



return `Kategori Media :  ${Media}

Kategori Random :  ${Random}

Kategori Stalk :  ${Stalk}

Kategori Download :  ${Download}

Kategori Group :  ${Group}

Kategori Fun Menu :  ${Fun}

Kategori Owner :  ${Owner}

Kategori Searching :  ${Search}

Kategori Game :  ${Game}

Kategori Short Url :  ${Short}

Kategori Rondom Qoutes :  ${Rdm}

Kategori Islamic Menu :  ${Msm}

Kategori Primbon Menu :  ${Arti}

Kategori Convert Menu :  ${Tr}

Kategori Topup Menu :  ${Tp}

Kategori Cuci Mata :  ${As}

Kategori Chat Menu :  ${Msc}

Kategori Berita Menu :  ${Bw}

Kategori ImageTaxt Menu :  ${Mt}

`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})
