import "./home.scss";
import { ReactComponent as Logo } from "../../assets/logo-black.svg";
import { ReactComponent as LogoToggleLeft } from "../../assets/logo-black-toggle-left.svg";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../common/context/theme";

export const Home = () => {
  const { themeContext } = useThemeContext();

  return (
    <div className="home">
      <div>
        <div className="logo">
          {themeContext.darkScheme ? <LogoToggleLeft /> : <Logo />}
        </div>
        <p>
          OpenFeature is an <b>open standard</b> for feature flag management,
          created to support a robust feature flag ecosystem using cloud native
          technologies. OpenFeature will provide a <b>unified API and SDK</b>,
          and a <b>developer-first, cloud-native implementation,</b> with{" "}
          <b>extensibility for open source and commercial offerings.</b>
        </p>
        <div className="actions">
          <Link className="button" to="/overview">
            Learn More
          </Link>
          <a
            className="button"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfRG8Ldun3HmcUsZCFMMORKyafjEUUKDYz5X-Zv8ZFCgbwlXA/viewform"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};
