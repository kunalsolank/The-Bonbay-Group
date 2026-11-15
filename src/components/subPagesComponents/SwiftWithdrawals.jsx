import React from "react";
import FeatureGridSection from "./FeatureGridSection";
import {withdrawalMethods} from '../../data/DipositeWithdrawal'


// Map your data to the shape FeatureGridSection expects
const items = withdrawalMethods.map((m) => ({
  id: m.number,
  number: m.number,
  image: m.image,
  title: m.name,
  details: [
    { label: "Minimum Amount", value: m.minimum },
    { label: "Currencies", value: m.currencies },
    { label: "Commissions", value: "Free" },
    {
      label: "Processing Time",
      value: "1–3 hours approval, up to 5 min transfer",
    },
  ],
}));

const SwiftWithdrawals = () => (
  <FeatureGridSection
    title="Swift Withdrawals"
    description="Withdrawing your money is just as simple. Make a request in a few clicks, and we’ll process it within 1 working day—no long waits, no hidden steps."
    items={items}
    minItemWidth="320px"
  />
);

export default SwiftWithdrawals;