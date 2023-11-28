import { Box, Container, Grid, Stack } from "@mui/material";
import bcgimage from "../../assets/FAQqaqaw/Photo.svg";
import vector from "../../assets/FAQqaqaw/Vector.png";
import Button from "../Button";
import SectionHeader from "../SectionHeader";
import Sponsors from "../Sponsors";
import BasicAccordion from "./accorion";
import "./module.css";


const FAQ = ({withSponsors=true}:any) => {
  return (
    <>

      <>
        <Box
          sx={{
            backgroundColor: "#F4F4F4",
            minHeight: "650px",
            position: 'relative',
            "& > img": {
              display: { xs: 'none', lg: 'inline-block' },
              height: '100%'
            }
          }}
        >
          <img src={bcgimage} alt="" className="shekil" />
          <Container>
            <Grid
              container
              sx={{
                position: "relative",
                alignItems: "center",
                gap: "30px",
                padding: "100px 0px ",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  "& *": {
                    textAlign: 'left',
                  },
                  "& > div> p": {
                    marginLeft: '0'
                  }
                }}
              >
                <SectionHeader
                  heading="FAQ"
                  subheading="Frequently Asked Questions"
                ></SectionHeader>
                <BasicAccordion />
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  position: "relative",
                }}
              >
                <Box
                  className="background"
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                  }}
                >
                  <Stack
                    sx={{
                      marginTop: "50px",
                      zIndex: 2,
                      width: "100%",
                      padding: "50px",
                      backgroundColor: "#091242",
                      color: 'white',
                      "& *": {
                        textAlign: 'left',
                        marginLeft: 0
                      },
                      "& > div> p": {
                        background: '#111C55'
                      }
                    }}
                  >
                    <SectionHeader
                      heading="Let's Talk"
                      subheading="You Need Any Help? Get Free Consultation"
                    />
                    <div className="connect">
                      <main className="phone">
                        <img src={vector} alt="" />
                      </main>
                      <aside className="parent">
                        <p>Have Any Questions</p>
                        <p>(00) 112 365 489</p>
                      </aside>
                    </div>
                    <div
                      style={{
                        width: "250px",
                        height: "50px",
                        marginTop: "20px",
                      }}
                    >
                      <Button isPrimary title="Contact us" key={""} />
                    </div>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {
          withSponsors&&<Sponsors />
        }
      </>

    </>
  );
};

export default FAQ;
