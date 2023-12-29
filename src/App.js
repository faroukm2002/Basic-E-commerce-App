import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
<Routes>
<Route path="/" element={
  <>
  <Slider></Slider>
      <ProductsList></ProductsList>
  </>
} ></Route>

</Routes>

      
    </div>
  );
}

export default App;
