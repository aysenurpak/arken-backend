const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';

async function registerUser({ name, email, password }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return prisma.user.create({
        data: { name, email, password: hashedPassword }
    });
}

async function loginUser({ email, password }) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error('User not found');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Invalid password');

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = { registerUser, loginUser, authenticateToken };
