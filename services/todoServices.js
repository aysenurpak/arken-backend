const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllTodos() {
    return prisma.todo.findMany({
        include: { subtasks: true } 
    });
}

async function createTodo(data) {
    return prisma.todo.create({ data });
}

async function updateTodo(id, data) {
    return prisma.todo.update({
        where: { id: parseInt(id) },
        data
    });
}

async function deleteTodo(id) {
    return prisma.todo.delete({
        where: { id: parseInt(id) }
    });
}

async function getSubtasks(todoId) {
    return prisma.subtask.findMany({
        where: { todoId: parseInt(todoId) }
    });
}

async function createSubtask(todoId, data) {
    return prisma.subtask.create({
        data: { ...data, todoId: parseInt(todoId) }
    });
}

async function updateSubtask(id, data) {
    return prisma.subtask.update({
        where: { id: parseInt(id) },
        data
    });
}

async function deleteSubtask(id) {
    return prisma.subtask.delete({
        where: { id: parseInt(id) }
    });
}

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    getSubtasks,
    createSubtask,
    updateSubtask,
    deleteSubtask
};
