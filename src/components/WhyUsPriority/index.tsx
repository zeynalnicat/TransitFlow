import {Stack, Typography } from "@mui/material";

interface IProps {
  imgSrc: string;
  title: string;
}

const WhyUsPriority = ({ imgSrc, title }: IProps) => {
  return (
    <Stack flexDirection="row" mt={3} alignItems="center" gap={2}>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          background: "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)",
          width: "47px",
          minWidth: "47px",
          height: "47px",
          minHeight: "47px",
          borderRadius: '50%',
          p: 1,
          boxSizing: 'border-box'
        }}
      >
        <img src={imgSrc} />
      </Stack>
      <Typography variant="h5" component="h3" fontWeight={600}>
        {title}
      </Typography>
    </Stack>
  );
};

export default WhyUsPriority;
