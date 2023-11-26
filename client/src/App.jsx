// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/question/:id" element={<Question />} />
          <Route path="/result" element={<Result />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
