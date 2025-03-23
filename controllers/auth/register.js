const User=require("../../models/User.model");
const { registrationValidation } = require("../../services/validation_register");
const register = async (req, res, next) => {
  try {
    const registerValues = await registrationValidation.validateAsync(req.body);
    console.log(registerValues);
    const { username, email ,password } = registerValues;

    const userVerification = await User.findOne({
      username,
    });

    // Check if the email already exists
    const userEmail = await User.findOne({
        email,
    });
    if (userEmail) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }

    const userPassword = await User.findOne({
      password,
    });
    console.log(userVerification);
    if (userVerification) {
      throw new Error("User Exist already");
    }
    if (userPassword) {
      return res.status(409).json({
        success: false,
        message: "User Password exists",
      });
    }
    const newUser = await  User.create({
      username,
      email,
      password,
    });
    console.log(newUser);
    // await newUser.save();

    res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: registerValues,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;