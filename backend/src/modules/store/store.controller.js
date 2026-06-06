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

const getStoreDetails = async (req, res) => {

    try {

        const store =
            await storeService.getStoreById(
                req.params.id
            );

        if (!store) {
            return res.status(404).json({
                success: false,
                message: "Store Not Found"
            });
        }

        return res.status(200).json({
            success: true,
            data: store
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
    searchStores,
    getStoreDetails
    

};