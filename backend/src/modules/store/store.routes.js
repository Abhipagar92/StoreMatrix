const express = require("express");

const { getStores , searchStores, getStoreDetails } = require("./store.controller");

const router = express.Router();

router.get(
    "/",
    getStores
);

router.get(
    "/search",
    searchStores
);

router.get(
    "/:id",
    getStoreDetails
    
);

module.exports = router;