import PageContainer from "../../components/PageContainer";
import blogSingleBg from "../../assets/banner/blog-single.png";
import cargoShip from "../../assets/BlogSingle/blog-single-page-cargo-ship.png";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import calendar from "../../assets/calendar.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import {
  Instagram,
  FacebookRounded,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";

const categories = [
  {
    id: 0,
    title: "Shipping",
    quantity: 3,
  },
  {
    id: 1,
    title: "Services",
    quantity: 5,
  },
  {
    id: 2,
    title: "Transport",
    quantity: 2,
  },
  {
    id: 3,
    title: "Warehouse",
    quantity: 2,
  },
  {
    id: 4,
    title: "Transport Industries",
    quantity: 5,
  },
];

const CustomBanner = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        color: "white",
        py: 5,
      }}
    >
      <Stack flexDirection="row" alignItems="center" gap={2}>
        <img
          style={{ width: "100%", objectFit: "cover" }}
          src={calendar}
          alt=""
        />
        <Box>
          <Typography fontSize={32} fontWeight={700}>
            12
          </Typography>
          March
        </Box>
      </Stack>
      <Typography
        variant="h4"
        fontSize={{ xs: 24, sm: 32, md: 42 }}
        component="h4"
        sx={{ fontWeight: 700, textTransform: "capitalize" }}
      >
        How technology can help redraw the supply chain map
      </Typography>
    </Container>
  );
};

const BlogSingle = ({ }) => {
  return (
    <PageContainer
      bannerImage={blogSingleBg}
      customizedBanner={<CustomBanner />}
    >
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item md={7} xs={12}>
            <Stack gap={3}>
              <Typography fontWeight={700} variant="h4" component="h4">
                Your Logistics Solutions
              </Typography>
              <Typography color="rgba(102, 108, 137, 1)">
                Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit
                nec feugiat tempus.Phasellus at quam hendrerit semper feugiat id
                nunc. Morbi quis justo velit. Duis semper lacus scelerisque,
                aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]
              </Typography>
              <Box p={8} bgcolor="rgba(9, 18, 66, 1);">
                <Typography variant="h6" color="white" fontStyle="italic">
                  “Digitization within transport and logistics means seamless
                  service to our customers, visibility in the supply chain, and
                  driving a more efficient business.”
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={3} xs={12}>
            <Stack pt={{ md: 7, xs: 0 }}>
              <Typography p={2} fontWeight={800} variant="h6" component="h3">
                Categories
              </Typography>

              {categories.map((category) => {
                return (
                  <Stack
                    key={category.id}
                    flexDirection="row"
                    justifyContent="space-between"
                    borderBottom="1px solid rgba(214, 214, 214, 1);"
                    p={2}
                  >
                    <Typography color="rgba(102, 108, 137, 1);">
                      {category.title}
                    </Typography>
                    <Typography fontWeight={700}>
                      ({category.quantity})
                    </Typography>
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
        </Grid>

        <Grid my={7} container justifyContent="space-between">
          <Grid item md={7} xs={12}>
            <Stack gap={3}>
              <Typography fontWeight={700} variant="h4" component="h4">
                Safest Logistics Solutions Provider With Integrity
              </Typography>
              <Typography color="rgba(102, 108, 137, 1)">
                Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit
                nec attempus.Phasellus at quam hendrerit semper David Warner
                nunc. Morbi quis justo velit. Duis semper lacus scelerisque,
                aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]
              </Typography>
              <Box>
                <img
                  src={cargoShip}
                  alt="cargo-ship"
                  style={{ width: "100%" }}
                />
              </Box>
              <Typography color="rgba(102, 108, 137, 1)">
                Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit
                nec attempus.Phasellus at quam hendrerit semper David Warner
                nunc. Morbi quis justo velit. Duis semper lacus scelerisque,
                aliquam leo quis, porttitor leo Fusce lectus ex pretium.
              </Typography>
              <Typography color="rgba(102, 108, 137, 1)">
                Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec
                feugiat tempus Phasellus atquam.
              </Typography>

              <Stack
                flexDirection="row"
                justifyContent="space-between"
                borderTop="1px solid rgba(214, 214, 214, 0.7)"
                borderBottom="1px solid rgba(214, 214, 214, 0.7)"
                py={3}
              >
                <Stack flexDirection="row" gap={2}>
                  <Link to="https://google.com">
                    <Instagram />
                  </Link>
                  <Link to="https://google.com">
                    <FacebookRounded />
                  </Link>
                  <Link to="https://google.com">
                    <Twitter />
                  </Link>
                  <Link to="https://google.com">
                    <LinkedIn />
                  </Link>
                </Stack>
                <Typography color="rgba(102, 108, 137, 1)">Category : Shipping</Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item md={3} xs={12}>
            <Stack height="100%" justifyContent="space-evenly" gap={{ xs: 10, md: 0 }}>
              <Stack gap={1} sx={{ "&>a": { width: "fit-content" } }}>
                <Typography fontWeight={700} variant="h6" component="h3">
                  How can we help you?
                </Typography>
                <Typography color="rgba(102, 108, 137, 1)">
                  Duis semper lacus scelerisque, aliquam leo quis, porttitor
                  leo. Etiam lobortis dapib libero vel porttitor. Nulla tempor
                  elit nec feugiat tempus Phasellus atquam.
                </Typography>
                <Link to="/contact">
                  <Button title="Contact" isPrimary />
                </Link>
              </Stack>
              <Stack bgcolor="rgba(9, 18, 66, 1)" p={4} gap={2}>
                <Typography
                  variant="h6"
                  color="white"
                  fontWeight="700"
                  component="h4"
                  sx={(t) => ({
                    borderLeft: `4px solid ${t.palette.primary.main}`,
                    p: "3px",
                    px: 2,
                    width: "fit-content",
                  })}
                >
                  Get In Touch
                </Typography>

                <Stack>
                  <Typography color={"white"}>
                    Need Help?
                  </Typography>
                  <Typography color={"white"}>
                    (00) 112 365 489
                  </Typography>
                </Stack>
                <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
                <Stack>
                  <Typography color={"white"}>
                    Email
                  </Typography>
                  <Typography color={"white"}>
                    contact@logistics.com
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};
export default BlogSingle;
