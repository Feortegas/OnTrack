const fetch = require('node-fetch');

// fetch user repos from the api url
const getRepos = async (user) => {
	// format the github api url
	const apiUrl = `https://api.github.com/users/${user}/repos`;
	const repoArr = [];

	try {
		// make a request to the url
		const res = await fetch(apiUrl);
		const data = await res.json();
		// return array of repos
		for (let index = 0; index < data.length; index++) {
			repoArr.push(data[index].name);
		}
		return repoArr;
	} catch (err) {
		console.error(err);
	}
};

// fetch single user repo from the api url
const getRepo = async (user, repo) => {
	// format the github api url
	try {
		const apiUrl = `https://api.github.com/repos/${user}/${repo}`;
		// let repoObj = {};
		const res = await fetch(apiUrl);
		const data = await res.json();
		return data;

		// repoObj = {
		// 	projectID: data.id,
		// 	projectTitle: data.name,
		// 	projectURL: data.html_url,
		// 	username: data.owner.login,
		// };
		// return repoObj;
	} catch (err) {
		console.error(err);
	}
};

// fetch user repos from the api url
const getUser = async (user) => {
	try {
		const apiUrl = `https://api.github.com/users/${user}`;
		let userObj = {};
		const res = await fetch(apiUrl);
		const data = await res.json();
		// return user data object
		userObj = {
			username: data.login,
			profileImgURL: data.avatar_url,
		};
		return userObj;
	} catch (err) {
		console.error(err);
	}
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

// fetch repository contributors from the api url
const getContributors = async (user, repo) => {
	try {
		const apiUrl = `https://api.github.com/repos/${user}/${repo}/contributors`;
		// make a request to the url
		let contributorArr = [];
		const res = await fetch(apiUrl);
		const data = await res.json();
		// return contributors data array
		for (let index = 0; index < data.length; index++) {
			contributorArr.push(data[index]);
		}
		return contributorArr;
	} catch (err) {
		console.error(err);
	}
}

module.exports = { getRepo, getRepos, getUser, getIssues, getContributors };
