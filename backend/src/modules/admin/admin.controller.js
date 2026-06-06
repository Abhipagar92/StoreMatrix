const adminService = require("./admin.service");
console.log("ADMIN SERVICE =>", adminService);

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

const getUsers = async (req, res) => {

    try {

        const users =
            await adminService.getAllUsers();

        return res.status(200).json({
            success: true,
            data: users
        });

    } catch (error) {

        console.log("GET USERS ERROR =>", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};

module.exports = { getDashboard, getUsers };