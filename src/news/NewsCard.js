import Card from "react-bootstrap/Card";

const NewsCard = ({ article }) => {
  return (
    <Card>
      <Card.Body>{article.title.rendered}</Card.Body>
    </Card>
  );
};

export default NewsCard;
