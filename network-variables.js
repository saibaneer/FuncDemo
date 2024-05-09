const { config } = require("@chainlink/env-enc");
config({ dotenv: true });

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS = 2;

const networks = {
    polygonAmoy: {
        accounts: [PRIVATE_KEY],
        donId: "fun-polygon-amoy-1",
        router: "0xC22a79eBA640940ABB6dF0f7982cc119578E11De",
        chainId: 80002,
        confirmations: DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS,
        nativeCurrencySymbol: "MATIC",
    }
};


module.exports = {networks};