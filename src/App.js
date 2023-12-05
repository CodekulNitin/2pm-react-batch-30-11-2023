import "./App.css";
import HomePage from "./components/home/HomePage"; //import 
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="App bg-[#F8F2E8]">
      {/* export  */}
      <Navbar />
      <HomePage /> 

    </div>
  );
}

export default App;
