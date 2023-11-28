import { Container, Stack } from "@mui/material";
import React from "react";
import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";
import MemberCard from "./MemberCard";
import SectionHeader from "../SectionHeader"

function TeamMemberCard() {

  return (
    <Container>
      <SectionHeader
        heading="The Transporters"
        subheading="Meet expert team"
      />
      <Stack flexDirection={"row"} justifyContent={"center"} flexWrap="wrap" gap={5}>
        <MemberCard
          imgSrc={member1}
          name="Jessca Arrow"
          job="Designer"
          facebookLink="guya"
          linkedInLink="guya2"
          twitterLink="sfdg"
        />
        <MemberCard
          imgSrc={member2}
          name="Kathleen Smith"
          job="Designer"
          facebookLink="guya"
          linkedInLink="guya2"
          instagramLink="sfdg"
        />
        <MemberCard
          imgSrc={member3}
          name=" Rebecca Tylor"
          job="Designer"
          facebookLink="guya"
          linkedInLink="guya2"
        />
      </Stack>
    </Container>
  );
}

export default TeamMemberCard;
