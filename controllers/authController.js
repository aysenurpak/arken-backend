const authService = require('../services/authService');

async function register(req, res) {
    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function login(req, res) {
    try {
        const result = await authService.loginUser(req.body);
        res.json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = { register, login };
