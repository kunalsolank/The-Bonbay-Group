import { useState } from "react";
import { Link } from "react-router-dom";

const menuSections = [
  {
    title: "Markets",
    items: [
      { name: "Forex", href: "/forex/" },
      { name: "Commodities", href: "/commodities/" },
      { name: "Indices", href: "/indices/" },
      { name: "Stocks", href: "/stocks/" },
    ],
  },
  {
    title: "Trading",
    items: [
      { name: "Platform", href: "/platform/" },
      { name: "Account Compare", href: "/account-compare/" },
      { name: "Deposit & Withdrawals", href: "/deposit-withdrawals/" },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        name: "Platform",
        href: "/platform",
      },
      {
        name: "Economic Calendar",
        href: "/economic-calendar/",
      },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About Us", href: "/about-us/" },
      { name: "Blog", href: "/blog/" },
    ],
  },
  {
    title: "Partnership programs",
    items: [
      {
        name: "Partnership",
        href: "/partnership/",
      },
    ],
  },
  {
    title: "Policy",
    items: [
      {
        name: "Privacy Policy",
        href: "/privacy-policy/",
      },
      {
        name: "Terms And Conditions",
        href: "/terms-and-conditions/",
      },
      {
        name: "AML Policy",
        href: "/aml-policy/",
      },
      {
        name: "Withdrawal Policy",
        href: "/withdrawal-policy/",
      },
    ],
  },
];

