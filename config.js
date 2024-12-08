require("./doc/module.js")

/*

# Base By 饾暥饾枎饾枔饾枌 饾暰饾枂饾枓
# Owner ? : 饾暥饾枎饾枔饾枌 饾暰饾枂饾枓
!- do not delete this credit

*/

global.prefix = ['','!','.',',','馃悿','馃椏']
global.owner = ['2349150538944']
global.ownMain = '2349150538944'
global.NamaOwner = '𝕯𝖚𝖝' //
global.connect = true // 
global.namabot = '𝐉𝐈𝐍𝐍' //
global.author = '𝐃𝐔𝐗' //
global.packname = '𝐉𝐈𝐍𝐍 𝐕1' //
global.url1 = 'https://whatsapp.com/channel/0029Vakgmqc9xVJY19QsiG2G' //
global.url2 = 'https://whatsapp.com/channel/0029Vakgmqc9xVJY19QsiG2G' //
global.linkgc = 'https://whatsapp.com/channel/0029Vakgmqc9xVJY19QsiG2G'
global.delayjpm = 3500
 





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})