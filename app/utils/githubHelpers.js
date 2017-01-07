var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

// axios.get will bring a promise
function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars (repos) {
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData (player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores (players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

// 'getPlayersInfo' is the method that I will call in the 'ConfirmBattleContainer' component
// loop over every username in our players array -- by using .map(loop over an array)
// each user in an array, we're calling 'getUserInfo'
// 'axios.all' - give an array of promises and each of the promises are done resolving...
// then the '.then' function is going to run and we're going to have a new arrawy of 'username'
var helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    }))
    // returns 'info' in an array where we modify each array
    // .data is a name of the property
    .then(function (info) {
      return info.map(function (user) {
        return user.data
      })
    })
    //any errors thrown - anywhere in this helper function, .catch will find it --- so watch out yo.
    .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  },
  battle: function (players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  }
};

module.exports = helpers;
