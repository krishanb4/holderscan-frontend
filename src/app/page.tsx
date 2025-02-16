"use client";
import { TokenCard } from "./components/TokenCard";
import { Plus } from "lucide-react";
import { TrendFilters } from "./components/TrendFilters";
import { TokenTable } from "./components/TokenTable";
import { RecentlyAdded } from "./components/RecentlyAdded";
import { TokenFilters } from "./components/TokenFilters";
import { AddTokenModal } from "./components/AddTokenModal";
import { useState } from "react";

const gainersData = [
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/btc.png",
    name: "The Baldionare",
    symbol: "BALDIONARE",
    holders: 2304,
    change24h: 678.38,
    network: "SOL",
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/eth.png",
    name: "Base Pro Shards",
    symbol: "BPS",
    holders: 36792,
    change24h: 218.13,
    network: "BASE",
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/sol.png",
    name: "GROK3",
    symbol: "GROK3",
    holders: 3947,
    change24h: 152.37,
    network: "SOL",
  },
];
const losersData = [
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/sol.png",
    name: "CARDBOARD",
    symbol: "CARDBOARD",
    holders: 864,
    change24h: -44.19,
    network: "SOL",
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/sol.png",
    name: "Cardboard Cat",
    symbol: "CARDCAT",
    holders: 1318,
    change24h: -36.91,
    network: "SOL",
  },
  {
    icon: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/icon/sol.png",
    name: "DOG ZIP",
    symbol: "DOG.ZIP",
    holders: 1109,
    change24h: -35.42,
    network: "SOL",
  },
];

export default function Home() {
  const [showAddToken, setShowAddToken] = useState(false);
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <TokenFilters />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <TokenCard
            name="ZEUS"
            symbol="ZEUS"
            holders={7124}
            change24h={-0.08}
            address="0x123456789abcdef123456789abcdef123456789a"
            chartData={[80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25]}
          />
          <TokenCard
            name="WIF"
            symbol="WIF"
            holders={213131}
            change24h={0.02}
            address="0xabcdef123456789abcdef123456789abcdef1234"
            chartData={[30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85]}
          />
          <div className="p-4 rounded-xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 border-dashed flex items-center justify-center md:col-span-2 lg:col-span-1">
            <button
              onClick={() => setShowAddToken(true)}
              className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors"
            >
              <Plus size={24} />
              <span>Add Token</span>
            </button>
          </div>
        </div>
        <section className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold">Holder Trends</h2>
            <button
              onClick={() => setShowAddToken(true)}
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
            >
              <Plus size={20} />
              Add Token
            </button>
          </div>
          <TrendFilters />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            <TokenTable
              title="Biggest Gainers"
              data={gainersData}
              type="gainers"
            />
            <TokenTable
              title="Biggest Losers"
              data={losersData}
              type="losers"
            />
          </div>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">
            Recently Added
          </h2>
          <RecentlyAdded />
        </section>
      </main>

      <AddTokenModal
        isOpen={showAddToken}
        onClose={() => setShowAddToken(false)}
      />
    </div>
  );
}
