const express = require('express');
const contract = require('../helpers/contract.helper');
const config = require('../config/ethereum');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Token Route');
});

router.get('/checkBalance', (req, res) => {
    contract.readContract([req.query.address], config.token.address, config.token.abi, 'balanceOf')
        .then(result => {
            res.json(result);
        }, error => {
            res.status(400).send(error);
        });
});

router.post('/Transfer', (req, res) => {
    contract.writeContract(
            config.accounts[0].address, config.accounts[0].password,
            config.token.address, config.token.abi, 0,
            'transfer', [req.body.to, req.body.value])
        .then(result => {
            res.json(result);
        }).catch(error => {
            res.status(400).send(error);
        });
});

router.post('/TransferFrom', (req, res) => {
    contract.writeContract(
            config.accounts[0].address, config.accounts[0].password,
            config.token.address, config.token.abi, 0,
            'transferFrom', [req.body.from, req.body.to, req.body.value])
        .then(result => {
            res.json(result);
        }).catch(error => {
            res.status(400).send(error);
        });
});

router.post('/Mint', (req, res) => {
    contract.writeContract(
            config.accounts[0].address, config.accounts[0].password,
            config.token.address, config.token.abi, 0,
            'mint', [req.body.to, req.body.value])
        .then(result => {
            res.json(result);
        }).catch(error => {
            res.status(400).send(error);
        });
});

router.get('/getEvents', (req, res) => {
    const events = contract.getAllEvents(
        config.token.abi, config.token.address,
        'Transfer');

    events.get(function(error, logs) {
        res.json(logs);
    });
});

module.exports = router;