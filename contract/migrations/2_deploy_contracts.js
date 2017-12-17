var TokenContract = artifacts.require("./Token.sol");

module.exports = function(deployer) {
    deployer.deploy(TokenContract);
};