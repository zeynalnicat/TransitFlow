
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

interface IProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: IProps) {
  return (
    <Card sx={{ maxWidth: 320, p: 2, width: 270, height: 193 }}>
      <Typography>
        <img style={{ width: 35 }} src={icon} alt="hip" />
      </Typography>

      <Typography
        sx={(theme) => ({
          ":hover": {
            color: theme.palette.primary.main,
            cursor: 'default'
          }
        })}
      >
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Card >
  );
}
