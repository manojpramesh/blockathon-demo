module.exports = {
    rpc: 'http://localhost:8545',
    gas: 4599999,
    accounts: [{
        address: '0xb8a7483ace529de28d1d9f8860a298d94e451892',
        privateKey: '7337912aa62e810e59bc5a7de90f56287cf84dc8c0d83db2582393be1ed9c9f8',
        password: 'Innov@teD@ily1'
    }],
    infinity: {
        address: '0xdd7f1a9f69821497430be78743071619cf264750', //'0x3aeb063c8e36f85b39424ef09ad0dbab2af685d1',
        contractName: 'Infinity',
        abi: [{
            "constant": false,
            "inputs": [],
            "name": "kill",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_user",
                "type": "address"
            }, {
                "name": "_data",
                "type": "string"
            }],
            "name": "createIdentity",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "address"
            }],
            "name": "identityList",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "newOwner",
                "type": "address"
            }],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": false,
                "name": "sender",
                "type": "address"
            }, {
                "indexed": false,
                "name": "identity",
                "type": "address"
            }, {
                "indexed": false,
                "name": "action",
                "type": "bytes32"
            }],
            "name": "Events",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            }, {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }],
            "name": "OwnershipTransferred",
            "type": "event"
        }]
    },
    identity: {
        address: '',
        contractName: 'Identity',
        abi: [{
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "bytes32"
            }],
            "name": "documents",
            "outputs": [{
                "name": "",
                "type": "bytes32"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "uint256"
            }],
            "name": "endorsements",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [],
            "name": "kill",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_data",
                "type": "string"
            }],
            "name": "updateData",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "data",
            "outputs": [{
                "name": "",
                "type": "string"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "getOwner",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }, {
                "name": "_hash",
                "type": "bytes32"
            }],
            "name": "addDocuments",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_name",
                "type": "bytes32"
            }],
            "name": "removeDocuments",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [],
            "name": "endorse",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [{
                "name": "_user",
                "type": "address"
            }, {
                "name": "_data",
                "type": "string"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "sender",
                "type": "address"
            }, {
                "indexed": false,
                "name": "data",
                "type": "string"
            }, {
                "indexed": false,
                "name": "action",
                "type": "bytes32"
            }],
            "name": "Events",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "sender",
                "type": "address"
            }, {
                "indexed": false,
                "name": "name",
                "type": "bytes32"
            }, {
                "indexed": false,
                "name": "hash",
                "type": "bytes32"
            }, {
                "indexed": false,
                "name": "action",
                "type": "bytes32"
            }],
            "name": "documentEvents",
            "type": "event"
        }]
    },
    token: {
        address: '0x83ffc7dfb0b811ed4161486b34e9b3f137fad803', //'0xcac9be65c3e3d1e4195b9129169bda4617d52ba5',
        contractName: 'Token',
        abi: [{
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_from",
                "type": "address"
            }, {
                "name": "_to",
                "type": "address"
            }, {
                "name": "_value",
                "type": "uint256"
            }],
            "name": "transferFrom",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_to",
                "type": "address"
            }, {
                "name": "_amount",
                "type": "uint256"
            }],
            "name": "mint",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "_owner",
                "type": "address"
            }],
            "name": "balanceOf",
            "outputs": [{
                "name": "balance",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [{
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_to",
                "type": "address"
            }, {
                "name": "_value",
                "type": "uint256"
            }],
            "name": "transfer",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "newOwner",
                "type": "address"
            }],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "to",
                "type": "address"
            }, {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }],
            "name": "Mint",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            }, {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }],
            "name": "OwnershipTransferred",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "from",
                "type": "address"
            }, {
                "indexed": true,
                "name": "to",
                "type": "address"
            }, {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }],
            "name": "Transfer",
            "type": "event"
        }]
    }
};