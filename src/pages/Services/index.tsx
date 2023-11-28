import { Grid, Stack } from "@mui/material";
import "swiper/css";
import truckBanner from "../../assets/banner/truck.png";
import HowWeWork from "../../components/HowWeWork";
import PageContainer from "../../components/PageContainer";
import Slider from "../../components/Slider";
import StatisticFooter from "../../components/StatisticFooter";
import WhatWeDo from "../../components/WWD";

const Services = () => {
  return (
    <PageContainer
      bannerImage={truckBanner}
      bannerSubtitle="Services"
      bannerTitle="Our Logistics Service">
      <Stack gap={10}>
        <WhatWeDo />
        <HowWeWork />
        <Slider />
        <Grid container mt={3}>
          <Grid item md={6} sm={6} xs={12}>
            <StatisticFooter count={1294} info="Delivered Packages" />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <StatisticFooter count={3594} info="Satisfied Clients" />
          </Grid>
        </Grid>
      </Stack>
    </PageContainer >
  );
};

export default Services;
