"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowDownRight, Loader2 } from "lucide-react";
import Image from "next/image";
interface TokenData {
  icon: string;
  name: string;
  symbol: string;
  holders: number;
  change24h: number;
  network: string;
}
interface TokenTableProps {
  title: string;
  data: TokenData[];
  type: "gainers" | "losers";
}
export const TokenTable = ({ title, data, type }: TokenTableProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div className="p-4 sm:p-8 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700">
      <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">{title}</h3>
      <div className="w-full">
        <div className="grid grid-cols-[auto,1fr,1fr,1fr] sm:grid-cols-[auto,2fr,1fr,1fr,1fr] gap-4 text-sm text-slate-400 mb-2 px-2">
          <div>Token</div>
          <div className="hidden sm:block">Name</div>
          <div>Holders</div>
          <div>24h</div>
          <div>Network</div>
        </div>
        <div className="space-y-2">
          {data.map((token, index) => (
            <div
              key={index}
              className="grid grid-cols-[auto,1fr,1fr,1fr] sm:grid-cols-[auto,2fr,1fr,1fr,1fr] gap-4 items-center p-2 rounded-lg hover:bg-slate-700/30 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={token.icon}
                  alt={token.name}
                  className="w-6 h-6 rounded-full"
                  width={6}
                  height={6}
                />
                <span className="text-white sm:hidden">{token.symbol}</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-white">{token.name}</p>
                <p className="text-sm text-slate-400">{token.symbol}</p>
              </div>
              <div className="text-white">{token.holders.toLocaleString()}</div>
              <div
                className={`flex items-center gap-1 ${
                  type === "gainers" ? "text-green-400" : "text-red-400"
                }`}
              >
                {type === "gainers" ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <ArrowDownRight size={16} />
                )}
                <span>{Math.abs(token.change24h)}%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <img
                  src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/${token.network.toLowerCase()}.png`}
                  alt={token.network}
                  className="w-4 h-4"
                />
                <span className="text-slate-400">{token.network}</span>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleLoadMore}
          disabled={isLoading}
          className="w-full mt-4 px-4 py-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <span>Load More</span>
          )}
        </button>
      </div>
    </div>
  );
};
