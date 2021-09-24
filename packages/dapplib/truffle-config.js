require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remind humble install casino sure taxi'; 
let testAccounts = [
"0xc9f6d4891b632873febc39e947c93662f732b85a6c6a98e79e065b07b8be9ffd",
"0xb4e320f4d3601f5d7b37d563e92a13246a6895dd7b7329dc2404d347eaf03d77",
"0x24ebfc0afd7936eb28946f6835c42fd82641d4a7fec2c5a7fddc58f77653d6a3",
"0x2fcfdf2171c22063ca098522abd9ca94556391d7ba02bc9399c0e57355c17531",
"0x0dd7930383a66d6b151f9cef8c2a4dca48af1d8fe4976c788e486e2a5da7a82f",
"0x394df44f4c4c546848f4e3b5ebc647d4f04d79887810a7676ee81d46656f4ec4",
"0xdbfaa620e0e7e1d0fb3d092f4e08b01e654542d78bdd5d9dce650969a1e5f6a0",
"0xe8c29c8220074ec513222b1468ae7ed15466cc11dc22dc97b7b2b7e481f0c09a",
"0x68f983d3a38049c58a790ace1696ef7b2625d23dc360595e8656a28bfba213b0",
"0x9109f94137354853f51e4d3eb6e1381d98e29c9690957f06d95877903b62edc6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


