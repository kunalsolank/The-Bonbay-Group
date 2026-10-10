import React from "react";
import MarketPageTemplate from "./MarketPageTemplate";
import { commoditiesData } from "../data/marketsData";

const Commodities = () => <MarketPageTemplate {...commoditiesData} />;

export default Commodities;
