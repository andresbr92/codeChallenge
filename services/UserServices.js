'use strict';

exports.getusers = function () {

    return new Promise(function (resolve, reject) {
        var examples = {};
        examples['application/json'] = [{
            "address": {
                "zip": "zip",
                "country": "country",
                "city": "city",
                "street": "street",
                "id": 6,
                "state": "state"
            },
            "name": "name",
            "id": 0,
            "birthDate": "birthDate",
            "email": "email"
        }, {
            "address": {
                "zip": "zip",
                "country": "country",
                "city": "city",
                "street": "street",
                "id": 6,
                "state": "state"
            },
            "name": "name",
            "id": 0,
            "birthDate": "birthDate",
            "email": "email"
        }];
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
            "address": {
                "zip": "zip",
                "country": "country",
                "city": "city",
                "street": "street",
                "id": 6,
                "state": "state"
            },
            "name": "name",
            "id": 0,
            "birthDate": "birthDate",
            "email": "email"
        };
        if (Object.keys(examples).length > 0) {
            resolve(user);
        } else {
            resolve(examples[Object.keys(examples)[0]]);
        }
    });
}
exports.getusersByIdUserId = function (userId) {
    return new Promise(function (resolve, reject) {
        let examples = {};
        examples['application/json'] = {
            "address": {
                "zip": "zip",
                "country": "country",
                "city": "city",
                "street": "street",
                "id": 6,
                "state": "state"
            },
            "name": "name",
            "id": 0,
            "birthDate": "birthDate",
            "email": "email"
        };
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}

exports.updateUsersById = function (userId, user) {
    return new Promise(function (resolve, reject) {
        let examples = {};
        examples['application/json'] = {
            "address": {
                "zip": "zip",
                "country": "country",
                "city": "city",
                "street": "street",
                "id": 6,
                "state": "state"
            },
            "name": "name",
            "id": 0,
            "birthDate": "birthDate",
            "email": "email"
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
        resolve();
    });
}