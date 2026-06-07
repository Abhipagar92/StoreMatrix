const db = require("../../config/db");

const addOrUpdateRating = async (
    userId,
    storeId,
    rating
) => {

    const [existingRating] =
        await db.execute(
            `
            SELECT rating_id
            FROM ratings
            WHERE user_id = ?
            AND store_id = ?
            `,
            [
                userId,
                storeId
            ]
        );

    // Update existing rating
    if (
        existingRating.length > 0
    ) {

        await db.execute(
            `
            UPDATE ratings
            SET rating = ?
            WHERE user_id = ?
            AND store_id = ?
            `,
            [
                rating,
                userId,
                storeId
            ]
        );

        return {
            message:
                "Rating Updated Successfully"
        };

    }

    // Insert new rating
    await db.execute(
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

    return {
        message:
            "Rating Submitted Successfully"
    };

};

module.exports = {
    addOrUpdateRating
};