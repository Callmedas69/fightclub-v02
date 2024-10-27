"use client";
import { ConnectButton } from "thirdweb/react";
import { client } from "../../app/client";
import { createWallet } from "thirdweb/wallets";
import { MediaRenderer } from "thirdweb/react";
import bgwallet from "../../assets/wallet/bg-wallet.png";

//Customize Button and Modal Apperance
export default function CustomConnectButton() {
  //Create an array of recommended wallets
  const recommendedWallets = [createWallet("com.coinbase.wallet")];

  //Create an array of wallets to display
  const wallets = [
    createWallet("com.coinbase.wallet"),
    createWallet("io.metamask"),
    createWallet("io.rabby"),
    createWallet("me.rainbow"),
    createWallet("app.phantom"),
  ];

  return (
    <div>
      <ConnectButton
        client={client}
        connectButton={{
          label: "Connect to Mint",
        }}
        connectModal={{
          title: "Based Morning 🔵",
          showThirdwebBranding: false,
          size: "wide",
          welcomeScreen: () => <CustomWelcomeScreen />,
        }}
        wallets={wallets}
        recommendedWallets={recommendedWallets}
      />
    </div>
  );
}

// Welcome Screen 400x600
function CustomWelcomeScreen() {
  return (
    <div>
      <MediaRenderer client={client} src={bgwallet.src} width={"100%"} />
    </div>
  );
}
