import { Box, Container, Grid, Stack } from "@mui/material";
import ship from "../../assets/wwdicons/Ship.png";
import tower from "../../assets/wwdicons/Tower.png";
import truck from "../../assets/wwdicons/Truck.png";
import plane from "../../assets/wwdicons/plane.svg";
import SectionHeader from "../SectionHeader";


const servisler = [
  {
    id: 0,
    icon: ship,
    title: "Sea Transport Services",
    subtitle:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    id: 1,
    icon: tower,
    title: "Warehousing Services",
    subtitle:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    id: 2,
    icon: plane,
    title: "Air Fright Services",
    subtitle:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    id: 3,
    icon: truck,
    title: "Local Shipping Services",
    subtitle:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
];

function WhatWeDo() {
  return (
    <Container>
      <Stack
        sx={{
          flexDirection: { sx: "column", md: "row" },
          alignItems: { xs: "center", md: "inherit" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            gap: "20px",
          }}
        >
          <SectionHeader
            isCentered={false}
            heading="What We Do"
            subheading="Safe & Reliable Cargo Solutions"
          />
        </Box>
        <Grid container spacing={5} justifyContent="space-between">
          {
            servisler.map((servis) => {
              return <Grid key={servis.id} item xs={12} md={6}>
                <Stack sx={{
                  flexDirection: { xs: "column", md: "row" }
                }}>
                  <Box sx={{ width: "100px", mr: "20px" }}>
                    <img style={{ width: '100%', objectFit: 'cover' }} src={servis.icon} alt="" />
                  </Box>
                  <Stack
                    sx={{
                      borderLeft: { xs: "none", md: "1px solid #D8D8D8" },
                      padding: "0px 20px",
                      maxWidth: 300,
                    }}
                  >
                    <h2>{servis.title}</h2>
                    <p style={{ color: "#666C89" }}>
                      {servis.subtitle}
                    </p>
                  </Stack>
                </Stack>
              </Grid>
            })
          }
        </Grid>
      </Stack>
    </Container>
  );
}

export default WhatWeDo;
