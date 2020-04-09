const fs = require("fs");
const axios = require("axios");

const api = {
  getUser(username) {
        const queryUrl = `https://api.github.com/users/${username}`;

        return axios.get(queryUrl)
        // .then(function (res) {
        //   const image = res.data.avatar_url;
        //   const email = res.data.email;

        // });
  }
}

module.exports = api;
