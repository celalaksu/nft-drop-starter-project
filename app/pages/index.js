import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { useWallet, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletConnectWalletName } from "@solana/wallet-adapter-wallets";

import CandyMachine from "../components/CandyMachine";

// Constants
const TWITTER_HANDLE = "ksacll";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home = () => {
    const wallet = useWallet();
    
    if (wallet.toString() != false)  {
        console.log("Phantom wallet found");
        if (wallet.publicKey){
        console.log(wallet.publicKey.toString());
    }
    }

    // Actions
    const renderNotConnectedContainer = () => (
        <div>
            <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji" />

            <div className="button-container">
                <WalletMultiButton className="cta-button connect-wallet-button" />
            </div>
        </div>
    );

    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">🍭 Candy Drop</p>
                    <p className="sub-text">NFT drop machine with fair mint</p>
                    {/* Render your connect to wallet button right here */}
                    {wallet.publicKey ? <CandyMachine walletAddress={wallet} />  : renderNotConnectedContainer()}
                </div>
                <div className="footer-container">
                    <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
                    <a className="footer-text" href={TWITTER_LINK} target="_blank" rel="noreferrer">{`built on @${TWITTER_HANDLE}`}</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
