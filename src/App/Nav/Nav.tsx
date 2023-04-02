import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import { LINKS, SOCIALS } from "./links";
import "./nav.scss";
import { ToggleLogo } from "./ToggleLogo";

export const Nav = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = React.useState(false);
  return (
    <nav className={classNames("nav", mobileNavIsOpen && "mobile-nav-open")}>
      <ToggleLogo />
      <div className="links">
        {LINKS.map((link, key) => {
          return link.isExternal ? (
            <a
              key={key}
              href={link.location}
              className="external-link"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ) : (
            <NavLink key={key} to={link.location}>
              {link.label}
            </NavLink>
          );
        })}
        <ul className="socials">
          {SOCIALS.map(({ name, link }, key) => (
            <li>
              <a key={key} href={link} target="_blank" rel="noreferrer" aria-label={name}>
                <i className={`fa-brands fa-${name}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="trigger"
        onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}
      >
        <i
          className={`fa-solid ${mobileNavIsOpen ? "fa-xmark" : "fa-bars"}`}
        ></i>
      </button>
    </nav>
  );
};
