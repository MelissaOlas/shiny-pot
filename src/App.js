import "./App.css";
import RecipeCard from "./components/recipes/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{"M's recipes"}</h1>
      </header>
      <div className="App-page">
        <div className="App-recipes-container">
          <RecipeCard />
        </div>
        <div className="App-recipes-container"></div>
      </div>
    </div>
  );
}

export default App;
