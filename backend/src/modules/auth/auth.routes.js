const express = require("express");
const validate = require("../../middleware/validate.middleware");
const authenticate = require("../../middleware/auth.middleware");
const authorize = require("../../middleware/role.middleware");


const { login, register} = require("./auth.controller");
const { registerValidation } = require("./auth.validation");


const router = express.Router();

router.post( "/register",registerValidation,validate,register );
router.post("/login", login);
router.get("/test", (req, res) => {
    res.json({
        message: "Auth route working"
    });
});

router.get(
    "/profile",
    authenticate,
    (req, res) => {

        res.status(200).json({
            success: true,
            user: req.user
        });

    }
);


router.get(
    "/admin-test",
    authenticate,
    authorize("ADMIN"),
    (req, res) => {

        res.json({
            success: true,
            message: "Welcome Admin"
        });

    }
);


module.exports = router;