import { Container, Stack } from "@mui/material";
import img1 from "../../assets/ourProject/img1.png";
import img2 from "../../assets/ourProject/img2.png";
import img3 from "../../assets/ourProject/img3.png";
import img4 from "../../assets/ourProject/img4.png";
import img5 from "../../assets/ourProject/img5.png";
import img6 from "../../assets/ourProject/img6.png";

import WhyInfo from "./ProjectInfo";

const imgPath = [
    {
        key: 0,
        src: img1
    },
    {
        key: 1,
        src: img2
    },
    {
        key: 2,
        src: img3
    }
    , {
        key: 3,
        src: img4
    }
    , {
        key: 4,
        src: img5
    },
    , {
        key: 5,
        src: img6
    },


]

function OurProject() {
    return (
        <Container sx={{ my: 8 }}>

            <Stack
                flexDirection="row"
                flexWrap="wrap"
                columnGap={4}
                rowGap={4}>
                {
                    imgPath.map((img) => {
                        return (
                            <WhyInfo key={img?.src} imgSrc={img?.src} />
                        )
                    })
                }
            </Stack>

        </Container>
    )
}

export default OurProject
