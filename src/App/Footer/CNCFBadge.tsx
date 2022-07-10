import "./footer.scss";
import cncfIcon from "../../assets/cncf-icon.svg";

export const CNCFBadge = () => {
  return (
    <section className="footer-cncf">
      <p>
        OpenFeature is a{" "}
        <a href="https://www.cncf.io" target="_blank" rel="noreferrer">
          <b>Cloud Native Computing Foundation</b>
        </a>{" "}
        sandbox project.
      </p>
      <img src={cncfIcon} alt="CNCF" className="cncf-logo" />
    </section>
  );
};
