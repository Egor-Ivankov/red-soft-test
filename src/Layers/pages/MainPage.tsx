import { Button, Box } from '@mui/material';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { setAuth, setLog } from '../shared/lib/redux/auth/authSlice';

export default function MainPage() {
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (localStorage.getItem('user')) {
            dispatch(setAuth(true));
        }
    }, []);

    const deletAuth = () => {
        if(localStorage.getItem('user')) {
            alert('Аккаунт удален');
        }
        localStorage.clear();
        dispatch(setAuth(false));
        dispatch(setLog(false));
    }

    return (
        <Box sx={{ flexGrow: 1, 'textAlign': 'center' }}>
            <Button 
                onClick={deletAuth} 
                variant="contained" 
                sx={{'backgroundColor': '#7777FF', mt: 35}}>
                    Удалить аккаунт
            </Button>
        </Box>
    )
}
