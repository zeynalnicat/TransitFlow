import { Container, Stack, Typography } from "@mui/material";
import NotFound from "../../assets/banner/notfound.png";
import PageContainer from "../../components/PageContainer";
import Button from "../../components/Button";
const NotFoundPage = () => {
  return (
    <>
      <PageContainer
        bannerSubtitle="About Us"
        bannerTitle="About Our Logistics"
        bannerImage={NotFound}>
        <Container maxWidth="sm">
          <Stack alignItems="center" gap={1}>
            <Typography
              sx={{
                fontSize: 350,
                fontWeight: 900,
                color: '#1C1F35',
                "& > span": {
                  color: 'primary.main',
                  fontWeight: 900,
                  fontSize: "inherit",
                }
              }}
            >
              4<span>0</span>4
            </Typography>
            <Typography fontWeight={700} variant="h3" component="h3">
              Oops! Page not found.
            </Typography>
            <Typography mb={3} variant="h5">Let’s get you to where you need to be.</Typography>
            <Button isPrimary title="Back to home" />
          </Stack>
        </Container>
      </PageContainer>

    </>
  );
};

export default NotFoundPage;
