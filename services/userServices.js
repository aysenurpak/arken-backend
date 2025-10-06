const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllUsers() {
    return prisma.user.findMany();
}

async function createUser(data) {
    return prisma.user.create({ data });
}

async function updateUser(id, data) {
    return prisma.user.update({
        where: { id: parseInt(id) },
        data
    });
}

async function deleteUser(id) {
    return prisma.user.delete({
        where: { id: parseInt(id) }
    });
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};
