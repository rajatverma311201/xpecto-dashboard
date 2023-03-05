const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

router.route("/").get(userController.getAllUsers);
router.route("/referral").get(userController.getAllReferral);

module.exports = router;
