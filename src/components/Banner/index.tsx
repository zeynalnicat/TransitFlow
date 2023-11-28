import { Box, Container, Typography } from "@mui/material";
import ResponsiveAppBar from "./Appbar";

interface IProps {
  bannerImage?: string;
  bannerTitle?: string;
  bannerSubtitle?: string;
  customizedBanner?: undefined | React.ReactElement;
}

const Banner = ({ bannerImage, bannerTitle, bannerSubtitle, customizedBanner = undefined }: IProps) => {
  return (
    <>
      <Box
        className="container_of_appbar_896yg"
        sx={{
          height: customizedBanner ? "unset" : "340px",
          background: ` url("${bannerImage}")  no-repeat center`,
          backgroundSize: 'cover'
        }}
      >
        <Box
          sx={{
            background: customizedBanner ? "unset" : "linear-gradient(90.96deg, #032D5F 18.62%, rgba(9, 18, 66, 0.3) 51.58%)",
            height: '100%'
          }}
        >
          <ResponsiveAppBar />

          {
            customizedBanner || <Container sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              height: '100%',
              color: 'white'
            }}>
              <Typography
                component="p"
                bgcolor="rgba(9, 18, 66, 0.3)"
                sx={(t) => ({ borderLeft: `4px solid ${t.palette.primary.main}`, fontSize: 14, p: "3px", px: 2 })}>
                {bannerSubtitle}
              </Typography>
              <Typography my={3} textAlign="center" variant="h4" component="h4" sx={{ fontWeight: 700, textTransform: 'capitalize' }}>
                {bannerTitle}
              </Typography>
            </Container>
          }
        </Box>
      </Box>
    </>
  );
}

export default Banner;
