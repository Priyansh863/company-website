import Link from "next/link";
import Slider from "react-slick/lib/slider";

const HeroSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };
  return (
    <div className="tekup-hero-section2">
      <Slider {...settings} className="tekup-hero-slider slick-slider-btn">
        <div className="tekup-hero-slider-item tekup-hero-slider-item-one">
          <div className="container">
            <div className="tekup-hero-content center white-color large-content">
              <div
                className={`${
                  currentSlide === 0 ? "animated fadeInRight" : ""
                }`}
                data-animation-in="fadeInRight"
                data-delay-in="1.5"
              >
                <h1>Crafting Digital Experiences that Inspire</h1>
                <p>
                  At Servi-Fi Tech, we bring your online vision to life with
                  state-of-the-art web development solutions. Our expertise
                  spans modern frameworks, robust backend technologies, and
                  responsive designs, ensuring your website is as functional as
                  it is beautiful
                </p>
              </div>
              <div
                className={`tekup-extra-mt ${
                  currentSlide === 0 ? "animated fadeInUp" : ""
                }`}
                data-animation-in="fadeInUp"
                data-delay-in="0.7"
              >
                <Link
                  className="tekup-default-btn tekup-white-btn"
                  href="contact-us"
                >
                  Start a Project <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="tekup-hero-slider-item tekup-hero-slider-item-two">
          <div className="container">
            <div className="tekup-hero-content center white-color large-content">
              <div
                className={`${
                  currentSlide === 1 ? "animated fadeInRight" : ""
                }`}
                data-animation-in="fadeInRight"
                data-delay-in="1.5"
              >
                <h1>Crafting Digital Experiences that Inspire</h1>
                <p>
                  At Servi-Fi Tech, we bring your online vision to life with
                  state-of-the-art web development solutions. Our expertise
                  spans modern frameworks, robust backend technologies, and
                  responsive designs, ensuring your website is as functional as
                  it is beautiful
                </p>
              </div>
              <div
                className={`tekup-extra-mt ${
                  currentSlide === 1 ? "animated fadeInUp" : ""
                }`}
                data-animation-in="fadeInUp"
                data-delay-in="0.7"
              >
                <Link
                  className="tekup-default-btn tekup-white-btn"
                  href="contact-us"
                >
                  Start a Project <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
