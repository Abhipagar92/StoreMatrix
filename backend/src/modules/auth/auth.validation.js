const { body } = require("express-validator");

const registerValidation = [
    body("name")
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 3, max: 60 })
        .withMessage("Name must be between 20 and 60 characters"),

    body("email")
        .isEmail()
        .withMessage("Valid email is required"),

    body("address")
        .notEmpty()
        .withMessage("Address is required")
        .isLength({ max: 400 })
        .withMessage("Address cannot exceed 400 characters"),

    body("password")
        .isLength({ min: 8, max: 16 })
        .withMessage("Password must be between 8 and 16 characters")
];

module.exports = {
    registerValidation
};