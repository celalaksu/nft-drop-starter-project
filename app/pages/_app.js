import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";

import { SolflareWalletAdapter, TorusWalletAdapter } from "@solana/wallet-adapter-wallets";

import "../styles/App.css";
import "../styles/globals.css";
import "../styles/CandyMachine.css";
import "../styles/CountdownTimer.css";
import "@solana/wallet-adapter-react-ui/styles.css";

const App = ({ Component, pageProps }) => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    // const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]); // just for phantom wallet
    const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter(), new TorusWalletAdapter()], [network]); // for all wallets


    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <Component {...pageProps} />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;
