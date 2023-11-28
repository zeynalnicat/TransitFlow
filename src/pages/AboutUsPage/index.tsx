import { Stack } from "@mui/material";
import AboutUsBanner from "../../assets/banner/aboutus.png";
import AboutUs from "../../components/AboutUs";
import FAQ from "../../components/FAQ";
import PageContainer from "../../components/PageContainer";
import PricingCard from "../../components/PricingCard";
import Slider from "../../components/Slider";
import TeamMemberSection from "../../components/TeamMembersSection";
import WhatWeDo from "../../components/WWD";

const AboutUsPage = () => {
  return (
    <>
      <PageContainer
        bannerSubtitle="About Us"
        bannerTitle="About Our Logistics"
        bannerImage={AboutUsBanner}>
        <Stack gap={10}>
          <AboutUs />
          <WhatWeDo />
          <TeamMemberSection limit />
          <Slider />
          <PricingCard />
          <FAQ />
        </Stack>
      </PageContainer>

    </>
  );
};

export default AboutUsPage;
