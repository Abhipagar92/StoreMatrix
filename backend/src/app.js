const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const adminRoutes = require("./modules/admin/admin.routes");
const storeRoutes = require("./modules/store/store.routes");
const ratingRoutes = require("./modules/rating/rating.routes");
const storeOwnerRoutes = require("./modules/storeOwner/storeOwner.routes");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api", routes);
app.use("/api/admin", adminRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/ratings", ratingRoutes);
app.use("/api/store-owner", storeOwnerRoutes);


// Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "StoreMatrix Backend Running Successfully"
    });
});

module.exports = app;