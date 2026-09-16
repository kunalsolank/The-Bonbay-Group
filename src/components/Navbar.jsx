import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {
      name: "Trading",
      dropdown: [
        { name: "Forex", path: "/forex" },
        { name: "Commodities", path: "/commodities" },
        { name: "Indices", path: "/indices" },
        { name: "Stocks", path: "/stocks" },
      ],
    },
    {
      name: "Account",
      dropdown: [
        {
          name: "Account Compare",
          path: "/account-compare",
        },
        {
          name: "Deposit & Withdrawals",
          path: "/deposit-withdrawals",
        },
      ],
    },
    {
      name: "Tools",
      dropdown: [
        {
          name: "Platform",
          path: "/platform",
        },
        {
          name: "Economic Calendar",
          path: "/economic-calendar",
        },
      ],
    },
    {
      name: "Partnership",
      path: "/partnership",
    },
    {
      name: "About Us",
      path: "/about",
    },
    // {
    //   name: "Blog",
    //   path: "/blog",
    // },
    {
      name: "Contact Us",
      path: "/contactus",
    },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="h-24 flex items-center justify-between">
          {/* LOGO */}

          <Link to="/" className="text-white text-2xl font-bold">
            <img src={logo} alt="" loading="lazy" />
          </Link>

          {/* DESKTOP NAV */}

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenMenu(item.name)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {/* Dropdown item */}

                {item.dropdown ? (
                  <button className="flex items-center gap-2 text-md font-bold text-black hover:text-[#ade512] transition-colors duration-300">
                    {item.name}

                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`transition-transform duration-300 ${
                        openMenu === item.name ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="text-md font-bold text-black hover:text-[#ade512] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                )}

                {/* DROPDOWN */}

                {item.dropdown && (
                  <div
                    className={`
                      absolute left-1/2 -translate-x-1/2 top-full pt-4
                      transition-all duration-300
                      ${
                        openMenu === item.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }
                    `}
                  >
                    <div className="w-64 bg-[#101010] border border-[#252525] rounded-2xl p-2 shadow-2xl">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="group flex items-center justify-between px-4 py-3 rounded-xl text-sm text-[#999] hover:text-white hover:bg-[#181818] transition-all duration-300"
                        >
                          <span>{dropdownItem.name}</span>

                          <span className="text-[#555] group-hover:text-[#a0d311] group-hover:translate-x-1 transition-all">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT CTA */}

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

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-black"
          >
            <div className="space-y-1.5">
              <span className="block w-7 h-[2px] bg-black" />
              <span className="block w-7 h-[2px] bg-black" />
              <span className="block w-5 h-[2px] bg-black ml-auto" />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`
          lg:hidden absolute top-24 left-0 w-full
          bg-[#0b0b0b] border-t border-[#202020]
          transition-all duration-300 overflow-hidden
          ${mobileOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="w-[90%] mx-auto py-6">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-[#1c1c1c]">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === item.name ? null : item.name)
                    }
                    className="w-full flex items-center justify-between py-4 text-white"
                  >
                    {item.name}

                    <span
                      className={`transition-transform ${
                        openMenu === item.name ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </button>

                  <div
                    className={`
                      overflow-hidden transition-all duration-300
                      ${openMenu === item.name ? "max-h-96 pb-3" : "max-h-0"}
                    `}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 pl-4 text-[#777] hover:text-[#a0d311]"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-white"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <Link
            to="/open-account"
            onClick={() => setMobileOpen(false)}
            className="mt-6 flex justify-center bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white py-4 rounded-full font-semibold"
          >
            Open Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
