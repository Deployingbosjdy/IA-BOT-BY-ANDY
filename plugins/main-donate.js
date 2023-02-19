
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
ONLY WANT YOUR LOVE
SUPPORT ME BY MAKING 69 MILLION FOLLOWERS ON MY INSTAGRAM`
let img = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg'
conn.sendHydrated2(m.chat, don, '▢ MAY LORD BLESS YOUR DAY\n▢ IA ┃ BOT\n▢ Subscribe  Youtube\nhttps://youtube.com/\n', img,'https://www.instagram.com/andy_mr_lit', 'Instagram', 'https://t.me/i_want_', 'TELEGRAM', [
    ], m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
