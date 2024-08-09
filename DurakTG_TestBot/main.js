import {Telegraf, Markup} from 'telegraf'

const token = '7211266947:AAEcKAWwmNjUNnwUdBcHKP7A37Lc9ommMbo'
const webAppUrl = 'https://duraktg-app.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
        ctx.reply(
            'Добро пожаловать!',
            Markup.keyboard([
                Markup.button.webApp(
                    'Начать',
                    webAppUrl
                )
            ])
        )
    }
)

bot.launch()