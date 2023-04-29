const express = require('express');
const { getAllUser, getUserById, createUser, updateUser, deleteUser } = require('../service/user.service')

const router = express.Router();

router.get('/', (req, res) => {
    try {
        const data = getAllUser();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    };
});

router.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = getUserById(id);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    };
});

router.post('/', (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = createUser(name, surname, email, pwd);
        res.send(data)
    } catch (error) {
        res.send(error.message);
    };
});

router.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const data = updateUser(id, name, surname, email, pwd);
        res.send(data)
    } catch (error) {
        res.send(error.message);
    };
});

router.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = deleteUser(id);
        res.send(data)
    } catch (error) {
        res.send(error.message);
    };
});

module.exports = router;