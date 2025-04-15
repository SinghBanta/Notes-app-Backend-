const User = require("../../models/User.model");

const adminUpdate = async (req, res, next) => {

  try {
    let { id, username, role } = req.body;

    const userVerify = await User.findById(id);

    if (!userVerify) {
      return res.status(404).json({ message: "User not found" });
    }

    if (username) userVerify.username = username;

    if (role) userVerify.role = role;
    await userVerify.save();

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    next(error); // Pass error to the next middleware
  }
};

module.exports = adminUpdate;
