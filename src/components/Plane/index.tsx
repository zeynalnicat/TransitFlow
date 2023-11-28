import { Box, Grid, Stack, Typography } from "@mui/material";
import planephoto from "../../assets/Photo.png";
import clock from "../../assets/clock.png";
import icon from "../../assets/moving.png";
import qlobus from "../../assets/qlobus.png";
import qutu from "../../assets/qutu.png";
import support from "../../assets/support.png";
import transparant from "../../assets/transparant.png";
import vector from "../../assets/vector.png";
import WhyUsPriority from "../WhyUsPriority";
import "./module.css";


const Specifications = [
    { id: 0, icon: `${qutu}`, subtitle: "Safe Package" },
    {
        id: 1,
        icon: `${qlobus}`,
        subtitle: "Global Tracking",
    },
    {
        id: 2,
        icon: `${clock}`,
        subtitle: "In time Delivery",
    },
    {
        id: 3,
        icon: `${vector}`,
        subtitle: "Ship Everyware",
    },
    {
        id: 4,
        icon: `${support}`,
        subtitle: "24/7 Support",
    },
    {
        id: 5,
        icon: `${transparant}`,
        subtitle: "Transparant Pricing",
    },
];

const PlaneSection = () => {
    return (
        <>
            <Grid container my={5}>
                <Grid bgcolor="secondary.main" item xs={12} md={6}
                    sx={{
                        pr: { xs: 0, md: "50px" },
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            background: `url("${planephoto}")`,
                            backgroundSize: 'cover',
                            height: 350,
                            left: { xs: 0, md: 80 }
                        }}
                    >
                        <Stack
                            flexDirection="row"
                            alignItems="center"
                            maxWidth={300}
                            gap={2}
                            sx={{
                                p: 2,
                                background: "linear-gradient(58deg, #FFB629 0%, #FFB629 50%, #FFDA56 59%, #FFD7A6 95%)",
                                position: 'absolute',
                                bottom: 0,
                                left: { xs: 0, sm: "21%" }
                            }}
                        >
                            <img style={{ width: "50px", height: '50px', objectFit: 'cover' }} src={icon} />
                            <Typography>Moving your products across borders</Typography>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}
                    sx={{
                        pl: { xs: 1, md: "40px" },
                        mt: { xs: 6, md: 0 },
                        pt: 3
                    }}
                >
                    <Typography
                        component="p"
                        bgcolor="rgba(9, 18, 66, 0.1)"
                        sx={(t) => ({ borderLeft: `4px solid ${t.palette.primary.main}`, fontSize: 14, p: "3px", px: 2, width: 'fit-content' })}>
                        Why Choose
                    </Typography>
                    <Typography my={3} variant="h4" component="h4" sx={{ fontWeight: 700, textTransform: 'capitalize' }}>
                        We create opportunity to reach potential
                    </Typography>
                    <Typography>
                        Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.
                    </Typography>
                    <Grid container>
                        {
                            Specifications.map(({ id, icon, subtitle }) => (
                                <Grid item xs={12} key={id} sm={6}>
                                    <WhyUsPriority imgSrc={icon} title={subtitle} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default PlaneSection;
