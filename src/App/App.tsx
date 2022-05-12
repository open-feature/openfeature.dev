import { Routes, Route } from "react-router-dom";

import "./App.scss";
import { Home } from "../Pages/Home";
import { Overview } from "../Pages/Overview";
import { Nav } from "./Nav";
import { Community } from "../Pages/Community";
import { Participate } from "../Pages/Participate";
import { Footer } from "./Footer";

const App = () => (
  <div className="app">
    <Nav />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/community" element={<Community />} />
        <Route path="/participate" element={<Participate />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

export default App;
