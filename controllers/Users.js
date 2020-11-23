
let Default = require('../services/UserServices');
let utils = require('../utils/writer.js');

module.exports.getusers = function getusers(req, res, next) {

    Default.getusers()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.createUsers = function createUsers(req, res, next) {
    let user = req.swagger.params['user'].value;
    Default.createUsers(user)
        .then(function (response) {
            utils.writeJson(res, response)
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
}

module.exports.getusersById = function getusersById(req, res, next) {

    const userId = req.swagger.params.userId.value

    Default.getusersByIdUserId(userId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });

}

module.exports.updateUsersById = function updateUsersById(req, res, next) {
    var userId = req.swagger.params['userId'].value;
    var user = req.swagger.params['user'].value;
    Default.updateUsersById(userId, user)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
module.exports.deleteUsersById = function deleteUsersById(req, res, next) {
    var userId = req.swagger.params['userId'].value;
    Default.deleteUsersById(userId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};