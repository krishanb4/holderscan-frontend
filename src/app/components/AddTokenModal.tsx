import React, { useState } from "react";
import {
  X,
  Search,
  Loader2,
  ArrowUpRight,
  ArrowDownRight,
  VerifiedIcon,
} from "lucide-react";
import Image from "next/image";
interface TokenSearchResult {
  icon: string;
  name: string;
  symbol: string;
  network: string;
  verified?: boolean;
  holders: number;
  change24h: number;
}
const popularTokens: TokenSearchResult[] = [
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png",
    name: "Ethereum",
    symbol: "ETH",
    network: "ETH",
    verified: true,
    holders: 123456,
    change24h: 2.5,
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/sol.png",
    name: "Solana",
    symbol: "SOL",
    network: "SOL",
    verified: true,
    holders: 98765,
    change24h: -1.8,
  },
];
interface AddTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const AddTokenModal = ({ isOpen, onClose }: AddTokenModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<TokenSearchResult[]>([]);
  if (!isOpen) return null;
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults(popularTokens);
      setIsSearching(false);
    }, 1000);
  };
  const TokenItem = ({ token }: { token: TokenSearchResult }) => (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700/30 transition-colors cursor-pointer">
      <Image
        width={8}
        height={8}
        src={token.icon}
        alt={token.name}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <h3 className="text-white font-medium truncate">{token.name}</h3>
          {token.verified && (
            <VerifiedIcon size={14} className="text-blue-400 flex-shrink-0" />
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-400">{token.symbol}</span>
          <span className="text-xs text-slate-500">•</span>
          <span className="text-sm text-slate-400">{token.network}</span>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-sm text-white">
          {token.holders.toLocaleString()} holders
        </span>
        <div
          className={`flex items-center gap-1 ${
            token.change24h >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          {token.change24h >= 0 ? (
            <ArrowUpRight size={14} />
          ) : (
            <ArrowDownRight size={14} />
          )}
          <span className="text-sm">{Math.abs(token.change24h)}%</span>
        </div>
      </div>
    </div>
  );
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-2xl border border-slate-800 w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Add Token</h2>
          <form onSubmit={handleSearch} className="relative mb-6">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by token name, symbol, or address"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
          {isSearching ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 size={24} className="animate-spin text-slate-400" />
            </div>
          ) : searchQuery ? (
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-slate-400 mb-3">
                Search Results
              </h3>
              {searchResults.map((token, index) => (
                <TokenItem key={index} token={token} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-slate-400 mb-3">
                  Popular Tokens
                </h3>
                <div className="space-y-2">
                  {popularTokens.map((token, index) => (
                    <TokenItem key={index} token={token} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-400 mb-3">
                  Recent Searches
                </h3>
                <div className="space-y-2">
                  {popularTokens.slice(0, 1).map((token, index) => (
                    <TokenItem key={index} token={token} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
