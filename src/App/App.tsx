import { Routes, Route, Navigate } from "react-router-dom";

import "./App.scss";
import { Home } from "../Pages/Home";
import { Overview } from "../Pages/Overview";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

const App = () => (
  <div className="app">
    <Nav />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

export default App;
