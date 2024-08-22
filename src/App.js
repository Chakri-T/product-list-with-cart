import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Item";
import "./styles/main.scss";
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Desserts</h1>
        <div className="items">
          <Item />
        </div>
      </div>
    </div>
  );
}

export default App;
