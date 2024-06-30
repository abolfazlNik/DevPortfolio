import { messageSchema } from "@/app/shared/types"
import toast from "react-hot-toast"
import { Telegraf } from "telegraf"
import { z } from "zod"

const BOT_TOKEN = process.env.BOT_TOKEN as string
const CHAT_ID = process.env.BOT_CHAT_ID as string

const bot = new Telegraf(BOT_TOKEN)

async function POST(req: Request) {
  const data = await req.json()
  try {
    const { fullName, email, message } = messageSchema.parse(data)

    const telegramMessage = `
      New message received:
      - Full Name: ${fullName}
      - Email: ${email}
      - Message: ${message}
    `
    await bot.telegram.sendMessage(CHAT_ID, telegramMessage)
  } catch (error) {
    console.log("form is error", error)
  }
  return Response.json({})
}

export { POST }
