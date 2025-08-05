import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300); // delay for smooth animation
  }, []);

  return (
    <section className={`hero ${loaded ? "hero--loaded" : ""}`}>
      <div className="hero__content">
        <h1 className="hero__title">
          Elevate Your <span>Digital Presence</span>
        </h1>
        <p className="hero__subtitle">
          Graphilla Tech provides <strong>Digital Marketing</strong> and{" "}
          <strong>Graphic Designing</strong> services to grow your brand.
        </p>

        <NavLink to={"/contact"} className="hero__btn">
          Get Started{" "}
        </NavLink>
      </div>
      <div className="hero__image">
        <img src="/assets/1.jpg" alt="Digital Marketing" />
      </div>
    </section>
  );
};

export default Hero;
