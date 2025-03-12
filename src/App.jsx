import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {useState, useEffect} from "react";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";

const App = () => {
    const [login, setLogin] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token")
        setLogin(Boolean(token))
    })


    if (!login) {
        return <Home/>
    } else
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>

                </Routes>
            </Router>)

};

export default App;
