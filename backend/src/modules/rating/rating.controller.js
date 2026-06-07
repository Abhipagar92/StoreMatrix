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


const updateRating = async (req, res) => {

    try {

        const { rating } = req.body;

        await ratingService.updateRating(
            req.user.userId,
            req.params.storeId,
            rating
        );

        return res.status(200).json({
            success: true,
            message: "Rating Updated Successfully"
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};

module.exports = {
    createRating,
    updateRating
    
};