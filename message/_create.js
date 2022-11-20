const { exec } = require('child_process')
const fs = require('fs')
const Jimp = require('jimp')

let welcome = '../asset/login.jpg'
let leave = '../asset/leave.jpg'
let beam = '../asset/font-gue.ttf'

const reSize = async (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var bu = await Jimp.read(buffer);
        var ab = await bu.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
} 
const sleep = async (ms) => {
   return new Promise(resolve => setTimeout(resolve, ms))
}
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
 
/*/  
  * bantu rapiin lagi bg, masih kurang maksimal
  * kadang delay, sekalian fix in bg
/*/
 
exports.createLogin = async(bob, num, groupName) => {
         try { //----> mencoba
           ppuser = await bob.profilePictureUrl(num, 'image')
         } catch { //----> jika foto profil tidak tersedia maka akan dialihkan ke link dibawah sebagai gambar pengganti
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }          
          let resz = await reSize(ppuser, 250, 250) //----> mengubah ukuran gambar profile (Ini ukuran standar yang tidak perlu dirobah!)
         var rand7 = 'pp.jpg'
         let sen = num
         let randh = getRandom('.jpg')
         let randp = getRandom('.jpeg')
         let resImage = `../${randh}`
         let numbr = sen.replace('@s.whatsapp.net', '') //----> menghapus @s.whatsapp.net dari nomor member
         let locate_pp = `../${randp}` //----> get pp WhatsApp 
         fs.writeFileSync(locate_pp, resz) //----> membuat file jpg yang telah disempurnakan oleh resz      
         await sleep(1000 )//----> turu sek
         
         //----> Penggabungan semua bahan
         exec(`magick '${welcome}' -gravity west -fill '#FFFFFF' -font '${beam}' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${numbr}' -pointsize 70 -annotate +460+83 'time' -pointsize 70 -annotate +460+200 'Welcome to ' '${locate_pp}' -gravity center -geometry -430+70 -composite '${resImage}'`)


         setTimeout(() => { fs.unlinkSync(resImage)}, 10000)
         setTimeout(() => { fs.unlinkSync(locate_pp)}, 10000)
         await sleep(3000) //----> turu
        return fs.readFileSync(resImage) //----> maka pada hasil akan terlihat sebagai buffer         
}