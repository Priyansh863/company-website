import Link from "next/link";

const Hero = () => {
    return (
      <div
        className="tekup-hero-section"
        // style={{ backgroundImage: "url(/images/hero/hero-bg1.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="tekup-hero-content white-color">
                <h1>Empower Your Vision with Servi-Fi Tech's Expertise</h1>
                <p>
                  We are architects of innovation, trailblazers of technological
                  advancement, and partners in your success. As a dynamic and
                  forward-thinking
                </p>
                <div className="tekup-extra-mt">
                  <Link className="tekup-default-btn" href="contact-us">
                    Start a Project <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-end justify-content-end">
              <div className="tekup-hero-rating">
                <img
                  className="tekup-hero-author"
                  src="/images/v1/author.png"
                  alt=""
                />
                <p>Avg rating 4.8 makes us world best agency.</p>
                <ul>
                  <li>
                    <i className="ri-star-s-fill"></i>
                  </li>
                  <li>
                    <i className="ri-star-s-fill"></i>
                  </li>
                  <li>
                    <i className="ri-star-s-fill"></i>
                  </li>
                  <li>
                    <i className="ri-star-s-fill"></i>
                  </li>
                  <li>
                    <i className="ri-star-s-fill"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;