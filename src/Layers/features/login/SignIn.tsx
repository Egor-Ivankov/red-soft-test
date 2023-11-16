import {Avatar, 
        Button, 
        TextField, 
        FormControlLabel, 
        Checkbox, 
        Link, 
        Grid, 
        Typography, 
        Container,
        CssBaseline, 
        Box, 
        createTheme,
        ThemeProvider,
    } from '@mui/material';

import { useEffect } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { setAuth, setLog } from '../../shared/lib/redux/auth/authSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/exports';
import type { RootState } from '../../shared/lib/redux/store';
import { useNavigate } from 'react-router-dom';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function SignIn() {
    const isAuth = useSelector <RootState>(state => state.auth.isAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('user')) {
            dispatch(setAuth(true));
            dispatch(setLog(true));
            navigate('/');
        }
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const currentEmail = data.get('email');
        const currentPassword = data.get('password');

        const user = JSON.parse(localStorage.getItem('user')!);
        
        if (!isAuth || localStorage.getItem('user')) {
            alert('Вы не зарегистрированы')
            navigate('/signUp');
        } else if (user.email !== currentEmail || user.password !== currentPassword) {
            alert('Неверные данные');
        } else {
            alert('Доступ получен');
            dispatch(setLog(true));
            navigate('/');
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/signUp" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                        <Link href="/signUp" variant="body2">
                                                {"Don't have an account? Sign Up"}
                                        </Link>
                                </Grid>
                            </Grid>
                        </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}