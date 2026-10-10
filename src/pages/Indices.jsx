import React from "react";
import MarketPageTemplate from "./MarketPageTemplate";
import { indicesData } from "../data/marketsData";

const Indices = () => <MarketPageTemplate {...indicesData} />;

export default Indices;
