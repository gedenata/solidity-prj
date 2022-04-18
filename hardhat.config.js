require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// require("hardhat-deploy");
// require("hardhat-gas-reporter");
// require("hardhat-contract-sizer");

require("solidity-coverage");

const MAINNET_RPC_URL =
  process.env.MAINNET_RPC_URL ||
  process.env.ALCHEMY_RPC_URL ||
  "https://eth-mainnet.alchemyapi.io/v2/{api_key}";

const MNEMONIC = process.env.MNEMONIC || "your_mnemonic";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const FORKING_BLOCK_NUMBER = process.env.FORKING_BLOCK_NUMBER;

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
