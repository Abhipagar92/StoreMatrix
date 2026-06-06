const express = require("express");

const authenticate =
require("../../middleware/auth.middleware");

const {
    createRating, 
    updateRating
} = require("./rating.controller");

const router = express.Router();

router.post(
    "/",
    authenticate,
    createRating
);


router.put(
    "/:storeId",
    authenticate,
    updateRating
);

module.exports = router;