<div align="center">

# Alfred Trello

**Search your boards, list the cards on one, and file a new card, all from the Alfred prompt**

Type a keyword, pick a result, and press Enter to open the board in your browser or push the card to Trello.

<p align="center">
  <a href="https://www.npmjs.com/package/alfred-trello">
    <img src="https://img.shields.io/npm/v/alfred-trello?style=flat&colorA=000000&colorB=000000" />
  </a>
  <a href="https://github.com/mblode/alfred-trello/blob/master/LICENSE.md">
    <img src="https://img.shields.io/github/license/mblode/alfred-trello?style=flat&colorA=000000&colorB=000000" />
  </a>
</p>

</div>

## Install

```bash
npm install --global alfred-trello
```

The package's `postinstall` step runs `alfy-init`, which registers the workflow with Alfred. Requires Node.js 4 or newer and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).

## Quickstart

Fill in the five workflow variables listed under Configuration, then type `t` into Alfred followed by part of a board name. Your open boards appear as results, and Enter opens the highlighted one in your browser.

## Configuration

Set these as workflow environment variables in Alfred, on the workflow's configuration sheet.

| Variable | Value |
|----------|-------|
| `key` | Your Trello [API key](https://trello.com/app-key). |
| `token` | Your Trello [API token](https://trello.com/app-key). |
| `board` | The board id, taken from the board's URL. |
| `list` | The id of the list new cards go into. |
| `user` | Your Trello username. |

## Keywords

| Keyword | Action |
|---------|--------|
| `t <query>` | Filters your open boards by name. Enter opens the board URL. |
| `tt` | Lists every visible card on the board set in `board`. |
| `tc <title>` | Creates a card at the bottom of the list set in `list`. |

## License

MIT

---

Crafted by [<img src="https://blode.co/avatar-circle.png" width="20" align="top" />](https://blode.co) [Matthew Blode](https://blode.co)
