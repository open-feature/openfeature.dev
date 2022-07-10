import "./footer.scss";
import cncfIcon from "../../assets/cncf-icon.svg";

export const CNCFBadge = () => {
  return (
    <section className="footer-cncf">
      <span>
        OpenFeature is a{" "}
        <a href="https://www.cncf.io" target="_blank" rel="noreferrer">
          Cloud Native Computing Foundation
        </a>{" "}
        sandbox project.
      </span>
      <img src={cncfIcon} alt="CNCF" className="cncf-logo" />
    </section>
  );
};
