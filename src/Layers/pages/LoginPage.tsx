import SignIn from "../features/login/SignIn";
import { useEffect } from 'react';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../shared/lib/redux/store";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const isLog = useSelector<RootState>(state => state.auth.isLog);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (isLog) {
            navigate('/');
        }
    },[]);

    return (
        <>
            <SignIn/>
        </>
    )
}
