import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './Layout/css/App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cars from "./Pages/Cars";
import Contacts from "./Pages/Contacts";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/cars' element={<Cars/>} />
      <Route path='/contacts' element={<Contacts/>} />
      </Routes>
    </div>
  );
}

export default App;
