var InfinityContract = artifacts.require("./Infinity.sol");

module.exports = function(deployer) {
    deployer.deploy(InfinityContract);
};