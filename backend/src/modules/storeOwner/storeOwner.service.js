const db = require("../../config/db");

const getDashboard = async (
    ownerId
) => {

    const [stores] =
        await db.execute(
            `
            SELECT
                s.store_id,
                s.name,
                s.email,
                s.address,

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

            WHERE s.owner_id = ?

            GROUP BY
                s.store_id,
                s.name,
                s.email,
                s.address
            `,
            [ownerId]
        );

    const [ratings] =
        await db.execute(
            `
            SELECT
                u.user_id,
                u.name,
                u.email,
                r.rating

            FROM ratings r

            INNER JOIN users u
                ON r.user_id = u.user_id

            INNER JOIN stores s
                ON r.store_id = s.store_id

            WHERE s.owner_id = ?

            ORDER BY
                r.rating DESC,
                u.name
            `,
            [ownerId]
        );

    return {
        store: stores[0] || null,
        ratings
    };

};

module.exports = {
    getDashboard
};