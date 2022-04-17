const { network, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../../helper.hardhat.config");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("API Consumer Unit Tests", async function () {
      let apiConsumer;
      let linkToken;
      let mockOracle;

      beforeEach(async () => {
        const chainId = network.config.chainId;
        await deployments.fixture(["mocks", "api"]);

        linkToken = await ethers.getContractAt("LinkToken");
        linkTokenAddress = linkToken.address;
        additionalMessage = ` --linkaddress ${linkTokenAddress}`;
        apiConsumer = await ethers.getContract("APIConsumer");
        mockOracle = await ethers.getContract("MockOracle");

        await hre.run("fund-link", {
          contract: apiConsumer.address,
          linkaddress: linkTokenAddress,
        });
      });
    });
