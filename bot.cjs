require('dotenv').config();
const { Telegraf } = require('telegraf');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || '');

// Log user interaction
async function logUserInteraction(userId, action, details) {
  try {
    await prisma.userLog.create({
      data: {
        userId: userId.toString(),
        action,
        details,
      },
    });
  } catch (error) {
    console.error('Error logging user interaction:', error);
  }
}

// Basic bot command handlers
bot.command('start', async (ctx) => {
  const response = 'Welcome to the Telegram Bot Admin Panel!';
  await ctx.reply(response);
  await logUserInteraction(ctx.from.id, 'start', response);
});

bot.command('help', async (ctx) => {
  const response = 'Available commands: /start, /help';
  await ctx.reply(response);
  await logUserInteraction(ctx.from.id, 'help', response);
});

// Log all messages
bot.on('message', async (ctx) => {
  const messageType = ctx.updateType;
  const messageText = 'text' in ctx.message ? ctx.message.text : 'Non-text message';
  await logUserInteraction(ctx.from.id, 'message', `Type: ${messageType}, Content: ${messageText}`);
});

// Error handling
bot.catch((err) => {
  console.error('Telegram Bot Error:', err);
});

// Webhook handler for Vercel
module.exports = async (req, res) => {
  try {
    if (req.method === 'POST') {
      await bot.handleUpdate(req.body);
      res.status(200).json({ ok: true });
    } else if (req.method === 'GET') {
      // Set webhook URL when the function is deployed
      const webhookUrl = `${process.env.VERCEL_URL}/api/webhook`;
      await bot.telegram.setWebhook(webhookUrl);
      res.status(200).json({ 
        ok: true, 
        message: 'Webhook set',
        webhook_url: webhookUrl
      });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
