const express = require("express");

const authenticate = require("../../middleware/auth.middleware");
const authorize = require("../../middleware/role.middleware");
const {getDashboard, getUsers , getStores} = require("./admin.controller");
// console.log("getDashboard =", getDashboard);
// console.log("getUsers =", getUsers);
// console.log("getStores =", getStores);


const router = express.Router();

router.get(
    "/dashboard",
    authenticate,
    authorize("ADMIN"),
    getDashboard
);

router.get(
    "/users",
    authenticate,
    authorize("ADMIN"),
    getUsers
);


router.get(
    "/stores",
    authenticate,
    authorize("ADMIN"),
    getStores
);

module.exports = router;