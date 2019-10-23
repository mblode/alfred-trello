'use strict';
const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');
const axios = require('axios');

const KEY = process.env.key;
const TOKEN = process.env.token;
const LIST = process.env.list;

alfredNotifier();

let apiCall =
	"https://api.trello.com/1/cards?name=" + alfy.input + "&pos=bottom&idList=" + LIST + "&key=" + KEY + "&token=" + TOKEN;

console.log(alfy.input);

axios.post(apiCall);

