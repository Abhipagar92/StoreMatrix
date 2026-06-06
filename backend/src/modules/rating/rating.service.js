const db = require("../../config/db");

const addRating = async (
    userId,
    storeId,
    rating
) => {

    const [result] = await db.execute(
        `
        INSERT INTO ratings
        (
            user_id,
            store_id,
            rating
        )
        VALUES (?, ?, ?)
        `,
        [
            userId,
            storeId,
            rating
        ]
    );

    return result;
};

module.exports = {
    addRating
};