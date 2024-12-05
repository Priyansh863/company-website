import FooterOneSection from "~/components/Section/Common/FooterOne/FooterOneSection";
import HeaderTwo from "~/components/Section/Common/Header/HeaderTwo";
import PageHeader from "~/components/Section/Common/PageHeader";
import SingleShopSection from "~/components/Section/SingleShop/SingleShopSection";

const SinglePage = () => {
  return (
    <>
      <HeaderTwo className="tekup-header-top bg-light1 " />
      <PageHeader title="Shop Details" />
      <SingleShopSection />
      <FooterOneSection className="tekup-footer-section dark-bg" />
    </>
  );
};

export default SinglePage;
