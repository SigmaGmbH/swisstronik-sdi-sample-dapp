# About

This is the example dApp (decentralized application) to showcase the usage of Swisstronik Digital Identity (SDI)

## Terminology

DID - decentralized identity

SDI - Swisstronik Digital Identity

Issuer - organization / entity, which issues DID's for its users

Verifier - entity which verifies the validity of issued DID's - in the case of SDI, it's a Smart Contract


## Background

All actions happen on Swisstronik testnet.

Here and below it's assumed that the user has a valid Swisstronik wallet imported in Metamask, which has sufficient SWTR to make a transaction.

Faucet 

https://faucet.testnet.swisstronik.com/

You can check the transactions onchain using the EVM explorer

https://explorer-evm.testnet.swisstronik.com/

How to connect Metamask to Swisstronik testnet

https://swisstronik.gitbook.io/swisstronik-docs/development/connect-wallets/metamask-evm-chainlist

Other Swisstronik documentation

https://swisstronik.gitbook.io/swisstronik-docs/


## What happens

1. **The user connects their Metamask (or another web3 compatible) wallet**
2. **After the wallet is connected, "Issue DID" button appears.**
After clicking "Issue DID", an HTTP request is sent to Swisstronik Demo server to issue a valid DID, given the user's address.
It's done to simplify the process, and directly issues a valid DID without any form of "real" verification and KYC process.
In a production setup, the issuer may provide, for example, an iframe which handles KYC verification and only issues the actual DID after KYC process is done successfully.
3. **After issuing the DID, the user is redirected to "/auth-result" page.**
It polls the data from the smart contract, deployed on Swisstronik testnet at `0x2932Bd8a5e4b96E482344ceff065aFA34338aB97` (code in `src/contract/SampleAuthorizedCounter.sol`)
to check if the current user is already verified and to display the total count of verified users.

4. **If the user was already verified before, "Verification passed" message is displayed. Otherwise, "Verify DID" message appears.**
5. In the case that the user was not previously verified and clicks "Verify DID" button, **a transaction is formed to call the aforementioned smart contract, passing the DID received previously from the demo issuer.**
Thus, the verification happens **on chain**, after the user approves the transaction in Metamask and it is executed.
6. The flow is completed - **the user is verified on chain using the issued DID, and the state is stored privately in the hardware-encrypted EVM** [more about that here](https://swisstronik.gitbook.io/swisstronik-docs/general/intel-sgx).



## How to start
- Run `git clone --recursive https://github.com/SigmaGmbH/swisstronik-sdi-sample-dapp.git`
- Run `npm i` to install packages.
- Run `npm run dev` to start dev server


## Tech stack

React, Typescript, SCSS, Tailwind, Vite

