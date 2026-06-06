const db = require("../../config/db");

const getDashboardSummary = async () => {

    const [[users]] = await db.execute(
        "SELECT COUNT(*) AS totalUsers FROM users"
    );

    const [[stores]] = await db.execute(
        "SELECT COUNT(*) AS totalStores FROM stores"
    );

    const [[ratings]] = await db.execute(
        "SELECT COUNT(*) AS totalRatings FROM ratings"
    );

    return {
        totalUsers: users.totalUsers,
        totalStores: stores.totalStores,
        totalRatings: ratings.totalRatings
    };
};

module.exports = {
    getDashboardSummary
};