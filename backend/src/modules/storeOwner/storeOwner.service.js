const db = require("../../config/db");

const getDashboard = async (ownerId) => {

    const [stores] = await db.execute(
        `
        SELECT
            s.store_id,
            s.name,
            IFNULL(
                ROUND(AVG(r.rating),1),
                0
            ) AS averageRating,
            COUNT(r.rating_id) AS totalRatings
        FROM stores s
        LEFT JOIN ratings r
            ON s.store_id = r.store_id
        WHERE s.owner_id = ?
        GROUP BY
            s.store_id,
            s.name
        `,
        [ownerId]
    );

    return stores[0];
};

module.exports = {
    getDashboard
};