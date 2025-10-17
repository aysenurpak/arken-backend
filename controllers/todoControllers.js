const todoService = require('../services/todoServices');

async function getTodos(req, res) {
    try {
        const todos = await todoService.getAllTodos();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function createTodo(req, res) {
    try {
        const todo = await todoService.createTodo(req.body);
        res.status(201).json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function updateTodo(req, res) {
    try {
        const todo = await todoService.updateTodo(req.params.id, req.body);
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function deleteTodo(req, res) {
    try {
        await todoService.deleteTodo(req.params.id);
        res.json({ message: "Todo deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getSubtasks(req, res) {
    try {
        const subtasks = await todoService.getSubtasks(req.params.id);
        res.json(subtasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function createSubtask(req, res) {
    try {
        const subtask = await todoService.createSubtask(req.params.id, req.body);
        res.status(201).json(subtask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function updateSubtask(req, res) {
    try {
        const subtask = await todoService.updateSubtask(req.params.id, req.body);
        res.json(subtask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function deleteSubtask(req, res) {
    try {
        await todoService.deleteSubtask(req.params.id);
        res.json({ message: "Subtask deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    getSubtasks,
    createSubtask,
    updateSubtask,
    deleteSubtask
};
