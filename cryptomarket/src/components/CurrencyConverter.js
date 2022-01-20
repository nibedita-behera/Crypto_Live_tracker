import React from "react";
import "../index.css";
import ExchangeRate from "./Exchange";
import { useState } from "react";
import axios from "axios";
const CurrencyConverter = () => {
  const cryptos = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryAmount, setchosenPrimaryAmount] = useState(cryptos);
  const [chosenSecondaryAmount, setchosenSecondaryAmount] = useState("USD");
  // console.log(chosenPrimaryAmount);
  // console.log(chosenSecondaryAmount);

  const [amount, setAmount] = useState(1);
  console.log(amount);
  const [exchangeRate, setexchangeRate] = useState(0);
  // const [primaryCurrecny, setprimaryCurrecny] = useState(0);
  const [result, setResult] = useState(0);
  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: chosenPrimaryAmount,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryAmount,
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": "3bdd3919f5msh0aae7ab636ad9fbp1c210ajsn670f0330ae1c",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setexchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            amount
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(exchangeRate);
  return (
    <div className="currency-converter">
      <h2>CurrencyCalculator </h2>
      <div className="table">
        <table>
          <body>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input
                  type="number"
                  onChange={(e) => setAmount(e.target.value)}
                  name="primary-amount"
                  value={amount}
                />
              </td>
              <td>
                <select
                  name="option-1"
                  className="currency-options"
                  value={chosenPrimaryAmount}
                  onChange={(e) => setchosenPrimaryAmount(e.target.value)}
                >
                  {cryptos.map((crypto, _index) => (
                    <option key={_index}>{crypto}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency</td>
              <td>
                <input
                  value={result}
                  disabled={true}
                  name="secondary-amount"
                ></input>
              </td>
              <td>
                <select
                  value={chosenSecondaryAmount}
                  name="option-2"
                  className="currency-options-1"
                  onChange={(e) => setchosenSecondaryAmount(e.target.value)}
                >
                  {cryptos.map((crypto, _index) => (
                    <option key={_index}>{crypto}</option>
                  ))}
                </select>
              </td>
            </tr>
          </body>
        </table>
        <button id="convert-button" onClick={convert}>
          Convert
        </button>
      </div>
      <ExchangeRate exchangeRate={exchangeRate} />
    </div>
  );
};

export default CurrencyConverter;
