const adminService = require("./admin.service");
// console.log("ADMIN SERVICE =>", adminService);

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


const getStores = async (req, res) => {

    try {

        const stores =
            await adminService.getAllStores();

        return res.status(200).json({
            success: true,
            data: stores
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};


const createStoreOwner = async (req, res) => {

    try {

        await adminService.createStoreOwner(
            req.body
        );

        return res.status(201).json({
            success: true,
            message: "Store Owner Created Successfully"
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};

const createStore = async (req, res) => {

    try {

        await adminService.createStore(
            req.body
        );

        return res.status(201).json({
            success: true,
            message: "Store Created Successfully"
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
    getDashboard, 
    getUsers, 
    getStores, 
    createStoreOwner, 
    createStore };