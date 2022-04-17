//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    string private _greeting;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        _greeting;
    }

    function greet() public view returns (string memory) {
        return _greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log(
            "Changing greeting from '%s' to '%s'",
            _greeting,
            _greeting
        );
        _greeting;
    }
}
