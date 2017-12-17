var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
    web3.personal.unlockAccount("0xb8a7483ace529de28d1d9f8860a298d94e451892", "Innov@teD@ily1", 15000);
    deployer.deploy(Migrations);
};