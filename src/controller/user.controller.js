const express = require('express');
const { getAllUser, getUserById, createUser, updateUser, deleteUser } = require('../service/user.service')
const { isValidUserData, isValidUserId } = require('../helper/validation')
const { buildResponse } = require('../helper/buildResponse')

const router = express.Router();

router.get('/', (req, res) => {
    try {
        const data = getAllUser();
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, error.message, 404);
    };
});

router.get('/:id', isValidUserId, (req, res) => {
    try {
        const { id } = req.params;
        const data = getUserById(id);
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, error.message, 404);
    };
});

router.post('/', isValidUserData, (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = createUser(name, surname, email, pwd);
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, error.message, 404);
    };
});

router.put('/:id', isValidUserData, isValidUserId, (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const data = updateUser(id, name, surname, email, pwd);
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, error.message, 404);
    };
});

router.delete('/:id', isValidUserId, (req, res) => {
    try {
        const { id } = req.params;
        const data = deleteUser(id);
        buildResponse(res, data, 200);
    } catch (error) {
        buildResponse(res, error.message, 404);
    };
});

module.exports = router;