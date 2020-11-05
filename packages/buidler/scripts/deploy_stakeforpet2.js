const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("@nomiclabs/buidler");
MUSE_TOKEN = "0xB6Ca7399B4F9CA56FC27cBfF44F4d2e4Eef1fc81"
VNFT_CONTRACT = "0x57f0B53926dd62f2E26bc40B30140AbEA474DA94"
async function main() {
    console.log("📡 Deploy \n");
    // auto deploy to read contract directory and deploy them all (add ".args" files for arguments)
    // await autoDeploy();
    // OR
    // custom deploy (to use deployed addresses)

  //  const MuseToken = await deploy("MuseToken");
   // const VNFT = await deploy("VNFT", [MuseToken.address]);


    const Stake2 = await deploy("StakeForVnfts2", [
        VNFT_CONTRACT,
        MUSE_TOKEN,
    ]);
return
    const Stake = await deploy("StakeForVnfts", [
        VNFT.address,
        MuseToken.address,
    ]);

    await VNFT.grantRole(
        "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
        Stake.address
    );

    await ethers.provider.send("evm_increaseTime", [60 * 60 * 24 * 8]); // add 1day
    await ethers.provider.send("evm_mine"); // mine the next block

    await VNFT.grantRole(
        "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
        Stake2.address
    );
    console.log("🚀 Granted VNFT Minter Role to Stake2 \n");

    // grant miner role to VNFT
    await MuseToken.grantRole(
        "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
        VNFT.address
    );
    console.log("🚀 Granted MuseToken Minter Role to VNFT \n");

    await MuseToken.mint(
        "0xc783df8a850f42e7f7e57013759c285caa701eb6",
        "100000000000000000000000"
    );
    return;

    await MuseToken.approve(Stake2.address, "10000000000000000000000");

    await Stake2.stake(
        "400000000000000000000"
    );

    points = await Stake2.earned("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Points now", points.div("1000000000000000000").toString())
    await ethers.provider.send("evm_increaseTime", [60 * 60 * 24]); // add 1day
    await ethers.provider.send("evm_mine"); // mine the next block
    points = await Stake2.earned("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Points after one day", points.div("1000000000000000000").toString())
    await ethers.provider.send("evm_increaseTime", [60 * 60 * 24]); // add 1day
    await ethers.provider.send("evm_mine"); // mine the next block
    points = await Stake2.earned("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Points after two day", points.div("1000000000000000000").toString())
    await ethers.provider.send("evm_increaseTime", [60 * 60 * 24 * 8]); // add 1day
    await ethers.provider.send("evm_mine"); // mine the next block
    points = await Stake2.earned("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Points after 10 days", points.div("1000000000000000000").toString())

    balance = await Stake2.balance("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Balance 10 days", balance.div("1000000000000000000").toString())

    balance = await Stake2.redeem();

    points = await Stake2.earned("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Points after 10 days", points.div("1000000000000000000").toString())
    balance = await Stake2.balance("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Balance after minting", balance.div("1000000000000000000").toString())

    await ethers.provider.send("evm_increaseTime", [60 * 60 * 24 * 10]); // add 1day
    await ethers.provider.send("evm_mine"); // mine the next block

    points = await Stake2.earned("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Points after 10 more days", points.div("1000000000000000000").toString())
    balance = await Stake2.balance("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Balance after minting", balance.div("1000000000000000000").toString())

    await Stake2.withdraw("350000000000000000000");
    console.log('withdraw 350')
    points = await Stake2.earned("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Points after 10 more days", points.div("1000000000000000000").toString())
    balance = await Stake2.balance("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Balance after withdraw", balance.div("1000000000000000000").toString())

    await ethers.provider.send("evm_increaseTime", [60 * 60 * 24 * 100]); // add 1day
    await ethers.provider.send("evm_mine"); // mine the next block

    points = await Stake2.earned("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Points after 10 more days", points.div("1000000000000000000").toString())
    balance = await Stake2.balance("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Balance after withdraw", balance.div("1000000000000000000").toString())

    await Stake2.stake(
        "400000000000000000000"
    );

    points = await Stake2.earned("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Points after 10 more days", points.div("1000000000000000000").toString())
    balance = await Stake2.balance("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Balance after withdraw", balance.div("1000000000000000000").toString())


    await ethers.provider.send("evm_increaseTime", [60 * 60 * 24 * 10]); // add 1day
    await ethers.provider.send("evm_mine"); // mine the next block

    points = await Stake2.earned("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Points after 10 more days", points.div("1000000000000000000").toString())
    balance = await Stake2.balance("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Balance after withdraw", balance.div("1000000000000000000").toString())
    points = await Stake2.earned("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Points after 10 more days", points.div("1000000000000000000").toString())
    balance = await Stake2.balance("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Balance after withdraw", balance.div("1000000000000000000").toString())

    points = await Stake2.earned("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Points after 10 more days", points.div("1000000000000000000").toString())
    balance = await Stake2.balance("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Balance after minting", balance.div("1000000000000000000").toString())

    balance = await Stake2.redeem();
    console.log("after minitng 2")
    points = await Stake2.earned("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Points after 10 days", points.div("1000000000000000000").toString())
    balance = await Stake2.balance("0xc783df8a850f42e7f7e57013759c285caa701eb6");
    console.log("Balance after minting", balance.div("1000000000000000000").toString())

}

async function deploy(name, _args) {
    const args = _args || [];

    console.log(`📄 ${name}`);
    const contractArtifacts = await ethers.getContractFactory(name);
    const contract = await contractArtifacts.deploy(...args);
    console.log(
        chalk.cyan(name),
        "deployed to:",
        chalk.magenta(contract.address)
    );
    fs.writeFileSync(`artifacts/${name}.address`, contract.address);
    console.log("\n");
    return contract;
}

const isSolidity = (fileName) =>
    fileName.indexOf(".sol") >= 0 && fileName.indexOf(".swp.") < 0;

function readArgumentsFile(contractName) {
    let args = [];
    try {
        const argsFile = `./contracts/${contractName}.args`;
        if (fs.existsSync(argsFile)) {
            args = JSON.parse(fs.readFileSync(argsFile));
        }
    } catch (e) {
        console.log(e);
    }

    return args;
}

async function autoDeploy() {
    let contractList = fs.readdirSync(config.paths.sources);
    return contractList
        .filter((fileName) => isSolidity(fileName))
        .reduce((lastDeployment, fileName) => {
            const contractName = fileName.replace(".sol", "");
            const args = readArgumentsFile(contractName);

            // Wait for last deployment to complete before starting the next
            return lastDeployment.then((resultArrSoFar) =>
                deploy(contractName, args).then((result) => [...resultArrSoFar, result])
            );
        }, Promise.resolve([]));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
