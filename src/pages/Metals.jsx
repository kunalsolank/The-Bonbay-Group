import React from "react";
import MarketPageTemplate from "./MarketPageTemplate";
import { metalsData } from "../data/marketsData";

const Metals = () => <MarketPageTemplate {...metalsData} />;

export default Metals;