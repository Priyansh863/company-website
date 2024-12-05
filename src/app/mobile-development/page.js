// import BrandSection from '~/components/Section/Common/BrandSection/BrandSection';
// import ChooseUsSection from '~/components/Section/nfc-development/ChooseUsSection';
import HeroSection from "~/components/Section/mobile-development/HeroSection";
import ItSolutionSection from "~/components/Section/mobile-development/ItSolutionSection";
// import LetsBuildSection from '~/components/Section/nfc-development/LetsBuildSection';
// import RecentBlogSection from '~/components/Section/nfc-development/RecentBlogSection';
// import RecentProjectsSection from '~/components/Section/nfc-development/RecentProjectsSection/RecentProjectsSection';
// import SuccessRatesSection from '~/components/Section/nfc-development/SuccessRatesSection';
// import ServiceSlideSection from '~/components/Section/nfc-development/ServiceSlideSection';
import HeaderThree from "~/components/Section/Common/Header/HeaderThree";
import FooterThreeSection from "~/components/Section/Common/FooterThree/FooterThreeSection";
import ServiceSection from "~/components/Section/Service";

const HomeThree = () => {
  return (
    <div>
      <HeaderThree />
      <HeroSection
        heading="Empowering Businesses Through Mobile Innovation"
        paragraph="Servi-Fi Tech specializes in developing cutting-edge mobile applications that redefine user experiences. From native apps to cross-platform solutions, our mobile development services are designed to keep you ahead in the digital race."
      />
      <ItSolutionSection
        mainHeading="Mobile Development"
        headingOne="Native App Development:"
        paragraphOne=" Platform-specific apps for iOS (Swift) and Android (Kotlin).
Superior performance and tailored features for individual platforms."
        headingTwo="Cross-Platform App Development:"
        paragraphTwo="Build apps that work seamlessly across platforms using Flutter or React Native.
Cost-effective and time-efficient solutions."
        headingThree="Enterprise Mobility Solutions:"
        paragraphThree="Secure and scalable apps for internal enterprise use.
Integration with existing workflows and cloud infrastructure."
        headingFour="Wearable App Development:"
        paragraphFour="Apps for wearables like smartwatches and fitness bands.
Focus on health, fitness, and productivity tracking."
      />
      {/* <ChooseUsSection /> */}
      {/* <ItSolutionSection /> */}
      <ServiceSection />
      {/* <ServiceSlideSection />
        <SuccessRatesSection />
        <RecentProjectsSection />
        <BrandSection />
        <LetsBuildSection />
        <RecentBlogSection /> */}
      <FooterThreeSection />
    </div>
  );
};

export default HomeThree;
