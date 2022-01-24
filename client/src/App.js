import Cars from "./Components/cars/Cars"
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <img src='../public/logo192.png' alt="logo"></img>
        <button className="add-car" type="button"> add new car </button>
        <Cars></Cars>
      </div>
    </>
  );
}

export default App;
