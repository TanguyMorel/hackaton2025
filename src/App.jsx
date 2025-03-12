import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Profile from "./pages/Profile";

const App = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogin(Boolean(token));
  }, []);

  if (login === null) {
    return <div>Chargement...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={!login ? <Home setLogin={setLogin} /> : <Navigate to="/home" replace />} />
      <Route path="/home" element={login ? <MainPage /> : <Navigate to="/" replace />} />
      <Route path="/profile" element={login ? <Profile /> : <Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;


