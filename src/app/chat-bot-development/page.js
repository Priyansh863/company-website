// import BrandSection from '~/components/Section/Common/BrandSection';
import HeroSection from "~/components/Section/mobile-development/HeroSection";
import ItSolutionSection from "~/components/Section/mobile-development/ItSolutionSection";
// import LetsBuildSection from '~/components/Section/Home-6/LetsBuildSection';
// import RecentBlogSection from '~/components/Section/Home-6/RecentBlogSection';
// import RecentProjectsSection from '~/components/Section/Home-6/RecentProjectsSection';
// import SuccessRatesSection from '~/components/Section/Home-6/SuccessRatesSection';
// import TestimonialSection from '~/components/Section/Home-6/TestimonialSection';
import ServiceSection from "~/components/Section/ai-development/ServiceSection";
import HeaderTwo from "~/components/Section/Common/Header/HeaderTwo";
import FooterSix from "~/components/Section/Common/FooterSix";

const HomeSix = () => {
  return (
    <div>
      <HeaderTwo className="d-none " />
      <HeroSection
        heading="Enhancing Customer Engagement with Intelligent Chatbots"
        paragraph="Servi-Fi Tech specializes in creating smart, AI-driven chatbots that revolutionize how businesses interact with their customers. From automating support to improving user experiences, our chatbot solutions are designed to streamline communication and enhance engagement."
      />
      <ItSolutionSection
        mainHeading="Chat Bot Development"
        headingOne="Custom Chatbot Development:"
        paragraphOne=" Design and build chatbots tailored to your specific business needs.
Develop bots for various platforms like websites, mobile apps, and messaging platforms."
        headingTwo="AI-Powered Chatbots:"
        paragraphTwo=" Integrate advanced AI and Natural Language Processing (NLP) for intelligent interactions.
Enable bots to understand context, intent, and sentiments for human-like conversations."
        headingThree="Omnichannel Support:"
        paragraphThree="Create chatbots that work seamlessly across multiple platforms, including WhatsApp, Facebook Messenger, Slack, and more.
Provide consistent customer support wherever your audience is."
        headingFour="Lead Generation Chatbots:"
        paragraphFour=" Use conversational bots to qualify leads and capture essential customer information.
Enhance conversion rates by engaging potential customers in real time."
      />
      {/* <BrandSection /> */}
      <ServiceSection />
      {/* <ItSolutionSection /> */}
      {/* <SuccessRatesSection /> */}
      {/* <RecentProjectsSection /> */}
      {/* <TestimonialSection /> */}
      {/* <LetsBuildSection /> */}
      {/* <RecentBlogSection /> */}
      <FooterSix />
    </div>
  );
};

export default HomeSix;
