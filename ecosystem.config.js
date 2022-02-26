module.exports = {
  apps: [{
    name: "server",
    script: "./src/server.js",
    env_production: {
      NODE_ENV: "production"
    },
    env_development: {
      NODE_ENV: "development"
    },
    instances: 1,
    exec_mode: "fork"
  }]
}
