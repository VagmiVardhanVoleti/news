import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsContainer from "./news/NewsContainer";

const App = () => {
  return (
    <div className="App">
      <h2 className="title">Veridic News Articles</h2>
      <NewsContainer />
    </div>
  );
};

export default App;
