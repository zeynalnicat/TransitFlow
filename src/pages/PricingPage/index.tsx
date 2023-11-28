import { Stack } from "@mui/material";
import Pricing from "../../assets/banner/pricing.png";
import PageContainer from "../../components/PageContainer";
import PricingCard from "../../components/PricingCard";
import Slider from "../../components/Slider";
const PricingPage = () => {
  return (
    <>
      <PageContainer
        bannerSubtitle="Pricing"
        bannerTitle="Our Best Price"
        bannerImage={Pricing}>
        <Stack gap={10}>
          <PricingCard />
          <Slider />
        </Stack>
      </PageContainer>

    </>
  );
};

export default PricingPage;
