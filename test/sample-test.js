const { expect } = require("chai");
const { ethers } = require("hardhat");

const hre = require("hardhat");
const assert = require("assert");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});

describe("Hardhat Runtime Environment", function () {
  it("Should have a config field", function () {
    assert.notEqual(hre.config, undefined);
  });
});
