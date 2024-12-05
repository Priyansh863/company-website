import FooterOneSection from "~/components/Section/Common/FooterOne/FooterOneSection";
import HeaderTwo from "~/components/Section/Common/Header/HeaderTwo";
import PageHeader from "~/components/Section/Common/PageHeader";
import ShopSection from "~/components/Section/Shop/ShopSection";

const ShopPage = () => {
  return (
    <>
      <HeaderTwo className="tekup-header-top bg-light1 " />
      <PageHeader title="Shop" />
      <ShopSection />
      <FooterOneSection className="tekup-footer-section dark-bg" />
    </>
  );
};

export default ShopPage;
