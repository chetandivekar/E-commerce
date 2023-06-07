import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
    </div>
  );
}

export default App;
