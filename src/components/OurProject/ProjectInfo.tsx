import { Card, CardMedia, Link, Stack } from "@mui/material"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


interface Iimg{
    imgSrc:string|undefined
}


function ProjectInfo({imgSrc}:Iimg){
  return(
    <Stack 
    flexGrow={1}
    maxWidth={350}
    marginX="auto"
    sx={{
        position:"relative",
        "&:hover>div" :{
          opacity:1,
        }
        
        }}>
        <Card>
        <CardMedia component="img" image={imgSrc}/>
        </Card>
        <Stack justifyContent="center" alignItems="center" sx={{position:"absolute" , inset:20 , bgcolor:"#1C1F35E8", opacity:0,transition: "all 500ms"}}><Link sx={{cursor:"pointer",color:"white"}}><ArrowOutwardIcon/></Link></Stack>
    </Stack>
  )

}

export default ProjectInfo