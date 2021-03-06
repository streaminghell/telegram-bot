import { registerAs } from '@nestjs/config';
import { TelegrafModuleOptions } from 'nestjs-telegraf';

function launchOptions() {
  if (process.env.NODE_ENV === 'production') {
    return {
      webhook: {
        domain: 'streaming-hell.com',
        hookPath: '/api/telegram-bot-webhook',
      },
    };
  }
  return {};
}

export const telegrafModule = registerAs(
  'telegrafModule',
  (): TelegrafModuleOptions => ({
    token: process.env.BOT_TOKEN,
    launchOptions: launchOptions(),
  }),
);
