import MainImg from "../../assets/aboutUs/mainImg.png";
import SecondImg from "../../assets/aboutUs/secondImg.png";
import { Container, Box, Typography, Stack, Grid, Button } from "@mui/material";
import Button1 from "./../Button";

const AboutUs = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F4F4F4" }}>
        <Container
          maxWidth="xl"
          sx={{
            padding: "10px 10px 50px 10px",
          }}
        >
          <Grid
            container
            spacing={5}
            justifyContent={{ md: "space-evenly", lg: "center" }}
            alignItems={{ xs: "center", lg: 'stretch' }}
          >
            <Grid xs={12} md={5} lg={5} item >
              <Box sx={mainImgContainerStyle}>
                <img src={MainImg} style={{ width: "100%" }} alt="scania TIR" />
                <img
                  className="about_us_texture_img"
                  src={SecondImg}
                  alt="state"
                  style={{
                    position: "absolute",
                    bottom: -40,
                    right: -60,
                    width: "45%",
                    height: "60%",
                    zIndex: 3,
                    objectFit: 'cover',
                    objectPosition: 'top'
                  }}
                />
              </Box>
            </Grid>

            <Grid xs={12} md={5} lg={5} item>
              <Container >
                <Stack spacing={2}>
                  <Typography
                    component="p"
                    bgcolor="rgba(9, 18, 66, 0.1)"
                    sx={(t) => ({
                      borderLeft: `4px solid ${t.palette.primary.main}`,
                      fontSize: 14,
                      p: "3px",
                      px: 2,
                      width: "fit-content",
                    })}
                  >
                    About Us
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{ fontWeight: 700, textTransform: "capitalize" }}
                  >
                    Our Company Overview
                  </Typography>
                  <Typography color={"#666C89"}>
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster collaborative thinking to further the
                    overall value proposition.
                  </Typography>

                  <Stack direction="row" justifyContent={"space-between"}>
                    <Button sx={buttonStyle}>Our Approach</Button>
                    <Button sx={buttonStyle}>Our Approach</Button>
                    <Button sx={buttonStyle}>Our Approach</Button>
                  </Stack>

                  <Typography color={"#666C89"}>
                    Sed ut perspiciatis, unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa, quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt, explicabo. Nemo
                    enim ipsam voluptatem quia voluptassit.
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="flex-start" sx={{ marginTop: "20px" }}>
                  <Button1 title={"Learn More"} isPrimary={false} />
                </Stack>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

const mainImgContainerStyle = {
  position: "relative",
  "&::after": {
    display: { xs: "none", md: "inline" },
    minWidth: 200,
    content: '""',
    width: "45%",
    height: "60%",
    position: "absolute",
    bottom: -15,
    right: -35,
    backgroundColor: "white",
    zIndex: 2,
  },
  "& .about_us_texture_img": {
    display: { xs: "none", md: "inline" },
    minWidth: 200,
  },
};
const buttonStyle = {
  backgroundColor: "#FFB82B",
  color: "white",
  "&:hover": {
    backgroundColor: "#FFA600",
  },
  "&:not(:hover)": {
    backgroundColor: "lightgray",
  },
  width: "30%",
  height: "60px",
};

export default AboutUs;
