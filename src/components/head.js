import * as React from 'react';
import { About } from './about';
import { Help } from './help';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import BookIcon from '@mui/icons-material/Book';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Tooltip from '@mui/material/Tooltip';

export const Head = () => {
    const mailto = 'mailto:hornav@tatneft.ru?subject=[ RMS Plugin | Bug report ] create_zone_log (1.0.0)'
    const [openAbout, setOpenAbout] = React.useState(false);
    const handleClickOpenAbout = () => {
        setOpenAbout(true);
    };
    const handleCloseAbout = () => {
        setOpenAbout(false);
    };

    const [openHelp, setOpenHelp] = React.useState(false);
    const handleClickOpenHelp = () => {
        setOpenHelp(true);
    };
    const handleCloseHelp = () => {
        setOpenHelp(false);
    };

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" color="primary">
                <About
                    open={openAbout}
                    handleClose={handleCloseAbout}
                />
                <Help
                    open={openHelp}
                    handleClose={handleCloseHelp}
                />
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Создание Zone_log
                    </Typography>
                    <Tooltip title="О плагине">
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleClickOpenAbout}
                        >
                            <InfoIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Справка">
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleClickOpenHelp}
                        >
                            <BookIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Сообщить об ошибке">
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={(e) => {
                                window.location = mailto;
                                e.preventDefault();
                            }}
                        >
                            <QuestionAnswerIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


