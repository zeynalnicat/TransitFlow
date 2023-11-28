import { Box, Container, Stack } from "@mui/material";
import image from "../../assets/sponsores/Image.png";
import background from "../../assets/sponsores/Logo.png";
import norto from "../../assets/sponsores/Norto.png";
import oots from "../../assets/sponsores/Out Of The Sand Box.png";
import pointsone from "../../assets/sponsores/pointsone.png";

import "./module.css";
const Sponsors = () => {
  return (
    <>
      <Container>
        <Stack
          sx={{
            marginTop: "50px",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            alignItems: "center",
          }}
        >
          <Box
            className="studiogreen"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #4E5683",
              width: { xs: "100%", sm: "50%", md: "25%" },
              height: "235px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "initial",
            }}
          >
            <img src={image} alt="" />
            <img src={background} alt="" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #4E5683",
              width: { xs: "100%", sm: "50%", md: "25%" },
              height: "235px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "initial",
            }}
          >
            <img src={norto} alt="" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #4E5683",
              width: { xs: "100%", sm: "50%", md: "25%" },
              height: "235px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "initial",
            }}
          >
            <img src={pointsone} alt="" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #4E5683",
              width: { xs: "100%", sm: "50%", md: "25%" },
              height: "235px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "initial",
            }}
          >
            <img src={oots} alt="" />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Sponsors;
