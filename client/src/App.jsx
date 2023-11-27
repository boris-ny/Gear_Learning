// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";
import NavHeader from "./components/Navbar";
import Tutorials from "./pages/Tutorials";
import Flashcards from "./pages/Flashcards";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavHeader />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question/:id" element={<Question />} />
          <Route path="/result" element={<Result />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path ="/flashcards" element = {<Flashcards/>}/>
        </Routes>
       <Footer/> 
      </div>
    </Router>
  );
}

export default App;
