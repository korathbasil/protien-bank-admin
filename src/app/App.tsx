import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { Home, Login } from "../pages";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
