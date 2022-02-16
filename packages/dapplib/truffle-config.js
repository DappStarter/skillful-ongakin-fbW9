require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember universe guess area surge table'; 
let testAccounts = [
"0xf9f9515eb1e6434fffb972a66a031e8c26a30cca13d15993a8e7769fc8f625bd",
"0x3dd775247e5c9c704c57d19b9009f33340b864dd7a8b00b112c4177411f480d4",
"0x83e06ee7a068e898fc4cd5ae02241bcd485768170d0e92880750100816a8f15b",
"0x0e06b3e13d9b197cf348210457b1f7ac00fff75e7449ef8a2238524ec7c5dc96",
"0x91a62aef13577368283a5fe5a178a23e3f3cdc2540f6a75ac6b3c393102c036d",
"0xa3300457cb6101644d0f5d0f17c41787d78881651ad4867508181ed0a08da362",
"0xa4112170a1ad531a721550d9bcb561d4e143096c75d4604a8bf51fe86d4a7e02",
"0x8fc68fab7c53615f8ce2014242d530ea4ee0bc17bb8f762875051f797076b617",
"0xc7690df5aecfe98bb4de96fb625ea6eb0b9be36439c25c18213cffc0aae14368",
"0x1dce937cbd7fc8d44c41d88da505a450703b31269ca0998ff3f05e9eaa027488"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

