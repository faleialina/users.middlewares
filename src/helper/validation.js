function isValidUserData(req, res, next) {
    const { name, surname, email, pwd } = req.body;

    if (!name) throw new Error('you didn\'t pass the name');
    if (!isNaN(name)) throw new Error('name must be a string data type');

    if (!surname) throw new Error('you didn\'t pass the surname');
    if (!isNaN(surname)) throw new Error('surname must be a string data type');

    if (!email) throw new Error('you didn\'t pass the email');
    if (!/^[a-zA-Z0-9\.]+@[a-z]{1,6}\.[a-z]{1,6}/gm.test(email)) throw new Error('this is not mail');

    if (!pwd) throw new Error('you didn\'t pass the password');
    if (pwd.length < 9) throw new Error('password does not match');

    next()
}

function isValidUserId(req, res, next) {
    const { id } = req.params;

    if (!id) throw new Error('You didn\'t pass id');
    if (isNaN(id)) throw new Error('id must be a number');

    next();
}
module.exports = { isValidUserData, isValidUserId };