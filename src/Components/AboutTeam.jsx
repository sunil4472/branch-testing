import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Ram Bhadur",
    position: "CEO",
    img: "/assets/1.jpg",
    description:
      "Dedicated to guiding the team and ensuring innovative solutions for our clients.",
  },
  {
    name: "Sita Kumari",
    position: "Lead Designer",
    img: "/assets/1.jpg",
    description: "Transforms creative ideas into designs that truly inspire.",
  },
  {
    name: "Hari Prasad",
    position: "Marketing Head",
    img: "/assets/1.jpg",
    description: "Helps brands grow with data-driven strategies and campaigns.",
  },
];

const AboutTeam = () => {
  return (
    <section className="aboutTeam" id="aboutTeam">
      <motion.div
        className="aboutTeam__container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="aboutTeam__title">Meet Our Team</h2>
        <p className="aboutTeam__subtitle">
          Passionate individuals leading Graphilla Tech towards excellence
        </p>

        <div className="aboutTeam__grid">
          {teamMembers.map(({ name, position, img, description }, idx) => (
            <motion.div
              className="teamCard"
              key={idx}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(0, 64, 12, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={img} alt={name} className="teamCard__img" />
              <h3 className="teamCard__name">{name}</h3>
              <h4 className="teamCard__position">{position}</h4>
              <p className="teamCard__desc">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutTeam;
