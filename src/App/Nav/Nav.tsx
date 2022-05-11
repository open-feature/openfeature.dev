import { NavLink } from "react-router-dom";
import { LINKS } from "./links";
import { ReactComponent as Logo } from "./logo-black.svg";
import "./nav.scss";

export const Nav = () => (
  <nav className="nav">
    <NavLink to="/" className="logo">
      <Logo />
    </NavLink>
    <div className="links">
      {LINKS.map((link) => {
        return link.isExternal ? (
          <a href={link.location} className="external-link">
            {link.label}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        ) : (
          <NavLink to={link.location}>{link.label}</NavLink>
        );
      })}
    </div>
  </nav>
);
