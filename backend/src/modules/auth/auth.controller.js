const authService = require("./auth.service");
const { generateToken } = require("../../utils/jwt");

// Login Controller
const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user =
            await authService.findUserByEmail(email);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid Email or Password"
            });
        }

        // let isValid = false;

        // // Temporary for current admin123 data
        // if (user.password === password) {
        //     isValid = true;
        // }

        const isValid =
            await authService.validatePassword(
                password,
                user.password
            );

        // Future bcrypt version
        // isValid = await authService.validatePassword(
        //      password,
        //      user.password
        // );

        if (!isValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid Email or Password"
            });
        }

        const token = generateToken({
            userId: user.user_id,
            email: user.email,
            role: user.role
        });

        res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            user: {
                id: user.user_id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};


// Registration Controller
const register = async (req, res) => {

    try {

        const user =
            await authService.findUserByEmail(
                req.body.email
            );

        if (user) {
            return res.status(409).json({
                success: false,
                message: "Email already exists"
            });
        }

        await authService.registerUser(
            req.body
        );

        return res.status(201).json({
            success: true,
            message: "Registration Successful"
        });

    }
    catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};

const changePassword = async (req, res) => {

    try {

        const { oldPassword, newPassword } = req.body;

        const user =
            await authService.findUserByEmail(
                req.user.email
            );

        const isValid =
            await authService.validatePassword(
                oldPassword,
                user.password
            );

        if (!isValid) {
            return res.status(400).json({
                success: false,
                message: "Old Password is Incorrect"
            });
        }

        await authService.updatePassword(
            user.user_id,
            newPassword
        );

        return res.status(200).json({
            success: true,
            message: "Password Changed Successfully"
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};

module.exports = {login, register , changePassword};