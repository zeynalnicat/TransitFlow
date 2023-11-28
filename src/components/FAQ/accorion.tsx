import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

export default function BasicAccordion() {
  return (
    <div>
      <Accordion sx={{
        backgroundColor: "transparent"
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How can I pay for your logistics services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            color: "#666C89"
          }}>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition. Organically grow the holistic world view of disruptive.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        backgroundColor: "transparent"
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What payment methods are supported?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            color: "#666C89"
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        backgroundColor: "transparent"
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What options for logistics plans are available?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            color: "#666C89"
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        backgroundColor: "transparent"
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can i specify a delivery date when ordering?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            color: "#666C89"
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
