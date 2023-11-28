import { Stack, Box, Typography } from "@mui/material"
import { BlogData } from "."
import { Link } from "react-router-dom"



const BlogCard = (item: BlogData) => {
    return (
        <Stack sx={{
            flexDirection: {xs:"column", md:"row"},
            "&:hover a": {
                display: 'flex !important'
            },
            "&>*":{
                border:{xs:"none", md:"unset"}
            }
        }} className="all">
            <Stack sx={{
                flexDirection: "row",
            }} className="left">
                <Box sx={{
                    position: 'relative'
                }}>
                    <Link
                        style={{
                            position: 'absolute',
                            inset: 40,
                            color: 'white',
                            zIndex: 10,
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            display: 'none',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        to={item.blogLink} >
                        Read more
                    </Link>
                    <img className="images" src={item.image} alt="" />
                </Box>
                <Box className="elshad">
                    <Stack className="releaseDate">
                        <img className="icons" src={item.icon} alt="" />
                        <Typography sx={{
                            fontSize:"40px"
                        }}>{item.date}</Typography>
                        <Typography>{item.month}</Typography>
                    </Stack>
                </Box>
                </Stack>
            <Box className="right"
            sx={{
                width:{xs:"100%", md:"unset"}
            }}
            >
                <aside>{item.title}</aside>
                <p>{item.content}</p>
                <ul>
                    <li>{item.specifications?.first}</li>
                    <li>{item.specifications?.second}</li>
                    <li>{item.specifications?.third}</li>
                    <li>{item.specifications?.fourth}</li>
                </ul>
            </Box>
        </Stack>
    )
}
export default BlogCard
