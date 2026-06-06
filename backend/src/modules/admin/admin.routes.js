const express = require("express");

const authenticate =
    require("../../middleware/auth.middleware");

const authorize =
    require("../../middleware/role.middleware");

const {
    getDashboard
} = require("./admin.controller");

const router = express.Router();

router.get(
    "/dashboard",
    authenticate,
    authorize("ADMIN"),
    getDashboard
);

module.exports = router;