require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-etherscan");

// require("hardhat-deploy");
// require("hardhat-gas-reporter");
// require("hardhat-contract-sizer");

require("solidity-coverage");

// const { extendEnvironment, task } = require("hardhat/config");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// extendEnvironment((hre) => {
//   hre.hi = "Hello, Hardhat!";
// });

// task("envtest", async (taskArgs, hre) => {
//   console.log(hre.hi);
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const MAINNET_RPC_URL =
  process.env.MAINNET_RPC_URL ||
  process.env.ALCHEMY_RPC_URL ||
  "https://eth-mainnet.alchemyapi.io/v2/{api_key}";

const MNEMONIC = process.env.MNEMONIC || "your_mnemonic";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const FORKING_BLOCK_NUMBER = process.env.FORKING_BLOCK_NUMBER;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // forking: {
      //   url: MAINNET_RPC_URL,
      //   blockNumber: FORKING_BLOCK_NUMBER,
      //   enabled: false,
      // },
      // chainId: 31337,
    },
    // localhost: {
    //   chainId: 31337,
    // },
    // kovan: {},
    // rinkeby: {},
    // mainnet: {},
    // polygon: {},
  },
  etherscan: {
    apiKey: {},
  },
  gasReporter: {},
  contractSizer: {},
  namedAccounts: {},
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    artifacts: "./artifacts",
    sources: "./contracts",
    cache: "./cache",
    tests: "./test",
  },
  mocha: {
    timeout: 40000,
  },
};
