import "./footer.scss";
import cncfIconDark from "../../assets/cncf-dark.svg";
import cncfIconLight from "../../assets/cncf-light.svg";
import { useThemeContext } from "../../common/context/theme";

export const Footer = () => {
  const {
    themeContext: { darkScheme },
  } = useThemeContext();

  return (
    <footer className="footer">
      <img
        src={darkScheme ? cncfIconDark : cncfIconLight}
        alt="CNCF"
        className="cncf-logo"
      />
      <span className="footer-text">
        <span>
          © 2023 <a href=".">OpenFeature</a> is a{" "}
          <a href="https://www.cncf.io" target="_blank" rel="noreferrer">
            Cloud Native Computing Foundation
          </a> (<a href="https://linuxfoundation.org/trademark-usage">CNCF®</a>){" "}
          sandbox project{" "}
        </span>
        <span className="footer-text-divider">|</span>{" "}
        <span>
          This site is powered by{" "}
          <a href="https://netlify.com" target="_blank" rel="noreferrer">
            Netlify
          </a>
        </span>
      </span>
    </footer>
  );
};
