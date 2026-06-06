const authService = require("./auth.service");
const { generateToken } = require("../../utils/jwt");

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

        let isValid = false;

        // Temporary for current admin123 data
        if (user.password === password) {
            isValid = true;
        }

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

module.exports = {
    login
};