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

const registerUser = async (userData) => {

    const {
        name,
        email,
        password,
        address
    } = userData;

    const hashedPassword =
        await bcrypt.hash(password, 10);

    const [result] = await db.execute(
        `
        INSERT INTO users
       (
            name,
            email,
            password,
            address,
            role
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            name,
            email,
            hashedPassword,
            address,
            "NORMAL_USER"
        ]
    );

    return result;
};

const updatePassword = async (
    userId,
    newPassword
) => {

    const hashedPassword =
        await bcrypt.hash(newPassword, 10);

    const [result] = await db.execute(
        `
        UPDATE users
        SET password = ?
        WHERE user_id = ?
        `,
        [
            hashedPassword,
            userId
        ]
    );

    return result;
};

module.exports = {registerUser,findUserByEmail,validatePassword,updatePassword}; 