const { wallet, signer } = require("../connection-variables");
const { networks } = require("../network-variables");
const { abi, bytecode } = require("../artifacts/contracts/TestConsumer.sol/TestConsumer.json");
const { ContractFactory, encodeBytes32String } = require("ethers");
// const { ethers } = require("hardhat");


const NETWORK = "polygonAmoy";
const routerAddress = networks[NETWORK].router;
const donIdBytes32 = encodeBytes32String(networks[NETWORK].donId);

const deployTestConsumer = async () => {
    console.log(`\nDeploying the Consumer Contract on ${NETWORK} network...`);
    console.log("Router Address: ", routerAddress);
    console.log("Don ID: ", donIdBytes32);

    const contractFactory = new ContractFactory(abi, bytecode, signer);
    const testConsumerContract = await contractFactory.connect(signer).deploy(routerAddress, donIdBytes32);
    // testConsumerContract.waitForDeployment();
    const receipt = await testConsumerContract.deploymentTransaction().wait(2);
    // await testConsumerContract.deployed();

    console.log("Consumer Contract receipt: ", receipt.hash);
    console.log("Consumer Contract deployed to: ", await testConsumerContract.getAddress());
}


deployTestConsumer().catch(err => {
    console.log("Error deploying the Consumer Contract: ", err)
})