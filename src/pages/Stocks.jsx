import React from "react";
import MarketPageTemplate from "./MarketPageTemplate";
import { stocksData } from "../data/marketsData";

const Stocks = () => <MarketPageTemplate {...stocksData} />;

export default Stocks;
