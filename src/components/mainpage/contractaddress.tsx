"use client";

import React, { useState } from "react";
import { Copy } from "lucide-react";
import cloudContract from "../../assets/mainpage/cloudContract.svg";
import Image from "next/image";

// Define the types for the component's props
interface CloudContractAddressProps {
  contractName: string;
  contractAddress: string;
}

const CloudContractAddress: React.FC<CloudContractAddressProps> = ({
  contractName,
  contractAddress,
}) => {
  const [copied, setCopied] = useState(false);

  // Function to copy the contract address
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      // Reset the copied state after a short delay
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Image as background */}
      <div className="relative w-full h-96">
        <Image
          src={cloudContract}
          alt="Cloud Contract"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Text content overlaid */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-xl font-bold mb-2">
          {contractName} Contract Address
        </div>
        <div className="text-sm text-gray-600 break-all">{contractAddress}</div>
        <button
          onClick={handleCopy}
          className="mt-2 p-2 bg-white rounded-full shadow flex items-center"
        >
          <Copy size={16} />
          <span className="ml-2">{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
};

export default CloudContractAddress;
