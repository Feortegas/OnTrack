const fetch = require('node-fetch');
const userName = 'feortegas';
const repoName = 'OnTrack';
// const projName = 'OnTrack';

// fetch user repos from the api url
const getRepos = (user) => {
	// format the github api url
	const apiUrl = `https://api.github.com/users/${user}/repos`;

	// make a request to the url
	fetch(apiUrl)
		.then((res) => res.json())
		.then((data) => {
			for (let index = 0; index < data.length; index++) {
				console.log(
					'repo name is: ' +
						data[index].name +
						' and the url is: ' +
						data[index].html_url
				);
			}
		});
};

// fetch user repos from the api url
const getUser = (user) => {
	// format the github api url
	const apiUrl = `https://api.github.com/users/${user}`;

	// make a request to the url
	fetch(apiUrl)
		.then((res) => res.json())
		.then((data) => {
			console.log(
				'user login is: ' +
					data.login +
					' and the avatar url is: ' +
					data.avatar_url
			);
		});
};

// fetch repo projects from the api url - NOT ACTIVE ONCE REQUIRES AUTHENTICATION
// const getProjects = (repo) => {
// 	const apiUrl = ``;

// 	// make a request to the url
// 	fetch(apiUrl)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			console.log('The Project Name is: ' + data[0].name);
// 		});
// };

// fetch repository issues from the api url
const getIssues = (user, repo) => {
	const apiUrl = `https://api.github.com/repos/${user}/${repo}/issues`;
	// make a request to the url
	fetch(apiUrl)
		.then((res) => res.json())
		.then((data) => {
			for (let index = 0; index < data.length; index++) {
				if (data[index].assignee != null) {
					console.log(
						'repo name is: ' +
							data[index].title +
							' and the assigned dev is: ' +
							data[index].assignee.login
					);
				}
			}
		});
};

// getRepos(userName);

// getProjects(repoName);

// getIssues(userName, repoName);

// getUser(userName);

module.exports = { getRepos, getUser, getIssues };
