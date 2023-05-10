
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks/block-number");
require("hardhat-gas-reporter")
require("solidity-coverage")
// require("@nomiclabs/hardhat-waffle");
// require("dotenv").config();

// task ("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();
//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

/** @type import('hardhat/config').HardhatUserConfig */

    const Goerli_rpc_url = process.env.RPC_URL;
    const Goerli_private_key = process.env.PRIVATE_KEY;
    //const etherscan_api_key = process.env.ETHERSCAN_API_KEY;
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  //By default, Hardhat will use the Hardhat Network when running tasks or tests.so no need for rpc url and private key
  networks: {
    goerli:
    {
      url: Goerli_rpc_url,
      accounts: [Goerli_private_key],
      chainId: 5,
    },
    localhost:
    {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    
    }
  },
  // etherscan: {  
  //   apikey: etherscan_api_key
  // },
  gasReporter:
  {
    enabled: true,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,//get it from api docs
    outputFile: "gas-report.txt",
    currency: "USD",
    noColors: true,
    // token:"MATIC",
    
  }
};
