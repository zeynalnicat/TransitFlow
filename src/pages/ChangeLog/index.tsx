import { Container, Stack, Typography } from '@mui/material';
import Bannerimg from '../../assets/ChangeLog/Banner.png';
import PageContainer from '../../components/PageContainer';

const ChangeLog = () => {
  return (
    <PageContainer
      bannerImage={Bannerimg}
      bannerTitle="Change Log"
      bannerSubtitle="Updates"
    >
      <Stack my={7} spacing={4} alignItems="center">
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: "#091242",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: 'wrap',
            gap: 3,
            py: 6
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Version 01
          </Typography>
          <Typography
            sx={{
              bgcolor: "rgba(39, 50, 112, 0.6)",
              p: 2,
              textAlign: 'center'
            }}
          >
            Initial TransitFlow Webflow Template Release
          </Typography>
        </Container>

      </Stack>
    </PageContainer>
  );
}

export default ChangeLog;
