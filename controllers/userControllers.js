const userService = require('../services/userService');

async function getUsers(req, res) {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function createUser(req, res) {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function updateUser(req, res) {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function deleteUser(req, res) {
    try {
        await userService.deleteUser(req.params.id);
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { getUsers, createUser, updateUser, deleteUser };
