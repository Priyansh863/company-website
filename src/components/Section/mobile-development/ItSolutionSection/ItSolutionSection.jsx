import Link from "next/link";

const ItSolutionSection = ({
  mainHeading,
  headingOne,
  paragraphOne,
  headingTwo,
  paragraphTwo,
  headingThree,
  paragraphThree,
  headingFour,
  paragraphFour,
}) => {
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
              <h2>{mainHeading}</h2>
              <div className="tekup-extra-mt">
                <div className="tekup-icon-list-wrap">
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src="/images/v2/icon1.png" alt="" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>{headingOne}</h5>
                      <p>{paragraphOne}</p>
                    </div>
                  </div>
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src="/images/v2/icon2.png" alt="" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>{headingTwo}</h5>
                      <p>{paragraphTwo}</p>
                    </div>
                  </div>
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src="/images/v2/icon4.png" alt="" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>{headingThree}</h5>
                      <p>{paragraphThree}</p>
                    </div>
                  </div>{" "}
                  <div className="tekup-icon-list-item">
                    <div className="tekup-icon-list-icon">
                      <img src="/images/v2/icon5.png" alt="" />
                    </div>
                    <div className="tekup-icon-list-data">
                      <h5>{headingFour}</h5>
                      <p>{paragraphFour}</p>
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

export default ItSolutionSection;
