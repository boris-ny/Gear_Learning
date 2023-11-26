// src/components/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Driving Test Website</h1>
      <Link to="/question/1">Start Test</Link>
    </div>
  );
}

export default Home;
