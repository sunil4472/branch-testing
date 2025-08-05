import Slider from "react-slick";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Manager",
      img: "/assets/2.jpg",
      review:
        "Graphilla Tech helped us double our website traffic in just 3 months. Their team is amazing!",
    },
    {
      name: "David Lee",
      position: "Startup Founder",
      img: "/assets/2.jpg",
      review:
        "The graphic designs were stunning and gave our brand a whole new identity. Highly recommend!",
    },
    {
      name: "Emily Brown",
      position: "E-commerce Owner",
      img: "/assets/2.jpg",
      review:
        "SEO services boosted our online sales significantly. Professional and reliable team.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials__title">What Our Clients Say</h2>
      <p className="testimonials__subtitle">
        Trusted by businesses across industries
      </p>
      <Slider {...settings} className="testimonials__slider">
        {testimonials.map((t, index) => (
          <div className="testimonials__card" key={index}>
            <div className="testimonials__avatar">
              <img src={t.img} alt={t.name} />
            </div>
            <p className="testimonials__review">“{t.review}”</p>
            <h3 className="testimonials__name">{t.name}</h3>
            <span className="testimonials__position">{t.position}</span>
            <div className="testimonials__stars">{"★".repeat(5)}</div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
