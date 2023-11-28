import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Truck from "../../assets/projectSingle/truck.png";
import PageContainer from "../../components/PageContainer";
import BannerSinglePage from "../../assets/banner/project-page-banner.png";
import { ArrowForward } from "@mui/icons-material";
import VideoPlayer from "../../components/VideoPlayer";
import img1 from "../../assets/ourProject/img1.png";
import img2 from "../../assets/ourProject/img2.png";
import img3 from "../../assets/ourProject/img3.png";
import WhyInfo from "../../components/OurProject/ProjectInfo";

const projectDetails = {
  customer: "David Warner",
  category: "Warehouse Transportation",
  date: "12 December 2022",
  status: "Completed",
  tags: "Life Style Travel, Best Delivery",
};
const services = [
  {
    key: 0,
    title: "National Customer Service Center – 24 hours a day.",
  },
  {
    key: 1,
    title:
      "Online shipping navigator lets you quote, book, and track shipments",
  },
  {
    key: 2,
    title: "Your Logistics Needs Are At The Heart Of Our Business",
  },
  {
    key: 3,
    title: "Very careful handling of valuable goods",
  },
  {
    key: 4,
    title: "Time saving and convenient transportation services in your area",
  },
];
const imgPath = [
  {
    key: 0,
    src: img1,
  },
  {
    key: 1,
    src: img2,
  },
  {
    key: 2,
    src: img3,
  },
];

const ProjectPage = () => {
  return (
    <PageContainer
      bannerImage={BannerSinglePage}
      bannerTitle="Air Cargo Transportation"
      bannerSubtitle="Warehouse Transportation"
      py={0}
    >
      <Box sx={{ backgroundColor: "#F4F4F4", py: 10 }}>
        <Container >
          <Grid container gap={6} >
            <Grid item xs={12} md={6} lg={7}>
              <img style={{ width: '100%' }} src={Truck} alt="Truck" />
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
              <Typography variant="h4" component="h4" fontWeight={700}>
                Project Details
              </Typography>
              <Typography variant="body1" component="p">
                <span style={{ fontWeight: 550 }}>Customer:</span>{" "}
                {projectDetails.customer}
                <br />
                <span style={{ fontWeight: 550 }}>Category:</span>{" "}
                {projectDetails.category}
                <br />
                <span style={{ fontWeight: 550 }}>Date:</span>{" "}
                {projectDetails.date}
                <br />
                <span style={{ fontWeight: 550 }}>Status:</span>{" "}
                {projectDetails.status}
                <br />
                <span style={{ fontWeight: 550 }}>Tags:</span>{" "}
                {projectDetails.tags}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Typography variant="h4" component="h4" fontWeight={600} py={3}>
          Wharehouse Transportation
        </Typography>
        <Typography variant="body1" component="p" color={"#666C89"}>
          Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
          lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat
          tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc.
          Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo
          quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed,
          faucibus vel elit Integer adipiscing erat eget risus sollicitudin
          pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan
          ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc
          posuere.
        </Typography>
        <Grid item md={6} xs={12}>
          <Box maxWidth={700}>
            {services.map((service) => {
              return (
                <Typography
                  pt={1}
                  key={service.key}
                  variant="h6"
                  component="h6"
                  fontWeight={300}
                  style={{ lineHeight: 2 }}
                >
                  <ArrowForward sx={{ fontSize: 18 }} /> {service.title}
                </Typography>
              );
            })}
          </Box>
        </Grid>
        <Grid item mt={15} md={7} xs={12}>
          <Typography variant="h4" component="h4" fontWeight={600}>
            Our Project Transportation
          </Typography>
          <Typography mb={2}>
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
            feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat id
            nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam
            leo quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit
            sed, faucibus vel elit Integer adipiscing erat eget risus
            sollicitudin pellentesque non erat. Maecenas nibh dolor malesuada
            sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec
            tincidunt nunc posuere.
          </Typography>
        </Grid>
        <Box sx={{
          height: 500, backgroundColor: 'red',
          '&>div': {
            height: '100% !important'
          }
        }}>
          <VideoPlayer url="https://youtu.be/_g-fn29eHLE" />
        </Box>
        <Box py={8}>

          <Typography variant="h4" component="h4" mb={5} fontWeight={600}>Related Project</Typography>
          <Stack flexDirection="row" flexWrap="wrap" columnGap={4} rowGap={4}>
            {imgPath.map((img) => {
              return <WhyInfo key={img?.src} imgSrc={img?.src} />;
            })}
          </Stack>
        </Box>
      </Container>
    </PageContainer >
  );
};

export default ProjectPage;
