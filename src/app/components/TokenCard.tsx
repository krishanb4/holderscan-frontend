"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowDownRight, Copy, ExternalLink } from "lucide-react";
import { TokenChart } from "./TokenChart";
import Link from "next/link";
interface TokenCardProps {
  name: string;
  symbol: string;
  holders: number;
  change24h: number;
  address?: string;
  chartData?: number[];
}
const timeFrames = [
  {
    label: "4H",
    value: "4h",
  },
  {
    label: "12H",
    value: "12h",
  },
  {
    label: "1D",
    value: "1d",
  },
  {
    label: "3D",
    value: "3d",
  },
  {
    label: "7D",
    value: "7d",
  },
];
export const TokenCard = ({
  name,
  symbol,
  holders,
  change24h,
  address = "0x123...abc",
  chartData = [65, 59, 80, 81, 56, 55, 40, 55, 70, 80, 90, 85],
}: TokenCardProps) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("4h");
  const [copied, setCopied] = useState(false);
  const isPositive = change24h >= 0;
  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Link
      href="/token"
      className="p-4 sm:p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-blue-500/5"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-medium text-white mb-1">
            {name}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-sm text-slate-400">{symbol}</p>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleCopy}
                className="p-1 hover:bg-slate-700/50 rounded-md transition-colors group relative"
              >
                <Copy
                  size={14}
                  className="text-slate-400 group-hover:text-slate-300"
                />
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-700 rounded text-xs text-white whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
              <a
                href={`https://etherscan.io/token/${address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:bg-slate-700/50 rounded-md transition-colors group"
              >
                <ExternalLink
                  size={14}
                  className="text-slate-400 group-hover:text-slate-300"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className={`flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg ${
            isPositive
              ? "text-green-400 bg-green-500/10"
              : "text-red-400 bg-red-500/10"
          }`}
        >
          {isPositive ? (
            <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          ) : (
            <ArrowDownRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          )}
          <span className="text-sm font-medium">{Math.abs(change24h)}%</span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-slate-400 mb-1">Holders</p>
          <p className="text-lg sm:text-xl font-medium text-white">
            {holders.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {timeFrames.map((timeFrame) => (
          <button
            key={timeFrame.value}
            onClick={() => setSelectedTimeFrame(timeFrame.value)}
            className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
              selectedTimeFrame === timeFrame.value
                ? "bg-blue-500/20 text-blue-400"
                : "text-slate-400 hover:text-slate-300"
            }`}
          >
            {timeFrame.label}
          </button>
        ))}
      </div>
      <TokenChart data={chartData} isPositive={isPositive} />
      <div className="mt-4 px-2 sm:px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
        <p className="text-xs text-slate-400 break-all">{address}</p>
      </div>
    </Link>
  );
};
