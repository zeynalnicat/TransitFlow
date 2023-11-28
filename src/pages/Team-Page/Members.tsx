import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface IProps {
    imgSrc: string;
    name: string;
    job: string;
    twitterLink?: string;
    linkedInLink?: string;
    instagramLink?: string;
    facebookLink?: string;
}

const Members= ({ imgSrc, name, job, twitterLink, linkedInLink, instagramLink, facebookLink }: IProps) => {
    return (
        <Card

            sx={(t) => ({ maxWidth: 300, backgroundColor: t.palette.secondary.main, position: 'relative' })}>
            <CardMedia component="img" image={imgSrc} alt={name} />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: "#fff", paddingTop: "8px" }}>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: "#fff" }}>
                    {job}
                </Typography>
            </CardContent>
            <CardActions sx={{
                justifyContent: "center", background: "linear-gradient(90deg, rgba(255,182,41,1) 0%, rgba(255,218,86,1) 35%, rgba(255,215,166,1) 100%)",
                position: "absolute", bottom: 70, right: 0,
                py: 2,
                "&>a": {
                    fontSize: 0
                }
            }}>
                {
                    linkedInLink && <Link to={linkedInLink}>
                        <LinkedIn />
                    </Link>
                }
                {
                    instagramLink && <Link to={instagramLink}>
                        <Instagram />
                    </Link>
                }
                {
                    twitterLink && <Link to={twitterLink}>
                        <Twitter />
                    </Link>
                }
                {
                    facebookLink && <Link to={facebookLink}>
                        <Facebook />
                    </Link>
                }
            </CardActions>
        </Card>
    )
}
export default Members
