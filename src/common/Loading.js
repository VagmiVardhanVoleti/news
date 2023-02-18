import { Spinner } from "react-bootstrap";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <Spinner className="loading-grow" animation="grow" variant="success" />
      <Spinner className="loading-grow" animation="grow" variant="danger" />
      <Spinner className="loading-grow" animation="grow" variant="warning" />
      <Spinner className="loading-grow" animation="grow" variant="primary" />
    </div>
  );
};

export default Loading;
