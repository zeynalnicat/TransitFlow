import { EmailOutlined, Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Box, Container, Divider, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import MyButton from "../Button";
import HeaderInfo from "../Header/HeaderInfo";

const Footer = () => {
    return (
        <Box bgcolor="secondary.main" pb={5}>
            <Box sx={{ height: 80 }} bgcolor="secondary.light"></Box>
            <Container sx={{ position: 'relative', top: -80 }}>
                <Stack justifyContent="space-between" flexDirection="row" flexWrap="wrap"
                    sx={{
                        "&>div": {
                            maxWidth: 320,
                            color: 'white'
                        }
                    }}
                >
                    <Box>
                        <Box bgcolor="secondary.main" sx={{ p: 4 }}>
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </Box>
                        <Typography
                            mb={5}
                            pl={4}
                        > Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</Typography>
                        <Stack
                            pl={4}
                            gap={2}>
                            <HeaderInfo
                                IconElement={EmailOutlined}
                                title1={'Email'}
                                title2={'contact@logistics.com'}
                                link={'mailto:elinemet.isiyev@gmail.com'}
                            />

                            <HeaderInfo
                                IconElement={LocalPhoneOutlinedIcon}
                                title1={'Call Us'}
                                title2={'(00) 112 365 489'}
                                link={'tel:+994709874767'}
                            />
                        </Stack>
                    </Box>
                    <Box>
                        <Box sx={{ p: 4 }}>
                            <Typography variant="h5">Pages</Typography>
                        </Box>
                        <Stack
                            sx={{
                                pl: 4,
                                '&>a': {
                                    color: 'white',
                                    mb: 1
                                }
                            }}
                        >
                            <Typography component="a" href="#">About Us</Typography>
                            <Typography component="a" href="#">Our Team</Typography>
                            <Typography component="a" href="#">Our Project</Typography>
                            <Typography component="a" href="#">Pricing</Typography>
                            <Typography component="a" href="#">Contact</Typography>
                        </Stack>
                    </Box>
                    <Box>
                        <Box sx={{ p: 4 }}>
                            <Typography textAlign="left" variant="h5">Utility</Typography>
                        </Box>
                        <Stack
                            sx={{
                                pl: 4,
                                '&>a': {
                                    color: 'white',
                                    mb: 1
                                }
                            }}
                        >
                            <Typography component="a" href="#">Style Guide</Typography>
                            <Typography component="a" href="#">Changelog</Typography>
                            <Typography component="a" href="#">Licenses</Typography>
                            <Typography component="a" href="#">Protected</Typography>
                            <Typography component="a" href="#">Not Found</Typography>
                        </Stack>
                    </Box>
                    <Box>
                        <Box sx={{ p: 4 }}>
                            <Typography textAlign="left" variant="h5">Subscribe</Typography>
                        </Box>
                        <Stack pl={4} gap={2}>
                            <TextField label="Email here*" />
                            <Stack flexDirection="row" alignItems="center" spacing={1} justifyContent="space-between">
                                <MyButton sx={{ mr: 2 }} withCircle={false} isPrimary title="Send Now" />
                                <IconButton sx={{ color: "white" }}>
                                    <LinkedIn />
                                </IconButton>
                                <IconButton sx={{ color: "white" }}>
                                    <Twitter />
                                </IconButton>
                                <IconButton sx={{ color: "white" }}>
                                    <Facebook />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack >
            </Container >
            <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.5)', mb: 4 }} />
            <Container>
                <Stack
                    flexDirection="row"
                    justifyContent={{ xs: 'center', md: "space-between" }}
                    flexWrap="wrap">
                    <Typography
                        sx={{
                            color: 'white'
                        }}
                    >Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</Typography>
                    <Stack
                        flexDirection="row"
                        gap={4}
                        sx={{
                            "& a": {
                                color: 'rgba(255,255,255,0.5)'
                            }
                        }}>
                        <Typography component="a" href="#">Style Guide</Typography>
                        <Typography component="a" href="#">Licenses</Typography>
                        <Typography component="a" href="#">Changelog</Typography>
                        <Typography component="a" href="#">Password</Typography>
                    </Stack>
                </Stack>
            </Container>
        </Box >
    )
}
export default Footer
