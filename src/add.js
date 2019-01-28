'use strict';
const alfy = require('alfy');

const input = alfy.input

alfy.output([{
	title: `Add task \"${input}\" to Trello`,
	subtitle: 'Today - GTD',
	arg: input
}])
