function isValidUserData(req, res, next) {
    const { name, surname, email, pwd } = req.body;

    if (!name) throw new Error('вы не передали имя');
    if (!isNaN(name)) throw new Error('имя должно быть строковым типом днных');

    if (!surname) throw new Error('вы не передали фамилию');
    if (!isNaN(surname)) throw new Error('имя должно быть строковым типом двнных');

    if (!email) throw new Error('вы не передали почту');
    if (!/^[a-zA-Z0-9\.]+@[a-z]{1,6}\.[a-z]{1,6}/gm.test(email)) throw new Error('это не почта');

    if (!pwd) throw new Error('вы не передали пороль');
    if (pwd.length < 9) throw new Error(' пороль не соответсвует');

    next()
}

function isValidUserId(req, res, next) {
    const { id } = req.params;
   
    if (!id) throw new Error('Вы не передали id');
    if(isNaN(id)) throw new Error('id должно быть числом');

    next();
}
module.exports = { isValidUserData, isValidUserId };