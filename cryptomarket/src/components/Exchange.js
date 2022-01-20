const ExchangeRate = ({ exchangeRate }) => {
  console.log({ exchangeRate });
  return (
    <>
      <div className="exchange">Exchange Rate {exchangeRate}</div>
    </>
  );
};

export default ExchangeRate;
