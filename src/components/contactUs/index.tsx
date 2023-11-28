import { Box, Container, Stack, Typography } from "@mui/material";
import Button from "../Button";
import mail from "./logo.images/Icon.mail.svg";
import clocks from "./logo.images/Icon.svg";
import phone from "./logo.images/icon.phone.svg";
import "./module.css"
import FAQ from "../FAQ";
import Sponsors from "../Sponsors";

const Contact = () => {
  return (
    <>
      <Container className="Elsad_canim_senden_qurtardi" maxWidth="md">
        <Box
          className="mainbox ELSAAAAAAAAAAAAAAAAD "
          sx={{
            padding: 8,
            textAlign: 'center'
          }}
        >
          <div className="firstDiv" style={{ paddingLeft: '8px', width: 'fit-content', margin: '0 auto' }}>Contact</div>
          <Typography variant="h4" component="h1" my={2}>Get in touch with us</Typography>
          <p className="firstP">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            padding={"0px 20px"}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "center", md: "space-between" },
            }}
          >
            <Box className="parent">
              <div className="image">
                <img src={mail} alt="" />
              </div>
              <p>Contact@logistics.com</p>
            </Box>
            <Box className="parent">
              <div className="image">
                <img src={phone} alt="" />
              </div>
              <p> (00) 112 365 489</p>
            </Box>
            <Box className="parent">
              <div className="image">
                <img src={clocks} alt="" />
              </div>
              <p>Mon - Sat 9.00 - 18.00Sunday Closed</p>
            </Box>
          </Stack>
          <form>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: "40px",
              }}
            >
              <Stack
                sx={{
                  width: "100%",
                  gap: "20px",
                }}
              >
                <input type="text" placeholder="Your name*" required />
                <input type="text" placeholder="Phone Number*" required />
              </Stack>
              <Stack
                sx={{
                  width: "100%",
                  gap: "20px",
                }}
              >
                <input type="email" placeholder="Email*" required />
                <input type="text" placeholder="City*" required />
              </Stack>
            </Box>
            <textarea style={{ marginBottom: 20 }} placeholder="Your Message"></textarea>

            <Button type="submit" title={"Submit Message"} isPrimary={true}></Button>

          </form>
        </Box>
      </Container>
      <Sponsors />
      <div style={{ margin: '20px 0', height: 20 }}></div>
      <FAQ withSponsors={false} />
    </>
  );
};

export default Contact;
