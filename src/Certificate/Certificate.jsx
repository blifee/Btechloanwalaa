import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Certificates.css"; // Styling ka dhyan rakhein

const awardsData = [
  {
    img: "https://www.andromedaloans.com/wp-content/uploads/2023/08/iso-certified.jpg",
    title: "ISO Certified",
  },
  {
    img: "https://www.andromedaloans.com/wp-content/uploads/2022/07/Feature-award-img-02.png",
    title: "Feature Award",
  },
  {
    img: "https://www.andromedaloans.com/wp-content/uploads/2022/08/1.-Surat-CA-Premier-League-2022.png",
    title: "FROM SURAT BRANCH OF WIRC OF ICAI",
  },
  {
    img: "https://www.andromedaloans.com/wp-content/uploads/2022/08/2.-Fullerton-India-Achievement-Award-FY21-22.png",
    title: "FROM SMFG India Credit",
  },
  {
    img: "https://www.andromedaloans.com/wp-content/uploads/2022/08/3.-IDFC-First-Award-for-Appreciation-FY-21-22.png",
    title: "FROM IDFC FIRST BANK",
  },
  {
    img: "https://www.andromedaloans.com/wp-content/uploads/2022/08/4.-FedBank-Award-for-Appreciation-FY-21-22.png",
    title: "FROM FEDERAL BANK",
  },
];

const Certificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4, // Ek time par 3 boxes dikhenge
    slidesToScroll: 0.5,
    autoplay: true,
    autoplaySpeed: 1100 , // 2.5 sec me next slide
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="certificates-section">
      <div className="container">
        <h2 className="title">Our Certificates & Awards</h2>
        <img
    src="/src/assets/Line.svg"
    alt="Line"
    className="mx-auto mt-1 w-40" // Adjust width as needed
  />
        <p>B-Tech Loanwala's achievements so far.</p>
        <Slider {...settings}>
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              className="award-card"
              initial={{ opacity: 0, x: 100 }} // Right se start
              animate={{ opacity: 1, x: 0 }} // Left ki taraf smoothly aaye
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="award-box">
                <img src={award.img} alt={award.title} />
                <h4>{award.title}</h4>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Certificates;
