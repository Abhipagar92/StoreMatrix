const adminService = require("./admin.service");

const getDashboard = async (req, res) => {

    try {

        const summary =
            await adminService.getDashboardSummary();

        return res.status(200).json({
            success: true,
            data: summary
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