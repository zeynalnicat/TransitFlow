import { AccessTime, EmailOutlined } from "@mui/icons-material";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import logo from '../../assets/logo.png';
import HeaderInfo from './HeaderInfo';

const links = [
    {
        key: 0,
        IconElement: AccessTime,
        title1: 'Mon - Sat 9.00 - 18.00',
        title2: 'Sunday Closed',
    },
    {
        key: 1,
        IconElement: EmailOutlined,
        title1: 'Email',
        title2: 'contact@logistics.com',
        link: 'mailto:elinemet.isiyev@gmail.com'
    },
    {
        key: 2,
        IconElement: LocalPhoneOutlinedIcon,
        title1: 'Call Us',
        title2: '(00) 112 365 489',
        link: 'tel:+994709874767'
    }
]

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky"
            sx={{ backgroundColor: 'secondary.main', py: 3 }}
        >
            <Container>
                <Toolbar disableGutters >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            textDecoration: 'none',
                            flexGrow: 1
                        }}
                    >
                        <img style={{ width: 180 }} src={logo} alt="our loges" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ color: 'white' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                '& *': {
                                    color: '#091242 !important',

                                }
                            }}
                        >
                            {links.map((link) => (
                                <Box
                                    sx={{
                                        p: 2,
                                        minWidth: 200
                                    }}
                                    key={link.key} onClick={handleCloseNavMenu}>
                                    <HeaderInfo withIcon={false}  {...link} />
                                </Box>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            textDecoration: 'none',
                            flexGrow: 1
                        }}
                    >
                        <img style={{ width: 180 }} src={logo} alt="our loges" />
                    </Typography>

                    <Stack sx={{ columnGap: 4, flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {
                            links.map((props) => (
                                <HeaderInfo {...props} />
                            ))
                        }
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
