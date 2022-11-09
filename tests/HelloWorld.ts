import { expect } from "chai";
import { ethers } from "hardhat";

describe("Hello World", async () => {
  it("Should give a Hello World", async () => {
    const helloWorldFactory = await ethers.getContractFactory("HelloWorld");
    const helloWorldContract = await helloWorldFactory.deploy();
    await helloWorldContract.deployed();
    const text = await helloWorldContract.helloWorld();
    expect(text).to.equal("Hello World");
  });

  it("should set owner to deployer", async () => {
    const signers = await ethers.getSigners();
    const helloWorldFactory = await ethers.getContractFactory("HelloWorld");
    const helloWorldContract = await helloWorldFactory.deploy();
    await helloWorldContract.deployed();
    const owner = await helloWorldContract.owner();
    const contractDeployer = signers[0].address;
    expect(owner).to.equal(contractDeployer);
  });
});
