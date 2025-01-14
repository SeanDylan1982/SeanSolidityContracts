module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("ERC1155NFTCustom", {
    from: deployer,
    log: true,
    args: [
      "NFTPort",
      "NFT",
      deployer,
      true,
      true,
      true,
      "ipfs://baseURI",
      "",
      deployer,
      250,
    ],
  });
};

module.exports.tags = ["ERC1155NFTCustom"];
