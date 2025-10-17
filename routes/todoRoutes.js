const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoControllers');

router.get('/', todoController.getTodos);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

router.get('/:id/subtasks', todoController.getSubtasks);
router.post('/:id/subtasks', todoController.createSubtask);
router.put('/subtasks/:id', todoController.updateSubtask);
router.delete('/subtasks/:id', todoController.deleteSubtask);

module.exports = router;
