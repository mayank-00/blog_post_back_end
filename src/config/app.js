const dotenv = require("dotenv")
const _ = require('lodash');

const result = dotenv.config();

let envs = null

if (!('error' in result)) {
  envs = result.parsed

  if (!envs.PORT) {
    envs.PORT = 4546
  }
} else {
  envs = {};
  _.each(process.env, (value, key) => envs[key] = value);
}

console.log("dotenv ", envs)

module.exports = envs