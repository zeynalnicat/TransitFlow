import { Container, Box } from '@mui/material'
import "./module.css"
import PageContainer from '../PageContainer'
import scania from "../../assets/banner/scania.png"

const Liceses = () => {
    return (
        <PageContainer
            bannerSubtitle='Licenses'
            bannerTitle='All Assets Liecenses'
            bannerImage={scania}
        >
            <Container>
                <Box sx={{
                    display: 'flex', width: "100%", justifyContent: "space-around", alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }
                }}>
                    <div>

                        <h1>Icon & Graphics</h1>
                    </div>
                    <Box sx={{ width: { xs: '100%', md: "50%" } }}>

                        <p>All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.</p>

                        <p>The iconography used in this Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific Icon, you can check the licenses and download the images for free on phosphoricons.</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>

                            <h2>Phosphor Icon:</h2>
                            <span>Licenses</span>
                        </div>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex', width: "100%", justifyContent: "space-around", alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }
                }}>
                    <div>

                        <h1>Photography</h1>
                    </div>
                    <Box sx={{
                        width: { xs: '100%', md: "50%" },
                        '&>img': {
                            width: '100%'
                        }
                    }}>

                        <p>All images used in this Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash, Pexels, Pixabay, Freepik.</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h2>Pexels: </h2>
                            <span>Licenses</span>
                        </div>
                        <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <div style={{ display: 'flex', alignItems: 'center' }}>

                            <h2>Unsplash: </h2>
                            <span>Licenses</span>
                        </div>
                        <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex', width: "100%", justifyContent: "space-around", alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }
                }}>
                    <div>

                        <h1>Font</h1>
                    </div >
                    <Box sx={{ width: { xs: '100%', md: "50%" } }}>

                        <p>TransitFlow template uses free <a href="">Google Fonts.</a> please check <a href="">Rubik</a>  and <a href="">Krub.</a></p>
                    </Box>

                </Box>
            </Container>
        </PageContainer>
    )
}

export default Liceses
