import "./App.css";
import AppetizersRow from "./pages/AppetizersRow";
import Meals from "./pages/MealsRow";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{"M's recipes"}</h1>
      </header>
      <div className="App-page">
        <div className="App-recipes-container">
          <AppetizersRow />
          <Meals />
        </div>
        <div className="App-recipes-container"></div>
      </div>
    </div>
  );
}

export default App;
