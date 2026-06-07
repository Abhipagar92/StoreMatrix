const ratingService =
    require("./rating.service");

const createRating = async (
    req,
    res
) => {

    try {

        console.log(
            "REQ USER =>",
            req.user
        );

        console.log(
            "REQ BODY =>",
            req.body
        );

        const {
            storeId,
            rating
        } = req.body;

        const result =
            await ratingService.addOrUpdateRating(
                req.user.userId,
                storeId,
                rating
            );

        return res.status(200).json({
            success: true,
            message: result.message
        });

    } catch (error) {

        console.log(
            "RATING ERROR =>",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Internal Server Error"
        });

    }

};

module.exports = {
    createRating
};