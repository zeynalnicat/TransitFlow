import { Box } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import OurProject from "../../components/OurProject";
import FooterInfo from "../../components/OurProject/footerInfo";
import BannerImg from "../../assets/ourProject/BannerImg.png";

const Project = () => {
  return (
    <PageContainer
      bannerImage={BannerImg}
      bannerTitle="Our Project"
      bannerSubtitle="Gallery"
    >
      <Box>
        <OurProject />
        <FooterInfo />
      </Box>
    </PageContainer>
  );
};

export default Project;
