const fs = require('fs');

class User {
    path = './storage/storage.json';

    getAllUser() {
        const arr = JSON.parse(fs.readFileSync(this.path));
        return arr;
    };

    getUserById(id) {
        const arr = JSON.parse(fs.readFileSync(this.path));
        const filtered = arr.filter((elem) => elem.id == id);
        return filtered;
    };

    createUser(name, surname, email, pwd) {
        const arr = JSON.parse(fs.readFileSync(this.path));
        arr.push({
            id: arr.length + 1,
            name,
            surname,
            email,
            pwd
        })
        fs.writeFileSync(this.path, JSON.stringify(arr));
        return arr;
    };

    updateUser(id, name, surname, email, pwd) {
        const arr = JSON.parse(fs.readFileSync(this.path));
        const filtered = arr.filter((elem) => elem.id != id);
        if (filtered.length == arr.length) throw new Error('no such id');

        filtered.push({
            id: id,
            name: name,
            surname: surname,
            email: email,
            pwd: pwd
        });
        fs.writeFileSync(this.path, JSON.stringify(filtered));
        return filtered;
    };

    deleteUser(id) {
        const arr = JSON.parse(fs.readFileSync(this.path));
        const filtered = arr.filter((elem) => elem.id != id);
        fs.writeFileSync(this.path, JSON.stringify(filtered));
        return filtered;
    };


}


module.exports = { User };