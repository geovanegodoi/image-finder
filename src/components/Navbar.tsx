import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <MenuIconButton />
                    <Typography color="inherit" variant="h5">
                        PixaBay Image Finder
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

function MenuIconButton(): JSX.Element {
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton>
    );
}

export default Navbar;
