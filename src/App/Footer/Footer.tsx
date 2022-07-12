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
      <p className="footer-text">
        © 2022 <a href=".">OpenFeature</a> is a{" "}
        <a href="https://www.cncf.io" target="_blank" rel="noreferrer">
          Cloud Native Computing Foundation
        </a>{" "}
        sandbox project Powered by{" "}
        <a href="https://netlify.com" target="_blank" rel="noreferrer">
          Netlify
        </a>
      </p>
    </footer>
  );
};
