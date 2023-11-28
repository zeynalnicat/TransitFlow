import { Avatar, Box, Container, Rating, Stack, Typography } from "@mui/material";
import quote from "../../assets/slider/quote.png";
import WhyUsPriority from "../WhyUsPriority";

interface IProps {
    imgSrc: string;
    fullName: string;
    company: string;
    description: string;
    rating: number;
    isDark: boolean;
}

const Slide = ({ imgSrc, fullName, company, description, rating, isDark }: IProps) => {
    return (
        <>
            <Container
                maxWidth="sm"
                sx={{
                    p: 5,
                    backgroundColor: isDark ? "secondary.main" : "#F4F4F4",
                    color: isDark ? 'white' : 'black'
                }}
            >
                <Stack flexDirection="row" justifyContent="space-between">
                    <Stack flexDirection="row" alignItems="center" gap={2} sx={{ "&>img": { width: 91, height: 91 } }}>
                        <Avatar src={imgSrc}
                            sx={{ width: 60, height: 60 }}
                        />
                        <Box>
                            <Typography fontWeight={800} component="h4">
                                {fullName}
                            </Typography>
                            <Typography component="h4">
                                {company}
                            </Typography>
                        </Box>
                    </Stack>
                    <WhyUsPriority title="" imgSrc={quote} />
                </Stack>
                <Typography
                    color="rgba(102, 108, 137, 1)"
                    component="p"
                    fontStyle="italic"
                    my={2}
                >
                    {description}
                </Typography>
                <Rating name="half-rating-read" value={rating} precision={0.5} size="large" readOnly />
            </Container>
        </>
    )
}
export default Slide
