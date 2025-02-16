"use client";

import React, { useState } from "react";
import { VerifiedIcon, Loader2 } from "lucide-react";
import Image from "next/image";
interface RecentToken {
  icon: string;
  name: string;
  verified?: boolean;
  holders: number;
  timeAgo: string;
  network?: string;
}
const recentTokens: RecentToken[] = [
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png",
    name: "ELEE",
    holders: 1232,
    timeAgo: "21 Minutes Ago",
    verified: true,
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/sol.png",
    name: "BBLOB",
    holders: 143,
    timeAgo: "24 Minutes Ago",
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/sol.png",
    name: "TWIPER",
    verified: true,
    holders: 1240,
    timeAgo: "3 Hours Ago",
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/btc.png",
    name: "VIGI",
    holders: 4900,
    timeAgo: "3 Hours Ago",
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/sol.png",
    name: "MXYZ",
    holders: 5914,
    timeAgo: "5 Hours Ago",
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png",
    name: "UTI",
    verified: true,
    holders: 758,
    timeAgo: "6 Hours Ago",
  },
];
export const RecentlyAdded = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recentTokens.map((token, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-blue-500/5"
          >
            <div className="flex items-start gap-3">
              <Image
                src={token.icon}
                alt={token.name}
                className="w-8 h-8 rounded-full"
                width={8}
                height={8}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <h3 className="text-white font-medium truncate">
                    {token.name}
                  </h3>
                  {token.verified && (
                    <VerifiedIcon
                      size={14}
                      className="text-blue-400 flex-shrink-0"
                    />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Holders</span>
                    <span className="text-sm text-white">
                      {token.holders.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {token.timeAgo}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleLoadMore}
        disabled={isLoading}
        className="w-full mt-6 px-4 py-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
  );
};
