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
    contract.writeContractRaw(
            config.accounts[0].address, config.accounts[0].privateKey, 0,
            config.token.address, config.token.abi,
            'transfer', [req.body.to, req.body.value])
        .then(result => {
            res.json(result);
        }).catch(error => {
            res.status(400).send(error);
        });
});

router.post('/Mint', (req, res) => {
    contract.writeContractRaw(
            config.accounts[0].address, config.accounts[0].privateKey, 0,
            config.token.address, config.token.abi,
            'mint', [req.body.to, req.body.value])
        .then(result => {
            res.json(result);
        }).catch(error => {
            res.status(400).send(error);
        });
});

module.exports = router;