"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { TokenDetails, Token } from "../components/TokenDetails";
import Link from "next/link";

// Sample token data for the page
const sampleToken: Token = {
  name: "Example Token",
  symbol: "EXT",
  holders: 12345,
  change24h: 5,
  address: "0x1234567890abcdef",
  network: "Ethereum",
  icon: "/path/to/icon.png",
  chartData: [65, 59, 80, 81, 56, 55, 40],
};

const Page = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Link
          href="/"
          passHref
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to overview</span>
        </Link>
        <TokenDetails token={sampleToken} />
      </main>
    </div>
  );
};

export default Page;
