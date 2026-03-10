const User = require('../models/user');

// Get All Users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get User By ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Create User
exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.findOne({ email });

        if (user) {
            return res.status(409).json({ message: "User Already Exists" });
        }

        const data = await User.create({
            name,
            email,
            password
        });

        res.status(201).json(data);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update User
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User Not Exist" });
        }

        res.status(200).json(user);

    } catch (err) {
        res.status(500).send(err);
    }
};

// Delete User
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        res.status(200).json({ message: "User Deleted Successfully" });

    } catch (err) {
        res.status(500).send(err);
    }
};