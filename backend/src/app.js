const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const adminRoutes = require("./modules/admin/admin.routes");
const storeRoutes = require("./modules/store/store.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api", routes);
app.use("/api/admin", adminRoutes);
app.use("/api/stores", storeRoutes);


// Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "StoreMatrix Backend Running Successfully"
    });
});

module.exports = app;