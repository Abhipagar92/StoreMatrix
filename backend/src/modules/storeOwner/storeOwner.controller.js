const storeOwnerService =
require("./storeOwner.service");

const getDashboard = async (req, res) => {

    try {

        const dashboard =
            await storeOwnerService.getDashboard(
                req.user.userId
            );

        return res.status(200).json({
            success: true,
            data: dashboard
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
    getDashboard
};