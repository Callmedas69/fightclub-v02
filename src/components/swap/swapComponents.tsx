"use client";

import { Avatar, Name } from "@coinbase/onchainkit/identity";
import {
  Swap,
  SwapAmountInput,
  SwapToggleButton,
  SwapButton,
  SwapMessage,
  SwapToast,
  SwapSettings,
  SwapSettingsSlippageDescription,
  SwapSettingsSlippageInput,
  SwapSettingsSlippageTitle,
} from "@coinbase/onchainkit/swap";
import { Wallet, ConnectWallet } from "@coinbase/onchainkit/wallet";
import { useAccount } from "wagmi";
import type { Token } from "@coinbase/onchainkit/token";

export default function SwapComponents() {
  const { address } = useAccount();

  const ETHToken: Token = {
    address: "",
    chainId: 8453,
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
    image:
      "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
  };

  const TTSToken: Token = {
    address: "0x7D83B9D9236a97bB3f0d7804E9824445Fc483aE1",
    chainId: 8453,
    decimals: 6,
    name: "TTS",
    symbol: "TTS",
    image:
      "https://dd.dexscreener.com/ds-data/tokens/base/0x7d83b9d9236a97bb3f0d7804e9824445fc483ae1.png?size=lg&key=75c10f",
  };

  // add other tokens here to display them as options in the swap
  const swappableTokens: Token[] = [ETHToken, TTSToken];

  return address ? (
    <Swap>
      <SwapSettings>
        <SwapSettingsSlippageTitle>Max. slippage</SwapSettingsSlippageTitle>
        <SwapSettingsSlippageDescription>
          Your swap will revert if the prices change by more than the selected
          percentage.
        </SwapSettingsSlippageDescription>
        <SwapSettingsSlippageInput />
      </SwapSettings>
      <SwapAmountInput
        label="Sell"
        swappableTokens={swappableTokens}
        token={ETHToken}
        type="from"
      />
      <SwapToggleButton />
      <SwapAmountInput
        label="Buy"
        swappableTokens={swappableTokens}
        token={TTSToken}
        type="to"
      />
      <SwapButton />
      <SwapMessage />
      <SwapToast />
    </Swap>
  ) : (
    <Wallet>
      <ConnectWallet>
        <Avatar className="h-6 w-6" />
        <Name />
      </ConnectWallet>
    </Wallet>
  );
}
