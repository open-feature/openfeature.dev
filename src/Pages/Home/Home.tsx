import "./home.scss";
import { ReactComponent as Logo } from "../../assets/logo-black.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div>
        <div className="logo">
          <Logo />
        </div>
        <p>
          OpenFeature is an <b>open standard</b> for feature flag management,
          created to support a robust feature flag ecosystem using cloud native
          technologies. OpenFeature will provide a <b>unified API and SDK</b>,
          and a <b>developer-first, cloud-native implementation,</b> with{" "}
          <b>extensibility for open source and commercial offerings.</b>
        </p>
        <div className="sign-up">
          <i className="fa-solid fa-angles-right"></i>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfRG8Ldun3HmcUsZCFMMORKyafjEUUKDYz5X-Zv8ZFCgbwlXA/viewform"
            rel="noreferrer"
          >
            Sign-up for news
          </a>
          <i className="fa-solid fa-angles-left"></i>
        </div>
        <div className="actions">
          <Link className="button" to="/overview">
            Learn More
          </Link>
          <Link className="button" to="/community">
            Get Involved
          </Link>
        </div>
      </div>
    </div>
  );
};
