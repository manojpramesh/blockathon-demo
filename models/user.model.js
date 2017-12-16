const mongoHelper = require('../helpers/mongo.helper');
const mongoConfig = require('../config/mongo');

module.exports = {

    user: function(name, email, password, role, address, privateKey) {
        this.name = name;
        this.email = email;
        this.password = password || null;
        this.role = role;
        this.address = address;
        this.privateKey = privateKey;
    },

    addUser: (data, cb) => {
        mongoHelper.insertDocument(data, mongoConfig.user, cb);
    },

    editUser: (condition, data, cb) => {
        mongoHelper.updateDocument(condition, data, mongoConfig.user, cb);
    },

    searchUser: (condition, exclude, cb) => {
        mongoHelper.searchDocument(condition, exclude, mongoConfig.user, cb);
    },

    deleteUser: (condition, cb) => {
        mongoHelper.deleteDocument(condition, mongoConfig.user, cb);
    }
};