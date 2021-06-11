const {expect} = require("chai");

describe("NFT", function () {
  it("It should deploy the contract, mint a token, and resolve to the right URI", async () => {
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
    const URI = "ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv";
    await nft.deployed();
    await nft.mintToCaller("0x5FDd0881Ef284D6fBB2Ed97b01cb13d707f91e42", URI);
    expect(await nft.tokenURI(1)).to.equal(URI)
  });
});