import { ReactComponent as LogoToggleLeft } from "../../assets/logo-black-toggle-left.svg";
import { ReactComponent as Logo } from "../../assets/logo-black.svg";
import { useThemeContext } from "../../common/context/theme";
import "./home.scss";

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
          technologies. OpenFeature provides a <b>unified API and SDK</b>,
          and a <b>developer-first, cloud-native implementation,</b> with{" "}
          <b>extensibility for open source and commercial offerings.</b>
        </p>
        <div className="actions">
          <a
            className="button"
            href="https://killercoda.com/open-feature"
          >
            Try OpenFeature
          </a>
          <a
            className="button"
            href="https://docs.openfeature.dev/docs/reference/intro"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};
