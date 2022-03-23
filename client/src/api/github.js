const fetch = require('node-fetch');

// fetch user repos from the api url
export const getRepos = async (user) => {
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
export const getRepo = async (user, repo) => {
  // format the github api url
  try {
    const apiUrl = `https://api.github.com/repos/${user}/${repo}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

// fetch user repos from the api url
export const getUser = async (user) => {
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
export const getIssues = async (user, repo) => {
  try {
    const apiUrl = `https://api.github.com/repos/${user}/${repo}/issues`;
    let issueArr = [];
    const res = await fetch(apiUrl);
    const data = await res.json();
    // return contributors data array
    for (let index = 0; index < data.length; index++) {
      issueArr.push(data[index].title);
    }
    return issueArr;
  } catch (err) {
    console.error(err);
  }
};

// fetch repository contributors from the api url
export const getContributors = async (user, repo) => {
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
    console.log(contributorArr);
    return contributorArr;
  } catch (err) {
    console.error(err);
  }
};
