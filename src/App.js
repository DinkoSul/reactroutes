import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dogs from "./components/Dogs";
import Pets from "./components/Pets";

function App() {
  return (
    <div className="App">
      <h1>Multi page</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pets">See all pets</NavLink>
          </li>
          <li>
            <Link to="/pets/dogs">See all dogs</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets/dogs" element={<Dogs />} />
        <Route path="/pets" element={<Pets />} />
      </Routes>
    </div>
  );
}

export default App;
