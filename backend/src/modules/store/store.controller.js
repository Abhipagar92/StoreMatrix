const storeService = require("./store.service");

const getStores = async (req, res) => {

    try {

        const stores =
            await storeService.getAllStores();

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

const searchStores = async (req, res) => {

    try {

        const stores =
            await storeService.searchStores(
                req.query.keyword
            );

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

module.exports = {
    getStores,
    searchStores

};