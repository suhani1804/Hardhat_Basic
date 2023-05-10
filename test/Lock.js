const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage" , function()
{
  let simplestorage;
  let deploying
  beforeEach(async function()
  {
    simplestorage = await ethers.getContractFactory("SimpleStorage")
    deploying = await simplestorage.deploy()
    await deploying.deployed()
  })
  it("The retrieve function should return 0 at the first of the function call ", async function()
  {
    // const returning_value = await deploying.retrieve()
    // const expected_value = "0"
    // assert.equal(returning_value.toString() , expected_value)

    //Single line code
    expect(await deploying.retrieve()).to.equal("0")
  })
  it("The store function should return 13 at the second of the function call ", async function()
  {
    await deploying.store(13)
    expect(await deploying.retrieve()).to.equal("13")
  })
})