const express = require("express");
const validate = require("../../middleware/validate.middleware");

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


module.exports = router;