const db = require("../../config/db");
const bcrypt = require("bcrypt");

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

const getAllStores = async () => {

    const [stores] = await db.execute(
        `
        SELECT
            s.store_id,
            s.name,
            s.email,
            s.address,
            s.status,

            u.name AS owner_name,

            IFNULL(
                ROUND(
                    AVG(r.rating),
                    1
                ),
                0
            ) AS averageRating

        FROM stores s

        JOIN users u
            ON s.owner_id = u.user_id

        LEFT JOIN ratings r
            ON s.store_id = r.store_id

        GROUP BY
            s.store_id,
            s.name,
            s.email,
            s.address,
            s.status,
            u.name

        ORDER BY s.store_id DESC
        `
    );

    return stores;
};

const createStoreOwner = async (data) => {

    const {
        name,
        email,
        password,
        address
    } = data;

    const hashedPassword =
        await bcrypt.hash(password, 10);

    const [result] = await db.execute(
        `
        INSERT INTO users
        (
            name,
            email,
            password,
            address,
            role
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            name,
            email,
            hashedPassword,
            address,
            "STORE_OWNER"
        ]
    );

    return result;
};

const createStore = async (data) => {

    const {
        ownerId,
        name,
        email,
        address
    } = data;

    const [result] = await db.execute(
        `
        INSERT INTO stores
        (
            owner_id,
            name,
            email,
            address
        )
        VALUES (?, ?, ?, ?)
        `,
        [
            ownerId,
            name,
            email,
            address
        ]
    );

    return result;
};

const deleteStore = async (storeId) => {

    const [result] = await db.execute(
        `
        DELETE FROM stores
        WHERE store_id = ?
        `,
        [storeId]
    );

    return result;
};

const deleteUser = async (userId) => {

    const [result] = await db.execute(
        `
        DELETE FROM users
        WHERE user_id = ?
        `,
        [userId]
    );

    return result;
};

module.exports = {
    getDashboardSummary,
    getAllUsers,
    getAllStores,
    createStoreOwner,
    createStore,
    deleteStore,
    deleteUser
};