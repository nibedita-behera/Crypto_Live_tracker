import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Newsfeed = () => {
  const [articles, setarticles] = useState(null);
  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://crypto-news-live3.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "crypto-news-live3.p.rapidapi.com",
        "x-rapidapi-key": "3bdd3919f5msh0aae7ab636ad9fbp1c210ajsn670f0330ae1c",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setarticles(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(articles);
  const listArticles = articles?.slice(0, 7);
  return (
    <div className="news-feed">
      <h2>Read More</h2>
      {listArticles?.map((article, _index) => (
        <div key={_index}>
          <a href={article.url}>
            <p>{article.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Newsfeed;
