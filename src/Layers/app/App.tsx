import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import NavBar from '../entities/NavBar/NavBar';
import Spinner from '../shared/Spinner';
import './app.css';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const InformationPage = lazy(() => import('../pages/InformationPage'));
const SignUp = lazy(() => import('../features/login/SignUp'));


function App() {

    return (
        <Router>
            <nav>
                <NavBar/>
            </nav>
            <main>
                <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route path="/" element={<MainPage />}/>
                        <Route path="/login" element={<LoginPage />}/>
                        <Route path="/browse" element={<InformationPage />}/>
                        <Route path="/signUp" element={<SignUp />}/>
                    </Routes>
                </Suspense>
            </main>
        </Router>
    )
}

export default App;
