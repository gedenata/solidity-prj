//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface ExampleInterface {
    function getValue() external view returns (uint256);
}

contract ExampleContract is ExampleInterface {
    function getValue() public pure override returns (uint256) {
        return 0;
    }
}
