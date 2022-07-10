import { CNCFBadge } from "./CNCFBadge";
import "./footer.scss";

export const Footer = () => {
  return (
    <>
      <CNCFBadge />
      <footer className="footer">
        © 2022 <a href=".">OpenFeature</a> Powered by{" "}
        <a href="https://netlify.com" target="_blank" rel="noreferrer">
          Netlify
        </a>
      </footer>
    </>
  );
};
