const EventTeam = require("../models/eventTeamModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.getAll = catchAsync(async (req, res, next) => {
    const allEventTeams = await EventTeam.find().select(
        "-code -creater -expires -isValid -_id -__v -createdAt"
    );
    allEventTeams.sort((a, b) => (a?.game?.name >= b?.game?.name ? 1 : -1));
    res.status(200).json({
        status: "success",
        data: allEventTeams,
    });
});
