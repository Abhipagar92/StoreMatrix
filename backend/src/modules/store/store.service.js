const db = require("../../config/db");

const getAllStores = async () => {

    const [stores] = await db.execute(
        `
        SELECT
            store_id,
            name,
            email,
            address,
            status
        FROM stores
        WHERE status = 'ACTIVE'
        ORDER BY name
        `
    );

    return stores;
};

const searchStores = async (keyword) => {

    const [stores] = await db.execute(
        `
        SELECT
            store_id,
            name,
            email,
            address,
            status
        FROM stores
        WHERE
            name LIKE ?
            OR address LIKE ?
        ORDER BY name
        `,
        [
            `%${keyword}%`,
            `%${keyword}%`
        ]
    );

    return stores;
};

module.exports = {
    getAllStores,
    searchStores
};