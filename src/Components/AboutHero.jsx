import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="aboutHero">
      <motion.div
        className="aboutHero__bg"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      ></motion.div>

      <motion.div
        className="aboutHero__content"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="aboutHero__title">
          About <span className="gradient-text">Graphilla Tech</span>
        </h1>
        <p className="aboutHero__subtitle">
          Empowering brands through <span>creativity</span> and{" "}
          <span>innovation</span>.
        </p>
        <motion.a
          href="#aboutStory"
          className="aboutHero__btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover More
        </motion.a>
      </motion.div>

      <motion.div
        className="aboutHero__shapes"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <span className="shape shape--circle"></span>
        <span className="shape shape--triangle"></span>
        <span className="shape shape--square"></span>
      </motion.div>
    </section>
  );
};

export default AboutHero;
