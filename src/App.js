import "./App.css";
import Casestudypage from "./containers/casestudypage/Casestudypage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./containers/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/casestudy" element={<Casestudypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
