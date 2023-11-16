import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../shared/lib/redux/store";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from 'react';
export default function InformationPage() {
    const isLog = useSelector<RootState>(state => state.auth.isLog);
    const navigate = useNavigate();
    useLayoutEffect(() => {
        if (!isLog) {
            navigate('/login');
        } 
    }, []);

    return (
        <>
            <p>InformationPage</p>
        </>
    )
}
