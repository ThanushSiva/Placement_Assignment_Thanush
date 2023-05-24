const express = require("express")
const { home } = require("../controller/home")
const router = express.Router()

router.get("/post", home)

module.exports = router