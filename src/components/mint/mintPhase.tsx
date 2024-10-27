"use client";

import { useEffect, useState } from "react";
import { getContract, toEther } from "thirdweb";
import { client } from "@/app/client";
import { baseSepolia } from "thirdweb/chains";
import {
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import { claimTo, getClaimConditionById } from "thirdweb/extensions/erc721";
import { getContractMetadata } from "thirdweb/extensions/common";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import localFont from "next/font/local";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const BackWild = localFont({
  src: [
    {
      path: "../../app/fonts/Back-Wild.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function MintPhase() {
  const communityPhaseId = BigInt(0n);
  const publicPhaseId = BigInt(1n);
  const account = useActiveAccount();

  const contract = getContract({
    client,
    chain: baseSepolia,
    address: "0x5866C8c67C5147BA79DA9D9d6847761E06df54dc",
  });

  useReadContract(getContractMetadata, {
    contract: contract,
  });

  const {
    data: communityPhase,
    isLoading: communityPhaseLoading,
    error: communityPhaseError,
  } = useReadContract(getClaimConditionById, {
    contract: contract,
    conditionId: communityPhaseId, // Community Phase ID
  });

  const {
    data: publicPhase,
    isLoading: publicPhaseLoading,
    error: publicPhaseError,
  } = useReadContract(getClaimConditionById, {
    contract: contract,
    conditionId: publicPhaseId, // Public Phase ID
  });

  const [quantityCommunityMint, setQuantityCommunityMint] = useState(1);
  const [quantityPublicMint, setQuantityPublicMint] = useState(1);
  const [activePhase, setActivePhase] = useState("LOADING");

  // New state variables for claimed status
  const [communityClaimed, setCommunityClaimed] = useState(false);
  const [publicClaimed, setPublicClaimed] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // Custom alert visibility

  // DETERMINE ACTIVE PHASE
  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    // Log key variables for debugging
    console.log({
      currentTime,
      communityStart: Number(communityPhase?.startTimestamp),
      publicStart: Number(publicPhase?.startTimestamp),
      supplyClaimed: Number(communityPhase?.supplyClaimed),
      maxSupply: Number(communityPhase?.maxClaimableSupply),
    });

    if (communityPhaseLoading || publicPhaseLoading) {
      setActivePhase("LOADING");
    } else if (communityPhaseError || publicPhaseError) {
      setActivePhase("ERROR");
    } else if (communityPhase && publicPhase) {
      if (currentTime >= Number(publicPhase.startTimestamp)) {
        console.log("Setting phase to PUBLIC PHASE");
        setActivePhase("PUBLIC PHASE");
      } else if (
        Number(communityPhase.supplyClaimed) >=
        Number(communityPhase.maxClaimableSupply)
      ) {
        console.log("Setting phase to ENDED");
        setActivePhase("ENDED");
      } else if (
        currentTime >= Number(communityPhase.startTimestamp) &&
        currentTime < Number(publicPhase.startTimestamp)
      ) {
        console.log("Setting phase to COMMUNITY PHASE");
        setActivePhase("COMMUNITY PHASE");
      } else {
        console.log("Setting phase to MINT ENDED");
        setActivePhase("MINT ENDED");
      }
    }
  }, [
    communityPhase,
    publicPhase,
    communityPhaseLoading,
    publicPhaseLoading,
    communityPhaseError,
    publicPhaseError,
  ]);

  const isCommunityPhaseActive = activePhase === "COMMUNITY PHASE";
  const isPublicPhaseActive = activePhase === "PUBLIC PHASE";

  // Reset claimed status when phase changes
  useEffect(() => {
    if (activePhase !== "COMMUNITY PHASE") {
      setCommunityClaimed(false);
    }
    if (activePhase !== "PUBLIC PHASE") {
      setPublicClaimed(false);
    }
  }, [activePhase]);

  return (
    <div className="flex justify-center items-center h-[80vh]">
      {/* Custom Alert */}
      {showSuccessAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-slate-400/50">
          <div className="relative">
            <Alert className="p-10">
              <AlertTitle className="font-bold text-5xl">
                Heads up Fighter!
              </AlertTitle>
              <AlertDescription className="text-2xl pt-5 italic text-center">
                Welcome to the Legion
              </AlertDescription>
              <div className="flex justify-center items-center pt-10">
                <Button
                  variant={"destructive"}
                  onClick={() => setShowSuccessAlert(false)}
                >
                  OK
                </Button>
              </div>
            </Alert>
          </div>
        </div>
      )}
      {/* <!-- Main Container --> */}
      <div className="grid gap-4">
        {/* <!-- TITLE --> */}
        <div>
          <p
            className={`tracking-wider text-center font-bold text-[120px] text-white p-5 ${BackWild.className}`}
          >
            FIGHT <span className="text-orange-400">CLUB</span>
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* <!-- COMMUNITY MINT --> */}
            <div className="bg-white p-4 shadow-md rounded-md">
              {/* <!-- Card 1 Content --> */}
              <Card className="w-full max-w-xl mx-auto border p-2">
                <CardHeader>
                  <CardTitle className="text-left text-lg">
                    COMMUNITY MINT
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-col-3 gap-4 w-full">
                    {communityPhaseLoading ? (
                      <p>Loading...</p>
                    ) : communityPhaseError ? (
                      <p className="text-red-500">
                        Error loading community phase.
                      </p>
                    ) : communityPhase ? (
                      <div className="flex items-center justify-center bg-gray-100 p-2 rounded-lg">
                        <div className="space-y-2 text-left p-2">
                          <p className="font-medium">Start Time</p>
                          <p className="font-medium">Claimed</p>
                          <p className="font-medium">Limit per Wallet</p>
                          <p className="font-medium">Price</p>
                          <p className="font-medium">Free Mint</p>
                        </div>
                        <div className="space-y-2 text-left p-2">
                          <p>:</p>
                          <p>:</p>
                          <p>:</p>
                          <p>:</p>
                          <p>:</p>
                        </div>
                        <div className="space-y-2 text-left p-4">
                          <p>
                            {formatTimestamp(communityPhase.startTimestamp)}
                          </p>
                          <p>
                            {communityPhase.supplyClaimed.toString()} /{" "}
                            {communityPhase.maxClaimableSupply.toString()}
                          </p>
                          <p>
                            {formatQuantityLimit(
                              communityPhase.quantityLimitPerWallet
                            )}
                          </p>
                          <p>
                            {formatPriceInTTS(communityPhase.pricePerToken)} TTS
                          </p>
                          <p>Max. Claim 3</p>
                        </div>
                      </div>
                    ) : (
                      <p>No community phase data available.</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-col-2 p-2">
                    <div className="flex item-center space-x-2">
                      <Button
                        onClick={() =>
                          setQuantityCommunityMint(
                            Math.max(1, quantityCommunityMint - 1)
                          )
                        }
                        disabled={!isCommunityPhaseActive || communityClaimed} // Disable button when phase is inactive
                      >
                        -
                      </Button>
                      <Input
                        className="w-16 text-center text-bold"
                        type="number"
                        min={1}
                        value={quantityCommunityMint}
                        onChange={(e) =>
                          setQuantityCommunityMint(
                            Math.max(1, parseInt(e.target.value) || 1)
                          )
                        }
                        disabled={!isCommunityPhaseActive || communityClaimed} // Disable input when phase is inactive
                      />
                      <Button
                        onClick={() =>
                          setQuantityCommunityMint(quantityCommunityMint + 1)
                        }
                        disabled={!isCommunityPhaseActive || communityClaimed} // Disable button when phase is inactive
                      >
                        +
                      </Button>
                    </div>
                    <div className="ml-4">
                      <TransactionButton
                        transaction={() =>
                          claimTo({
                            contract: contract,
                            to: account?.address || "",
                            quantity: BigInt(quantityCommunityMint),
                          })
                        }
                        onTransactionConfirmed={async () => {
                          setShowSuccessAlert(true);
                          setQuantityCommunityMint(1);
                          setCommunityClaimed(true); // Update claimed status
                        }}
                        onError={(error: unknown) => {
                          console.error("Transaction Error:", error);
                          alert("Transaction Failed!");
                        }}
                        className={`w-full ${
                          isCommunityPhaseActive && !communityClaimed
                            ? "bg-green-200 hover:bg-green-200"
                            : "bg-gray-500 cursor-not-allowed"
                        } text-white py-2 px-4 rounded`}
                        disabled={!isCommunityPhaseActive || communityClaimed}
                      >
                        {communityClaimed
                          ? "CLAIMED"
                          : isCommunityPhaseActive
                          ? "Claim in Community Phase"
                          : communityPhaseLoading
                          ? "Loading..."
                          : "MINT ENDED"}
                      </TransactionButton>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>

            {/* <!-- PUBLIC MINT --> */}
            <div className="bg-white p-4 shadow-md rounded-md">
              {/* <!-- Card 2 Content --> */}
              <Card className="w-full max-w-xl mx-auto border p-2">
                <CardHeader>
                  <CardTitle className="text-left text-lg">
                    PUBLIC MINT
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-col-3 gap-4 w-full">
                    {publicPhaseLoading ? (
                      <p>Loading...</p>
                    ) : publicPhaseError ? (
                      <p className="text-red-500">
                        Error loading public phase.
                      </p>
                    ) : publicPhase ? (
                      <div className="flex items-center justify-center bg-gray-100 p-2 rounded-lg">
                        <div className="space-y-2 text-left p-2">
                          <p className="font-medium">Start Time</p>
                          <p className="font-medium">Claimed</p>
                          <p className="font-medium">Limit per Wallet</p>
                          <p className="font-medium">Price</p>
                          <p className="font-medium">Free Mint</p>
                        </div>
                        <div className="space-y-2 text-center p-2">
                          <p>:</p>
                          <p>:</p>
                          <p>:</p>
                          <p>:</p>
                          <p>:</p>
                        </div>
                        <div className="space-y-2 text-left p-4">
                          <p>{formatTimestamp(publicPhase.startTimestamp)}</p>
                          <p>
                            {publicPhase.supplyClaimed.toString()} /{" "}
                            {publicPhase.maxClaimableSupply.toString()}
                          </p>
                          <p>
                            {formatQuantityLimit(
                              publicPhase.quantityLimitPerWallet
                            )}
                          </p>
                          <p>
                            {formatPriceInEther(publicPhase.pricePerToken)} ETH
                          </p>
                          <p>Max. Claim 3</p>
                        </div>
                      </div>
                    ) : (
                      <p>No public phase data available.</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-col-2 p-2">
                    <div className="flex item-center space-x-2">
                      <Button
                        onClick={() =>
                          setQuantityPublicMint(
                            Math.max(1, quantityPublicMint - 1)
                          )
                        }
                        disabled={!isPublicPhaseActive || publicClaimed} // Disable button when phase is inactive
                      >
                        -
                      </Button>
                      <Input
                        className="w-16 text-center text-bold"
                        type="number"
                        min={1}
                        value={quantityPublicMint}
                        onChange={(e) =>
                          setQuantityPublicMint(
                            Math.max(1, parseInt(e.target.value) || 1)
                          )
                        }
                        disabled={!isPublicPhaseActive || publicClaimed} // Disable input when phase is inactive
                      />
                      <Button
                        onClick={() =>
                          setQuantityPublicMint(quantityPublicMint + 1)
                        }
                        disabled={!isPublicPhaseActive || publicClaimed} // Disable button when phase is inactive
                      >
                        +
                      </Button>
                    </div>
                    <div className="ml-4">
                      <TransactionButton
                        transaction={() =>
                          claimTo({
                            contract: contract,
                            to: account?.address || "",
                            quantity: BigInt(quantityPublicMint),
                          })
                        }
                        onTransactionConfirmed={async () => {
                          setShowSuccessAlert(true);
                          setQuantityPublicMint(1);
                          setPublicClaimed(true); // Update claimed status
                        }}
                        onError={(error: unknown) => {
                          console.error("Transaction Error:", error);
                          alert("Transaction Failed!");
                        }}
                        className={`w-full ${
                          isPublicPhaseActive && !publicClaimed
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-gray-500 cursor-not-allowed"
                        } text-white py-2 px-4 rounded`}
                        disabled={!isPublicPhaseActive || publicClaimed}
                      >
                        {publicClaimed
                          ? "CLAIMED"
                          : isPublicPhaseActive
                          ? "Mint"
                          : publicPhaseLoading
                          ? "Loading..."
                          : "MINT ENDED"}
                      </TransactionButton>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Formatting Functions

function formatTimestamp(timestamp: bigint): string {
  const date = new Date(Number(timestamp) * 1000);
  return (
    new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "UTC",
      hour12: false,
    }).format(date) + " UTC"
  );
}

function formatQuantityLimit(limit: bigint): string {
  const maxUint256 = BigInt(
    "115792089237316195423570985008687907853269984665640564039457584007913129639935"
  );
  return limit === maxUint256 ? "Unlimited" : limit.toString();
}

function formatPriceInTTS(priceInWei: bigint): string {
  const etherValue = toEther(priceInWei);
  return parseFloat(etherValue).toLocaleString("en-US");
}

function formatPriceInEther(priceInWei: bigint): string {
  const etherValue = toEther(priceInWei);
  return Number(etherValue).toLocaleString("en-US", {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  });
}
