const {task} = require("hardhat/config");

task("block-number","The current block number").setAction
(
    async(taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber();
        console.log(blockNumber);
    }
)

module.exports = {}