import "./overview.scss";

export const Overview = () => {
  return (
    <div className="overview">
      <div className="title">
        <h1>Mission</h1>
        <p>
          To improve the software development lifecycle, no matter the size of
          the project, by standardizing feature flagging for everyone.
        </p>
      </div>
      <div className="tiles">
        <div>
          <span>
            <i className="fa-solid fa-scale-balanced"></i>
            <h3>Vendor neutrality</h3>
          </span>
          <p>
            OpenFeature aims to provide a standardized interface for an
            application author to use feature flags in a vendor neutral way.
            This provides flexibility for the application integrators to choose
            the tooling that best fits their current requirements, while
            avoiding code-level lock-in.
          </p>
        </div>
        <div>
          <span>
            <i className="fa-brands fa-uncharted"></i>
            <h3>Extensibility</h3>
          </span>
          <p>
            OpenFeature is extensible while still being easy to work with. It is
            quick to get started with, while providing application authors the
            flexibility to customize the functionality based on their business
            requirements and workflows.
          </p>
        </div>
        <div>
          <span>
            <i className="fa-solid fa-people-roof"></i>
            <h3>Community</h3>
          </span>
          <p>
            OpenFeature is a collective effort that benefits from years of
            experience across multiple verticals, including many of the top
            feature flag vendors and practitioners. The patterns, idioms, and
            techniques developed by this collaboration support feature flagging
            as core principle of the software development lifecycle.
          </p>
        </div>
        <div>
          <span>
            <i className="fa-solid fa-graduation-cap"></i>
            <h3>Education</h3>
          </span>
          <p>
            Feature flagging is a simple, yet powerful mechanism that improves
            the entire software development lifecycle by decoupling feature
            release from a deployment. It isn't, however, ubiquitously used
            throughout the industry. OpenFeature is an opportunity to promote
            good software practices in a vendor neutral way through developing
            feature flag awareness.
          </p>
        </div>
      </div>
    </div>
  );
};
