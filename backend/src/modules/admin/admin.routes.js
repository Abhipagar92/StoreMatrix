const express = require("express");

const authenticate = require("../../middleware/auth.middleware");
const authorize = require("../../middleware/role.middleware");
const {getDashboard, getUsers , getStores, createStoreOwner, createStore} = require("./admin.controller");
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


router.post(
    "/store-owner",
    authenticate,
    authorize("ADMIN"),
    createStoreOwner
);

router.post(
    "/store",
    authenticate,
    authorize("ADMIN"),
    createStore
);

module.exports = router;