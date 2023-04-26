const express = require('express');
const { getAllUsers, getUsersById, createUsersById, upUsersById } = require('../service/user.service.js');

const router = express.Router();
router.get('/', (req, res) => {
    const data = getAllUsers();
    res.send(data);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const data = getUsersById(id);
    res.send(data);
});

router.post('/', (req, res) => {
    const { name, surname, email, pwd } = req.body;
    const data = createUsersById(name, surname, email, pwd);
    res.send(data);
});
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = upUsersById(id, name, surname, email, pwd);
    res.send(data);
});


module.exports = { router };