import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo-black.svg";
import "./nav.scss";

export const Nav = () => (
  <nav className="nav">
    <Link to="/" className="logo">
      <Logo />
    </Link>
    <div className="links">
      <Link to="/overview">Overview</Link>
      <a href="https://github.com">Specification</a>
      <a href="https://github.com">Roadmap</a>
      <Link to="/community">Community</Link>
      <Link to="/participate">Participate</Link>
      <a href="https://github.com">GitHub</a>
    </div>
  </nav>
);
