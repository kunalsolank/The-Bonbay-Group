import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#ffffff]  shadow-sm border-b border-[#ffffff1f] z-50">
      <div className="max-w-[89.375rem] mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          {/* =========================
              LOGO
          ========================== */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <img src={logo} alt="TradeLogicFX" className="h-[50px] w-auto" />
            </Link>
          </div>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <nav className="hidden md:flex gap-[30px] items-center">
            {/* Trading */}
            <div className="relative group">
              <button
                type="button"
                className="text-black hover:text-[#20a46a] flex items-center gap-2 transition-colors"
                aria-haspopup="true"
              >
                Trading
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="#20a46a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Trading Dropdown */}
              <div className="absolute top-full left-0 hidden group-hover:block text-white min-w-[200px]">
                <div className="pt-8">
                  <div className="shadow-sm border border-[#ffffff1f] rounded-lg z-20 min-w-[250px] bg-[#05040b] overflow-hidden">
                    <Link
                      to="/forex"
                      className="block px-4 py-3  hover:text-[#20a46a] transition-colors"
                    >
                      Forex
                    </Link>
                    <Link
                      to="/commodities"
                      className="block px-4 py-3 hover:text-[#20a46a] transition-colors"
                    >
                      Commodities
                    </Link>

                    <Link
                      to="/stocks"
                      className="block px-4 py-3 hover:text-[#20a46a] transition-colors"
                    >
                      Stocks
                    </Link>

                    <Link
                      to="/indices"
                      className="block px-4 py-3 hover:text-[#20a46a] transition-colors"
                    >
                      Indices
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Account */}
            <div className="relative group">
              <button
                type="button"
                className="text-black hover:text-[#20a46a] flex items-center gap-2 transition-colors"
                aria-haspopup="true"
              >
                Account
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="#20a46a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Account Dropdown */}
              <div className="absolute top-full left-0 hidden group-hover:block text-white">
                <div className="pt-8">
                  <div className="shadow-sm border border-[#ffffff1f] rounded-lg z-20 min-w-[250px] bg-[#05040b] overflow-hidden">
                    <Link
                      to="/account-compare"
                      className="block px-4 py-3 hover:text-[#20a46a] transition-colors"
                    >
                      Account Compare
                    </Link>

                    <Link
                      to="/deposit-withdrawals"
                      className="block px-4 py-3 hover:text-[#20a46a] transition-colors"
                    >
                      Deposit & Withdrawals
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="relative group">
              <button
                type="button"
                className="text-black hover:text-[#20a46a] flex items-center gap-2 transition-colors"
                aria-haspopup="true"
              >
                Tools
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="#20a46a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Tools Dropdown */}
              <div className="absolute top-full left-0 hidden group-hover:block text-white min-w-[200px]">
                <div className="pt-8">
                  <div className="shadow-sm border border-[#ffffff1f] rounded-lg z-20 min-w-[250px] bg-[#05040b] overflow-hidden">
                    <Link
                      to="/platform"
                      className="block px-4 py-3  hover:text-[#20a46a] transition-colors"
                    >
                      Platform
                    </Link>

                    <Link
                      to="/economic-calendar"
                      className="block px-4 py-3  hover:text-[#20a46a] transition-colors"
                    >
                      Economic Calendar
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Links */}
            <Link
              to="/partnership"
              className="text-black hover:text-[#20a46a] transition-colors"
            >
              Partnership
            </Link>

            <Link
              to="/about"
              className="text-black hover:text-[#20a46a] transition-colors"
            >
              About Us
            </Link>

            <Link
              to="/contactus"
              className="text-black hover:text-[#20a46a] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* =========================
              DESKTOP CTA
          ========================== */}
          <div className="hidden lg:block">
            <Link
              to="/open-account"
              className="group flex items-center gap-3 bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white px-5 py-3 rounded-full font-semibold text-sm hover:scale-[1.03] transition-all duration-300"
            >
              Open Account
              <span className="w-7 h-7 rounded-full bg-white text-[#1fa864] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* =========================
              MOBILE HAMBURGER
          ========================== */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-black hover:text-[#20a46a] p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* =========================
            MOBILE MENU
        ========================== */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-4 pb-3 space-y-1 border-t border-[#ffffff1f] bg-[#05040b] mt-4">
              {/* =========================
                  TRADING
              ========================== */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleDropdown("trading")}
                  className="w-full flex justify-between items-center px-3 py-3 text-white hover:text-[#20a46a] transition-colors"
                >
                  <span>Trading</span>

                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeDropdown === "trading" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === "trading" && (
                  <div className="pl-6 py-2 space-y-1 rounded-lg border border-[#ffffff1f]">
                    <Link
                      to="/forex"
                      className="block py-2 text-white hover:text-[#20a46a] transition-colors"
                      onClick={closeMenu}
                    >
                      Forex
                    </Link>
                    <Link
                      to="/commodities"
                      className="block py-2 text-white hover:text-[#20a46a] transition-colors"
                      onClick={closeMenu}
                    >
                      Commodities
                    </Link>

                    <Link
                      to="/stocks"
                      className="block py-2 text-white hover:text-[#20a46a] transition-colors"
                      onClick={closeMenu}
                    >
                      Stocks
                    </Link>

                    <Link
                      to="/indices"
                      className="block py-2 text-white hover:text-[#20a46a] transition-colors"
                      onClick={closeMenu}
                    >
                      Indices
                    </Link>
                  </div>
                )}
              </div>

              {/* =========================
                  ACCOUNT
              ========================== */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleDropdown("account")}
                  className="w-full flex justify-between items-center px-3 py-3 text-white hover:text-[#20a46a] transition-colors"
                >
                  <span>Account</span>

                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeDropdown === "account" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === "account" && (
                  <div className="pl-6 py-2 space-y-1 rounded-lg border border-[#ffffff1f]">
                    <Link
                      to="/account-compare"
                      className="block py-2 text-white hover:text-[#20a46a] transition-colors"
                      onClick={closeMenu}
                    >
                      Account Compare
                    </Link>

                    <Link
                      to="/deposit-withdrawals"
                      className="block py-2 text-white hover:text-[#20a46a] transition-colors"
                      onClick={closeMenu}
                    >
                      Deposit & Withdrawals
                    </Link>
                  </div>
                )}
              </div>

              {/* =========================
                  TOOLS
              ========================== */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleDropdown("tools")}
                  className="w-full flex justify-between items-center px-3 py-3 text-white hover:text-[#20a46a] transition-colors"
                >
                  <span>Tools</span>

                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeDropdown === "tools" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === "tools" && (
                  <div className="pl-6 py-2 space-y-1 rounded-lg border border-[#ffffff1f]">
                    <Link
                      to="/platform"
                      className="block py-2 text-white hover:text-[#20a46a] transition-colors"
                      onClick={closeMenu}
                    >
                      Platform
                    </Link>
                    <Link
                      to="/economic-calendar"
                      className="block py-2 text-white hover:text-[#20a46a] transition-colors"
                      onClick={closeMenu}
                    >
                      Economic Calendar
                    </Link>
                  </div>
                )}
              </div>

              {/* =========================
                  DIRECT LINKS
              ========================== */}

              <Link
                to="/partnership"
                className="block px-3 py-3 text-white hover:text-[#20a46a] transition-colors"
                onClick={closeMenu}
              >
                Partnership
              </Link>

              <Link
                to="/about"
                className="block px-3 py-3 text-white hover:text-[#20a46a] transition-colors"
                onClick={closeMenu}
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="block px-3 py-3 text-white hover:text-[#20a46a] transition-colors"
                onClick={closeMenu}
              >
                Contact Us
              </Link>

              {/* =========================
                  MOBILE CTA
              ========================== */}
              <div className="pt-4 px-3">
                <button
                  type="button"
                  className="w-full  bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white px-6 py-3 font-medium uppercase secondary-font tracking-wide rounded-md"
                  onClick={closeMenu}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
