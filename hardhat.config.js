require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 2330
    },
    mumbai: {
      url: `https://rpc0.altcoinchain.org/rpc`,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
      gas: 30000000,
      gasPrice: 7000000000
    },
    matic: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d",
      //accounts: [process.env.privateKey]
    },
   // goerli: {
  //   url: "https://rpc0.altcoinchain.org/rpc",
  //    accounts: [ process.env.REACT_APP_PRIVATE_KEY ]
 //   }    
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
