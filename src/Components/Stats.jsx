import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const data = [
    { value: 150, label: "Projects Completed" },
    { value: 90, label: "Happy Clients" },
    { value: 4, label: "Years of Experience" },
    { value: 12, label: "Team Members" },
  ];

  return (
    <section className="stats" ref={ref} id="stats">
      <div className="stats__grid">
        {data.map((item, i) => (
          <div className="stats__box" key={i}>
            <h3 className="stats__number">
              {inView && <CountUp end={item.value} duration={2} />}+
            </h3>
            <p className="stats__label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
