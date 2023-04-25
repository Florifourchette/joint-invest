import React from "react";
import { useState } from "react";
import StockListItem from "../components/PortfolioStockListItem";
import PortfolioChart from "../components/PortfolioChart.jsx";
import PortfolioDropdown from "../components/PortfolioDropdown";
import { stocklistitem_data } from "../assets/stocklistitem_data";
import { v4 as uuidv4 } from "uuid";
import { mockPortfolioData } from "../assets/mockPortfolioData";
//import chartData from "../assets/lineGraphData";
//import { url } from "inspector";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

export default function Portfolio() {
  const portfolioName = mockPortfolioData[0].overview[0].name_of_portfolio;
  const investedAmount = mockPortfolioData[0].overview[0].invested_amount;
  const availableAmount = mockPortfolioData[0].overview[0].available_amount;

  const companyIds = mockPortfolioData[0].stocks.map(
    (stock) => stock.company_id
  );
  const cleanCompanyIds = companyIds.join();
  console.log(cleanCompanyIds);

  const [interval, setinterval] = useState("");

  /* const fetchMultipleCompanies = fetch(
    `https://api.twelvedata.com/time_series?symbol=${cleanCompanyIds}&interval=1day&format=JSON&dp=2&start_date=04/10/2023 5:44 PM&end_date=04/14/2023 5:44 PM&apikey=6a897c4468e74344b1546b36728e991b`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((parsedData) => parsedData)
    .catch((error) => console.log(error.message)); */

  return (
    <>
      <div className="portfolio_overview">
        <h1>{portfolioName}</h1>
        <h3>Total Assets</h3>
        <h1>153,60</h1>
        <h4>Amount invested</h4>
        <h4>{investedAmount}</h4>

        <p>Total loss</p>
        <p>-12,01</p>
      </div>
      <div className="portfolio_lineGraph">
        <PortfolioChart />
      </div>
      <div className="portfolio_available_amount">
        <h4>Available amount</h4>
        <h4>{availableAmount}€</h4>
      </div>
      <div className="PortfolioDropdown">
        <PortfolioDropdown setInterval={setInterval} />
      </div>
      <div className="portfolio_stocks">
        <h3>Your Stocks</h3>
        {stocklistitem_data &&
          stocklistitem_data.map((item) => {
            return (
              <StockListItem
                url={item.url}
                symbol={item.meta.symbol}
                id={uuidv4()}
              />
            );
          })}
      </div>
      <div className="buttons">
        <button>Order book</button>
        <button>Buy/Sell</button>
      </div>
    </>
  );
}