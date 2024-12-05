// import ExperienceSection from "~/components/Section/mobile-development/ExperienceSection";
import HeroSection from "~/components/Section/mobile-development/HeroSection";
import ItSolutionSection from "~/components/Section/mobile-development/ItSolutionSection";
// import PricingSection from "~/components/Section/mobile-development/PricingSection";
// import RecentBlogSection from "~/components/Section/mobile-development/RecentBlogSection";
// import RecentProjectsSection from "~/components/Section/mobile-development/RecentProjectsSection";
// import TestimonialSection from "~/components/Section/mobile-development/TestimonialSection";
import ServiceSection from "~/components/Section/mobile-development/ServiceSection";
import HeaderTwo from "~/components/Section/Common/Header/HeaderTwo";
import FooterTwo from "~/components/Section/Common/FooterTwo";

const HomeTwo = () => {
  return (
    <div>
      <HeaderTwo className="tekup-header-top bg-light1 " />
      <HeroSection
        heading="Crafting Digital Experiences that Inspire"
        paragraph=" At Servi-Fi Tech, we bring your online vision to life with
                  state-of-the-art web development solutions. Our expertise
                  spans modern frameworks, robust backend technologies, and
                  responsive designs, ensuring your website is as functional as
                  it is beautiful"
      />
      <ItSolutionSection
        mainHeading="Web Development"
        headingOne="Custom Website Development:"
        paragraphOne=" Tailored websites that align with your business goals.
                        Expertise in HTML5, CSS3, JavaScript, and frameworks
                        like React, Angular, and Vue.js."
        headingTwo="Backend Development:"
        paragraphTwo="   Robust server-side solutions with Node.js, Python, Ruby
                        on Rails, or PHP. Seamless API integrations and database
                        management (SQL & NoSQL)."
        headingThree="Content Management Systems (CMS):"
        paragraphThree="Develop and customize WordPress, Drupal, or Joomla
                        platforms. Simplified tools for easy content updates."
        headingFour="Progressive Web Apps (PWA):"
        paragraphFour=" Fast, reliable, and engaging web apps with a native
                        app-like experience."
      />
      {/* <ExperienceSection /> */}
      <ServiceSection />
      {/* <RecentProjectsSection /> */}
      {/* <PricingSection /> */}
      {/* <TestimonialSection /> */}
      {/* <RecentBlogSection /> */}
      <FooterTwo />
    </div>
  );
};

export default HomeTwo;
