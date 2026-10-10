import React from "react";
import { Monitor, Smartphone, Globe } from "lucide-react";
import FeatureSection from "./Featuresection";

const items = [
  {
    icon: Monitor,
    metric: "MT5",
    title: "Desktop",
    description:
      "Experience powerful trading with MetaTrader 5 on your desktop. Analyze the markets with advanced charting tools, manage your orders smoothly, and enjoy fast execution — all in one professional platform designed for serious traders.",
    buttons: ["Windows", "macOS"],
  },
  {
    icon: Smartphone,
    metric: "MT5",
    title: "Mobile",
    featured: true, // gradient highlighted card
    description:
      "Stay connected to the markets wherever you go. With MT5 on your Android or iOS device, you can trade with full functionality, including one-click trading and access to real-time price feeds, right at your fingertips.",
    buttons: ["App Store", "Google Play"],
  },
  {
    icon: Globe,
    metric: "MT5",
    title: "Web",
    description:
      "No downloads or installations required — MetaTrader 5 Web gives you instant access to your trading account from any internet browser. It's fast, secure, and fully synced with your desktop and mobile accounts.",
    buttons: ["Launch Web Terminal"],
  },
];

export default function MetaTraderPlatforms() {
  return (
    <FeatureSection
      eyebrow="Trading Platforms"
      heading="Download"
      highlight="MetaTrader 5"
      description="Access global markets from wherever you are. Choose the platform that fits the way you trade."
      items={items}
      columns={3}
    />
  );
}