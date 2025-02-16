"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import Image from "next/image";
interface HotToken {
  icon: string;
  name: string;
  network: string;
  change24h: number;
}
const hotTokens: HotToken[] = [
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png",
    name: "EPSTEIN",
    network: "ETH",
    change24h: 2.5,
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png",
    name: "FROX",
    network: "ETH",
    change24h: -1.8,
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png",
    name: "USA",
    network: "ETH",
    change24h: 3.2,
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png",
    name: "SHIB ARMY",
    network: "ETH",
    change24h: -2.1,
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png",
    name: "ACE",
    network: "ETH",
    change24h: 1.5,
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png",
    name: "EDDIE",
    network: "ETH",
    change24h: -0.8,
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png",
    name: "OUTIE",
    network: "ETH",
    change24h: 4.2,
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png",
    name: "$SITCOM",
    network: "ETH",
    change24h: -1.4,
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png",
    name: "LIVE",
    network: "ETH",
    change24h: 2.8,
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png",
    name: "XENCAT",
    network: "ETH",
    change24h: -3.1,
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png",
    name: "MTARD",
    network: "ETH",
    change24h: 1.9,
  },
];
export const HotTokens = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationFrameId: number;
    let startTime: number | null = null;
    const speed = 1; // pixels per frame
    let currentScroll = 0;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      if (!scrollContainer) return;
      currentScroll += speed;
      // Reset scroll position when we've scrolled the width of the first set of items
      if (currentScroll >= scrollContainer.scrollWidth / 2) {
        currentScroll = 0;
      }
      scrollContainer.scrollLeft = currentScroll;
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
  return (
    <div className="w-full bg-slate-800/50 backdrop-blur-sm border-y border-slate-700 py-2 mb-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-400 flex-shrink-0">
            Hot Tokens:
          </span>
          <div
            ref={scrollRef}
            className="flex items-center gap-4 overflow-x-hidden"
          >
            <div className="flex items-center gap-4 animate-none">
              {[...hotTokens, ...hotTokens].map((token, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 cursor-pointer group flex-shrink-0"
                >
                  <div className="flex items-center gap-1.5">
                    <Image
                      src={token.icon}
                      alt={token.name}
                      className="w-5 h-5 rounded-full flex-shrink-0"
                      width={5}
                      height={5}
                    />
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors whitespace-nowrap">
                      {token.name}
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-0.5 flex-shrink-0 ${
                      token.change24h >= 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {token.change24h >= 0 ? (
                      <ArrowUpRight size={14} className="flex-shrink-0" />
                    ) : (
                      <ArrowDownRight size={14} className="flex-shrink-0" />
                    )}
                    <span className="text-xs whitespace-nowrap">
                      {Math.abs(token.change24h)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
