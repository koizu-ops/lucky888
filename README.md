# Lucky888 · Team Yhuna Player Portal

Static helper site for Team Yhuna players (Lucky888) to format their
cash-in and cash-out messages before sending them into the official
Facebook Messenger group.

## Pages

- `index.html` – Home / How it works
- `mop.html` – Mode of Payment info
- `cashin.html` – Cash-In form → formatted message
- `cashout.html` – Cash-Out form → formatted message

## Config

All dynamic bits (loader, status, messenger URL, loader-change flag) live in `config.json`.

Example:

```json
{
  "teamName": "TEAM YHUNA",
  "loaderChange": false,
  "loaderName": "🌻 Mal Anding",
  "loaderStatus": "online",
  "messengerUrl": "https://www.messenger.com/t/7080824178610062",
  "minCashIn": 30,
  "maxCashIn": 3000,
  "minCashOut": 300
}
