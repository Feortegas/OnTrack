const fetch = require('node-fetch');

// fetch user repos from the api url
const getUserRepos = function (user) {
	// format the github api url
	const apiUrl = `https://api.github.com/users/${user}/repos`;

	// make a request to the url
	fetch(apiUrl)
		.then(function (response) {
			if (response.ok) {
				response.json().then(function (data) {
					// displayRepos(data, user);
					console.log('data.name');
				});
			} else {
				// throw error message
			}
		})
		.catch(function (error) {
			// throw error message
		});
};

// getUserRepos(feortegas);
console.log('this is running');

// fetch repo projects from the api url

// fetch project issues from the api url

module.exports = getUserRepos;