import Login from './login/login';
import Home from './home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/login" element={<Login />} />

                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>

    )
}