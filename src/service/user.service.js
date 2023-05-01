const fs = require('fs');

const path = './storage/storage.json';

function getAllUser() {
    const arr = JSON.parse(fs.readFileSync(path));
    return arr;
};

function getUserById(id) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter((elem) => elem.id == id);
    return filtered;
};

function createUser(name, surname, email, pwd) {
    const arr = JSON.parse(fs.readFileSync(path));
    arr.push({
        id: arr.length + 1,
        name,
        surname,
        email,
        pwd
    })
    fs.writeFileSync(path, JSON.stringify(arr));
    return arr;
};

function updateUser(id, name, surname, email, pwd) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter((elem) => elem.id != id);
    if (filtered.length == arr.length) throw new Error('no such id');

    filtered.push({
        id: id,
        name: name,
        surname: surname,
        email: email,
        pwd: pwd
    });
    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
};

function deleteUser(id) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter((elem) => elem.id != id);
    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
};

module.exports = { getAllUser, getUserById, createUser, updateUser, deleteUser };