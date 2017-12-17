const express = require('express');
const contract = require('../helpers/contract.helper');
const config = require('../config/ethereum');
const user = require('../models/user.model');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Identity Route');
});

router.post('/createIdentity', (req, res) => {

    let infinityEvent = contract.getUpcomingEvents(config.infinity.abi,
        config.infinity.address,
        'Events',
        config.accounts[0].address);

    contract.writeContract(
            config.accounts[0].address, config.accounts[0].password,
            config.infinity.address, config.infinity.abi, 0,
            'createIdentity', [req.body.user, req.body.data])
        .then(result => {
            infinityEvent.watch((error, result) => {
                infinityEvent.stopWatching();
                const identity = {
                    identity: result.args.identity,
                    data: JSON.parse(req.body.data)
                };
                user.editUser({
                    address: req.body.user
                }, identity, (err, result) => {
                    res.json(identity.identity);
                });
            });
        }).catch(error => {
            res.status(400).send(error);
        });
});

router.get('/readIdentity', (req, res) => {
    contract.readContract([], req.query.address, config.identity.abi, 'data')
        .then(result => {
            res.json(result);
        }).catch(error => {
            res.status(400).send(error);
        });
});


router.post('/endorse', (req, res) => {
    contract.writeContract(
            config.accounts[0].address, config.accounts[0].password,
            req.body.address, config.identity.abi, 0,
            'endorse', [])
        .then(result => {
            res.json(result);
        }).catch(error => {
            res.status(400).send(error);
        });
});

router.get('/endorsements', (req, res) => {
    contract.readContract([0], req.query.address, config.identity.abi, 'endorsements')
        .then(result => {
            res.json(result);
        }).catch(error => {
            res.status(400).send(error);
        });
});

router.post('/addDocument', (req, res) => {
    contract.writeContract(
            config.accounts[0].address, config.accounts[0].password,
            config.identity.address, config.identity.abi, 0,
            'transfer', [req.body.to, req.body.value])
        .then(result => {
            res.json(result);
        }).catch(error => {
            res.status(400).send(error);
        });
});

router.get('/getDocument', (req, res) => {
    contract.readContract([req.query.address], config.identity.address, config.identity.abi, 'identityList')
        .then(result => {
            return contract.readContract(['aadhar'], result, config.identity.abi, 'documents');
        }).then(result => {
            res.json(result);
        }).catch(error => {
            res.status(400).send(error);
        });
});

router.post('/deleteDocument', (req, res) => {
    contract.writeContract(
            config.accounts[0].address, config.accounts[0].password,
            config.identity.address, config.identity.abi, 0,
            'transfer', [req.body.to, req.body.value])
        .then(result => {
            res.json(result);
        }).catch(error => {
            res.status(400).send(error);
        });
});

router.get('/getEvents', (req, res) => {
    const events = contract.getAllEvents(
        config.infinity.abi, config.infinity.address,
        'Events');

    events.get(function(error, logs) {
        res.json(logs);
    });
});


module.exports = router;