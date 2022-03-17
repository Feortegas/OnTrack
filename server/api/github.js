const fetch = require('node-fetch');
// import { fetch } from 'node-fetch';
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const username = 'feortegas';

// fetch user repos from the api url
const getUserRepos = function (user) {
	// format the github api url
	const apiUrl = `https://api.github.com/users/${user}/repos`;
	console.log(apiUrl);

	// make a request to the url
	fetch(apiUrl)
		.then((res) => res.json())
		.then((data) => {
			console.log(
				'repo name is: ' + data[0].name + ' and the url is: ' + data[0].html_url
			);
		});
};

getUserRepos(username);

// fetch repo projects from the api url

// fetch project issues from the api url

module.exports = getUserRepos;
