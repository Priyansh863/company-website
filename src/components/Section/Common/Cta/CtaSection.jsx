"use client";

import Link from "next/link";

const CtaSection = () => {
  return (
    <div
      className="section bg-cover"
      style={{ backgroundImage: "url(/images/v1/cta-bg.png)" }}
    >
      <div className="container">
        <div className="tekup-cta-wrap">
          <div className="tekup-cta-content center">
            <h2>Let’s work together </h2>
            <p>
              We are pioneers of innovation and champions of technological
              advancement, dedicated to empowering your success. At Servi-Fi
              Tech, we deliver dynamic, forward-thinking IT solutions to help
              you thrive in the digital era.
            </p>{" "}
            <div className="tekup-extra-mt">
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
    </div>
  );
};

export default CtaSection;
