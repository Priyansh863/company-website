import HeroSection from "~/components/Section/mobile-development/HeroSection";
import ItSolutionSection from "~/components/Section/mobile-development/ItSolutionSection";
import ServiceSection from "~/components/Section/chat-bot-development/ServiceSection";
import Header from "~/components/Section/Common/Header/Header";
import FooterFiveScetion from "~/components/Section/Common/FooterFive/FooterFiveScetion";

const HomeFive = () => {
  return (
    <div>
      <Header />
      <HeroSection
        heading="Transforming Businesses with AI-Powered Solutions"
        paragraph="At Servi-Fi Tech, we leverage the power of Artificial Intelligence to deliver smarter, data-driven solutions that empower businesses to innovate and grow. From automating processes to enhancing decision-making, our AI development services bring intelligence to every aspect of your operations."
      />
      <ItSolutionSection
        mainHeading="AI Development"
        headingOne="Custom AI Solutions:"
        paragraphOne=" Tailored AI models designed to meet specific business needs.
Implementation of advanced machine learning algorithms for predictive analytics and automation."
        headingTwo="Natural Language Processing (NLP):"
        paragraphTwo=" Build applications with speech recognition, sentiment analysis, and language translation capabilities.
Enhance customer interaction with AI-driven chatbots and virtual assistants."
        headingThree="Computer Vision:"
        paragraphThree="Implement image and video recognition systems for industries like healthcare, retail, and security.
Applications include facial recognition, object detection, and anomaly detection."
        headingFour="AI-Powered Automation:"
        paragraphFour="Automate repetitive tasks, streamline workflows, and improve operational efficiency.
Integration of AI with Robotic Process Automation (RPA) for intelligent automation."
      />
      <ServiceSection />
      <FooterFiveScetion />
    </div>
  );
};

export default HomeFive;
