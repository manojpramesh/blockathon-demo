pragma solidity ^0.4.0;

/**
 * Identity contract for Blockathon
 * Author : Manoj P R
 */

contract Identity {

    address private owner;
    address private Moderator;
    string public data;

    mapping(bytes32 => bytes32) public documents;
    address[] public endorsements;

    /**
     * Constructor of the Identity contract
     */
    function Identity(address _user, string _data) public {
        owner = _user;
        Moderator = msg.sender;
        data = _data;
        Events(msg.sender, _data, "Identity created");
    }

    /**
     * Modifier on the user calling a function
     */
    modifier onlyBy(address _account) {
        if (msg.sender != _account) {
            revert();
        }
        _;
    }


    event Events(address indexed sender, string data, bytes32 action);
    event documentEvents(address indexed sender, bytes32 name, bytes32 hash, bytes32 action);

    /**
     * function to check owner of the contract
     */
    function getOwner() onlyBy(Moderator) view public returns(address) {
        return owner;
    }

    function updateData(string _data) public {
        data = _data;
        Events(msg.sender, _data, "Data Updated");
    }

    function addDocuments(bytes32 _name, bytes32 _hash) public {
        documents[_name] = _hash;
        documentEvents(msg.sender, _name, _hash, 'ADD');
    }
    
    function removeDocuments(bytes32 _name) public {
        delete documents[_name];
        documentEvents(msg.sender, _name, '', 'REMOVE');
    }
    
    function endorse() public {
        endorsements.push(msg.sender);
        // endorse events
        Events(msg.sender, data, "Endorsed");
    }
    
    /**
     * Kills the contract and prevents further actions on it.
     */
    function kill() onlyBy(owner) public returns(uint) {
        selfdestruct(owner);
        Events(msg.sender, data,"Contract killed");
    }
}