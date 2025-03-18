const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// get tasks 
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// get task by id
router.get('/:id', async (req, res) => {
    try {
        let id = Number(req.params.id);
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found'});
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// create task
router.post('/', async (req, res) => {
    try {
        const {title, status, user_id} = req.body;
        const task = await Task.create({title, status, user_id});
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// update task
router.put('/:id', async (req, res) => {
    try {
        const {title, status, user_id} = req.body;
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found'});
        }
        await task.update({title, status, user_id});
        res.json(task);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// delete task
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found'});
        }
        await task.destroy();
        res.json({ message: 'Task deleted successfully'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

module.exports = router;