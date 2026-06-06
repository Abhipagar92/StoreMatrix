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


const getAllUsers = async () => {

    const [users] = await db.execute(
        `
        SELECT
            user_id,
            name,
            email,
            address,
            role,
            status,
            created_at
        FROM users
        ORDER BY user_id DESC
        `
    );

    return users;
};

console.log("SERVICE EXPORT TEST");

module.exports = { getDashboardSummary, getAllUsers };

console.log(module.exports);