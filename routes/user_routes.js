const express = require('express');
const User = require('../models/User');
const { route, param } = require('./task_routes');

const router = express.Router();

// get users
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// get task by id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found"});
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// create user
router.post('/', async (req, res) => {
    try {
        const {name} = req.body;
        const user = await User.create({name});
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// update user
router.put('/:id', async (req, res) => {
    try {
        const {name} = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found"});
        }
        await User.update({name});
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

// delete user
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found'});
        }
        await user.destroy();
        res.json({ message: 'User deleted successfully'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

module.exports = router;