import AboutSection from "~/components/Section/AboutUs/AboutSection";
import FactSection from "~/components/Section/Common/Fact/FactSection";
import PageHeader from "~/components/Section/Common/PageHeader";
import ContentSection from "~/components/Section/AboutUs/ContentSection";
import TeamSection from "~/components/Section/AboutUs/TeamSection";
import TestimonialSection from "~/components/Section/AboutUs/TestimonialSection/TestimonialSection";
import ContactSection from "~/components/Section/AboutUs/ContactSection";
import CtaSection from "~/components/Section/Common/Cta/CtaSection";
import FooterOneSection from "~/components/Section/Common/FooterOne/FooterOneSection";
import HeaderTwo from "~/components/Section/Common/Header/HeaderTwo";



const Aboutpage = () => {
    return (
        <>
        <HeaderTwo className="tekup-header-top bg-light1 "/>
      <PageHeader title="About Us" /> 
      <AboutSection/>
      {/* <ContentSection /> */}
      {/* <FactSection/> */}
      {/* <TeamSection/> */}
      {/* <TestimonialSection/> */}
      <ContactSection/>
      <CtaSection/>
      <FooterOneSection className="tekup-footer-section dark-bg"/>
        </>
    );
};

export default Aboutpage;