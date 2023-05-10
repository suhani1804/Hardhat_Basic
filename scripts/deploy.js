// Import
const { ethers , run, network} = require("hardhat");
require("dotenv").config();

// Async funtion
async function main() {

  const simplestorage = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying SimpleStorage...");
  const deploying = await simplestorage.deploy();
  await deploying.deployed();
  console.log(deploying.address);

  if(network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY)
  {
    
    //console.log("waiting for 3 blocks and now we have just in ",count)
    await deploying.deployTransaction.wait(3);
    await verify(deploying.address, []);
    console.log(network.config);
  }

  const retriive = await deploying.retrieve();
  console.log("Favorite number = " + retriive);

  const tx = await deploying.store(13);
  await tx.wait();
  const retriive2 = await deploying.retrieve();
  console.log("changed Favorite number = " + retriive2);
  

}
async function verify(contractAddress, args)
{
  console.log("Verifying contract at address: " + contractAddress);
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } 
  catch (e) {
    if(e.message.includes("Contract source code already verified")) {
      console.log("Contract source code already verified");
    }
    else{
      console.log("Failed to verify contract");
      console.log(e);
    }
  }
}

//main function
main().then(( ) => process.exit(0)).catch((error) =>
{
  console.error(error);
  process.exit(1);
});