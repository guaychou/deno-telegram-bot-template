import * as Telegram from "https://deno.land/x/telegram/mod.ts";

export const logging = async(ctx: Telegram.Context<Record<string, unknown>>, next: any) => {
    let data = JSON.stringify({
        timestamp: Date(),
        username: ctx.message?.from?.username,
        message : ctx.message?.text
    })
    try {
        console.log(data);
        await next(ctx);
      } catch (err) {
        console.error(err.message);
      }
}