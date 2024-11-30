# Telegram Bot Admin Panel

## Project Overview
A Next.js-powered Telegram bot administration panel with authentication and management features.

## Features
- Telegram Bot Integration
- Admin Authentication
- Bot Configuration Management
- User Interaction Logs
- Command Usage Statistics

## Prerequisites
- Node.js (v18+)
- npm or yarn
- Telegram Bot Token

## Setup Instructions

1. Clone the repository
```bash
git clone <your-repo-url>
cd telegram-bot-admin
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
- Copy `.env.example` to `.env`
- Fill in your Telegram Bot Token
- Set up admin credentials

4. Initialize Prisma Database
```bash
npx prisma migrate dev
npx prisma generate
```

5. Run the development server
```bash
npm run dev
```

## Environment Variables
- `TELEGRAM_BOT_TOKEN`: Your Telegram Bot API Token
- `ADMIN_USERNAME`: Admin login username
- `ADMIN_PASSWORD`: Admin login password
- `NEXTAUTH_SECRET`: Secret for NextAuth.js
- `DATABASE_URL`: Path to SQLite database

## Security Notes
- Change default credentials immediately
- Use strong, unique passwords
- Keep `.env` file secret

## Technologies
- Next.js 13
- Telegraf
- Prisma
- NextAuth.js
- Tailwind CSS
- Zod Validation
