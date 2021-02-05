const chalk = require('chalk');

module.exports = {
   clientOptions: {
      disabledEvents: [
         'TYPING_START',
         'VOICE_SERVER_UPDATE',
         'RELATIONSHIP_ADD',
         'RELATIONSHIP_REMOVE',
         'GUILD_ROLE_DELETE',
         'GUILD_ROLE_UPDATE',
         'GUILD_BAN_ADD',
         'GUILD_BAN_REMOVE',
         'CHANNEL_UPDATE',
         'CHANNEL_PINS_UPDATE',
         'MESSAGE_DELETE',
         'MESSAGE_UPDATE',
         'MESSAGE_DELETE_BULK',
         'MESSAGE_REACTION_ADD',
         'MESSAGE_REACTION_REMOVE',
         'GUILD_MEMBER_UPDATE',
         'GUILD_MEMBERS_CHUNK',
         'GUILD_ROLE_CREATE',
         'MESSAGE_REACTION_REMOVE_ALL',
         'USER_UPDATE', 'USER_NOTE_UPDATE',
         'USER_SETTINGS_UPDATE',
         'PRESENCE_UPDATE',
         'VOICE_STATE_UPDATE',
         'GUILD_UPDATE',
         'GUILD_MEMBER_ADD',
         'GUILD_MEMBER_REMOVE'
      ],
      messageEditHistoryMaxSize: 1,
      messageSweepInterval: 1,
      messageCacheLifetime: 1,
      messageCacheMaxSize: 1,
      restTimeOffset: 0,
      presence: {
         afk: true
      },
      ws: {
         properties: {
            '$os': 'Discord Android',
            '$browser': 'Discord Android',
            '$device': 'Discord Android'
         }
      }
   },
   cooldown: (max, hours) => `Cooldown hit after ${max} nitros were redeemed. Pausing for ${hours} hours.`,
   formatAuthor: (hoster, client) => `Hoster: ${hoster} • Account: ${client}`,
   webhookCantReach: 'Unable to reach your webhook.',
   invalidConfig: 'Invalid settings object, if you require more help visit https://github.com/slow/nitro-sniper for the default configuration. Exiting process...',
   noMode: 'No sniper mode provided in settings, exiting process...',
   invalidMode: 'Invalid mode provided, visit https://github.com/slow/nitro-sniper for a list of modes. Exiting process...',
   noMain: 'No main account token provided, exiting process...',
   noAlts: 'No alt tokens were provided, exiting process...',
   invalidTokens: 'All tokens provided were invalid, exiting process...',
   userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.21 Chrome/83.0.4103.122 Electron/9.3.5 Safari/537.36',
   ready: (accounts, servers) => `Logged in with ${accounts} ${accounts > 1 ? 'accounts' : 'account'} and ${servers} servers.`,
   bothModeNoAlts: 'No alts were able to log in, trying to use only main account.',
   bothModeNoMain: "Couldn't log into main account meaning sniping is not possible. Exiting process...",
   noPaymentMethod: 'Main token does not have a billing source, some codes will not be sniped.',
   invalidWebhookType: 'Invalid Webhook type.',
   giveawayWon: (prize, hoster, guild, channel) => `Won giveaway of ${chalk.bold(prize)} from ${hoster} in (${guild} > #${channel}).`,
   failedGiveawayReact: (prize, hoster, guild, channel, timeTook) => `Failed to react to giveaway of ${chalk.bold(prize)} from ${hoster.tag} in (${guild} > #${channel}) after ${timeTook}.`,
   reactedGiveaway: (prize, hoster, guild, channel, timeTook) => `Reacted to giveaway of ${chalk.bold(prize)} from ${hoster} in (${guild} > #${channel}) after ${timeTook}.`,
   dmHosterSuccess: (hoster, prize, server, channel, timeTook) => `DMed ${hoster} after winning ${chalk.bold(prize)} in (${server} > #${channel}) after ${timeTook}.`,
   dmHosterFail: (hoster, prize, server, channel, timeTook) => `Couldn't DM ${hoster} after winning ${chalk.bold(prize)} in (${server} > #${channel}) after ${timeTook}.`,
   paymentMethodFail: (body) => `Unable to get billing source. ${body}`,
   invalidTokenOnSnipe: (code, from, author, end) => `Invalid Token | Code: ${chalk.bold(code)} | ${from} | ${author} | ${end}`,
   phinError: (err, code, from, author, end) => `${err} | Code: ${chalk.bold(code)} | ${from} | ${author} | ${end}`,
   unknownCode: (code, from, author, end) => `Invalid Code | Code: ${chalk.bold(code)} | ${from} | ${author} | ${end}`,
   alreadyRedeemedCode: (code, from, author, end) => `Already Redeemed | Code: ${chalk.bold(code)} | ${from} | ${author} | ${end}`,
   snipedCode: (code, type, from, author, end) => `Success | Code: ${chalk.bold(code)} | ${type} | ${from} | ${author} | ${end}`,
   duplicateFound: (code, location, author) => `Avoiding Duplicate | Code: ${chalk.bold(code)} | ${location} | ${author}`,
   webhookTypes: ['codeInvalid', 'codeAlreadyRedeemed', 'codeSuccess', 'giveawayEntered', 'giveawayWin'],
   initSniper: 'Initializing sniper...',
   fields: {
      codeFail: (time, code, location) => [
         { key: 'Time Taken', value: time },
         { key: 'Code', value: code },
         { key: 'Location', value: location },
      ],
      codeSuccess: (time, type, code, location) => [
         { key: 'Time Taken', value: time, },
         { key: 'Type', value: type },
         { key: 'Code', value: code },
         { key: 'Location', value: location },
      ],
      giveawayEntered: (server, channel, timeTook, prize) => [
         { key: 'Location', value: `${server} > #${channel}` },
         { key: 'Prize', value: prize },
         { key: 'Time Waited', value: timeTook }
      ],
      giveawayWin: (server, channel, prize) => [
         { key: 'Location', value: `${server} > #${channel}` },
         { key: 'Prize', value: prize },
      ]
   },
   titles: {
      codeInvalid: 'Invalid Code',
      codeAlreadyRedeemed: 'Already Redeemed Code',
      codeSuccess: 'Nitro Sniped',
      giveawayEntered: 'Giveaway Entered',
      giveawayWin: 'Giveaway Won',
   },
   colors: {
      error: '#FF0000',
      success: '#41FC9F',
      warn: '#FFF000'
   },
   paymentSourceURL: 'https://discord.com/api/v6/users/@me/billing/payment-sources',
   redeemCodeURL: (code) => `https://discord.com/api/v6/entitlements/gift-codes/${code}/redeem`
};