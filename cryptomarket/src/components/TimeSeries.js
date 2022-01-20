import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./Coin";
// import { useState } from "react";

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
function TimeSeries() {
  //   const [timeSeries, setimeSeries] = useState(null);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  });
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log();
  return (
    <div className="time-series">
      <div className="coin-search">
        <h1 className="coin-text">Find your Crypto</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>

      {filterCoins.map((coin) => {
        console.log(coin.image);
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.market_cap}
            price={coin.current_price}
          />
        );
      })}
    </div>
  );
}

export default TimeSeries;
