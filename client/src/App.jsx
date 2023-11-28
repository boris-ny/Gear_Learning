// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Quizzes from "./pages/Quizzes";
import Result from "./pages/Result";
import NavHeader from "./components/Navbar";
import Videos from "./pages/Videos";
import Flashcards from "./pages/Flashcards";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavHeader />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/result" element={<Result />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/flashcards" element={<Flashcards />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
