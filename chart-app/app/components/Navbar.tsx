"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Button,
    Tooltip,
    MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import img from '../public/img.png';

const Navbar: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [darkMode, setDarkMode] = useState(false);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleToggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
        document.body.classList.toggle('light-mode', darkMode);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black',  borderBottom: '2px solid white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href="/" passHref>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Image
                                width={50}
                                height={32}
                                src={img}
                                alt="Logo"
                            />
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, color: "white", mr: 2, fontSize: '2rem', ml: 1 }}
                            >
                                Blockhouse
                            </Typography>
                        </Box>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link href="/" passHref>
                                    <Typography textAlign="center" >Home</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link href="/line" passHref>
                                    <Typography textAlign="center">Line Chart</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link href="/pie" passHref>
                                    <Typography textAlign="center" >Pie Chart</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link href="/candle" passHref>
                                    <Typography textAlign="center" >Candle Chart</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link href="/bar" passHref>
                                    <Typography textAlign="center" >Bar Chart</Typography>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                            <Link href="/" passHref>
                                Home
                            </Link>
                        </Button>
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                            <Link href='/line' passHref>
                                Line Chart
                            </Link>
                        </Button>
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                            <Link href="/pie" passHref>
                                Pie Chart
                            </Link>
                        </Button>
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                            <Link href='/candle' passHref>
                                Candle Chart
                            </Link>
                        </Button>
                        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                            <Link href='/bar' passHref>
                                Bar Chart
                            </Link>
                        </Button>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                        <Tooltip title="Toggle Theme">
                            <IconButton onClick={handleToggleTheme} sx={{ p: 0 }}>
                                {darkMode ? <LightModeIcon sx={{ color: 'white' }} /> : <DarkModeIcon sx={{ color: 'white' }} />}
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem>
                                <Link href="/profile" passHref>
                                    <Typography textAlign="center" style={{ color: 'black' }}>
                                        Profile
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">LogOut</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
