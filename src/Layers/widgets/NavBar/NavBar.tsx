import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{'backgroundColor': '#7777FF'}}>
                <Toolbar>
                    <Typography 
                        color="inherit" 
                        sx={{'mr': '75vw', 'textDecoration': 'none', 'fontSize': '18px'}} 
                        component={Link} 
                        to="/">
                            Red-soft
                    </Typography>

                    <Button color="inherit" sx={{'mr': 8}} component={Link} to="/browse">Information</Button>
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
