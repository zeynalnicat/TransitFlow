import Truck from "../../assets/banner/Photo.svg";
import PageContainer from "../../components/PageContainer";
import Contact from "../../components/contactUs";
const ContactPage = () => {
  return (
    <>
      <PageContainer
        bannerSubtitle="Contact"
        bannerTitle="Contact Us"
        bannerImage={Truck}>
        <Contact />
      </PageContainer>

    </>
  );
};

export default ContactPage;
