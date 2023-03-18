const { ContactUs } = require("../controllers/contact")

const router = require("express").Router()
router.post("/contact",ContactUs)
module.exports = router