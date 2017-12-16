const express = require('express');
const contract = require('../helpers/contract.helper');
const config = require('../config/ethereum');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Identity Route');
});

router.post('/createIdentity', (req, res) => {
    contract.writeContractRaw(
            config.accounts[0].address, config.accounts[0].privateKey, 0,
            config.infinity.address, config.infinity.abi,
            'transfer', [req.body.to, req.body.value])
        .then(result => {
            res.json(result);
        }).catch(error => {
            res.status(400).send(error);
        });
});

router.get('/readIdentity', (req, res) => {
    contract.readContract([req.query.address], config.infinity.address, config.infinity.abi, 'balanceOf')
        .then(result => {
            res.json(result);
        }, error => {
            res.status(400).send(error);
        });
});

router.post('/addDocument', (req, res) => {
    res.send('Identity Route');
});

router.get('/getDocument', (req, res) => {
    res.send('Identity Route');
});

router.post('/deleteDocument', (req, res) => {
    res.send('Identity Route');
});

router.post('/endorse', (req, res) => {
    res.send('Identity Route');
});

router.get('/endorsements', (req, res) => {
    res.send('Identity Route');
});

module.exports = router;