export default function Footer() {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuTitle) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuTitle]: !prev[menuTitle],
    }));
  };

  return (
    <footer
      id="site-footer"
      className="border-t border-[#ffffff1f] relative overflow-hidden pt-16 pb-12 bg-[#05040b]"
    >
      <div className="container mx-auto max-w-[1430px] px-4 pb-5">
        {/* =========================================
            ADDRESS + SOCIAL SECTION
        ========================================== */}
        <div className="section _addressSocial">
          <div className="row flex flex-wrap gap-y-5 lg:gap-y-4 lg:justify-between items-center">
            {/* Address */}
            <div className="col-12 lg:col-6 w-full lg:w-5/12">
              <div className="box">
                <h6 className="text-base font-medium text-white footer-heading mb-3">
                  Address
                </h6>

                <div className="row flex flex-col md:flex-row gap-y-5 lg:gap-y-0 gap-x-4 lg:gap-x-5">
                  {/* Seychelles */}
                  <div className="col-12 md:col-6 w-full md:w-1/2">
                    <div className="col-wrap">
                      <div className="text-base font-medium text-white mb-2 flex items-center gap-1">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_271_13)">
                            <g clipPath="url(#clip1_271_13)">
                              <rect
                                width="12"
                                height="12"
                                rx="6"
                                fill="white"
                              />

                              <path d="M-6 -1H22V13H-6V-1Z" fill="white" />

                              <path
                                d="M-6 13V-1H22V3.66667L-6 13Z"
                                fill="#D22730"
                              />

                              <path d="M-6 13V-1H11.5L-6 13Z" fill="#FED141" />

                              <path d="M-6 13V-1H4.5L-6 13Z" fill="#002F6C" />

                              <path d="M-6 13L22 9.5V13H-6Z" fill="#007A33" />
                            </g>
                          </g>

                          <defs>
                            <clipPath id="clip0_271_13">
                              <rect width="12" height="12" fill="white" />
                            </clipPath>

                            <clipPath id="clip1_271_13">
                              <rect
                                width="12"
                                height="12"
                                rx="6"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>

                        <span>Seychelles</span>
                      </div>

                      <p className="text-base text-white mb-2">
                        Physical Address :{" "}
                        <span className="text-white/70">
                          Oilaji Trade Centre - 1st Floor, Victoria, Mahe,
                          Seychelles
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Saint Lucia */}
                  <div className="col-12 md:col-6 w-full md:w-1/2">
                    <div className="col-wrap">
                      <div className="text-base font-medium text-white mb-2 flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#65CFFF" rx="8" />

                          <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="m7.964 3 4.202 9.977L3.833 13l4.13-10Z"
                            clipRule="evenodd"
                          />

                          <path
                            fill="#000001"
                            fillRule="evenodd"
                            d="m7.966 4.375 3.638 8.582-7.208.02 3.57-8.602Z"
                            clipRule="evenodd"
                          />

                          <path
                            fill="#FFCE00"
                            fillRule="evenodd"
                            d="m7.964 8 4.202 4.987L3.833 13l4.13-5Z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span>Saint Lucia</span>
                      </div>

                      <p className="text-base text-white mb-2">
                        Registered Address :{" "}
                        <span className="text-white/70">
                          Ground Floor, The Sotheby Building, Rodney Village,
                          Rodney Bay, Gros Islet, Saint Lucia
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact + Social */}
            <div className="col-12 lg:col-5 w-full lg:w-5/12">
              <div className="row flex flex-wrap">
                <div className="col-12 md:col-6 w-full md:w-1/2"></div>

                {/* Contact */}
                <div className="col-12 md:col-6 w-full md:w-1/2">
                  <div className="col-wrap flex flex-col justify-between mb-4">
                    {/* Phone */}
                    <div className="text-base text-white mb-3 flex flex-wrap gap-3">
                      <h6 className="text-base font-medium text-white footer-heading mb-2">
                        Contact us
                      </h6>

                      <a
                        href="tel:+2482513375"
                        className="text-white/50 font-normal hover:text-[#EED85F] no-underline transition-colors"
                      >
                        +248 2 513 375
                      </a>
                    </div>

                    {/* Email */}
                    <div className="text-base text-white mb-0 flex flex-wrap gap-3">
                      <h6 className="text-base font-medium text-white footer-heading mb-2">
                        Email us
                      </h6>

                      <a
                        href="mailto:support@dollrexcapital.com"
                        className="text-white/50 font-normal hover:text-[#EED85F] no-underline transition-colors"
                      >
                        support@dollrexcapital.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="col-12 md:col-7 w-full md:w-7/12">
                  <h6 className="text-base font-medium text-white footer-heading mb-3">
                    Social Media
                  </h6>

                  <div className="flex gap-2 items-center">
                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/profile.php?id=61580004359539"
                      className="p-0 rounded-full hover:bg-[#EED85F] transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        width="39"
                        height="38"
                        viewBox="0 0 39 38"
                      >
                        <path
                          stroke="#fff"
                          strokeOpacity=".6"
                          d="M19.37.5c10.073 0 18.237 8.145 18.237 18.19 0 10.045-8.164 18.19-18.238 18.19S1.131 28.735 1.131 18.69C1.13 8.646 9.295.5 19.369.5Z"
                        />

                        <path
                          fill="#fff"
                          fillOpacity=".6"
                          d="M21.164 13.837h1.328v-2.313a17.488 17.488 0 0 0-1.94-.102c-1.916 0-3.23 1.204-3.23 3.414v2.037h-2.117v2.586h2.118v6.5h2.596v-6.5h2.03l.323-2.586H19.92v-1.78c0-.745.201-1.256 1.245-1.256Z"
                        />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/dollrex_capital/"
                      className="p-0 rounded-full hover:bg-[#EED85F] transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="39"
                        fill="none"
                        viewBox="0 0 40 39"
                      >
                        <ellipse
                          cx="20"
                          cy="19.69"
                          stroke="#fff"
                          strokeOpacity=".6"
                          strokeWidth="1.115"
                          rx="18.738"
                          ry="18.69"
                        />

                        <path
                          fill="#fff"
                          fillOpacity=".6"
                          d="M24.164 10.491a5.052 5.052 0 0 1 5.057 5.046v8.307a5.052 5.052 0 0 1-5.057 5.046h-8.328a5.052 5.052 0 0 1-5.057-5.046v-8.307a5.051 5.051 0 0 1 5.057-5.046h8.328Zm-8.328 1.785a3.266 3.266 0 0 0-3.271 3.261v8.307a3.266 3.266 0 0 0 3.27 3.26h8.33a3.266 3.266 0 0 0 3.27-3.26v-8.307a3.266 3.266 0 0 0-3.27-3.26h-8.33Zm2.255 3.636a4.232 4.232 0 0 1 2.563-.428l.333.063a4.213 4.213 0 0 1 3.226 3.488l.036.33a4.209 4.209 0 0 1-2.315 4.054 4.233 4.233 0 0 1-4.884-.784 4.212 4.212 0 0 1 1.041-6.723Zm2.303 1.338a2.436 2.436 0 0 0-2.537 1.311 2.426 2.426 0 0 0 1.79 3.492 2.435 2.435 0 0 0 2.821-2.565l-.02-.19a2.431 2.431 0 0 0-1.862-2.012l-.192-.036Zm4.285-3.017a.893.893 0 0 1 0 1.776l-.092.005h-.007a.893.893 0 0 1 0-1.785h.007l.092.004Z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 my-5" />

        {/* =========================================
            MENU SECTION
        ========================================== */}
        <div className="section _menus">
          <div className="row flex flex-wrap gap-y-5 lg:gap-4 lg:justify-between">
            <div className="col-12 w-full">
              <div className="row flex flex-wrap gap-y-3 md:gap-5 lg:gap-0">
                {menuSections.map((section) => (
                  <div
                    key={section.title}
                    className="col-12 md:col-4 lg:col-2 w-full md:w-1/3 lg:w-1/6"
                  >
                    <nav className="relative">
                      {/* Mobile Section Button */}
                      <button
                        type="button"
                        className="p-0 text-white/50 font-normal text-lg mb-3 w-full text-start md:hidden flex items-center justify-between"
                        onClick={() => toggleMenu(section.title)}
                        aria-expanded={openMenus[section.title] || false}
                      >
                        <span>{section.title}</span>

                        <svg
                          className={`w-5 h-5 transition-transform duration-300 ${
                            openMenus[section.title] ? "rotate-180" : ""
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

                      {/* Desktop Heading */}
                      <span className="hidden md:block text-white/50 font-normal text-lg mb-3">
                        {section.title}
                      </span>

                      {/* Menu Items */}
                      <div
                        className={`${
                          openMenus[section.title] ? "block" : "hidden"
                        } md:block`}
                      >
                        <ul className="flex flex-col w-full">
                          {section.items.map((item) => (
                            <li key={item.name} className="menu-item">
                              <Link
                                to={item.href}
                                className="block text-white hover:text-white/60 no-underline py-1.5 px-0 transition-colors duration-150"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </nav>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-3"></div>

        <hr className="border-gray-600 my-5" />

        {/* =========================================
            INFORMATION SECTION
        ========================================== */}
        <div className="section _info">
          <div className="row">
            <div className="col-12 w-full">
              <div className="col-wrap space-y-4">
                <p className="text-white/50 text-sm leading-relaxed">
                  <strong className="text-white font-medium">
                    Risk Warning:
                  </strong>{" "}
                  DollreX Capital Ltd is Registered in Saint Lucia with a
                  registered address at Ground Floor, The Sotheby Building,
                  Rodney Bay, Gross-Islet Saint Lucia.
                </p>

                <p className="text-white/50 text-sm leading-relaxed">
                  DollreX Capital Ltd is the designated name for Forex and
                  CFD&apos;s trading services provided by DollreX Capital Ltd.
                  The domain dollrexcapital.com is owned by DollreX Capital Ltd,
                  and it serves as the primary platform through which we offer
                  our services. It&apos;s noteworthy that the Forex and CFD
                  products of DollreX Capital Ltd are available through the
                  website dollrexcapital.com, ensuring a seamless and integrated
                  experience for our clients.
                </p>

                <p className="text-white/50 text-sm leading-relaxed">
                  <strong className="text-white font-medium">
                    Risk Statement :
                  </strong>{" "}
                  An investment in derivatives may mean investors may lose an
                  amount even greater than their original investment. Anyone
                  wishing to invest in any of the products mentioned in{" "}
                  <a
                    href="https://www.dollrexcapital.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    www.dollrexcapital.com
                  </a>{" "}
                  should seek their own financial or professional advice.
                  Trading of securities, forex, stock market, commodities,
                  options, and futures may not be suitable for everyone and
                  involves the risk of losing part or all of your money. Trading
                  in the financial markets has large potential rewards but also
                  large potential risk. You must be aware of the risks and be
                  willing to accept them in order to invest in the markets.
                  Don&apos;t invest and trade with money which you can&apos;t
                  afford to lose. Forex Trading is not allowed in some
                  countries, before investing your money, make sure whether your
                  country is allowing this or not.
                </p>

                <p className="text-white/50 text-sm leading-relaxed">
                  You are strongly advised to obtain independent financial,
                  legal, and tax advice before proceeding with any currency or
                  spot metals trade. Nothing in this site should be read or
                  construed as constituting advice on the part of DollreX
                  Capital Ltd or any of its affiliates, directors, officers, or
                  employees.
                </p>

                <p className="text-white/50 text-sm leading-relaxed">
                  <strong className="text-white font-medium">
                    Restricted Regions :
                  </strong>{" "}
                  DollreX Capital Ltd does not provide services for
                  citizens/residents of the United States, UAE, Cuba, Iraq,
                  Iran, Myanmar, North Korea, Sudan. The services of DollreX
                  Capital Ltd are not intended for distribution to, or use by,
                  any person in any country or jurisdiction where such
                  distribution or use would be contrary to local law.
                </p>

                <p className="text-white/50 text-sm leading-relaxed mb-0">
                  <strong className="text-white font-medium">OR :</strong>{" "}
                  Information on this site is not directed at residents in any
                  country or jurisdiction where such distribution or use would
                  be contrary to local law.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 mt-5" />

        {/* =========================================
            COPYRIGHT
        ========================================== */}
        <div className="section _copyright">
          <div className="row">
            <div className="col-12 w-full">
              <div className="col-wrap">
                <p className="text-white text-sm leading-relaxed mb-0">
                  Copyright © 2025 Tradelogicfx
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
