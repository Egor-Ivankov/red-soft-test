import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import  { useSelector } from 'react-redux';
import { RootState } from '../../shared/lib/redux/store';

export default function NavBar() {
    const isLog = useSelector <RootState>(state => state.auth.isLog);

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

                    {isLog ? <Button color="inherit" sx={{'mr': 8}} component={Link} to="/browse">Information</Button> : null}
                    {isLog ? null : <Button color="inherit" component={Link} to="/login">Login</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
