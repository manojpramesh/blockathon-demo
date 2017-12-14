var InfinityContract = artifacts.require("./Infinity.sol");

contract('InfinityContract', function(accounts) {
    it("should save owner address", function() {
        return MetaCoin.deployed().then(function(instance) {
            return instance.owner.call();
        }).then(function(owner) {
            assert.equal(owner, "", "Owner address is not declared properly");
        });
    });
});