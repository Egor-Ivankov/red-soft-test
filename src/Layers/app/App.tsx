import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Spinner from '../shared/Spinner';
import './app.css';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const InformationPage = lazy(() => import('../pages/InformationPage'));


function App() {

    return (
        <Router>
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/browse" element={<InformationPage />}/>
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App;
