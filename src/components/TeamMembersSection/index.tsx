import Person1 from "../../assets/Team-Page/Person1.png";
import Person2 from "../../assets/Team-Page/Person2.png";
import Person3 from "../../assets/Team-Page/Person3.png";
import Person4 from "../../assets/Team-Page/Person4.png";
import Person5 from "../../assets/Team-Page/Person5.png";
import Person6 from "../../assets/Team-Page/Person6.png";
import { Container, Stack } from "@mui/material"
import Members from "../../pages/Team-Page/Members"
import SectionHeader from "../SectionHeader"


const TeamMemberSection = ({ limit = false }: any) => {
    return (
        <Container>
            <SectionHeader
                heading={"The Transporters"}
                subheading={"Meet Expert Team"}
            />
            <Stack
                flexDirection="row"
                justifyContent="center"
                flexWrap="wrap"
                gap={5}
            >
                <Members
                    imgSrc={Person1}
                    name="Jessca Arrow"
                    job="Designer"
                    facebookLink="guya"
                    linkedInLink="guya2"
                    twitterLink="sfdg"
                />
                <Members
                    imgSrc={Person2}
                    name="Kathleen Smith"
                    job="Designer"
                    facebookLink="guya"
                    linkedInLink="guya2"
                    instagramLink="sfdg"
                />
                <Members
                    imgSrc={Person3}
                    name="Rebecca Tylor"
                    job="Designer"
                    facebookLink="guya"
                    linkedInLink="guya2"
                />
                {
                    !limit && (
                        <>
                            <Members
                                imgSrc={Person4}
                                name="Rebecca Tylor"
                                job="Designer"
                                facebookLink="guya"
                                linkedInLink="guya2"
                            />
                            <Members
                                imgSrc={Person5}
                                name="Rebecca Tylor"
                                job="Designer"
                                facebookLink="guya"
                                linkedInLink="guya2"
                            />
                            <Members
                                imgSrc={Person6}
                                name="Rebecca Tylor"
                                job="Designer"
                                facebookLink="guya"
                                linkedInLink="guya2"
                            />
                        </>
                    )
                }
            </Stack>
        </Container>
    )
}
export default TeamMemberSection
