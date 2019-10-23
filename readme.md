# Trello Alfred 4 Workflow

> Alfred 4 workflow for Trello. Search your boards, quickly add cards, and view list of cards from Trello right in Alfred.

## Install

```
$ npm install --global alfred-trello
```

*Requires [Node.js](https://nodejs.org) 4+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*

## Commands

- In Alfred, type `t` and your query to search for your Trello boards. Press <kbd>Enter</kbd> to open the board's URL.
- In Alfred, type `tt`, and press <kbd>Enter</kbd> to show the cards in your specifed board.
- In Alfred, type `tc`and your query. Press <kbd>Enter</kbd> to add a card to your specified list.

## Workflow Configuration (Environment Variables)

| name          | value         |
| ------------- | ------------- |
| key           | [Get Trello API key](https://trello.com/app-key) |
| token         | [Get Trello API token](https://trello.com/app-key) |
| board         | Get board id from the board URL |
| list          | Get the list id from your Trello board |
| user          | Get your Trello username |

## License

MIT © [mblode](https://matthewblode.com)
