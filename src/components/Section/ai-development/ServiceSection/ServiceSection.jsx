import Link from "next/link";

const ServiceSection = () => {
  return (
    <div className="section tekup-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tekup-thumb mr-30">
              <img src="/images/v2/thumb1.png" alt="" />
              <div className="tekup-thumb-card">
                <img src="/images/v3/rating.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content ml-60">
              <h2>NFC Application Development:</h2>
              <div className="tekup-extra-mt">
                <div className="tekup-icon-list-wrap">
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src="/images/v2/icon1.png" alt="" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>Custom NFC Application Development:</h5>
                      <p>
                        Tailored websites that align with your business goals.
                        Build tailored NFC solutions for your unique business
                        needs. Develop apps for Android and iOS devices with
                        NFC-enabled functionality.
                      </p>
                    </div>
                  </div>
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src="/images/v2/icon2.png" alt="" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>NFC Payment Integration:</h5>
                      <p>
                        Create secure, contactless payment systems for retail,
                        hospitality, and other industries. Integration with
                        popular platforms like Google Pay, Apple Pay, and custom
                        payment gateways.
                      </p>
                    </div>
                  </div>
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src="/images/v2/icon4.png" alt="" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>Access Control and Security:</h5>
                      <p>
                        NFC-enabled solutions for smart locks, employee ID
                        cards, and secure facility access. Implementation of
                        encrypted protocols for added security.
                      </p>
                    </div>
                  </div>{" "}
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src="/images/v2/icon5.png" alt="" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>Smart Tag Solutions:</h5>
                      <p>
                        Develop and program NFC tags for product information,
                        promotions, and marketing campaigns. Enable one-tap
                        access to digital content via NFC tags on products.
                      </p>
                    </div>
                  </div>
                </div>
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

export default ServiceSection;
