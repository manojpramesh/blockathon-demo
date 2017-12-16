const express = require('express');
const passport = require('passport');
const userModel = require('../models/user.model');
const router = express.Router();
const ethereum = {
    personal: require('../helpers/personal.helper')
};


// @dev Emty route
router.get('/', function(req, res, next) {
    res.json('You found me!! ;)');
});

// @dev: Sign in 
router.post('/signIn', passport.authenticate('local', {
    failureRedirect: '/api/users/signInError'
}), (req, res) => {
    res.json(req.user);
});

router.get('/signInError', (req, res) => {
    res.status(400).send('Error logging in. Please check your username and password.');
});

// @dev: get signed in user data
router.get('/profile', (req, res, next) => {
    res.json(req.user);
});

// @dev: user registration
router.post('/signUp', (req, res, next) => {
    const account = ethereum.personal.newAccountWithPK(req.body.password);
    let userObj = new userModel.user(
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.role,
        account.address,
        account.privateKey
    );
    userModel.addUser(userObj, (err, result) => {
        res.json(userObj);
    });
});

// @dev: get all users
router.get('/allUsers', (req, res, next) => {
    userModel.searchUser({}, { password: 0 }, (err, result) => {
        res.json(result);
    });
});

module.exports = router;