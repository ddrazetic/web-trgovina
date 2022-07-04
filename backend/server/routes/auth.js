const express = require("express");
const router = express.Router();
const authController = require("../controller/AuthController");
const passport = require("passport");

router.post("/login", passport.authenticate("local"), authController.login);
router.get("/user", authController.user);
router.get("/logout", authController.logout);
router.post("/register", authController.register);

module.exports = router;
