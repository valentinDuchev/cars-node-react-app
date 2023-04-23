import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './Layout/css/App.css';
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>} />

      </Routes>
    </div>
  );
}

export default App;
