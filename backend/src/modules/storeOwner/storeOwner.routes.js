const express = require("express");

const authenticate =
require("../../middleware/auth.middleware");

const authorize =
require("../../middleware/role.middleware");

const {
    getDashboard
} = require("./storeOwner.controller");

const router = express.Router();

// Store Owner Dashboard
router.get(
    "/dashboard",
    authenticate,
    authorize("STORE_OWNER"),
    getDashboard
);

module.exports = router;