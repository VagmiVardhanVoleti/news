import Card from "react-bootstrap/Card";
import { parseString } from "../utilities/helper";

import "./news-card.css";

const NewsCard = ({ article, variant }) => {
  const title = parseString(article.title.rendered);
  const link = article.shortlink;

  const handleOnClick = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Card
      className="card"
      bg={variant.toLowerCase()}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      onClick={() => handleOnClick(link)}
    >
      <Card.Body>{title}</Card.Body>
    </Card>
  );
};

export default NewsCard;
