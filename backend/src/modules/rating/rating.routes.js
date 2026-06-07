const express = require("express");

const authenticate =
    require("../../middleware/auth.middleware");

const {
    createRating
} = require("./rating.controller");

const router =
    express.Router();

// Add or Update Rating
router.post(
    "/",
    authenticate,
    createRating
);

module.exports = router;