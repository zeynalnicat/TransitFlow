import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import serviceBanner from "../../assets/banner/service-single-banner.png";
import PageContainer from "../../components/PageContainer";
import serviceShip from "../../assets/ServicePage/service-page-ship.png";
import serviceTruck from "../../assets/ServicePage/service-page-truck.png";
import serviceIcon from "../../assets/ServicePage/service-page-icon.png";
import WhyUsPriority from "../../components/WhyUsPriority";
import VideoPlayer from "../../components/VideoPlayer";
import { ArrowForward } from "@mui/icons-material";

const services = [
  {
    key: 0,
    title: "Clearance and compliance service",
  },
  {
    key: 1,
    title: "Saving Time to Deal with commodo iaculis",
  },
  {
    key: 2,
    title: "Automate your business elis tristique",
  },
  {
    key: 3,
    title: "Saving Time to Deal with commodo iaculis",
  },
];

const ServiceSingle = () => {
  return (
    <PageContainer
      bannerImage={serviceBanner}
      bannerTitle="Service Details"
      bannerSubtitle="Service Single"
    >
      <Container>
        <Stack
          sx={{
            "&>p": {
              pt: 3,
            },
          }}
        >
          <Box>
          <img src={serviceShip} style={{width:"100%"}} />
          </Box>
          <WhyUsPriority imgSrc={serviceIcon} title="Sea Transport Service" />
          <Typography component="p">
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
            sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
            quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt, ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </Typography>
          <Typography component="p">
            Quis autem vel eum iure reprehenderit, qui in ea voluptate velit
            esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum
            fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et
            iusto odio dignissimos ducimus, qui blanditiis praesentium
            voluptatum deleniti atque corrupti, quos dolores et quas molestias
            excepturi sint, obcaecati cupiditate non provident, similique sunt
            in culpa, qui officia deserunt mollitia animi, id est laborum et
            dolorum fuga. Et harum quidem rerum facilis est et expedita
            distinctio.
          </Typography>

          <Grid container mt={12}>
            <Grid item md={6} xs={12}>
              <Box maxWidth={450}>

                <Typography variant="h5" component="h3" fontWeight={600}>
                  Benefit of Service
                </Typography>
                <Typography component="p" my={3}>
                  Sed ut perspiciatis, unde omnis iste natu volupta temaccu
                  santium doloremque laudantium, totam rem quae ab illo inventore
                  veritatis.
                </Typography>
                <Stack py={1}>
                  {services.map((service) => {
                    return (
                      <Typography
                        pt={1}
                        key={service.key}
                        variant="h6"
                        component="h5"
                        fontWeight={600}
                        color="rgba(28, 31, 53, 1)"
                      >
                        <ArrowForward sx={{ fontSize: 18 }} /> {service.title}
                      </Typography>
                    );
                  })}
                </Stack>
              </Box>
            </Grid>

            <Grid item md={6} xs={12}>
              <Box>
                <img src={serviceTruck} style={{ width: "100%" }} />
              </Box>
            </Grid>
          </Grid>

          <Grid container mt={15}>
            <Grid item md={7} xs={12}>
              <VideoPlayer url="https://www.youtube.com/watch?v=q5UWVgxt3gk" />
            </Grid>
            <Grid item md={5} xs={12} mt={4} px={6}>
              <Stack gap={3} maxWidth={{ xs: 'unset', md: 400 }}>
                <Typography variant="h5" component="h3" fontWeight={600}>
                  How It Works
                </Typography>

                <Typography component="p">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, doloremque laudantium.
                </Typography>
                <Typography component="p">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </PageContainer>
  );
};

export default ServiceSingle;
