pragma solidity ^0.4.19;

import "./Identity.sol";
import "./Ownable.sol";

contract Infinity is Ownable {
    
    mapping(address => address) public identityList;
    
    event Events(address sender, address identity, bytes32 action);
    
    function createIdentity(address _user, string _data) public onlyOwner {
        address _id = new Identity(_user, _data);
        identityList[_user] = _id;
        Events(msg.sender, _id, "Identity created");
    }
    
    /**
     * Kills the contract and prevents further actions on it.
     */
    function kill() onlyOwner public returns(uint) {
        selfdestruct(owner);
        Events(msg.sender, address(0), "Contract killed");
    }
}