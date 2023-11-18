import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../Layers/shared/lib/redux/store";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
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
        <div style={{'display': 'flex', 'flexWrap': 'wrap'}} > 
                <ViewParentElement/>
        </div>
    )
}

function ViewParentElement () {

    const DemoPaper = styled(Paper)(({ theme }) => ({
        width: 120,
        height: 120,
        padding: theme.spacing(2),
        ...theme.typography.body2,
        textAlign: 'center',
        margin: '20px',
        flex: '1 1 200px',
        backgroundColor: '#7777FF70'
    }));



    return parentElements.map(item => {
        return (
                <DemoPaper key={item.key} square={false}>{item.name}</DemoPaper>
        )
    })
}