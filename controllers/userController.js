const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
exports.getAllReferral = catchAsync(async (req, res, next) => {
    const allUsers = await User.aggregate([
        {
            $group: {
                _id: { $toLower: { $trim: { input: "$referralCode" } } },
                numUsers: { $sum: 1 },
            },
        },
        {
            $sort: {
                numUsers: -1,
            },
        },
    ]);
    res.status(200).json({
        status: "success",
        results: allUsers.length,
        data: { allUsers },
    });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
    const allUsers = await User.find();
    let fromMandi = 0;

    for (let i = 0; i < allUsers.length; i++) {
        if (
            allUsers[i]?.collegeName?.toLowerCase()?.includes("mandi") ||
            allUsers[i]?.email?.toLowerCase()?.includes("mandi")
        ) {
            fromMandi++;
        }
    }
    res.status(200).json({
        status: "success",
        results: allUsers.length,
        fromMandi: fromMandi,
        data: { allUsers },
    });
});
