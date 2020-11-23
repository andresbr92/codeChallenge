'use strict';

exports.getusers = function () {

    return new Promise(function (resolve, reject) {
        var examples = {};
        examples['application/json'] = [{
            "id": 0,
            "name": "Jhon Snow",
            "email": "jonny@example.com",
            "birthDate": "birthDate",
            "address": {
                "zip": "1234",
                "country": "España",
                "city": "Madrid",
                "street": "Calle falsa 1234",
                "id": 6,
                "state": "state"
            }
        }, {
            "id": 1,
            "name": "Paco",
            "email": "paco@example.com",
            "birthDate": "birthDate",
            "address": {
                "zip": "3424",
                "country": "España",
                "city": "Barcelona",
                "street": "Calle falsa 4321",
                "id": 6,
                "state": "state"
            }
        },];
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}

exports.createUsers = function (user) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        examples['application/json'] = {
            "id": 0,
            "name": "Jhon Snow",
            "email": "jonny@example.com",
            "birthDate": "birthDate",
            "address": {
                "zip": "1234",
                "country": "España",
                "city": "Madrid",
                "street": "Calle falsa 1234",
                "id": 6,
                "state": "state"
            }
        };
        if (Object.keys(examples).length > 0) {
            resolve(user);
        } else {
            resolve();
        }
    });
}
exports.getusersByIdUserId = function (userId) {
    return new Promise(function (resolve, reject) {
        let examples = {};
        examples = [{
            "id": 0,
            "name": "Jhon Snow",
            "email": "jonny@example.com",
            "birthDate": "birthDate",
            "address": {
                "zip": "1234",
                "country": "España",
                "city": "Madrid",
                "street": "Calle falsa 1234",
                "id": 6,
                "state": "state"
            }
        }, {
            "id": 1,
            "name": "Paco",
            "email": "paco@example.com",
            "birthDate": "birthDate",
            "address": {
                "zip": "3424",
                "country": "España",
                "city": "Barcelona",
                "street": "Calle falsa 4321",
                "id": 6,
                "state": "state"
            }
        },]
        if (Object.keys(examples).length > 0) {
            resolve(examples.filter(user => user.id === userId));
        } else {
            resolve();
        }
    });
}

exports.updateUsersById = function (userId, user) {
    return new Promise(function (resolve, reject) {
        let examples = {};
        examples['application/json'] = {
            "id": 0,
            "name": "name",
            "email": "email",
            "birthDate": "birthDate",
            "address": {
                "zip": "zip",
                "country": "country",
                "city": "city",
                "street": "street",
                "id": 6,
                "state": "state"
            },
        };
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}

exports.deleteUsersById = function (userId) {
    return new Promise(function (resolve, reject) {
        resolve('user deleted');
    });
}