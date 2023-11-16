import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { setAuth } from '../shared/lib/redux/auth/authSlice';

export default function MainPage() {
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        if (localStorage.getItem('user')) {
            dispatch(setAuth());
        }
    }, []);
    return (
        <>
            Main
        </>
    )
}
