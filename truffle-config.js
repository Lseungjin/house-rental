const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privateKeys = ["0x89a7eb5a5efe38a47824acd4764c50fa277d5283f3ec91949dd92523f85b6264"]; // private keys


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    awsNetwork: {
      provider: () => {
          return new HDWalletProvider(privateKeys, "http://3.34.10.227:8545")
      },
      network_id: 15,
      gas: 2000000,
      gasPrice: 10000000000
    }
  }
};
