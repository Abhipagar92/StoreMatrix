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

const getStoreById = async (storeId) => {

    const [stores] = await db.execute(
        `
        SELECT
            s.store_id,
            s.name,
            s.email,
            s.address,
            s.status,
            IFNULL(
                ROUND(AVG(r.rating), 1),
                0
            ) AS average_rating
        FROM stores s
        LEFT JOIN ratings r
            ON s.store_id = r.store_id
        WHERE s.store_id = ?
        GROUP BY
            s.store_id,
            s.name,
            s.email,
            s.address,
            s.status
        `,
        [storeId]
    );

    return stores[0];
};

module.exports = {
    getAllStores,
    searchStores,
    getStoreById
    
};