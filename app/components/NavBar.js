"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-beige sticky top-0 z-50 shadow-2xs">
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto px-6 ">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center ">
          <Image src={"/logo23.png"} alt={"logo"} width={120} height={120} className="w-30 h-20 object-cover"  />
        </Link>

        <div className="flex  gap-3">
          {/* Deliver to location */}
<div className="flex items-center gap-1 ml-6 text-sm text-dark-brown cursor-pointer">
  <img src="/Egy.webp" alt="Egypt Flag" className="w-6 h-4" />
  <span className="text-xs">Deliver to</span>
</div>

          {/* Search Bar */}
          <div className="mx-6">
            <div className="relative">
              <input
                type="search"
                placeholder="Search products..."
                className="w-220 pl-10 pr-4 py-2 rounded-full outline-0 
               focus:border-brown focus:border-1 text-sm bg-white transition duration-300 shadow-md"
              />
              <svg
                className="absolute left-3 top-2.5 w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 20 20"
              >
                <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-6 ">
          {/* Favorites */}
          <Link
            href="/favourites"
            className={`text-xl transition-transform duration-200 hover:scale-110 ${
              pathname === "/favourites"
                ? "text-brown"
                : "text-brown hover:text-dark-brown"
            }`}
          >
            <MdOutlineFavorite className="text-xl text-brown hover:text-dark-brown transition-colors duration-300" />
          </Link>

          {/* Cart */}
          <Link
            href="/Cart"
            className={`text-xl transition-transform duration-200 hover:scale-110 ${
              pathname === "/cart"
                ? "text-brown"
                : "text-brown hover:text-dark-brown"
            }`}
          >
            <FaShoppingCart className="text-xl text-brown hover:text-dark-brown transition-colors duration-300" />
          </Link>

          {/* Profile dropdown */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="focus:outline-none"
            >
              <Image
                src="/MohabUpdated.jpg"
                width={40}
                height={40}
                className="rounded-full border-2 border-[#dcd5b9] hover:border- mr-4 transition-all cursor-pointer"
                alt="Profile"
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-beige">
                {" "}
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-[#0B0B0B] hover:bg-beige transition"
                >
                  My Profile
                </Link>
                <Link
                  href="/orders"
                  className="block px-4 py-2 text-[#0B0B0B] hover:bg-beige transition"
                >
                  My Orders
                </Link>
                   <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-[#0B0B0B] hover:bg-beige transition"
                >
                  My dashboard
                </Link>
                <Link
                  href="/SignIn"
                  className="block px-4 py-2 text-[#0B0B0B] hover:bg-beige transition"
                >
                  Sign Out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

// bg-gradient-to-r from-[#3b7a57] via-[#d4af37] to-[#40E0D0]

// bg-gradient-to-r from-[#1b365d] via-[#d4af37] to-[#40E0D0]

// bg-gradient-to-r from-[#Dcd5b9] via-[#A52A2A] to-[#3b7a57]

// bg-gradient-to-r from-[#0B0B0B] via-[#1b365d] to-[#d4af37]

// bg-gradient-to-r from-[#f5f5dc] via-[#Dcd5b9] to-[#A52A2A]
