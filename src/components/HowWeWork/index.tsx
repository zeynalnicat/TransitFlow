import MainImg from "../../assets/HowWeWork/mainImg.png";
import SecondImg from "../../assets/HowWeWork/secondImg.png";
import { Container, Box, Typography, Stack, Grid } from "@mui/material";
import SectionHeader from "../SectionHeader";
import Icon1 from "../../assets/HowWeWork/logos/Icon.png";
import Icon2 from "../../assets/HowWeWork/logos/Sheild Icon.png";
import Icon3 from "../../assets/HowWeWork/logos/Environment Icon.png";

const services = [
  {
    id: 0,
    icon: Icon1,
    title: 'Warehousing Services',
    description: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking'
  },
  {
    id: 1,
    icon: Icon2,
    title: 'Safety & Quality',
    description: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking'
  },
  {
    id: 2,
    icon: Icon3,
    title: 'Care for Environment',
    description: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking'
  },
]

const HowWeWork = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F4F4F4" }}>
        <Container maxWidth="xl" sx={{
          padding: "10px 10px 50px 10px",
        }}>
          <SectionHeader heading="Our Goodness" subheading="How We Works" />
          <Grid container spacing={5} justifyContent={{ md: 'space-evenly', lg: 'center' }}>
            <Grid xs={12} md={5} lg={5} item sx={mainImgContainerStyle}>
              <img src={MainImg} style={{ width: '100%' }} alt="worker" />
              <img className="how_we_work_texture_img" src={SecondImg} alt="state" style={{
                position: "absolute",
                bottom: -40,
                right: -60,
                width: "45%",
                height: "60%",
                zIndex: 3
              }} />
            </Grid>

            <Grid xs={12} md={5} lg={5} item>
              <Container maxWidth="md" sx={{ pr: { xs: 0, md: 7 } }}>
                {
                  services.map(({ id, icon, title, description }) => {
                    return (
                      <div key={id}>
                        <Stack sx={{ mt: { sm: 5, md: 0 } }} flexDirection="row" gap={2} alignItems="center">
                          <Typography>
                            <img style={{ width: 35 }} src={icon} alt="Box Icon" />
                          </Typography>
                          <Typography variant="h5">{title}</Typography>
                        </Stack>
                        <Typography variant="body1">
                          {description}
                        </Typography>
                      </div>
                    )
                  })
                }
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Box >
    </>
  );
};

const mainImgContainerStyle = {
  position: "relative",
  "&::after": {
    display: { xs: 'none', md: 'inline' },
    minWidth: 200,
    content: '""',
    width: "45%",
    height: "60%",
    position: 'absolute',
    bottom: -15,
    right: -35,
    backgroundColor: 'white',
    zIndex: 2
  },
  "& .how_we_work_texture_img": {
    display: { xs: 'none', md: 'inline' },
    minWidth: 200
  }
};


export default HowWeWork;
