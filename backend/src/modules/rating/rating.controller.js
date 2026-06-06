const ratingService = require("./rating.service");

const createRating = async (req, res) => {

    try {

        console.log("REQ USER =>", req.user);
        console.log("REQ BODY =>", req.body);

       
        const {
            storeId,
            rating
        } = req.body;

        await ratingService.addRating(
            req.user.userId,
            storeId,
            rating
        );

        return res.status(201).json({
            success: true,
            message: "Rating Submitted Successfully"
        });

    } catch (error) {

        console.log("RATING ERROR =>", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};

module.exports = {
    createRating
};