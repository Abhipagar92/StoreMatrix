const express = require("express");

const authenticate =
require("../../middleware/auth.middleware");

const {
    createRating
} = require("./rating.controller");

const router = express.Router();

router.post(
    "/",
    authenticate,
    createRating
);

module.exports = router;