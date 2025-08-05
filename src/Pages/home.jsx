import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Stats from "../Components/Stats";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div className="homeWrapper">
      <Hero />
      <Services />
      <Testimonials />
      <Stats />
    </div>
  );
};
export default Home;
