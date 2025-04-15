const User=require("../../models/User.model");

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};

module.exports = deleteUser;