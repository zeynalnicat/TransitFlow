import { Stack, Typography, Box } from "@mui/material";

interface IProps {
  count: number | string;
  info: string;
}

const StatisticFooter = ({ count, info }: IProps) => {
  return (
    <Box
      sx={{
        p: 2,
        borderTop: "1px solid #ddd",
        borderRight: "1px solid #ddd",
      }}
    >
      <Stack
        flexDirection="row"
        alignItems="center"
        gap={2}
        justifyContent="center"
      >
        <Typography fontWeight={800} variant="h3" component="h3">
          {count}
        </Typography>
        <Box
          sx={{
            width: 17,
            height: 17,
            background:
              "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)",
          }}
        ></Box>
        <Typography component="p">{info}</Typography>
      </Stack>
    </Box>
  );
};

export default StatisticFooter;
