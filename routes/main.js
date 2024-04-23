const express = require("express")
const authMiddleware = require("../middlewares/authMiddleware")
const {login ,dashboad} = require("../controllers/authController")
const router = express.Router();



router.route("/dashboard").get(authMiddleware,dashboad)
router.route("/login").post(login)





module.exports = router