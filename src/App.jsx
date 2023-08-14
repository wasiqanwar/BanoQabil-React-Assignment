import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { InventoryUpdate } from "./pages/InventoryUpdate";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<InventoryUpdate />} />
        </Routes>
      </Router>
  );
}

export default App;
