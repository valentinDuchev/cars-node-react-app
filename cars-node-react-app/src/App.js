// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './Layout/css/App.css';
import Home from "./Layout/components/Home/Home";
import About from "./Pages/About";
import Cars from "./Layout/components/Cars/Cars";
import Contacts from "./Pages/Contacts";
import Header from "./Layout/components/Header/Header";
import Footer from "./Layout/components/Footer/Footer";
import { CarDetails } from "./Layout/components/CarDetails/CarDetails";

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
      <Footer/>
    </div>
  );
}

export default App;
