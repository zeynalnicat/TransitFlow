import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import SectionHeader from "../SectionHeader";
import WhyUsPriority from "../WhyUsPriority";
import icon1 from "../../assets/whyUs/Icon.png";
import icon2 from "../../assets/whyUs/Icon2.png";
import img1 from "../../assets/whyUs/img1.jpg";
import img2 from "../../assets/whyUs/img2.png";
import StatisticFooter from "../StatisticFooter";

const WhyUs = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 7, }}>
      <Stack
        sx={{ p: { md: 10, xs: 2 }, backgroundColor: 'white' }}
        flexDirection="row"
        flexWrap={{ md: "nowrap", xs: "wrap" }}
        gap={7}
      >
        <Box
          sx={{ mt: 2, "&>*": { mx: "0 !important", textAlign: "left !important" } }}
        >
          <SectionHeader
            heading="Why Us"
            subheading="We provide full range global logistics solution"
          />
          <Typography component="p">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition. Organically grow the holistic world view of disruptive
            innovation via workplace diversity and empowerment.
          </Typography>
          <WhyUsPriority imgSrc={icon1} title="Delivery on Time" />
          <WhyUsPriority imgSrc={icon2} title="Optimized Travel Cost" />
        </Box>

        <Container>
          <Stack justifyContent={{ md: "center" }}>
            <Box
              sx={{
                marginLeft: "auto",
                mb: { xs: 10 },
                position: "relative",
                "&::before": {
                  display: { xs: "none", md: "block", sm: "block" },
                  minWidth: 200,
                  content: '""',
                  width: "50%",
                  height: "55%",
                  position: "absolute",
                  bottom: -50,
                  left: -10,
                  backgroundColor: "white",
                  zIndex: 2,
                },
                "& .outerImg": {
                  width: { xs: "80%", md: "100%" },
                },
                "& .innerImg": {
                  display: { xs: "none", md: "block", sm: "block" },
                },
              }}
            >
              <img className="outerImg" src={img1} style={{ minWidth: 200 }} />
              <img
                className="innerImg"
                src={img2}
                style={{
                  minWidth: 250,
                  position: "absolute",
                  bottom: -50,
                  left: -70,
                  width: "45%",
                  height: "50%",
                  zIndex: 3,
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Stack>

      <Grid container mt={3}>
        <Grid item md={6} sm={6} xs={12}>
          <StatisticFooter count={1294} info="Delivered Packages" />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <StatisticFooter count={3594} info="Satisfied Clients" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyUs;
