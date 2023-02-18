import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import withLoader from "../hoc/withLoader";

const NewsContainer = (props) => {
  const [newsArticles, setNewsArticiles] = useState([]);

  useEffect(() => {
    fetchNewsArticiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchNewsArticiles = async () => {
    try {
      props.startLoading();
      const articles = await axios.get(
        "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed"
      );
      setNewsArticiles(articles.data);
      props.stopLoading();
    } catch (error) {
      props.stopLoading();
      console.error(`Error while fetching articles: ${error}`);
    }
  };

  return (
    <>
      {newsArticles.map((article, index) => {
        return (
          <div key={index}>
            <NewsCard article={article} />
          </div>
        );
      })}
    </>
  );
};

export default withLoader(NewsContainer);
