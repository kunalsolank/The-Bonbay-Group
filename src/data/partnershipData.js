import customerBenifit from "../assets/tbg/customer.svg";
import partnerBenifit from "../assets/tbg/partner.svg";
import Expert from "../assets/Partnership/Expert.png";
import FlexibleEarning from "../assets/Partnership/FlexibleEarning.png";
import LivePerformance from "../assets/Partnership/LivePerformance.png";
import MarketingTools from "../assets/Partnership/MarketingTools.png";
import benefit from "../assets/Partnership/benefit.png";
import growth from "../assets/Partnership/growth.png";
import Payouts from "../assets/Partnership/Payouts.png";
import Highvalue from "../assets/Partnership/High-Value.png";

export const pernerShipDataTab = [
  {
    key: "b1",
    label: "Customer Benefits",
    subtitle: "Customer Benefits",
    title: "Benefits for Your Customers",
    points: [
      "Trade in 80+ global currency pairs from one account.",
      "Use award-winning platforms on mobile, tablet, or desktop.",
      "Get powerful tools to study and analyze the markets easily."
    ],
    buttonText: "Partner Registration",
    buttonLink: "https://www.dollrexcapital.com/partnership/",
    tabTitleIcon: benefit,
    imgSrc: customerBenifit,
  },
  {
    key: "b2",
    label: "partner Benefits",
    subtitle: "Partner Benefits",
    title: "Benefits for Our Partners ",
    points: [
      "Access free marketing tools to attract and convert leads.",
    ],
    buttonText: "Partner Registration",
    buttonLink: "https://www.dollrexcapital.com/partnership/",
    tabTitleIcon:growth,
    imgSrc: partnerBenifit,
  },

];


export const partnerSteps = [
  {
    number: 1,
    title: "SIGN UP",
    description:
      "Fill out a short form to create your partner account — quick and easy.",
    delay: 0,
  },
  {
    number: 2,
    title: "CHOOSE YOUR PLAN",
    description:
      "Pick the commission model that fits your audience and goals.",
    delay: 300,
  },
  {
    number: 3,
    title: "SHARE YOUR REFERRAL LINK",
    description:
      "Use your custom link across websites, blogs, or social media to attract leads or clients.",
    delay: 600,
  },
  {
    number: 4,
    title: "EARN AND GET PAID",
    description:
      "Earn as your leads or clients engage. Track everything live and enjoy quick payouts.",
    delay: 900,
  },
];

export const parnershipBenefits = [
  {
    title: "High-Value Commissions",
    description:
      "Enjoy high commissions that reward every successful referral.",
    image: Highvalue,
    link: "/",
  },
  {
    title: "Flexible Earning Models",
    description:
      "Earn through CPA or CPL, whichever suits you best.",
    image: FlexibleEarning,
    link: "/",
  },
  {
    title: "Instant Payouts",
    description:
      "Get paid instantly with our fast, reliable payout system.",
    image: Payouts,
    link: "/",
  },
  {
    title: "Live Performance Tracking",
    description:
      "Track your performance live with an easy-to-use dashboard.",
    image: LivePerformance,
    link: "/",
  },
  {
    title: "Expert Support",
    description:
      "Access expert support whenever you need guidance or help.",
    image: Expert,
    link: "/",
  },
  {
    title: "Ready-Made Marketing Tools",
    description:
      "Use ready-made tools to promote and grow your earnings.",
    image: MarketingTools,
    link: "/",
  },
]