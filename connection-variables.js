// require("dotenv").config();
const { config } = require("@chainlink/env-enc");
config({ dotenv: true });
const { Wallet, JsonRpcProvider } = require("ethers");

const RPC_URL = process.env.POLYGON_RPC_URL;


if (!RPC_URL) {
  throw new Error("Missing RPC_URL");
}

const provider = new JsonRpcProvider(RPC_URL);
const wallet = new Wallet(process.env.PRIVATE_KEY);
const signer = wallet.connect(provider);

module.exports = { provider, wallet, signer }