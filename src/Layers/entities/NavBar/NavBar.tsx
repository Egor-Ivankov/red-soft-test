import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material';
import {NavLink} from 'react-router-dom';
import  { useSelector } from 'react-redux';
import { RootState } from '../../shared/lib/redux/store';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { setLog, setAuth } from '../../shared/lib/redux/auth/authSlice';

export default function NavBar() {
    const isLog = useSelector <RootState>(state => state.auth.isLog);
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(setLog(false));
        dispatch(setAuth(false));
    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{'backgroundColor': '#7777FF'}}>
                <Toolbar>
                    <Typography 
                        color="inherit" 
                        sx={{'mr': '75vw', 'textDecoration': 'none', 'fontSize': '18px'}} 
                        component={NavLink} 
                        to="/">
                            Red-soft
                    </Typography>

                    {isLog ? <Button color="inherit" sx={{'mr': 8}} component={NavLink} to="/browse">Information</Button> : null}
                    {isLog ? null : <Button color="inherit" component={NavLink} to="/login">Login</Button>}
                    {isLog ? <Button onClick={logOut} color="inherit" component={NavLink} to="/">Logout</Button> : null}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
