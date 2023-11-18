import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../Layers/shared/lib/redux/store";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from 'react';
import { parentElements } from "../../services/data";

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
            <ViewParentElement/>
        </>
    )
}

function ViewParentElement () {
    return parentElements.map(item => {
        return <li key={item.key}>{item.name}</li>
    })
}