import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './Layout/css/App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cars from "./Pages/Cars/Cars";
import Contacts from "./Pages/Contacts";
import Header from "./Layout/components/Header";
import { CarDetails } from "./Pages/CarDetails/CarDetails";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/car/:id' element={<CarDetails />} />
      </Routes>
    </div>
  );
}

export default App;
