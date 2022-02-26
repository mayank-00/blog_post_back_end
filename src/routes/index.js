const routes = require("express").Router();

const auth = require("./auth")
const blogs = require("./blogs")

routes.use("/", auth)
routes.use("/blogs", blogs)


module.exports = routes;