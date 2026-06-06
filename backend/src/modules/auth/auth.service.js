const db = require("../../config/db");
const bcrypt = require("bcrypt");

const findUserByEmail = async (email) => {
    const [users] = await db.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );

    return users[0];
};

const validatePassword = async (
    password,
    hashedPassword
) => {

    return await bcrypt.compare(
        password,
        hashedPassword
    );
};

module.exports = {
    findUserByEmail,
    validatePassword
};