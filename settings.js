const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.AntiCallBot = false // false a i dah chuan, rawn call-tu che automatic a block a ni lovang
global.GroupWcMsg = false // false a i dah chuan welcome message i off ang
global.autoTyping = false // true a i dah chuan i type la a lang ang
global.autoRecord = false // true a i dah chuan Voice record angin i lang ang
global.available = true // false a i dah chuan offline angin a awm ang
global.public = true // false ah i dah chuan nang chauhin i hmang thei ang
global.autoread = false // true a i dah chuan message zawng zawng read vek zelin a awm ang 
global.autoread_status = false // true a i dah chuan auto status view in a awm ang
global.default_language = true // default language i hman dawn loh chuan false ah hia  dah tur
global.mtl_language = false // multi language i hman dawn chuan true ah dah tur
global.bot_language = 'lus' // I language code dah tur code hman i hriat loh chuan https://herbert70.blogspot.com/p/language-code-for-hbwabot.html?m=1 he link ah hian en thei a ni ang

//info
global.owner = ['917085596005'] // I phone number in thlak rawh
global.ownernumber = '917085596005' // I phone number in thlak rawh
global.ownername = "L i l thuamzz" // I hming dah tel bawk la
global.location = "India, Mizoram, Aizawl" // I awmna hmun daha
global.botname = "Lil thuam zz" // I bot hming tur dah la
global.ownerweb = "https://youtube.com/@HBMods_Channel"
global.themeemoji = '🎲'
global.creator = "917085596005@s.whatsapp.net" // @ symbol hmaa number hi i phone number in thlak rawh

global.ownerNumber = ["917085596005@s.whatsapp.net"]// @ symbol hmaa number hi i phone number in thlak rawh
global.prefa = ['','!','.','#','/']
global.sessionName = 'session'

// Sticker Pack Name
global.packname = "Sticker By"
global.author = "lil thuamZz"
global.hbmods = "https://herbert70.blogspot.com/"
//_______________________________________________
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
//messages
global.mess = {
    success: '\n*©lil thuam zz!', 
    admin: '♥️',
    botAdmin: '♥️',
    owner: '♥️',
    group: '♥️',
    private: 'Hei chu!',
    bot: 'Hei chu kei mah chauh hman thei tur a siam a ni',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
