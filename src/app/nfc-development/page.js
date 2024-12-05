// import AccordionSection from '~/components/Section/ai-development/AccordionSection';
import HeroSection from "~/components/Section/mobile-development/HeroSection";
import ItSolutionSection from "~/components/Section/mobile-development/ItSolutionSection";
// import TestimonialSection from '~/components/Section/ai-development/TestimonialSection';
import ServiceSection from "~/components/Section/ai-development/ServiceSection";
// import WorkProcess from '~/components/Section/Common/WorkProcess';
// import RecentProjectsSection from '~/components/Section/ai-development/RecentProjectsSection';
import HeaderFour from "~/components/Section/Common/Header/HeaderFour";
import FooterFour from "~/components/Section/Common/FooterFour";
// import CtaThreeSection from '~/components/Section/Common/CtaThree/CtaThreeSection';

const HomeFour = () => {
  return (
    <div>
      <HeaderFour />
      <HeroSection
        heading="Crafting Digital Experiences that Inspire"
        paragraph=" At Servi-Fi Tech, we bring your online vision to life with
                  state-of-the-art web development solutions. Our expertise
                  spans modern frameworks, robust backend technologies, and
                  responsive designs, ensuring your website is as functional as
                  it is beautiful"
      />
      <ItSolutionSection
        mainHeading="NFC Development"
        headingOne="Custom NFC Application Development:"
        paragraphOne="Build tailored NFC solutions for your unique business needs.
                Develop apps for Android and iOS devices with NFC-enabled functionality.c"
        headingTwo="NFC Payment Integration:"
        paragraphTwo=" Create secure, contactless payment systems for retail, hospitality, and other industries.
Integration with popular platforms like Google Pay, Apple Pay, and custom payment gateways."
        headingThree="Access Control and Security:"
        paragraphThree="NFC-enabled solutions for smart locks, employee ID cards, and secure facility access.
Implementation of encrypted protocols for added security."
        headingFour="Smart Tag Solutions"
        paragraphFour="Develop and program NFC tags for product information, promotions, and marketing campaigns.
Enable one-tap access to digital content via NFC tags on products."
      />
      <ServiceSection />
      {/* <ItSolutionSection /> */}
      {/* <ServiceSection /> */}
      {/* <WorkProcess /> */}
      {/* <RecentProjectsSection /> */}
      {/* <TestimonialSection /> */}
      {/* <AccordionSection /> */}
      {/* <CtaThreeSection /> */}
      <FooterFour />
    </div>
  );
};

export default HomeFour;
