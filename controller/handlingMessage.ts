import * as Telegram from "https://deno.land/x/telegram/mod.ts";

export const HandlingMessage = async (
  ctx: Telegram.Context<Record<string, unknown>>,
) => {
  const text = ctx.message?.text;
  if (isCommand(text)) {
     switch (command(text)){
        case "help":
            ctx.reply("Usage of this bot is :\nTesting port")
            break;
        case "start":
            ctx.reply("I'm a babu of lordchou thanks for add me")    
            break;
        case "tesvideo":
            ctx.telegram.method("sendVideo", {
                chat_id: ctx.message?.chat.id,
                video: "<video link>"               
            })
            break;  
        case "tesphoto":
            ctx.telegram.method("sendPhoto", {
                chat_id: ctx.message?.chat.id,
                photo: "<photo Link>"
            })
            break;
        case "tesdoku":
            ctx.telegram.method("sendDocument", {
                chat_id: ctx.message?.chat.id,
                document: "<document link (like pdf,video or audio)>"
            })
            break;
        }
    }
};

function isCommand(message?: string): boolean {
  if (message?.startsWith("/")) {
    return true;
  }
  return false;
}

function command(message?: string) :string {
    let msg = message?.split(" ",1).toString();
    msg = msg?.slice(1,msg.length)
    return  msg || ""
}