const express = require("express");

const router = express.Router();

const eventTeamController = require("../controllers/eventTeamController");

router.route("/").get(eventTeamController.getAll);

module.exports = router;
