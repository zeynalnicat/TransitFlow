import { Container, Grid } from "@mui/material";
import StatisticFooter from "../StatisticFooter";

const infos = [
  {
    key: 0,
    count: 24,
    possession: "Our Location",
  },
  {
    key: 1,
    count: 1294,
    possession: "Delivered Packages",
  },
  {
    key: 2,
    count: 3594,
    possession: "Satisfied Clients",
  },
  {
    key: 3,
    count: "24+",
    possession: "Owned Vehicles",
  },
];

const FooterInfo = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 20, mb: 3 }}>
      <Grid container>
        {infos.map((info) => {
          return (
            <Grid key={info.key} item xs={12} sm={6} lg={3}>
              <StatisticFooter count={info.count} info={info.possession} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default FooterInfo;
