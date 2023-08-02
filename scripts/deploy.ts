import { ethers } from "hardhat";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = ethers.parseEther("0.001");

  const UniswapV2Router = await ethers.deployContract("UniswapV2Router01",['0xD27602eECE47864f772B7dC68093074b652FEEA4', '0x4200000000000000000000000000000000000006']);

  await UniswapV2Router.waitForDeployment();

  console.log(
    `deployed to ${UniswapV2Router.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
