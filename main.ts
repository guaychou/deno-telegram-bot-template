import * as Telegram from "https://deno.land/x/telegram/mod.ts";
import { logging } from "./logger/logger.ts";
import { HandlingMessage } from "./controller/handlingMessage.ts";

const botToken = Deno.env.get("TOKEN") || ""
const bot = new Telegram.Bot(botToken)

bot.use(logging)
bot.on("message",HandlingMessage)
bot.launch()