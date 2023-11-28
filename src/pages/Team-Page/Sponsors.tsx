import { Box, Container, Stack } from "@mui/material";

import background from "../../assets/Team-Page/sponsors/Logo.png";
import norto from "../../assets/Team-Page/sponsors/Norto.png";
import pointsone from "../../assets/Team-Page/sponsors/pointsone.png";
import oots from "../../assets/Team-Page/sponsors/Out Of The Sand Box.png";
import image from "../../assets/Team-Page/sponsors/Image.png";

import "./module.css";
const Sponsors = () => {
  return (
    <>
      <Container >
        <Stack
          sx={{
            marginTop: "50px",
            flexDirection:"row",
            width: "100%",
            alignItems: "center",
            flexWrap:"wrap"
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
              position: "relative", 
            }}
          >
            <img
              src={background}
              alt=""
              style={{
                position: "absolute",

                objectFit: "cover",
              }}
            />
            <img src={image} alt="" />
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
