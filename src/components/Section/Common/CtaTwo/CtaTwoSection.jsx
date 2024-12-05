"use client";

const CtaTwoSection = () => {
  return (
    <div className="section z-index">
      <div className="container">
        <div
          className="tekup-cta-wrap"
          style={{ backgroundImage: "url(/images/v1/cta-bg.png)" }}
        >
          <div className="tekup-cta-content center">
            <h2>Let’s work together </h2>
            <p>
              We are pioneers of innovation and champions of technological
              advancement, dedicated to empowering your success. At Servi-Fi
              Tech, we deliver dynamic, forward-thinking IT solutions to help
              you thrive in the digital era.
            </p>
            <div className="tekup-extra-mt">
              <a
                className="tekup-default-btn tekup-white-btn"
                href="contact-us"
              >
                Start a Project <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaTwoSection;
