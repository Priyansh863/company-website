'use client';

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Link from "next/link";

const ItSolutionSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("counter-home-four");
            if (section) {
                const rect = section.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="section bg-light1 tekup-section-padding" id="counter-home-four">
            <div id="tekup-counter"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-lg-2">
                        <div className="tekup-thumb ml-60">
                            <img src="/images/v4/thumb1.png" alt="" />
                            <div className="tekup-thumb-card right">
                                <img src="/images/v3/Satisfaction.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="tekup-default-content mr-60">
                            <h2>We provide IT solutions & services for any startups</h2>
                            <p>We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization</p>
                            <div className="tekup-extra-mt">
                                <div className="tekup-counter-wrap3">
                                    <div className="tekup-counter-data3">
                                        <h2><span data-percentage="730" className="tekup-counter">{isVisible && <CountUp end={730} duration={3} />}</span>+</h2>
                                        <p>Successfully Projects</p>
                                    </div>
                                    <div className="tekup-counter-data3">
                                        <h2><span data-percentage="198" className="tekup-counter">{isVisible && <CountUp end={198} duration={3} />}</span>+</h2>
                                        <p>Satisfied Happy Clients</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tekup-extra-mt">
                                <Link className="tekup-default-btn" href="about-us">More About <i className="ri-arrow-right-up-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItSolutionSection;