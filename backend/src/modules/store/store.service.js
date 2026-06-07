const db = require("../../config/db");

const getAllStores = async () => {

    const [stores] = await db.execute(
        `
        SELECT
            s.store_id,
            s.name,
            s.email,
            s.address,
            s.status,

            IFNULL(
                ROUND(
                    AVG(r.rating),
                    1
                ),
                0
            ) AS averageRating,

            COUNT(
                r.rating_id
            ) AS totalRatings

        FROM stores s

        LEFT JOIN ratings r
            ON s.store_id = r.store_id

        WHERE s.status = 'ACTIVE'

        GROUP BY
            s.store_id,
            s.name,
            s.email,
            s.address,
            s.status

        ORDER BY s.name
        `
    );

    return stores;

};

const searchStores = async (
    keyword
) => {

    const [stores] = await db.execute(
        `
        SELECT
            s.store_id,
            s.name,
            s.email,
            s.address,
            s.status,

            IFNULL(
                ROUND(
                    AVG(r.rating),
                    1
                ),
                0
            ) AS averageRating,

            COUNT(
                r.rating_id
            ) AS totalRatings

        FROM stores s

        LEFT JOIN ratings r
            ON s.store_id = r.store_id

        WHERE
            s.name LIKE ?
            OR s.address LIKE ?

        GROUP BY
            s.store_id,
            s.name,
            s.email,
            s.address,
            s.status

        ORDER BY s.name
        `,
        [
            `%${keyword}%`,
            `%${keyword}%`
        ]
    );

    return stores;

};

const getStoreById = async (
    storeId
) => {

    const [stores] = await db.execute(
        `
        SELECT
            s.store_id,
            s.name,
            s.email,
            s.address,
            s.status,

            IFNULL(
                ROUND(
                    AVG(r.rating),
                    1
                ),
                0
            ) AS averageRating,

            COUNT(
                r.rating_id
            ) AS totalRatings

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