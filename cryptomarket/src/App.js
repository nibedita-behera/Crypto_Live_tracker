import CurrencyConverter from "./components/CurrencyConverter";
import Newsfeed from "./components/Newfeed";
import Header from "./components/Header";
// import Text from "./components/Text";
import TimeSeries from "./components/TimeSeries";
const App = () => {
  return (
    <div className="main-container">
      <div className="app">
        <Header></Header>
        <CurrencyConverter></CurrencyConverter>
        <TimeSeries></TimeSeries>
        <Newsfeed></Newsfeed>
      </div>
    </div>
  );
};

export default App;
