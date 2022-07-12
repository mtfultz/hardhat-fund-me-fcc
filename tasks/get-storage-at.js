const { task } = require("hardhat/config")

task("get-storage-at", "Gets value at storage location 777").setAction(
    async (taskArgs, hre) => {
        const value = await hre.ethers.provider.getStorageAt(
            "0xb29ea9ad260b6dc980513bba29051570b2115110",
            777
        )
        console.log(`Current value: ${value}`)
    }
)

module.exports = {}
