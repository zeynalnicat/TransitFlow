import { Box, Stack } from "@mui/material";

const Transporting = () => {
  return (
    <Stack
      direction="row"
      sx={{
        // height:"700px",
        width: "100vw",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <h1>Transporting Across The World</h1>
      <Stack
        sx={
          {
            // backgroundColor:'blue'
          }
        }
      >
        {/* {works.map((work)=>{
                return(
                    <>
                    <div>work.title</div>
                    
                    </>
                )

            })} */}

        <Box
          sx={{
            width: "50px",
            height: "50px",
            background: "red",
            zIndex: 2,
          }}
        ></Box>
      </Stack>

      <Box
        sx={{
          position: "absolute",
          zIndex: "-1",
        }}
      >
        <Box
          sx={{
            backgroundColor: "red",
            height: "200px",
          }}
        >
          sa
        </Box>
        <Box
          sx={{
            background:
              "linear-gradient(90deg, rgba(255,182,41,1) 0%, rgba(255,218,86,1) 35%, rgba(255,215,166,1) 100%)",
            height: "200px",
            width: "100vw",
          }}
        >
          hayda
        </Box>
      </Box>
    </Stack>
  );
};

export default Transporting;
