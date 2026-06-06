const express = require("express");

const { getStores , searchStores } = require("./store.controller");

const router = express.Router();

router.get(
    "/",
    getStores
);

router.get(
    "/search",
    searchStores
);

module.exports = router;