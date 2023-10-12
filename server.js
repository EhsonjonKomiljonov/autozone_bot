import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

const API = process.env.API;
const bot = new TelegramBot(API, { polling: true });

bot.onText(/\/start/, async (msg) => {
  try {
    const id = msg.chat.id;
    await bot.sendPhoto(id, process.cwd() + '/images/autozone-logo.jpg', {
      caption: `Assalomu Alaykum❗️

⚙️ AutoZone shop do'konining telegram 
bo'tiga hush kelibsiz!`,
      reply_markup: {
        keyboard: [
          [{ text: 'Biz haqimizda 📑' }, { text: "Biz bilan bog'lanish 📞" }],
          [{ text: 'Manzilimiz 📍' }],
          [{ text: 'Avto ehtiyot qisimlar 🔩' }],
        ],
        resize_keyboard: true,
      },
    });
  } catch (err) {
    bot.sendMessage(
      msg.chat.id,
      "‼️ Serverda qandaydur xatolik iltimos qaytadan urinib ko'ring."
    );
  }
});

bot.onText(/\/stop/, async (msg) => {
  await bot.sendMessage(msg.chat.id, 'Bot ishlashdan toxtadi!', {
    reply_markup: {
      remove_keyboard: true,
    },
  });
});

bot.on('text', async (msg) => {
  try {
    const id = msg.chat.id;
    const text = msg.text;
    if (msg.text == '/start') return;

    if (text == 'Biz haqimizda 📑') {
      await bot.sendPhoto(id, process.cwd() + '/images/autozone-logo.jpg', {
        caption: `AutoZone shop Haqida‼️

Assalomu Alaykum AutoZone shop do'konimzda siz:

🚗 Avto ehtiyot qisimlar
🚕 Avto aksessuarlar
🚙 Avto moylar
🚓 Antifrizlar
🚖 Avtohimiyalar
🚍 Chehollar
🚘 Poliklar
topishingiz mumkin. 

— Do'konimizdagi mahsulotlar narxlari bilan ushbu telegram
botimiz orqali tanishishingiz mumkin.
        
Ish vaqtimiz:
    🕘 9:00 - 🕗 20:00`,
      });
    }

    if (text == "Biz bilan bog'lanish 📞") {
      await bot.sendContact(id, '+998996336015', 'AutoZone shop');
      await bot.sendContact(id, '+998993736015', 'AutoZone shop');
    }

    if (text == 'Manzilimiz 📍') {
      await bot.sendLocation(id, '41.345740', '69.214472');
    }

    if (text == 'Avto ehtiyot qisimlar 🔩') {
      await bot.sendMessage(id, `Kategoriya tanlgang 👇`, {
        reply_markup: {
          keyboard: [
            [{ text: 'Moylar 🛢' }, { text: 'Xadovoy 🚘' }],
            [
              { text: 'Amartizatorlar 🔩' },
              { text: 'Antifrizlar 🚓' },
              { text: 'Avtohimiyalar 🚖' },
            ],
            [
              { text: "Hushbo'ylantiruvchi vositalar 🌹" },
              { text: 'Avto aksessuarlar 📱' },
            ],
            [{ text: 'Bosh sahifa 🔚' }],
          ],
          resize_keyboard: true,
        },
      });
    } 

    if (text == 'Bosh sahifa 🔚') {
      await bot.sendMessage(id, 'Bosh sahifa ❕', {
        reply_markup: { 
          keyboard: [
            [{ text: 'Biz haqimizda 📑' }, { text: "Biz bilan bog'lanish 📞" }],
            [{ text: 'Manzilimiz 📍' }],
            [{ text: 'Avto ehtiyot qisimlar 🔩' }],
          ],
          resize_keyboard: true,
        },
      });
    }
  } catch (err) {
    bot.sendMessage(
      msg.chat.id,
      "‼️ Serverda qandaydur xatolik iltimos qaytadan urinib ko'ring."
    );
  }
});
