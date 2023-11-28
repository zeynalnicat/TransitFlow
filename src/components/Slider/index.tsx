import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { Container, IconButton, Stack } from "@mui/material";
import { useRef, useState } from "react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import adam1 from "../../assets/slider/adam1.png";
import adam2 from "../../assets/slider/adam2.png";
import SectionHeader from "../../components/SectionHeader";
import Slide from "../../components/Slide";


const testimonials = [
    {
        id: 0,
        imgSrc: adam1,
        fullName: "Kathleen Smith",
        company: "Fuel Company",
        description: "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        rating: 5
    },
    {
        id: 1,
        imgSrc: adam2,
        fullName: "sfbdKathleen Smith",
        company: "Fueasdsdl Company",
        description: "Leverzdxfvbdfage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        rating: 3
    },
    {
        id: 3,
        imgSrc: adam1,
        fullName: "yfhdgKathleen Smith",
        company: "Fugjhmnfbgel Company",
        description: "Legmnhgverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        rating: 5
    },
    {
        id: 4,
        imgSrc: adam2,
        fullName: "fhnvbyfhdgKathleen Smith",
        company: "j,hmjFugjhmnfbgel Company",
        description: "wesdfewLegmnhgverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
        rating: 2
    },
]

const Slider = () => {
    const [init, setInit] = useState(false)
    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const [isLastSlide, setIsLastSlide] = useState(false);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    console.log(init)
    return (
        <Container>
            <Stack
                marginBottom={"40px"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems="center"
                flexWrap={"wrap"}
            >
                <SectionHeader
                    isCentered={false}
                    subheading="What Our Customer Say"
                    heading="Testimonial"
                />
                <div>
                    <IconButton
                        disableRipple
                        sx={() => ({
                            color: isFirstSlide ? "secondary.main" : "white",
                            "&, &:hover": {
                                backgroundColor: isFirstSlide ? "primary.main" : "secondary.main"
                            }
                        })
                        }
                        ref={prevButtonRef}
                    >
                        <WestIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        disableRipple
                        ref={nextButtonRef}
                        sx={() => ({
                            color: isLastSlide ? "secondary.main" : "white",
                            "&, &:hover": {
                                backgroundColor: isLastSlide ? "primary.main" : "secondary.main"
                            }
                        })}>
                        <EastIcon fontSize="small" />
                    </IconButton>
                </div>
            </Stack>
            <Swiper
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                onInit={() => setInit(true)}
                slidesPerView={2}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    900: {
                        slidesPerView: 2,
                    },
                }}
                modules={[Navigation, Autoplay]}
                navigation={{
                    prevEl: prevButtonRef.current,
                    nextEl: nextButtonRef.current,
                }}
                onSlideChange={({
                    isBeginning,
                    isEnd,
                }: {
                    isBeginning: boolean;
                    isEnd: boolean;
                }) => {
                    setIsFirstSlide(isBeginning);
                    setIsLastSlide(isEnd);
                }}>
                {
                    testimonials.map((slide, index) => {
                        return (
                            <SwiperSlide key={slide.id}><Slide {...slide} isDark={index % 2 === 1} /></SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Container >
    );
};

export default Slider;
