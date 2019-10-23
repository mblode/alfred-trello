'use strict';
const alfy = require('alfy');

const KEY = process.env.key;
const TOKEN = process.env.token;
const BOARD = process.env.board;

alfy.fetch('https://trello.com/1/boards/' + BOARD + '/cards/visible?key='+ KEY +'&token=' + TOKEN).then(data => {

	const items = data
		.map(x => {
			let label = [];
			x.labels.map(l => {
				label.push(l.name);
			})

			return {
				uid: x.id,
				title: x.name,
				autocomplete: x.name,
				arg: x.url,
			};
		});

	alfy.output(items);
});
