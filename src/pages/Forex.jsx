import React from "react";
import MarketPageTemplate from "./MarketPageTemplate";
import { forexData } from "../data/marketsData";

const Forex = () => <MarketPageTemplate {...forexData} />;

export default Forex;
