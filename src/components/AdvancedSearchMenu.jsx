import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/AdvancedSearchMenu.css";  

function Navbar() {
  const [query, setQuery] = useState(""); 
  const navigate = useNavigate(); 

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/tweet?search=${query}`); 
    }
  };

  return (
    <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "black" }}>
      <input 
        type="text" 
        placeholder="Rechercher..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        style={{ padding: "10px", flex: 1 }}
      />
      
      {/* ✅ Bouton de recherche qui redirige correctement */}
      <button 
        onClick={handleSearch} 
        style={{ padding: "10px", cursor: "pointer", background: "white", border: "none" }}>
        🔍 Rechercher
      </button>

      <Link to={`/all?search=${query}`} style={{ color: "white", textDecoration: "none" }}>Tout</Link>
      <Link to={`/users?search=${query}`} style={{ color: "white", textDecoration: "none" }}>Utilisateurs</Link>
      <Link to={`/tweet?search=${query}`} style={{ color: "white", textDecoration: "none" }}>Populaire</Link> 
    </nav>
  );
}

export default Navbar;
