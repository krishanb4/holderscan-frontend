"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AuthModal } from "./AuthModal";

export const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  return (
    <>
      {" "}
      <nav className="w-full backdrop-blur-md bg-slate-900/50 border-b border-slate-800 px-4 sm:px-6 py-3 sm:py-4">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo.png"
              alt="HolderScan"
              width={200}
              height={100}
              className=""
            />
          </div>
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="hidden md:flex items-center gap-6">
              <button className="px-4 py-2 text-slate-300 hover:text-white transition-colors">
                R.CASINO
              </button>
              <button className="px-4 py-2 text-slate-300 hover:text-white transition-colors">
                PUMP.NEWS
              </button>
              <button className="px-4 py-2 text-slate-300 hover:text-white transition-colors">
                TRADE NOW
              </button>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => setShowLogin(true)}
                className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors text-sm sm:text-base"
              >
                Login
              </button>
              <button
                onClick={() => setShowSignup(true)}
                className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors text-sm sm:text-base"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      <AuthModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        type="login"
      />
      <AuthModal
        isOpen={showSignup}
        onClose={() => setShowSignup(false)}
        type="signup"
      />
    </>
  );
};
