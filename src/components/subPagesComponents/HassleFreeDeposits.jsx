import React from "react";
import FeatureGridSection from "./FeatureGridSection";
import {paymentMethods} from '../../data/DipositeWithdrawal'


// Map your data to the shape FeatureGridSection expects
const items = paymentMethods.map((m) => ({
  id: m.number,
  number: m.number,
  image: m.image,
  title: m.name,
  details: [
    { label: "Minimum Amount", value: m.minimum },
    { label: "Currencies", value: m.currencies },
    { label: "Processing Time", value: m.processing },
    { label: "Commissions", value: m.commission },
  ],
}));

const HassleFreeDeposits = () => (
  <FeatureGridSection
    title="Hassle-Free Deposits"
    description="We’ve teamed up with trusted global payment partners to give you a smooth and secure deposit experience. Add funds easily using your preferred method—fast, safe, and stress-free."
    items={items}
    minItemWidth="320px"
  />
);

export default HassleFreeDeposits;