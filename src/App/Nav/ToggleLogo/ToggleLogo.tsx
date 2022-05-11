import classNames from "classnames";
import { useThemeContext } from "../../../common/context/theme";
import { ReactComponent as Logo } from "../../../assets/logo-black.svg";

import "./toggle-logo.scss";
import { Link } from "react-router-dom";

export const ToggleLogo = () => {
  const { themeContext, updateThemeContext } = useThemeContext();
  const handleSchemeChange = () => {
    updateThemeContext({ darkScheme: !themeContext.darkScheme });
  };

  return (
    <div
      className={classNames([
        "toggle-logo",
        themeContext.darkScheme && "is-dark-mode",
      ])}
    >
      <Link to="/">
        <Logo />
      </Link>
      <div className="toggle" onClick={handleSchemeChange}>
        <div className="track">
          <div />
        </div>
      </div>
    </div>
  );
};
