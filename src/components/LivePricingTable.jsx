import React, { useEffect, useState } from "react";

import { Badge } from "./ui/badge";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

import TradingViewMarketData, {
  ALL_SYMBOL_SECTORS,
} from "./TradingviewWidget";

/* ─────────────────────────────────────────────────────────────
   Maps each UI category label → TradingView sectionName(s).
   Use null to show ALL sectors.
───────────────────────────────────────────────────────────── */
const CATEGORY_SECTOR_MAP = {
  FOREX: ["Forex"],
  METALS: ["Metals"],
  "INDEX CFDS": ["Indices"],
  COMMODITIES: ["Commodities"],
  CRYPTO: ["Crypto"],
  "US STOCKS": ["US Stocks"],
  "UAE STOCKS": ["UAE Stocks"],
};

/* Helper – filter ALL_SYMBOL_SECTORS down to only the needed ones */
function getSectorsForCategory(category) {
  const names = CATEGORY_SECTOR_MAP[category];
  if (!names) return ALL_SYMBOL_SECTORS;
  return ALL_SYMBOL_SECTORS.filter((s) => names.includes(s.sectionName));
}

const CATEGORIES = [
  "FOREX",
  "METALS",
  "INDEX CFDS",
  "COMMODITIES",
  "CRYPTO",
  "US STOCKS",
  "UAE STOCKS",
];

export default function LivePricingTable({
  category = null,
}) {
  const [activeCategory, setActiveCategory] = useState(
    category || "FOREX"
  );

  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    }
  }, [category]);

  /* Compute the symbol sectors to pass into the widget */
  const activeSectors = getSectorsForCategory(activeCategory);

  return (
    <div className="w-full">

      {/* ========================================= */}
      {/* TABS – hidden when a category is forced   */}
      {/* ========================================= */}

      {!category && (
        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="mb-6"
        >
          <TabsList
            className="
              flex
              w-full
              justify-start
              gap-1
              overflow-x-auto
              rounded-none
              border-b
              border-white/[0.08]
              bg-transparent
              p-0
            "
          >
            {CATEGORIES.map((item) => (
              <TabsTrigger
                key={item}
                value={item}
                className="
                  rounded-none
                  border-b-2
                  border-transparent
                  px-4
                  py-3
                  text-xs
                  sm:text-sm
                  font-semibold
                  tracking-wider
                  whitespace-nowrap
                  text-white/50

                  data-[state=active]:border-[#20a46a]
                  data-[state=active]:text-white

                  hover:text-white
                "
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

      {/* ========================================= */}
      {/* CARD                                      */}
      {/* ========================================= */}

      <div
        className="
          w-full
          overflow-hidden
          rounded-none
          border
          border-white/[0.08]
          bg-transparent
          backdrop-blur-md
          shadow-[0_12px_40px_rgba(0,0,0,0.5)]
        "
      >

        {/* HEADER */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/[0.08]
            px-5
            py-4
          "
        >
          <h4
            className="
              text-sm
              sm:text-base
              font-bold
              uppercase
              tracking-wider
              text-white
            "
          >
            LIVE MT5 PRICING — {activeCategory}
          </h4>

          <Badge
            variant="live"
            className="gap-2 px-3 py-1"
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#20a46a]
                shadow-[0_0_8px_#20a46a]
                animate-pulse
              "
            />

            LIVE
          </Badge>
        </div>

        {/* ======================================= */}
        {/* TRADINGVIEW MARKET DATA                 */}
        {/* ======================================= */}

        <div className="w-full overflow-x-auto p-0">
          <TradingViewMarketData symbolSectors={activeSectors} />
        </div>

      </div>
    </div>
  );
}