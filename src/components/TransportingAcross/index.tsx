import { Box, Stack } from "@mui/material";
import "./module.css";
import tanker from "../../assets/transporting/Photo.png";
import packaging from "../../assets/transporting/packaking.png";
import contract from "../../assets/transporting/contract.png";
import warehouse from "../../assets/transporting/warehouse.png";
import specialized from "../../assets/transporting/specialized.png";
import blueline from "../../assets/transporting/blueline.png";
import Button from "../Button";

const across = [
  {
    id: "0",
    title: "Liquid Transportation",
    subtitle: "Premium Tankers",
    backgroundPhoto: tanker,
    scalecolor: blueline,
  },
  {
    id: "1",
    title: "Packaging Solutions",
    subtitle: "Warehouse Management",
    backgroundPhoto: packaging,
    scalecolor: blueline,
  },
  {
    id: "2",
    title: "Contract Logistics",
    subtitle: "Road Transportation",
    backgroundPhoto: contract,
    scalecolor: blueline,
  },
  {
    id: "3",
    title: "Warehouse & Distribution",
    subtitle: "Large Warehouse",
    backgroundPhoto: warehouse,
    scalecolor: blueline,
  },
  {
    id: "4",
    title: "Specialized Transport",
    subtitle: "Ocean Transports",
    backgroundPhoto: specialized,
    scalecolor: blueline,
  },
];

const TransportingAcross = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(95deg, #FFB629 -1.19%, #FFDA56 57.78%, #FFD7A6 115.08%)",
        width: "100%",
        height: { xs: "auto", xl: "40vh" },
        margin: "500px 0px 100px 0px",

      }}
    >
      <Stack
        direction="row"
        sx={{
          flexWrap: "wrap",
          position: "relative",
          gap: "20px",
          top: { xs: "0", md: "-350px" },
          justifyContent: "center",
        }}
      >
        <h1 style={{ textAlign: "center", width: "100%" }}>
          Transporting Across The World
        </h1>
        {across.map((work) => {
          return (
            <Box key={work.id}>
              <Box>
                <img
                  src={work.backgroundPhoto}
                  alt="none"
                  style={{ position: "relative", maxWidth: "100%" }}
                />
              </Box>

              <Stack
                sx={{
                  zIndex: "2",
                  position: "relative",
                  top: -100,
                  color: "white",
                  padding: "20px",
                }}
              >
                <h3>{work.title}</h3>
                <p style={{ color: "#FFB629" }}>{work.subtitle}</p>
              </Stack>
            </Box>
          );
        })}
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Button
            isPrimary={false}
            title="More Work"
            sx={{
              width: "200px",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default TransportingAcross;
