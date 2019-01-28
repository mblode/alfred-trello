'use strict';
const alfy = require('alfy');

const KEY = process.env.key;
const TOKEN = process.env.token;
const USER = process.env.user;

alfy.fetch('https://api.trello.com/1/members/' + USER + '/boards?filter=open&fields=all&lists=none&memberships=none&organization=false&organization_fields=name%2CdisplayName&key='+ KEY +'&token=' + TOKEN).then(data => {

	const items = alfy
		.inputMatches(data, 'name')
		.map(x => {
			return {
				uid: x.id,
				title: x.name,
				autocomplete: x.name,
				subtitle: x.url,
				arg: x.url,
			};
		});

	alfy.output(items);
});



