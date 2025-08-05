import { motion } from "framer-motion";

const AboutStory = () => {
  return (
    <section className="aboutStory" id="aboutStory">
      <motion.div
        className="aboutStory__container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="aboutStory__text">
          <h2 className="aboutStory__title">Our Journey</h2>
          <p className="aboutStory__description">
            Since our inception, Graphilla Tech has been on a mission to
            revolutionize the way businesses connect with their audiences
            through innovative digital marketing strategies and visually
            stunning graphic designs.
          </p>
          <p className="aboutStory__description">
            Our team combines data-driven insights with creative passion,
            ensuring every campaign tells a story that resonates deeply and
            drives impactful results. From startups to established enterprises,
            we've partnered with diverse clients, helping them build brand
            identity, grow online presence, and engage customers meaningfully.
          </p>
          <p className="aboutStory__description">
            Throughout the years, we have evolved by embracing the latest
            trends, adopting cutting-edge technology, and nurturing a culture of
            continuous learning. Our journey is fueled by the desire to create
            not just marketing campaigns but memorable experiences that inspire
            action.
          </p>
        </div>
        <div className="aboutStory__image">
          <img src="/assets/1.jpg" alt="Our journey" />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutStory;
