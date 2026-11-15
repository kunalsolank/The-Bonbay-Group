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


   export const forexFAQs = [
    {
      question: " What is a trading account? ",
      answer:
        " A trading account is a platform where you can buy and sell financial instruments like forex, stocks, or commodities. It holds your funds, tracks your trades, and helps you manage your market activity in one place.  ",
    },
    {
      question: " How do I open a trading account? ",
      answer:
        " Opening an account is simple. Just sign up online, fill in your details, upload ID proof for verification, and add funds using your preferred method. Once approved, you can start trading right away. ",
    },
    {
      question: " Do I need to choose between different account types? ",
      answer:
        " No, there’s only one powerful account with all the features you need. You don’t have to worry about selecting from multiple types—it’s built to suit every kind of trader. ",
    },
    {
      question: " Is this account good for beginners? ",
      answer:
        " Yes, it’s ideal for beginners. The setup is simple, the interface is user-friendly, and helpful resources are available to guide you step-by-step as you begin trading. ",
    },
    {
      question: " Can experienced traders use the same account? ",
      answer:
        " Definitely. The account comes with advanced tools, fast execution, and real-time data—perfect for experienced traders who want performance and simplicity in one place. ",
    },
    {
      question: " What markets can I trade with this account? ",
      answer:
        " You get access to a variety of markets including forex, commodities, indices, and stocks. It’s all available under one login, with no need for separate accounts. ",
    },
    {
      question: " Are there any hidden charges or fees? ",
      answer:
        " No, we believe in full transparency. All fees are clearly shown before you trade, so there are no surprises—just fair and open pricing. ",
    },
    {
      question: " How do I deposit or withdraw money? ",
      answer:
        " You can deposit or withdraw easily using cards, bank transfers, or e-wallets. The process is secure and quick, with most transactions processed in a short time. ",
    },
    {
      question: " Is my money safe in this account? ",
      answer:
        " Yes, your funds are protected with high-level encryption and stored securely. We follow strict safety and compliance standards to keep your money and data safe. ",
    },
    {
      question: " Can I get help if I face any issues?  ",
      answer:
        " Yes, our support team is always here to help. Whether you need assistance by chat, email, or phone, you’ll get fast, friendly, and reliable support whenever you need it.. ",
    },
  ];