"use client";
import Link from "next/link";
import Slider from "react-slick/lib/slider";

const HeroSection = () => {
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
                <h1>Revolutionizing Interactions with NFC Technology</h1>
                <p>
                  Servi-Fi Tech brings the power of Near Field Communication
                  (NFC) to your fingertips. With NFC technology, we enable
                  businesses to offer seamless, secure, and efficient
                  interactions, from payments and access control to data sharing
                  and smart device integration.
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
                <h1>Revolutionizing Interactions with NFC Technology</h1>
                <p>
                  Servi-Fi Tech brings the power of Near Field Communication
                  (NFC) to your fingertips. With NFC technology, we enable
                  businesses to offer seamless, secure, and efficient
                  interactions, from payments and access control to data sharing
                  and smart device integration.
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
