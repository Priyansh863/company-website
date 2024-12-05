"use client";

import Link from "next/link";

const ChooseSection = () => {
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
              <h2>Mobile Development:</h2>
              <div className="tekup-extra-mt">
                <div className="tekup-icon-list-wrap">
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src="/images/v2/icon1.png" alt="" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>Native App Development:</h5>
                      <p>
                        Platform-specific apps for iOS (Swift) and Android
                        (Kotlin). Superior performance and tailored features for
                        individual platforms.
                      </p>
                    </div>
                  </div>
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src="/images/v2/icon2.png" alt="" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>Cross-Platform App Development:</h5>
                      <p>
                        Build apps that work seamlessly across platforms using
                        Flutter or React Native. Cost-effective and
                        time-efficient solutions.
                      </p>
                    </div>
                  </div>
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src="/images/v2/icon4.png" alt="" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>Enterprise Mobility Solutions:</h5>
                      <p>
                        Secure and scalable apps for internal enterprise use.
                        Integration with existing workflows and cloud
                        infrastructure.
                      </p>
                    </div>
                  </div>{" "}
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src="/images/v2/icon5.png" alt="" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>CWearable App Development:</h5>
                      <p>
                        Apps for wearables like smartwatches and fitness bands.
                        Focus on health, fitness, and productivity tracking.
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

export default ChooseSection;
