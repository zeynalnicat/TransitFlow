import { Box, Typography, Stack, SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Props {
    IconElement: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    title1: string;
    title2: string;
    link?: string;
    withIcon?: boolean;
}

const HeaderInfo = ({ IconElement, title1, title2, link, withIcon = true }: Props) => {
    return (
        <Stack
            flexDirection="row"
            columnGap={1}
            sx={{
                '&> div > *': {
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: "14px"
                }
            }}
        >
            {
                withIcon && <IconElement
                    color="primary"
                    sx={{
                        border: '1px solid',
                        borderColor: 'rgba(17, 28, 85, 0.8)',
                        borderRadius: '50%',
                        p: 1,
                        fontSize: 30,
                        backgroundColor: 'secondary.light',
                        boxSizing: 'content-box'
                    }}
                />
            }
            <Box>
                <Typography>{title1}</Typography>
                <Typography component={link ? 'a' : 'p'} href={link}>{title2}</Typography>
            </Box>
        </Stack>
    )
}
export default HeaderInfo
