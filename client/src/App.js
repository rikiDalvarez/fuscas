import Cars from "./Components/cars/Cars"
import './App.css';
import AddCar from "./Components/addCar/AddCar";

function App() {
  
  return (
    <>
      <div className="App">
        <img className="bg-emerald-500 h-64" src='../public/logo192.png' alt="logo"></img>
        <AddCar></AddCar>       
        <button className="add-car text text-4xl bg-slate-500 border-4 border-dotted rounded text-white text-2xl m-8 p-2" type="button"> add new car </button>
        <Cars></Cars>
      </div>
    </>
  );
}

export default App;
