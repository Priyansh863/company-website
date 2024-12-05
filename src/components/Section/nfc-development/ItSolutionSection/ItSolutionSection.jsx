import Link from "next/link";

const ItSolutionSection = () => {
    return (
      <div className="section bg-light1 tekup-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tekup-thumb mr-30">
                <img src="/images/v3/thumb1.png" alt="" />
                <div className="tekup-thumb-card">
                  <img src="/images/v3/Satisfaction2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 d-flex align-items-center">
              <div className="tekup-default-content">
                <h2>
                  Innovative Technology Solutions Tailored for Your Success
                </h2>
                <p>
                  At Servi-Fi Tech, we specialize in cutting-edge IT solutions,
                  driving innovation and technological excellence. From AI
                  Development and Web Development to Chatbot Development, Mobile
                  Development, and NFC Development, we are your trusted partners
                  in building a future-ready enterprise
                </p>
                <div className="tekup-icon-list">
                  <ul>
                    <li>
                      <i className="ri-check-line"></i>Create Custom Reports and
                      Dashboards effortlessly.
                    </li>
                    <li>
                      <i className="ri-check-line"></i>Modernize and transform
                      Legacy Software for the digital era.
                    </li>
                    <li>
                      <i className="ri-check-line"></i>Deliver scalable and
                      secure Software for the Open Enterprise to empower your
                      business.
                    </li>
                  </ul>
                </div>
                <div className="tekup-extra-mt">
                  <Link className="tekup-default-btn" href="about-us">
                    More About <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ItSolutionSection;