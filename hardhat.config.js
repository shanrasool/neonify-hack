require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
      viaIR: true,
    },
  },
  networks: {
    NeoX: {
      url: "https://neoxt4seed1.ngd.network/",
      accounts: ["710fdb1b6d7877aaf3256ca401c0db1378389eff1e6d9384a206762007d40fe4"],
    },
  },
  etherscan: {
    apiKey: {
      
      base: "4R6PQVFQUUFU4MRQR7K4TFI92361D144F2",
    },
    // customChains: [
    //   {
    //     network: "base",
    //     chainId: 8453,
    //     urls: {
    //       apiURL: "https://base.blockscout.com/api",
    //       browserURL: "https://base.blockscout.com/",
    //     },
    //   },
    // ],
  },
  sourcify: {
    enabled: false,
  },
};
