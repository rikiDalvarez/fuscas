import Cars from "./Components/cars/Cars"
import AddCar from "./Components/addCar/AddCar";

function App() {
  
  return (

      <div className="App">
        <h1 className= "italic font-mono text-8xl text-slate-50 tracking-normal text-center align-middle p-5 bg-gradient-to-r from-red-600 to-gray-700">Fuscas</h1>
      <AddCar />   
      <Cars/>
      </div>
    
  );
}

export default App;
