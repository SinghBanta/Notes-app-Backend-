const User = require("../../models/User.model");
const {  loginValidation } = require("../../services/validation_login");

const login = async (req, res, next) => {
  try {
    // Validate incoming data (username & password)
    const loginValues = await loginValidation.validateAsync(req.body);
    console.log(loginValues);
    const { email, password } = loginValues;

    // Check if user exists by username
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found. Please register first.",
      });
    }

    // Direct password comparison 
    if (password !== user.password) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    // Success response
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        id: user._id,
        username: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;