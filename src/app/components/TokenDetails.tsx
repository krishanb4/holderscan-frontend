import React, { useState } from "react";
import { TokenChart } from "./TokenChart";
import { Info, ExternalLink, Copy, ArrowDownRight } from "lucide-react";
import Image from "next/image";
export interface Token {
  name: string;
  symbol: string;
  holders: number;
  change24h: number;
  address?: string;
  network: string;
  icon: string;
  chartData?: number[];
}
interface TokenDetailsProps {
  token: Token;
}
const timeFrames = ["4H", "12H", "1D", "3D", "7D", "14D", "30D", "ALL"];
const trendPeriods = [
  {
    label: "4 Hours",
    value: "-4",
    percent: "0.06",
  },
  {
    label: "12 Hours",
    value: "-8",
    percent: "0.11",
  },
  {
    label: "1 Day",
    value: "-15",
    percent: "0.21",
  },
  {
    label: "3 Days",
    value: "-30",
    percent: "0.42",
  },
  {
    label: "7 Days",
    value: "-44",
    percent: "0.61",
  },
];
interface TopHolder {
  rank: number;
  address: string;
  verified?: boolean;
  percentage: number;
  quantity: string;
}
const topHolders: TopHolder[] = [
  {
    rank: 1,
    address: "Raydium Authority V4 | Liquidity Pool",
    verified: true,
    percentage: 11.3,
    quantity: "113040565.95",
  },
  {
    rank: 2,
    address: "5rtfp2Z2QBDSv8vkdNTqKsZ1aTccKPhasPynAhipcx4Ve",
    percentage: 0.73,
    quantity: "7328174.62",
  },
];
export const TokenDetails = ({ token }: TokenDetailsProps) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("14D");
  const [copied, setCopied] = useState(false);
  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  console.log(copied);

  const handleTimeFrameChange = (timeFrame: string) => {
    setSelectedTimeFrame(timeFrame);
  };
  return (
    <div className="w-full">
      {/* Token Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Image
            src={token.icon}
            alt={token.name}
            className="w-12 h-12 rounded-full"
            width={12}
            height={12}
          />
          <div>
            <h1 className="text-2xl font-semibold text-white">{token.name}</h1>
            <div className="flex items-center gap-2 text-slate-400">
              <span>{token.symbol}</span>
              <span>•</span>
              <button
                onClick={() => handleCopy(token.address || "")}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                {token.address}
                <Copy size={14} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 transition-colors flex items-center gap-2"
          >
            <span>View on Explorer</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
      {/* Token Stats with Holder Trends */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {[
          {
            label: "Holders",
            value: token.holders.toLocaleString(),
          },
          {
            label: "Market Cap",
            value: "$439.89K",
          },
          {
            label: "Market Cap/Holder",
            value: "$61.75",
          },
          {
            label: "Holder Distribution Score",
            value: "3.52",
          },
          {
            label: "Holder Trends",
            custom: (
              <div className="space-y-1.5 mt-1">
                {trendPeriods.slice(0, 3).map((period, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="text-slate-400">{period.label}</span>
                    <div className="flex items-center gap-1 text-red-400">
                      <ArrowDownRight size={12} className="flex-shrink-0" />
                      <span>{period.value}</span>
                      <span className="text-slate-500">
                        ({period.percent}%)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ),
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700"
          >
            <p className="text-sm text-slate-400">{stat.label}</p>
            {stat.custom ? (
              stat.custom
            ) : (
              <p className="text-lg font-medium text-white">{stat.value}</p>
            )}
          </div>
        ))}
      </div>
      {/* Chart Section */}
      <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {timeFrames.map((timeFrame) => (
            <button
              key={timeFrame}
              onClick={() => handleTimeFrameChange(timeFrame)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedTimeFrame === timeFrame
                  ? "bg-blue-500/20 text-blue-400"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              {timeFrame}
            </button>
          ))}
        </div>
        <div className="h-[400px]">
          <TokenChart
            data={token.chartData || [65, 59, 80, 81, 56, 55, 40]}
            isPositive={token.change24h >= 0}
          />
        </div>
      </div>
      {/* Distribution Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Distribution Stats */}
        <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700">
          <h2 className="text-lg font-medium text-white mb-4">
            Holder Distribution
          </h2>
          <div className="space-y-4">
            {[
              {
                label: "Top Holder",
                value: "11.30%",
              },
              {
                label: "Top 10 Holders",
                value: "16.87%",
              },
              {
                label: "Top 25 Holders",
                value: "25.18%",
              },
              {
                label: "Top 50 Holders",
                value: "37.12%",
              },
              {
                label: "Top 100 Holders",
                value: "53.32%",
              },
              {
                label: "Top 250 Holders",
                value: "88.57%",
              },
            ].map((stat, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-slate-400">{stat.label}</span>
                <span className="text-white font-medium">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Top Holders Table */}
        <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700">
          <h2 className="text-lg font-medium text-white mb-4">Top Holders</h2>
          <div className="space-y-3">
            {topHolders.map((holder, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-slate-700/50 last:border-0 gap-2 sm:gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-slate-400 w-6 flex-shrink-0">
                    #{holder.rank}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-1 sm:mb-0">
                      <span className="text-white truncate">
                        {holder.address}
                      </span>
                      {holder.verified && (
                        <Info
                          size={14}
                          className="text-blue-400 flex-shrink-0"
                        />
                      )}
                    </div>
                    <span className="text-sm text-slate-400 block sm:hidden">
                      {holder.quantity} ({holder.percentage}%)
                    </span>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-white font-medium">
                    {holder.quantity}
                  </span>
                  <span className="text-sm text-slate-400">
                    ({holder.percentage}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
