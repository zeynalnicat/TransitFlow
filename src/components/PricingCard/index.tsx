import { Container, Stack } from "@mui/material";
import SectionHeader from "../SectionHeader";
import PricingInfo from "./PricingInfo";

const prices = [
  {
    key: 0,
    cardType: "Basic",
    cardPrice: 39,
    feature1: "Single Truck",
    feature2: "Full Insurance",
    feature3: "500 Km",
    feature4: "Real-time rate shopping",

  },
  {
    key: 1,
    cardType: "Standart",
    cardPrice: 59,
    feature1: "Single Truck",
    feature2: "Full Insurance",
    feature3: "500 Km",
    feature4: "Real-time rate shopping",
    isSpecial: true

  },
  {
    key: 2,
    cardType: "Premium",
    cardPrice: 89,
    feature1: "Double Truck",
    feature2: "Full Insurance",
    feature3: "Unlimitted",
    feature4: "Real-time rate shopping",

  }
]


function PricingCard() {
  return (
    <Container maxWidth="lg">
      <SectionHeader
        heading="Pricing"
        subheading="Our Best Pricing"
      />

      <Stack flexDirection="row" my={8} flexWrap={"wrap"} gap={5}
      >
        {

          prices.map((price) => <PricingInfo {...price} />)
        }
      </Stack>

    </Container>
  );
}

export default PricingCard;
