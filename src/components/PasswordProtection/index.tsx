import { Container, Stack, TextField } from "@mui/material";
import passwordImg from "../../assets/banner/password-protection.png";
import theme from "../../theme";
import Button from "../Button";
import PageContainer from "../PageContainer";

const PasswordProtection = () => {
  return (
    <>
      <PageContainer
        bannerImage={passwordImg}
        bannerTitle="Password Protection"
        bannerSubtitle="Protection"
      >
        <Container>
          <Stack sx={{
            margin: "0",
            backgroundColor: theme.palette.secondary.main,
            color: "white",
            py: 6,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <h1 style={{ fontSize: "30px" }}>Enter Password</h1>
            <Stack
              sx={{
                flexDirection: { xs: "column", md: "row" },
                gap: "20px",
              }}
            >
              <TextField
                sx={{ minWidth: 250 }}
                fullWidth
                label="Enter Your Password"
              />
              <Button title="submit" isPrimary></Button>
            </Stack>
          </Stack>
        </Container>
      </PageContainer>
    </>
  );
};

export default PasswordProtection;
