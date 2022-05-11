import { NavLink } from "react-router-dom";
import { LINKS } from "./links";
import "./nav.scss";
import { ToggleLogo } from "./ToggleLogo";

export const Nav = () => (
  <nav className="nav">
    <ToggleLogo />
    <div className="links">
      {LINKS.map((link, key) => {
        return link.isExternal ? (
          <a key={key} href={link.location} className="external-link">
            {link.label}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        ) : (
          <NavLink key={key} to={link.location}>
            {link.label}
          </NavLink>
        );
      })}
    </div>
  </nav>
);
