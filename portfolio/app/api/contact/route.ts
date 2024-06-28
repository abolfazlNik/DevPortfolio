import { Telegraf } from "telegraf"
import { z } from "zod"

const BOT_TOKEN = process.env.BOT_TOKEN as string
const CHAT_ID = process.env.BOT_CHAT_ID as string

const bot = new Telegraf(BOT_TOKEN)

const messageSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
})

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

console.log("POST" , POST)

export { POST }
