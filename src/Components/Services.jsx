import {
  FaBullhorn,
  FaPaintBrush,
  FaChartLine,
  FaLaptopCode,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      desc: "Boost your brand visibility with result-driven marketing campaigns.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Designing",
      desc: "Creative and stunning designs that make your brand unforgettable.",
    },
    {
      icon: <FaChartLine />,
      title: "SEO Optimization",
      desc: "Rank higher on search engines and attract more organic traffic.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "Responsive and engaging websites tailored to your business needs.",
    },
  ];

  return (
    <section className="services" id="services">
      <h2 className="services__title">Our Services</h2>
      <p className="services__subtitle">
        We offer a wide range of solutions to help your business grow online.
      </p>
      <div className="services__grid">
        {services.map((service, index) => (
          <div className="services__card" key={index}>
            <div className="services__icon">{service.icon}</div>
            <h3 className="services__card-title">{service.title}</h3>
            <p className="services__card-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
