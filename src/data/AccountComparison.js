 export const accounts = [
    {
      name: "ONE MAKER",
      deposit: "$100",
      spread: "2",
      leverage: "1000:1*",
      maxOrders: "200",
      commission: "0",
      featured: false,
    },
    {
      name: "ONE TRADER",
      deposit: "$500",
      spread: "1.6",
      leverage: "500:1*",
      maxOrders: "300",
      commission: "0",
      featured: true,
    },
    {
      name: "ONE PROFESSIONAL",
      deposit: "$1,000",
      spread: "1.0",
      leverage: "300:1*",
      maxOrders: "300",
      commission: "0",
      featured: false,
    },
    {
      name: "ONE MARKET",
      deposit: "$5,000",
      spread: "0",
      leverage: "300:1*",
      maxOrders: "300",
      commission: "$8",
      featured: false,
    },
    {
      name: "ONE ROYAL",
      deposit: "$10,000",
      spread: "ECN",
      leverage: "200:1*",
      maxOrders: "UNLIMITED",
      commission: "$6",
      featured: false,
    },
  ];


  export const features = [
    { label: "Minimum Opening Deposit", key: "deposit" },
    { label: "Spreads (in pips)", key: "spread" },
    { label: "Max Leverage", key: "leverage" },
    { label: "Trading Platform", value: "MT5" },
    { label: "Fifth Decimal", type: "check" },
    { label: "Execution Type", value: "STP/MARKET" },
    { label: "Minimum Trade Size", value: "0.01" },
    { label: "Trade Size Increment", value: "0.01" },
    { label: "Max Total Trades", value: "20" },
    { label: "Max Simultaneous Open Orders", key: "maxOrders" },
    { label: "Margin Call / Stop Out (%)", value: "100 / 30" },
    { label: "Telephone Trading", type: "check" },
    { label: "Commission", key: "commission" },
  ];


  export const policyNotes = [
    "Balance above $1,000: Leverage reduced to 1000:1",
    "Balance above $5,000: Leverage reduced to 500:1",
    "Balance above $25,000: Leverage reduced to 300:1",
    "Balance above $50,000: Leverage reduced to 200:1",
    "Balance above $100,000: Leverage reduced to 100:1",
  ];