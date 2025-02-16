import React from "react";
import { X, Send } from "lucide-react";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-[#0a1428] mt-16 py-12 px-4 sm:px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-slate-400 font-medium mb-4">About</h3>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="HolderScan"
                width={200}
                height={100}
                className=""
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Explore real-time and historical data of cryptocurrency token
              holders with Holderscan. Track trends, gain insights, and stay
              informed about the evolving crypto landscape.
            </p>
          </div>
          {/* HolderScan Section */}
          <div>
            <h3 className="text-slate-400 font-medium mb-4">HolderScan</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Premium
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Telegram Bot
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Request a Chain
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Advertise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Legal Section */}
          <div>
            <h3 className="text-slate-400 font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-slate-800">
          <p className="text-slate-400 text-sm mb-4 sm:mb-0">
            © 2025 HolderScan.com. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-white transition-colors"
            >
              <Send size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
