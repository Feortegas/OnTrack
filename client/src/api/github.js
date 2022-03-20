const fetch = require('node-fetch');
const userName = 'feortegas';
const repoName = 'OnTrack';

// fetch user repos from the api url
const getRepos = (user) => {
	// format the github api url
	const apiUrl = `https://api.github.com/users/${user}/repos`;
	const repoArr = [];

	// make a request to the url
	fetch(apiUrl)
		.then((res) => res.json())
		.then((data) => {
			// return array of repos
			for (let index = 0; index < data.length; index++) {
				repoArr.push(data[index].name);
			}
			return repoArr;
		});
};

// https://api.github.com/repos/feortegas/OnTrack
// fetch user repos from the api url
const getRepo = (user, repo) => {
	// format the github api url
	const apiUrl = `https://api.github.com/repos/${user}/${repo}`;
	let repoObj = {};

	// make a request to the url
	fetch(apiUrl)
		.then((res) => res.json())
		.then((data) => {
			repoObj = {
				projectID: data.id,
				projectTitle: data.name,
				projectURL: data.html_url,
				username: data.owner.login,
				// open_issues: data.open_issues_count,
				// description: data.description,
			};
			console.log(repoObj);
			return repoObj;
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
			// return user data object
		});
};

// fetch repository issues from the api url
const getIssues = (user, repo) => {
	const apiUrl = `https://api.github.com/repos/${user}/${repo}/issues`;
	// make a request to the url
	fetch(apiUrl)
		.then((res) => res.json())
		.then((data) => {
			for (let index = 0; index < data.length; index++) {
				if (data[index].assignee != null) {
					// return array of issues object
				}
			}
		});
};

module.exports = { getRepo, getRepos, getUser, getIssues };
