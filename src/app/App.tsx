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
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
          <Route path="/error" element={<h2>Error</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
